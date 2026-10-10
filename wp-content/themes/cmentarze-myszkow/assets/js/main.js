/**
 * Cmentarze Myszków - Main JavaScript
 *
 * @package CmentarzeMyszkow
 */

(function($) {
    'use strict';

    // Global variables
    var map = null;
    var markers = new Map();
    var boundaries = null;
    var currentGmina = 'Myszków';

    // Colors for gminy
    var gminaColors = {
        'Myszków': '#3a8a6a',
        'Żarki': '#a07030',
        'Niegowa': '#6a8a30',
        'Poraj': '#4080b0',
        'Koziegłowy': '#7a60a0'
    };

    /**
     * Initialize County Map
     */
    function initCountyMap() {
        var mapContainer = document.getElementById('county-map');
        if (!mapContainer || typeof L === 'undefined') return;

        // Check if we have map data
        if (typeof cmentarzeMapData === 'undefined') {
            console.warn('Map data not available');
            return;
        }

        // Initialize map
        map = L.map('county-map', {
            scrollWheelZoom: false
        }).setView([50.61, 19.34], 11);

        // Add tile layer
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Add markers
        cmentarzeMapData.points.forEach(function(point) {
            var marker = L.marker([point.lat, point.lon], {
                title: point.name,
                alt: point.name,
                icon: L.divIcon({
                    className: 'cemetery-pin',
                    html: '<span style="background:' + (gminaColors[point.gmina] || '#3a8a6a') + '"></span>',
                    iconSize: [26, 26],
                    iconAnchor: [13, 13]
                })
            });

            // Build popup content
            var popupHtml = '<div class="place-popup">';
            popupHtml += '<small>GMINA ' + escapeHtml(point.gmina.toUpperCase()) + '</small>';
            popupHtml += '<h3>' + escapeHtml(point.name) + '</h3>';
            popupHtml += '<p>' + escapeHtml(point.parish || point.type) + '</p>';

            if (point.searchUrl) {
                popupHtml += '<a target="_blank" rel="noreferrer" href="' + point.searchUrl + '">Wyszukaj grób ↗</a>';
            }
            if (point.href) {
                popupHtml += '<a href="' + point.href + '">Informacje o cmentarzu →</a>';
            }
            popupHtml += '<a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=' + point.lat + ',' + point.lon + '">Wyznacz trasę ↗</a>';
            popupHtml += '</div>';

            marker.bindPopup(popupHtml, {
                minWidth: 210,
                maxWidth: 270
            });

            marker.on('mouseover', function() { marker.openPopup(); });
            marker.on('click', function() { marker.openPopup(); });

            markers.set(point.id, {
                marker: marker,
                gmina: point.gmina,
                lat: point.lat,
                lon: point.lon
            });
        });

        // Initial filter
        filterMapByGmina(cmentarzeMapData.defaultGmina || 'Myszków');

        // Clear loading message
        mapContainer.querySelector('.map-loading')?.remove();
    }

    /**
     * Filter map markers by gmina
     */
    function filterMapByGmina(gmina) {
        currentGmina = gmina;
        var bounds = [];

        markers.forEach(function(data, id) {
            if (data.gmina === gmina) {
                data.marker.addTo(map);
                bounds.push([data.lat, data.lon]);
            } else {
                map.removeLayer(data.marker);
            }
        });

        // Fit map to bounds
        if (bounds.length > 0) {
            map.fitBounds(bounds, { padding: [50, 50] });
        }

        // Update cemetery list
        updateCemeteryList(gmina);
    }

    /**
     * Update cemetery list sidebar
     */
    function updateCemeteryList(gmina) {
        var list = document.getElementById('county-cemetery-list');
        var titleEl = document.getElementById('current-gmina-name');
        var countEl = document.getElementById('current-gmina-count');

        if (!list || typeof cmentarzeMapData === 'undefined') return;

        // Filter points
        var filtered = cmentarzeMapData.points.filter(function(p) {
            return p.gmina === gmina;
        });

        // Update title
        if (titleEl) titleEl.textContent = gmina;
        if (countEl) countEl.textContent = filtered.length;

        // Build list HTML
        var html = '';
        filtered.forEach(function(point) {
            var color = gminaColors[point.gmina] || '#3a8a6a';
            html += '<button data-lat="' + point.lat + '" data-lon="' + point.lon + '" data-id="' + point.id + '">';
            html += '<i style="background: ' + color + '"></i>';
            html += '<span><strong>' + escapeHtml(point.name) + '</strong>';
            html += '<small>' + escapeHtml(point.gmina) + ' · ' + escapeHtml(point.type) + '</small></span>';
            html += '<b>↗</b></button>';
        });

        list.innerHTML = html;
    }

    /**
     * Handle gmina filter clicks
     */
    function initGminaFilters() {
        // County filters (map section)
        var countyFilters = document.querySelector('.county-filters');
        if (countyFilters) {
            countyFilters.addEventListener('click', function(e) {
                var button = e.target.closest('button');
                if (!button) return;

                var gmina = button.dataset.gmina;
                if (!gmina) return;

                // Update active state
                countyFilters.querySelectorAll('button').forEach(function(btn) {
                    btn.classList.remove('chosen');
                    btn.setAttribute('aria-pressed', 'false');
                });
                button.classList.add('chosen');
                button.setAttribute('aria-pressed', 'true');

                // Filter map
                filterMapByGmina(gmina);
            });
        }

        // Cemetery cards filters
        var cardFilters = document.getElementById('gmina-filters');
        if (cardFilters) {
            cardFilters.addEventListener('click', function(e) {
                var button = e.target.closest('button');
                if (!button) return;

                var gmina = button.dataset.gmina;
                if (!gmina) return;

                // Update active state
                cardFilters.querySelectorAll('.filter').forEach(function(btn) {
                    btn.classList.remove('selected');
                    btn.setAttribute('aria-pressed', 'false');
                });
                button.classList.add('selected');
                button.setAttribute('aria-pressed', 'true');

                // Update title
                var titleEl = document.getElementById('cemeteries-gmina-title');
                if (titleEl) titleEl.textContent = gmina;

                // Filter cards via AJAX
                filterCemeteryCards(gmina);
            });
        }
    }

    /**
     * Filter cemetery cards via AJAX
     */
    function filterCemeteryCards(gmina) {
        var container = document.getElementById('cemetery-cards');
        if (!container || typeof cmentarzeData === 'undefined') return;

        // Show loading
        container.innerHTML = '<div class="card-placeholder" style="grid-column: 1/-1; text-align: center; padding: 40px;">Ładowanie...</div>';

        $.ajax({
            url: cmentarzeData.ajaxUrl,
            type: 'POST',
            data: {
                action: 'cmentarze_filter',
                nonce: cmentarzeData.nonce,
                gmina: gmina
            },
            success: function(response) {
                if (response.success) {
                    container.innerHTML = response.data.html;
                }
            },
            error: function() {
                container.innerHTML = '<div class="empty"><h3>Wystąpił błąd</h3><p>Spróbuj odświeżyć stronę.</p></div>';
            }
        });
    }

    /**
     * Handle cemetery list clicks (zoom to marker)
     */
    function initCemeteryListClicks() {
        document.addEventListener('click', function(e) {
            var button = e.target.closest('.county-scroll button');
            if (!button) return;

            var lat = parseFloat(button.dataset.lat);
            var lon = parseFloat(button.dataset.lon);
            var id = button.dataset.id;

            if (map && lat && lon) {
                map.setView([lat, lon], 15);

                // Open popup
                var data = markers.get(parseInt(id) || id);
                if (data && data.marker) {
                    data.marker.openPopup();
                }
            }
        });
    }

    /**
     * Search form enhancement
     */
    function initSearchForm() {
        var form = document.getElementById('cemetery-search-form');
        if (!form) return;

        // Live search could be added here
        // For now, the form submits normally to WordPress search
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;

                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Escape HTML entities
     */
    function escapeHtml(str) {
        if (!str) return '';
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    /**
     * Document ready
     */
    $(document).ready(function() {
        initCountyMap();
        initGminaFilters();
        initCemeteryListClicks();
        initSearchForm();
        initSmoothScroll();
    });

})(jQuery);

// Cemetery pin styles (added dynamically)
(function() {
    var style = document.createElement('style');
    style.textContent = `
        .cemetery-pin span {
            display: block;
            width: 18px;
            height: 18px;
            border: 3px solid white;
            border-radius: 50%;
            margin: 4px;
            box-shadow: 0 1px 8px rgba(0,0,0,0.3);
            transition: transform 0.2s;
        }
        .cemetery-pin:hover span {
            transform: scale(1.3);
        }
        .leaflet-popup-content-wrapper {
            border-radius: 10px !important;
            border: 1px solid #ccc;
        }
        .place-popup {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            padding: 6px;
        }
        .place-popup small {
            font-size: 11px;
            letter-spacing: 1px;
            color: #666;
        }
        .place-popup h3 {
            font: 22px/1.2 Georgia, serif;
            margin: 10px 0;
            color: #1a2a24;
        }
        .place-popup p {
            font-size: 14px;
            color: #4a4a4a;
            margin: 8px 0 14px;
        }
        .place-popup a {
            display: block;
            color: #2a6a5a !important;
            margin-top: 10px;
            font-size: 14px;
        }
        .place-popup a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);
})();
