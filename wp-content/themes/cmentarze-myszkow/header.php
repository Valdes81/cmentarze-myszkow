<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#main">
    <?php esc_html_e('Przejdź do treści', 'cmentarze-myszkow'); ?>
</a>

<header class="header">
    <div class="wrap header-row">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand" aria-label="<?php bloginfo('name'); ?>">
            <?php
            $custom_logo_id = get_theme_mod('custom_logo');
            if ($custom_logo_id) {
                echo wp_get_attachment_image($custom_logo_id, 'full', false, array(
                    'class' => 'portal-logo',
                    'alt'   => get_bloginfo('name'),
                ));
            } else {
            ?>
                <img class="portal-logo"
                     src="<?php echo esc_url(CMENTARZE_URI . '/assets/images/portal-logo.webp'); ?>"
                     alt="<?php bloginfo('name'); ?>"
                     width="220" height="auto">
            <?php } ?>
        </a>

        <nav class="nav-menu" id="primary-menu" aria-label="<?php esc_attr_e('Menu główne', 'cmentarze-myszkow'); ?>">
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'items_wrap'     => '%3$s',
                    'depth'          => 1,
                ));
            } else {
                // Default menu if none is set
                ?>
                <a href="<?php echo esc_url(home_url('/#cmentarze')); ?>">Cmentarze</a>
                <a href="<?php echo esc_url(home_url('/#mapa')); ?>">Mapa</a>
                <a href="<?php echo esc_url(home_url('/#o-projekcie')); ?>" class="btn-outline">O projekcie</a>
                <?php
            }
            ?>
        </nav>

        <button class="menu-toggle btn-outline" id="menu-toggle"
                aria-controls="primary-menu"
                aria-expanded="false"
                aria-label="<?php esc_attr_e('Menu', 'cmentarze-myszkow'); ?>">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
    </div>
</header>

<main id="main" class="site-main">
