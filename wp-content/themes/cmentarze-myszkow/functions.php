<?php
/**
 * Theme Functions - Cmentarze Myszków
 *
 * @package CmentarzeMyszkow
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

define('CMENTARZE_VERSION', '1.0.0');
define('CMENTARZE_DIR', get_template_directory());
define('CMENTARZE_URI', get_template_directory_uri());

/**
 * Theme Setup
 */
function cmentarze_setup() {
    // Add title tag support
    add_theme_support('title-tag');

    // Add featured image support
    add_theme_support('post-thumbnails');

    // Custom image sizes
    add_image_size('cemetery-card', 400, 200, true);
    add_image_size('cemetery-hero', 800, 400, true);
    add_image_size('cemetery-full', 1200, 600, true);

    // HTML5 support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Menu główne', 'cmentarze-myszkow'),
        'footer'  => __('Menu stopki', 'cmentarze-myszkow'),
    ));

    // Load text domain
    load_theme_textdomain('cmentarze-myszkow', CMENTARZE_DIR . '/languages');
}
add_action('after_setup_theme', 'cmentarze_setup');

/**
 * Enqueue scripts and styles
 */
function cmentarze_scripts() {
    // Main stylesheet
    wp_enqueue_style('cmentarze-style', get_stylesheet_uri(), array(), CMENTARZE_VERSION);

    // Leaflet CSS & JS for maps
    wp_enqueue_style('leaflet', CMENTARZE_URI . '/assets/css/leaflet.css', array(), '1.9.4');
    wp_enqueue_script('leaflet', CMENTARZE_URI . '/assets/js/leaflet.js', array(), '1.9.4', true);

    // Main JavaScript
    wp_enqueue_script('cmentarze-main', CMENTARZE_URI . '/assets/js/main.js', array('jquery', 'leaflet'), CMENTARZE_VERSION, true);

    // Localize script with data
    wp_localize_script('cmentarze-main', 'cmentarzeData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('cmentarze_nonce'),
        'siteUrl' => home_url('/'),
    ));
}
add_action('wp_enqueue_scripts', 'cmentarze_scripts');

/**
 * Register Custom Post Type: Cmentarz
 */
function cmentarze_register_cpt() {
    $labels = array(
        'name'                  => 'Cmentarze',
        'singular_name'         => 'Cmentarz',
        'menu_name'             => 'Cmentarze',
        'name_admin_bar'        => 'Cmentarz',
        'add_new'               => 'Dodaj nowy',
        'add_new_item'          => 'Dodaj nowy cmentarz',
        'new_item'              => 'Nowy cmentarz',
        'edit_item'             => 'Edytuj cmentarz',
        'view_item'             => 'Zobacz cmentarz',
        'all_items'             => 'Wszystkie cmentarze',
        'search_items'          => 'Szukaj cmentarzy',
        'not_found'             => 'Nie znaleziono cmentarzy',
        'not_found_in_trash'    => 'Nie znaleziono w koszu',
        'featured_image'        => 'Zdjęcie główne',
        'set_featured_image'    => 'Ustaw zdjęcie główne',
        'remove_featured_image' => 'Usuń zdjęcie główne',
        'use_featured_image'    => 'Użyj jako zdjęcie główne',
        'archives'              => 'Archiwum cmentarzy',
        'attributes'            => 'Atrybuty cmentarza',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'cmentarze', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-location',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );

    register_post_type('cmentarz', $args);
}
add_action('init', 'cmentarze_register_cpt');

/**
 * Register Taxonomy: Gmina
 */
function cmentarze_register_taxonomy() {
    $labels = array(
        'name'              => 'Gminy',
        'singular_name'     => 'Gmina',
        'search_items'      => 'Szukaj gmin',
        'all_items'         => 'Wszystkie gminy',
        'edit_item'         => 'Edytuj gminę',
        'update_item'       => 'Aktualizuj gminę',
        'add_new_item'      => 'Dodaj nową gminę',
        'new_item_name'     => 'Nazwa nowej gminy',
        'menu_name'         => 'Gminy',
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'gmina'),
        'show_in_rest'      => true,
    );

    register_taxonomy('gmina', array('cmentarz'), $args);

    // Add default gminy on theme activation
    if (get_option('cmentarze_default_gminy_added') !== 'yes') {
        $default_gminy = array(
            'Myszków'     => array('color' => '#3a8a6a'),
            'Żarki'       => array('color' => '#a07030'),
            'Niegowa'     => array('color' => '#6a8a30'),
            'Poraj'       => array('color' => '#4080b0'),
            'Koziegłowy'  => array('color' => '#7a60a0'),
        );

        foreach ($default_gminy as $name => $meta) {
            if (!term_exists($name, 'gmina')) {
                $term = wp_insert_term($name, 'gmina');
                if (!is_wp_error($term)) {
                    update_term_meta($term['term_id'], 'gmina_color', $meta['color']);
                }
            }
        }

        update_option('cmentarze_default_gminy_added', 'yes');
    }
}
add_action('init', 'cmentarze_register_taxonomy');

/**
 * Register Taxonomy: Typ Cmentarza
 */
function cmentarze_register_type_taxonomy() {
    $labels = array(
        'name'              => 'Typy cmentarzy',
        'singular_name'     => 'Typ cmentarza',
        'search_items'      => 'Szukaj typów',
        'all_items'         => 'Wszystkie typy',
        'edit_item'         => 'Edytuj typ',
        'update_item'       => 'Aktualizuj typ',
        'add_new_item'      => 'Dodaj nowy typ',
        'new_item_name'     => 'Nazwa nowego typu',
        'menu_name'         => 'Typy',
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'typ'),
        'show_in_rest'      => true,
    );

    register_taxonomy('typ_cmentarza', array('cmentarz'), $args);

    // Add default types
    if (get_option('cmentarze_default_typy_added') !== 'yes') {
        $default_typy = array('Komunalny', 'Parafialny', 'Wojenny', 'Żydowski', 'Mariawicki', 'Ewangelicki');

        foreach ($default_typy as $name) {
            if (!term_exists($name, 'typ_cmentarza')) {
                wp_insert_term($name, 'typ_cmentarza');
            }
        }

        update_option('cmentarze_default_typy_added', 'yes');
    }
}
add_action('init', 'cmentarze_register_type_taxonomy');

// Include custom fields (metaboxes)
require_once CMENTARZE_DIR . '/inc/custom-fields.php';

/**
 * Get cemetery meta field
 */
function cmentarze_get_meta($post_id, $key, $default = '') {
    $value = get_post_meta($post_id, '_cmentarz_' . $key, true);
    return $value !== '' ? $value : $default;
}

/**
 * Get cemetery gmina
 */
function cmentarze_get_gmina($post_id) {
    $terms = get_the_terms($post_id, 'gmina');
    if ($terms && !is_wp_error($terms)) {
        return $terms[0];
    }
    return null;
}

/**
 * Get cemetery type
 */
function cmentarze_get_type($post_id) {
    $terms = get_the_terms($post_id, 'typ_cmentarza');
    if ($terms && !is_wp_error($terms)) {
        return $terms[0]->name;
    }
    return 'Cmentarz';
}

/**
 * Get gmina color
 */
function cmentarze_get_gmina_color($gmina_name) {
    $colors = array(
        'Myszków'    => '#3a8a6a',
        'Żarki'      => '#a07030',
        'Niegowa'    => '#6a8a30',
        'Poraj'      => '#4080b0',
        'Koziegłowy' => '#7a60a0',
    );
    return isset($colors[$gmina_name]) ? $colors[$gmina_name] : '#3a8a6a';
}

/**
 * Get grave search provider name from URL
 */
function cmentarze_get_search_provider($url) {
    if (empty($url)) return '';

    $host = wp_parse_url($url, PHP_URL_HOST);
    if (!$host) return 'Wyszukiwarka zewnętrzna';

    $host = str_replace('www.', '', $host);

    if (strpos($host, 'grobonet.com') !== false) return 'Grobonet';
    if ($host === 'ecmentarze.pl') return 'eCmentarze';
    if ($host === 'mogily.pl') return 'Mogiły.pl';

    return 'Wyszukiwarka zewnętrzna';
}

/**
 * AJAX handler for cemetery filtering
 */
function cmentarze_filter_ajax() {
    check_ajax_referer('cmentarze_nonce', 'nonce');

    $gmina = isset($_POST['gmina']) ? sanitize_text_field($_POST['gmina']) : '';
    $search = isset($_POST['search']) ? sanitize_text_field($_POST['search']) : '';

    $args = array(
        'post_type'      => 'cmentarz',
        'posts_per_page' => -1,
        'orderby'        => 'title',
        'order'          => 'ASC',
    );

    if ($gmina) {
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'gmina',
                'field'    => 'slug',
                'terms'    => sanitize_title($gmina),
            ),
        );
    }

    if ($search) {
        $args['s'] = $search;
    }

    $query = new WP_Query($args);

    ob_start();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            get_template_part('template-parts/card', 'cemetery');
        }
    } else {
        echo '<div class="empty"><h3>Nie znaleziono cmentarzy</h3><p>Spróbuj innej nazwy lub wybierz inną gminę.</p></div>';
    }

    wp_reset_postdata();

    wp_send_json_success(array('html' => ob_get_clean()));
}
add_action('wp_ajax_cmentarze_filter', 'cmentarze_filter_ajax');
add_action('wp_ajax_nopriv_cmentarze_filter', 'cmentarze_filter_ajax');

/**
 * Get all cemeteries as JSON for map
 */
function cmentarze_get_map_data() {
    $args = array(
        'post_type'      => 'cmentarz',
        'posts_per_page' => -1,
        'meta_query'     => array(
            array(
                'key'     => '_cmentarz_lat',
                'compare' => 'EXISTS',
            ),
        ),
    );

    $query = new WP_Query($args);
    $points = array();

    while ($query->have_posts()) {
        $query->the_post();
        $id = get_the_ID();

        $lat = cmentarze_get_meta($id, 'lat');
        $lon = cmentarze_get_meta($id, 'lon');

        if (empty($lat) || empty($lon)) continue;

        $gmina = cmentarze_get_gmina($id);

        $points[] = array(
            'id'        => $id,
            'name'      => get_the_title(),
            'lat'       => (float) $lat,
            'lon'       => (float) $lon,
            'gmina'     => $gmina ? $gmina->name : '',
            'type'      => cmentarze_get_type($id),
            'parish'    => cmentarze_get_meta($id, 'parish'),
            'address'   => cmentarze_get_meta($id, 'address'),
            'href'      => get_permalink(),
            'searchUrl' => cmentarze_get_meta($id, 'grave_search_url'),
        );
    }

    wp_reset_postdata();

    return $points;
}

/**
 * Custom excerpt length
 */
function cmentarze_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'cmentarze_excerpt_length');

/**
 * Custom excerpt more
 */
function cmentarze_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'cmentarze_excerpt_more');

/**
 * Add body classes
 */
function cmentarze_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'front-page';
    }
    if (is_singular('cmentarz')) {
        $classes[] = 'single-cmentarz';
    }
    if (is_post_type_archive('cmentarz')) {
        $classes[] = 'archive-cmentarz';
    }
    return $classes;
}
add_filter('body_class', 'cmentarze_body_classes');

/**
 * Disable Gutenberg for cmentarz post type (optional - can be removed if you want block editor)
 */
function cmentarze_disable_gutenberg($current_status, $post_type) {
    if ($post_type === 'cmentarz') {
        return false;
    }
    return $current_status;
}
// Uncomment to disable Gutenberg for cmentarz:
// add_filter('use_block_editor_for_post_type', 'cmentarze_disable_gutenberg', 10, 2);

/**
 * Add custom columns to admin list
 */
function cmentarze_admin_columns($columns) {
    $new_columns = array();
    foreach ($columns as $key => $value) {
        $new_columns[$key] = $value;
        if ($key === 'title') {
            $new_columns['cemetery_gmina'] = 'Gmina';
            $new_columns['cemetery_type'] = 'Typ';
            $new_columns['cemetery_address'] = 'Adres';
        }
    }
    return $new_columns;
}
add_filter('manage_cmentarz_posts_columns', 'cmentarze_admin_columns');

/**
 * Populate custom columns
 */
function cmentarze_admin_columns_content($column, $post_id) {
    switch ($column) {
        case 'cemetery_gmina':
            $gmina = cmentarze_get_gmina($post_id);
            echo $gmina ? esc_html($gmina->name) : '—';
            break;
        case 'cemetery_type':
            echo esc_html(cmentarze_get_type($post_id));
            break;
        case 'cemetery_address':
            echo esc_html(cmentarze_get_meta($post_id, 'address', '—'));
            break;
    }
}
add_action('manage_cmentarz_posts_custom_column', 'cmentarze_admin_columns_content', 10, 2);

/**
 * Make columns sortable
 */
function cmentarze_sortable_columns($columns) {
    $columns['cemetery_gmina'] = 'gmina';
    return $columns;
}
add_filter('manage_edit-cmentarz_sortable_columns', 'cmentarze_sortable_columns');

/**
 * Flush rewrite rules on theme activation
 */
function cmentarze_rewrite_flush() {
    cmentarze_register_cpt();
    cmentarze_register_taxonomy();
    cmentarze_register_type_taxonomy();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'cmentarze_rewrite_flush');

/**
 * Theme customizer options
 */
function cmentarze_customize_register($wp_customize) {
    // Contact section
    $wp_customize->add_section('cmentarze_contact', array(
        'title'    => 'Dane kontaktowe',
        'priority' => 30,
    ));

    $wp_customize->add_setting('cmentarze_email', array(
        'default'           => 'biuro@liliamyszkow.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('cmentarze_email', array(
        'label'   => 'Email kontaktowy',
        'section' => 'cmentarze_contact',
        'type'    => 'email',
    ));

    $wp_customize->add_setting('cmentarze_address', array(
        'default'           => 'ul. Krasickiego 95F, 42-300 Myszków',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('cmentarze_address', array(
        'label'   => 'Adres firmy',
        'section' => 'cmentarze_contact',
        'type'    => 'text',
    ));

    // Hero section
    $wp_customize->add_section('cmentarze_hero', array(
        'title'    => 'Strona główna - Hero',
        'priority' => 31,
    ));

    $wp_customize->add_setting('cmentarze_hero_title', array(
        'default'           => 'Ważne miejsca. Potrzebne informacje.',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('cmentarze_hero_title', array(
        'label'   => 'Nagłówek Hero',
        'section' => 'cmentarze_hero',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('cmentarze_hero_text', array(
        'default'           => 'Cmentarze w Myszkowie i powiecie myszkowskim. Adresy, administratorzy, mapy i praktyczne informacje - w jednym miejscu.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('cmentarze_hero_text', array(
        'label'   => 'Tekst Hero',
        'section' => 'cmentarze_hero',
        'type'    => 'textarea',
    ));
}
add_action('customize_register', 'cmentarze_customize_register');
