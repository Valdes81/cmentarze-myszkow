<?php
/**
 * Template Name: Front Page
 * Description: Home page template for Cmentarze Myszków
 *
 * @package CmentarzeMyszkow
 */

get_header();

// Get all gminy
$gminy = get_terms(array(
    'taxonomy'   => 'gmina',
    'hide_empty' => false,
    'orderby'    => 'name',
));

// Default selected gmina
$default_gmina = 'Myszków';

// Get all cemeteries for initial load
$cemeteries_args = array(
    'post_type'      => 'cmentarz',
    'posts_per_page' => -1,
    'orderby'        => 'title',
    'order'          => 'ASC',
    'tax_query'      => array(
        array(
            'taxonomy' => 'gmina',
            'field'    => 'name',
            'terms'    => $default_gmina,
        ),
    ),
);
$cemeteries = new WP_Query($cemeteries_args);

// Get cemetery counts per gmina
$gmina_counts = array();
foreach ($gminy as $g) {
    $gmina_counts[$g->name] = $g->count;
}

// Get map data
$map_points = cmentarze_get_map_data();
?>

<!-- Hero Section -->
<section class="hero">
    <div class="wrap">
        <div class="hero-grid">
            <div>
                <div class="eyebrow">Myszków i powiat myszkowski</div>
                <h1>
                    <?php
                    $hero_title = get_theme_mod('cmentarze_hero_title', 'Ważne miejsca. Potrzebne informacje.');
                    $parts = explode('.', $hero_title);
                    if (count($parts) >= 2) {
                        echo esc_html(trim($parts[0])) . '.<br><em>' . esc_html(trim($parts[1])) . '</em>';
                    } else {
                        echo esc_html($hero_title);
                    }
                    ?>
                </h1>
                <p>
                    <?php echo esc_html(get_theme_mod('cmentarze_hero_text', 'Cmentarze w Myszkowie i powiecie myszkowskim. Adresy, administratorzy, mapy i praktyczne informacje - w jednym miejscu.')); ?>
                </p>
            </div>

            <?php
            // Hero image - can be set via customizer or use default
            $hero_image = get_theme_mod('cmentarze_hero_image');
            if ($hero_image) {
            ?>
            <div class="hero-picture">
                <img src="<?php echo esc_url($hero_image); ?>" alt="Krajobraz Jury Krakowsko-Częstochowskiej">
                <span class="picture-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Jura Krakowsko-Częstochowska
                </span>
            </div>
            <?php } ?>
        </div>

        <!-- Search Form -->
        <form class="search-form-hero" action="<?php echo esc_url(home_url('/')); ?>" method="get" id="cemetery-search-form">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="search"
                   id="cemetery-search"
                   name="s"
                   placeholder="Szukaj cmentarza, miejscowości lub informacji..."
                   aria-label="Szukaj cmentarza">
            <input type="hidden" name="post_type" value="cmentarz">
            <button class="btn" type="submit">
                <span>Szukaj</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </form>

        <!-- Quick links -->
        <div class="trust">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                Źródła przy informacjach
            </span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Lokalna baza miejsc
            </span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Bezpłatny dostęp
            </span>
        </div>
    </div>
</section>

<div class="wrap">

    <!-- County Map Section -->
    <section class="section county-section" id="mapa">
        <div class="county-heading">
            <div>
                <div class="eyebrow">Atlas miejsc pamięci</div>
                <h2>Cały powiat. Jedna mapa.</h2>
                <p>Wybierz gminę. Najedź na punkt, aby otworzyć kartę cmentarza.</p>
            </div>
            <span class="county-total">
                <strong><?php echo count($map_points); ?></strong>
                miejsc na mapie · <?php echo count($gminy); ?> gmin
            </span>
        </div>

        <!-- Gmina Filters -->
        <div class="county-filters" aria-label="Wybierz gminę na mapie">
            <?php foreach ($gminy as $g): ?>
            <button data-gmina="<?php echo esc_attr($g->name); ?>"
                    aria-pressed="<?php echo ($g->name === $default_gmina) ? 'true' : 'false'; ?>"
                    class="<?php echo ($g->name === $default_gmina) ? 'chosen' : ''; ?>">
                <?php echo esc_html($g->name); ?>
                <span><?php echo intval($g->count); ?></span>
            </button>
            <?php endforeach; ?>
        </div>

        <div class="county-layout">
            <!-- Cemetery List Sidebar -->
            <aside class="county-list">
                <div class="county-list-title">
                    <strong>Gmina <span id="current-gmina-name"><?php echo esc_html($default_gmina); ?></span></strong>
                    <small aria-live="polite">Liczba miejsc: <span id="current-gmina-count"><?php echo intval($gmina_counts[$default_gmina] ?? 0); ?></span></small>
                </div>
                <div class="county-scroll" id="county-cemetery-list">
                    <?php
                    // List cemeteries for default gmina
                    foreach ($map_points as $point) {
                        if ($point['gmina'] === $default_gmina) {
                            $color = cmentarze_get_gmina_color($point['gmina']);
                            ?>
                            <button data-lat="<?php echo esc_attr($point['lat']); ?>"
                                    data-lon="<?php echo esc_attr($point['lon']); ?>"
                                    data-id="<?php echo esc_attr($point['id']); ?>">
                                <i style="background: <?php echo esc_attr($color); ?>"></i>
                                <span>
                                    <strong><?php echo esc_html($point['name']); ?></strong>
                                    <small><?php echo esc_html($point['gmina']); ?> · <?php echo esc_html($point['type']); ?></small>
                                </span>
                                <b>↗</b>
                            </button>
                            <?php
                        }
                    }
                    ?>
                </div>
            </aside>

            <!-- Map Container -->
            <div class="county-map" id="county-map" aria-label="Interaktywna mapa cmentarzy powiatu myszkowskiego">
                <div class="map-loading">Wczytywanie mapy powiatu...</div>
            </div>
        </div>

        <div class="county-note">
            <span>Na telefonie dotknij znacznika. Przybliż mapę, aby rozdzielić pobliskie miejsca.</span>
            <span>
                Granice: <a href="https://wody.gios.gov.pl/arcgis/rest/services/MPP/AdministrativeDivisionSHP/MapServer/2" target="_blank" rel="noreferrer">GIOŚ</a> ·
                Punkty: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap, ODbL</a>
            </span>
        </div>
        <p class="map-disclaimer">
            Lokalizacje z OpenStreetMap oraz źródeł wskazanych na kartach, w tym miejsca historyczne.
            Baza może być niepełna. Punkty wskazują teren cmentarza, nie jego bramę.
        </p>
    </section>

    <!-- Cemeteries List Section -->
    <section class="section" id="cmentarze">
        <div class="section-head">
            <div>
                <h2>Cmentarze - gmina <span id="cemeteries-gmina-title"><?php echo esc_html($default_gmina); ?></span></h2>
                <p>Wybierz miejsce i sprawdź najważniejsze informacje. Pokazujemy miejsca z wybranej gminy.</p>
            </div>
            <a href="#mapa" class="text-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
                Zobacz na mapie
            </a>
        </div>

        <!-- Filters -->
        <div class="filters" aria-label="Filtr gminy" id="gmina-filters">
            <?php foreach ($gminy as $g): ?>
            <button data-gmina="<?php echo esc_attr($g->name); ?>"
                    aria-pressed="<?php echo ($g->name === $default_gmina) ? 'true' : 'false'; ?>"
                    class="filter <?php echo ($g->name === $default_gmina) ? 'selected' : ''; ?>">
                <?php echo esc_html($g->name); ?>
            </button>
            <?php endforeach; ?>
        </div>

        <!-- Cemetery Cards -->
        <div class="cards" id="cemetery-cards">
            <?php
            if ($cemeteries->have_posts()) {
                while ($cemeteries->have_posts()) {
                    $cemeteries->the_post();
                    get_template_part('template-parts/card', 'cemetery');
                }
                wp_reset_postdata();
            } else {
                echo '<div class="empty"><h3>Brak cmentarzy w tej gminie</h3><p>Wkrótce dodamy więcej miejsc.</p></div>';
            }
            ?>
        </div>
    </section>

    <!-- Regional Links & Notice -->
    <section class="section" style="padding-top: 8px;">
        <div class="regional-links">
            <span>Oficjalne informacje o regionie</span>
            <a href="https://www.powiatmyszkowski.pl/" target="_blank" rel="noreferrer">Powiat myszkowski ↗</a>
            <a href="https://www.miastomyszkow.pl/" target="_blank" rel="noreferrer">Miasto Myszków ↗</a>
        </div>

        <div class="notice">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <div>
                <strong>Pomóż nam tworzyć rzetelną bazę</strong>
                <p>Zauważyłeś nieaktualną informację? Skontaktuj się z zespołem projektu.</p>
            </div>
            <a class="text-link" href="https://liliamyszkow.com/kontakt/" target="_blank" rel="noreferrer">
                Zgłoś zmianę
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </a>
        </div>

        <p class="photo-credit">
            Źródła danych znajdziesz na poszczególnych kartach cmentarzy.
            Karty bez zdjęć używają symbolicznych ilustracji.
        </p>
    </section>

</div>

<!-- Map Data for JavaScript -->
<script>
var cmentarzeMapData = {
    points: <?php echo json_encode($map_points); ?>,
    gminy: <?php echo json_encode(wp_list_pluck($gminy, 'name')); ?>,
    colors: {
        'Myszków': '#3a8a6a',
        'Żarki': '#a07030',
        'Niegowa': '#6a8a30',
        'Poraj': '#4080b0',
        'Koziegłowy': '#7a60a0'
    },
    defaultGmina: '<?php echo esc_js($default_gmina); ?>'
};
</script>

<?php get_footer(); ?>
