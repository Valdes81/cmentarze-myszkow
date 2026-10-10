<?php
/**
 * Taxonomy Template for Gmina
 *
 * @package CmentarzeMyszkow
 */

get_header();

$term = get_queried_object();
$gmina_name = $term->name;
$total_count = $term->count;
?>

<div class="archive-header">
    <div class="wrap">
        <div class="eyebrow">Gmina <?php echo esc_html($gmina_name); ?></div>
        <h1>Cmentarze w gminie <?php echo esc_html($gmina_name); ?></h1>
        <p>
            Przeglądaj cmentarze w gminie <?php echo esc_html($gmina_name); ?>.
            Znajdziesz tu adresy, dane kontaktowe, informacje o administratorach i wyszukiwarki grobów.
        </p>

        <div class="archive-stats">
            <span><strong><?php echo intval($total_count); ?></strong> <?php echo _n('cmentarz', 'cmentarzy', $total_count, 'cmentarze-myszkow'); ?></span>
        </div>
    </div>
</div>

<div class="wrap">
    <nav class="crumb" aria-label="Ścieżka nawigacji">
        <a href="<?php echo esc_url(home_url('/')); ?>">Strona główna</a> /
        <a href="<?php echo esc_url(get_post_type_archive_link('cmentarz')); ?>">Cmentarze</a> /
        <?php echo esc_html($gmina_name); ?>
    </nav>

    <section class="section">
        <div class="section-head">
            <div>
                <h2>Wszystkie miejsca</h2>
                <p>Lista cmentarzy w gminie <?php echo esc_html($gmina_name); ?>, posortowana alfabetycznie.</p>
            </div>
            <a href="<?php echo esc_url(home_url('/#mapa')); ?>" class="text-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
                Zobacz na mapie
            </a>
        </div>

        <div class="cards">
            <?php
            if (have_posts()) {
                while (have_posts()) {
                    the_post();
                    get_template_part('template-parts/card', 'cemetery');
                }
            } else {
                echo '<div class="empty"><h3>Brak cmentarzy w tej gminie</h3><p>Wkrótce dodamy więcej miejsc.</p></div>';
            }
            ?>
        </div>

        <?php
        // Pagination
        $pagination = paginate_links(array(
            'prev_text' => '← Poprzednia',
            'next_text' => 'Następna →',
            'type'      => 'array',
        ));

        if ($pagination) {
            echo '<nav class="pagination" aria-label="Nawigacja po stronach">';
            foreach ($pagination as $link) {
                echo $link;
            }
            echo '</nav>';
        }
        ?>
    </section>

    <!-- Other gminy -->
    <section class="section" style="padding-top: 0;">
        <h3>Inne gminy</h3>
        <div class="city-list" style="margin-top: 16px;">
            <?php
            $all_gminy = get_terms(array(
                'taxonomy'   => 'gmina',
                'hide_empty' => true,
                'orderby'    => 'name',
            ));

            foreach ($all_gminy as $g) {
                if ($g->term_id === $term->term_id) continue;
                ?>
                <a href="<?php echo esc_url(get_term_link($g)); ?>"
                   class="city"
                   data-gmina="<?php echo esc_attr($g->name); ?>">
                    <div>
                        <strong><?php echo esc_html($g->name); ?></strong>
                        <small><?php echo intval($g->count); ?> <?php echo _n('cmentarz', 'cmentarzy', $g->count, 'cmentarze-myszkow'); ?></small>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <?php
            }
            ?>
        </div>
    </section>
</div>

<?php get_footer(); ?>
