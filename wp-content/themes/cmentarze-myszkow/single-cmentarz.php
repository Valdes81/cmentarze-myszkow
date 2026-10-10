<?php
/**
 * Single Cemetery Template
 *
 * @package CmentarzeMyszkow
 */

get_header();

while (have_posts()) : the_post();

$post_id = get_the_ID();
$gmina = cmentarze_get_gmina($post_id);
$gmina_name = $gmina ? $gmina->name : '';
$type = cmentarze_get_type($post_id);

// Get all meta
$address = cmentarze_get_meta($post_id, 'address');
$city = cmentarze_get_meta($post_id, 'city');
$parish = cmentarze_get_meta($post_id, 'parish');
$opening_hours = cmentarze_get_meta($post_id, 'opening_hours');
$grave_search_url = cmentarze_get_meta($post_id, 'grave_search_url');
$search_provider = cmentarze_get_search_provider($grave_search_url);

$phone = cmentarze_get_meta($post_id, 'phone');
$additional_phones = cmentarze_get_meta($post_id, 'additional_phones');
$phone_note = cmentarze_get_meta($post_id, 'phone_note');
$email = cmentarze_get_meta($post_id, 'email');
$website = cmentarze_get_meta($post_id, 'website');
$office_address = cmentarze_get_meta($post_id, 'office_address');
$office_hours = cmentarze_get_meta($post_id, 'office_hours');

$lat = cmentarze_get_meta($post_id, 'lat');
$lon = cmentarze_get_meta($post_id, 'lon');

$admin_name = cmentarze_get_meta($post_id, 'admin_name');
$admin_role = cmentarze_get_meta($post_id, 'admin_role');
$admin_address = cmentarze_get_meta($post_id, 'admin_address');
$admin_phone = cmentarze_get_meta($post_id, 'admin_phone');
$admin_website = cmentarze_get_meta($post_id, 'admin_website');
$admin_note = cmentarze_get_meta($post_id, 'admin_note');

$last_updated = cmentarze_get_meta($post_id, 'last_updated');
$sources = get_post_meta($post_id, '_cmentarz_sources', true);
if (!is_array($sources)) $sources = array();

$regulations_url = cmentarze_get_meta($post_id, 'regulations_url');
$regulations_summary = cmentarze_get_meta($post_id, 'regulations_summary');
$regulations_content = cmentarze_get_meta($post_id, 'regulations_content');
$fees_note = cmentarze_get_meta($post_id, 'fees_note');

$history = get_post_meta($post_id, '_cmentarz_history', true);
if (!is_array($history)) $history = array();

// Build Google Maps URL
$destination = ($lat && $lon) ? "$lat,$lon" : urlencode(get_the_title() . ' ' . $address . ' ' . $city);
$maps_url = 'https://www.google.com/maps/dir/?api=1&destination=' . $destination;
?>

<div class="wrap">
    <!-- Breadcrumb -->
    <nav class="crumb" aria-label="Ścieżka nawigacji">
        <a href="<?php echo esc_url(home_url('/')); ?>">Strona główna</a> /
        <a href="<?php echo esc_url(get_post_type_archive_link('cmentarz')); ?>">Cmentarze</a> /
        <?php if ($gmina): ?>
            <a href="<?php echo esc_url(get_term_link($gmina)); ?>"><?php echo esc_html($gmina_name); ?></a> /
        <?php endif; ?>
        <?php the_title(); ?>
    </nav>

    <!-- Title Section -->
    <header class="detail-title">
        <span class="tag"><?php echo esc_html($type); ?></span>
        <h1><?php the_title(); ?></h1>

        <div class="actions">
            <?php if ($grave_search_url): ?>
            <a class="btn" href="<?php echo esc_url($grave_search_url); ?>" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Wyszukaj grób (<?php echo esc_html($search_provider); ?>)
            </a>
            <?php endif; ?>

            <a class="btn btn-outline" href="<?php echo esc_url($maps_url); ?>" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                Wyznacz trasę
            </a>

            <?php if ($phone): ?>
            <a class="btn btn-outline" href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone)); ?>">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Zadzwoń
            </a>
            <?php endif; ?>
        </div>
    </header>

    <div class="detail-grid">
        <!-- Main Content -->
        <div class="detail-main">
            <?php if (has_post_thumbnail()): ?>
                <?php the_post_thumbnail('cemetery-full', array('class' => 'detail-photo')); ?>
            <?php endif; ?>

            <!-- Basic Info Panel -->
            <section class="panel" id="informacje">
                <h2>Informacje podstawowe</h2>

                <dl class="info">
                    <?php if ($address || $city): ?>
                    <div>
                        <dt>Adres cmentarza</dt>
                        <dd><?php echo esc_html($address); ?><?php if ($city) echo ', ' . esc_html($city); ?></dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($gmina_name): ?>
                    <div>
                        <dt>Gmina</dt>
                        <dd><?php echo esc_html($gmina_name); ?></dd>
                    </div>
                    <?php endif; ?>

                    <div>
                        <dt>Typ cmentarza</dt>
                        <dd><?php echo esc_html($type); ?></dd>
                    </div>

                    <?php if ($parish): ?>
                    <div>
                        <dt>Parafia / Zarządca</dt>
                        <dd><?php echo esc_html($parish); ?></dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($opening_hours): ?>
                    <div>
                        <dt>Godziny otwarcia</dt>
                        <dd><?php echo nl2br(esc_html($opening_hours)); ?></dd>
                    </div>
                    <?php endif; ?>
                </dl>

                <?php if ($last_updated): ?>
                <p class="source">Ostatnia aktualizacja: <?php echo esc_html($last_updated); ?></p>
                <?php endif; ?>
            </section>

            <!-- Contact Panel -->
            <?php if ($phone || $email || $website || $office_address): ?>
            <section class="panel" id="kontakt">
                <h2>Dane kontaktowe</h2>

                <dl class="info">
                    <?php if ($phone): ?>
                    <div>
                        <dt>Telefon</dt>
                        <dd>
                            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone)); ?>">
                                <?php echo esc_html($phone); ?>
                            </a>
                        </dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($additional_phones): ?>
                    <div>
                        <dt>Dodatkowe telefony</dt>
                        <dd><?php echo nl2br(esc_html($additional_phones)); ?></dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($email): ?>
                    <div>
                        <dt>Email</dt>
                        <dd><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a></dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($website): ?>
                    <div>
                        <dt>Strona WWW</dt>
                        <dd><a href="<?php echo esc_url($website); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html(str_replace(array('https://', 'http://', 'www.'), '', $website)); ?></a></dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($office_address): ?>
                    <div>
                        <dt>Adres biura / kancelarii</dt>
                        <dd><?php echo esc_html($office_address); ?></dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($office_hours): ?>
                    <div>
                        <dt>Godziny kancelarii</dt>
                        <dd><?php echo nl2br(esc_html($office_hours)); ?></dd>
                    </div>
                    <?php endif; ?>
                </dl>

                <?php if ($phone_note): ?>
                <p class="source"><?php echo nl2br(esc_html($phone_note)); ?></p>
                <?php endif; ?>
            </section>
            <?php endif; ?>

            <!-- Administrator Panel -->
            <?php if ($admin_name): ?>
            <section class="panel" id="administrator">
                <h2>Administrator / Opiekun</h2>

                <dl class="info">
                    <div>
                        <dt>Nazwa</dt>
                        <dd><?php echo esc_html($admin_name); ?></dd>
                    </div>

                    <?php if ($admin_role): ?>
                    <div>
                        <dt>Funkcja</dt>
                        <dd><?php echo esc_html($admin_role); ?></dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($admin_phone): ?>
                    <div>
                        <dt>Telefon</dt>
                        <dd>
                            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $admin_phone)); ?>">
                                <?php echo esc_html($admin_phone); ?>
                            </a>
                        </dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($admin_address): ?>
                    <div>
                        <dt>Adres</dt>
                        <dd><?php echo esc_html($admin_address); ?></dd>
                    </div>
                    <?php endif; ?>

                    <?php if ($admin_website): ?>
                    <div>
                        <dt>Strona WWW</dt>
                        <dd><a href="<?php echo esc_url($admin_website); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html(str_replace(array('https://', 'http://', 'www.'), '', $admin_website)); ?></a></dd>
                    </div>
                    <?php endif; ?>
                </dl>

                <?php if ($admin_note): ?>
                <p class="source"><?php echo nl2br(esc_html($admin_note)); ?></p>
                <?php endif; ?>
            </section>
            <?php endif; ?>

            <!-- Regulations Panel -->
            <?php if ($regulations_summary || $regulations_content || $regulations_url): ?>
            <section class="panel" id="regulamin">
                <h2>Regulamin</h2>

                <?php if ($regulations_summary): ?>
                <p><?php echo nl2br(esc_html($regulations_summary)); ?></p>
                <?php endif; ?>

                <?php if ($regulations_content): ?>
                <div class="regulations-content">
                    <?php echo wp_kses_post($regulations_content); ?>
                </div>
                <?php endif; ?>

                <?php if ($fees_note): ?>
                <p><strong>Uwagi o opłatach:</strong> <?php echo nl2br(esc_html($fees_note)); ?></p>
                <?php endif; ?>

                <?php if ($regulations_url): ?>
                <p class="source">
                    <a href="<?php echo esc_url($regulations_url); ?>" target="_blank" rel="noopener noreferrer">
                        Pełny regulamin na stronie zarządcy ↗
                    </a>
                </p>
                <?php endif; ?>
            </section>
            <?php endif; ?>

            <!-- History Panel -->
            <?php if (!empty($history)): ?>
            <section class="panel" id="historia">
                <h2>Historia</h2>

                <?php foreach ($history as $item): ?>
                <details>
                    <summary><?php echo esc_html($item['title']); ?></summary>
                    <p><?php echo nl2br(esc_html($item['text'])); ?></p>
                    <?php if (!empty($item['source'])): ?>
                    <p class="source"><?php echo esc_html($item['source']); ?></p>
                    <?php endif; ?>
                </details>
                <?php endforeach; ?>
            </section>
            <?php endif; ?>

            <!-- Post Content -->
            <?php if (get_the_content()): ?>
            <section class="panel">
                <h2>Opis</h2>
                <?php the_content(); ?>
            </section>
            <?php endif; ?>

            <!-- Sources Panel -->
            <?php if (!empty($sources)): ?>
            <section class="panel" id="zrodla">
                <h2>Źródła informacji</h2>

                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Źródło</th>
                                <th>Zakres informacji</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($sources as $source): ?>
                            <tr>
                                <td>
                                    <?php if (!empty($source['url'])): ?>
                                        <a href="<?php echo esc_url($source['url']); ?>" target="_blank" rel="noopener noreferrer">
                                            <?php echo esc_html($source['label']); ?> ↗
                                        </a>
                                    <?php else: ?>
                                        <?php echo esc_html($source['label']); ?>
                                    <?php endif; ?>
                                </td>
                                <td><?php echo esc_html($source['scope']); ?></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </section>
            <?php endif; ?>
        </div>

        <!-- Sidebar -->
        <aside class="aside">
            <!-- Map Panel -->
            <?php if ($lat && $lon): ?>
            <div class="panel">
                <h3>Lokalizacja na mapie</h3>
                <div id="single-cemetery-map" style="height: 250px; border-radius: 8px; margin-bottom: 16px;"></div>
                <a class="btn" href="<?php echo esc_url($maps_url); ?>" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                    </svg>
                    Wyznacz trasę w Google Maps
                </a>
            </div>

            <script>
            document.addEventListener('DOMContentLoaded', function() {
                if (typeof L !== 'undefined') {
                    var map = L.map('single-cemetery-map').setView([<?php echo esc_js($lat); ?>, <?php echo esc_js($lon); ?>], 15);
                    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(map);
                    L.marker([<?php echo esc_js($lat); ?>, <?php echo esc_js($lon); ?>]).addTo(map)
                        .bindPopup('<?php echo esc_js(get_the_title()); ?>');
                }
            });
            </script>
            <?php endif; ?>

            <!-- Grave Search Panel -->
            <?php if ($grave_search_url): ?>
            <div class="panel">
                <h3>Wyszukiwarka grobów</h3>
                <p>Skorzystaj z zewnętrznej wyszukiwarki, aby odnaleźć grób bliskiej osoby.</p>
                <a class="btn" href="<?php echo esc_url($grave_search_url); ?>" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Otwórz <?php echo esc_html($search_provider); ?>
                </a>
            </div>
            <?php endif; ?>

            <!-- Quick Contact Panel -->
            <?php if ($phone): ?>
            <div class="panel">
                <h3>Szybki kontakt</h3>
                <p>
                    <strong><?php echo esc_html($parish ?: get_the_title()); ?></strong><br>
                    <?php if ($office_address): ?>
                        <?php echo esc_html($office_address); ?><br>
                    <?php endif; ?>
                    Tel: <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a>
                </p>
            </div>
            <?php endif; ?>

            <!-- Back Link -->
            <div class="panel">
                <a class="text-link" href="<?php echo esc_url(home_url('/#cmentarze')); ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Wróć do listy cmentarzy
                </a>
            </div>
        </aside>
    </div>
</div>

<?php
endwhile;
get_footer();
?>
