<?php
/**
 * Archive Template for Cemetery Post Type
 *
 * @package CmentarzeMyszkow
 */

get_header();

// Get all gminy
$gminy = get_terms(array(
    'taxonomy'   => 'gmina',
    'hide_empty' => true,
    'orderby'    => 'name',
));

// Total cemetery count
$total_count = wp_count_posts('cmentarz')->publish;
?>

<div class="archive-header">
    <div class="wrap">
        <div class="eyebrow">Katalog miejsc</div>
        <h1>Wszystkie cmentarze</h1>
        <p>
            Przeglądaj bazę cmentarzy w powiecie myszkowskim.
            Znajdziesz tu adresy, dane kontaktowe, informacje o administratorach i wyszukiwarki grobów.
        </p>

        <div class="archive-stats">
            <span><strong><?php echo intval($total_count); ?></strong> cmentarzy w bazie</span>
            <span><strong><?php echo count($gminy); ?></strong> gmin</span>
        </div>
    </div>
</div>

<div class="wrap">
    <section class="section">
        <!-- Gmina List -->
        <div class="city-list">
            <?php foreach ($gminy as $gmina): ?>
            <a href="<?php echo esc_url(get_term_link($gmina)); ?>"
               class="city"
               data-gmina="<?php echo esc_attr($gmina->name); ?>">
                <div>
                    <strong><?php echo esc_html($gmina->name); ?></strong>
                    <small><?php echo intval($gmina->count); ?> <?php echo _n('cmentarz', 'cmentarzy', $gmina->count, 'cmentarze-myszkow'); ?></small>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="section">
        <div class="section-head">
            <div>
                <h2>Wszystkie miejsca</h2>
                <p>Lista wszystkich cmentarzy w bazie, posortowana alfabetycznie.</p>
            </div>
        </div>

        <div class="cards">
            <?php
            if (have_posts()) {
                while (have_posts()) {
                    the_post();
                    get_template_part('template-parts/card', 'cemetery');
                }
            } else {
                echo '<div class="empty"><h3>Brak cmentarzy w bazie</h3><p>Wkrótce dodamy więcej miejsc.</p></div>';
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
</div>

<?php get_footer(); ?>
