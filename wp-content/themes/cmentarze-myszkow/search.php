<?php
/**
 * Search Results Template
 *
 * @package CmentarzeMyszkow
 */

get_header();

$search_query = get_search_query();
$total_results = $wp_query->found_posts;
?>

<div class="archive-header">
    <div class="wrap">
        <div class="eyebrow">Wyniki wyszukiwania</div>
        <h1>
            <?php
            if ($total_results > 0) {
                printf(
                    'Znaleziono %d %s dla „%s"',
                    $total_results,
                    _n('wynik', 'wyników', $total_results, 'cmentarze-myszkow'),
                    esc_html($search_query)
                );
            } else {
                printf('Brak wyników dla „%s"', esc_html($search_query));
            }
            ?>
        </h1>
        <p>
            Przeszukaliśmy bazę cmentarzy w powiecie myszkowskim.
        </p>
    </div>
</div>

<div class="wrap">
    <nav class="crumb" aria-label="Ścieżka nawigacji">
        <a href="<?php echo esc_url(home_url('/')); ?>">Strona główna</a> /
        Wyszukiwanie: <?php echo esc_html($search_query); ?>
    </nav>

    <section class="section">
        <!-- Search form -->
        <form class="search-form-hero" action="<?php echo esc_url(home_url('/')); ?>" method="get" style="margin-bottom: 30px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="search"
                   name="s"
                   value="<?php echo esc_attr($search_query); ?>"
                   placeholder="Szukaj cmentarza, miejscowości lub informacji..."
                   aria-label="Szukaj cmentarza">
            <input type="hidden" name="post_type" value="cmentarz">
            <button class="btn" type="submit">
                <span>Szukaj</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </form>

        <?php if (have_posts()): ?>
            <div class="cards">
                <?php
                while (have_posts()) {
                    the_post();

                    if (get_post_type() === 'cmentarz') {
                        get_template_part('template-parts/card', 'cemetery');
                    } else {
                        ?>
                        <article class="card">
                            <div class="card-body">
                                <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                <p class="card-parish"><?php the_excerpt(); ?></p>
                                <div class="card-bottom">
                                    <a class="text-link" href="<?php the_permalink(); ?>">
                                        Czytaj więcej
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <?php
                    }
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

        <?php else: ?>
            <div class="empty">
                <h3>Nie znaleziono cmentarzy</h3>
                <p>Spróbuj innej nazwy lub przeglądaj wszystkie cmentarze.</p>
                <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px;">
                    <a href="<?php echo esc_url(home_url('/#cmentarze')); ?>" class="btn">
                        Przeglądaj wszystkie
                    </a>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-outline">
                        Strona główna
                    </a>
                </div>
            </div>

            <!-- Suggestions -->
            <div style="margin-top: 40px;">
                <h3>Popularne wyszukiwania</h3>
                <div class="filters" style="margin-top: 16px;">
                    <?php
                    $gminy = get_terms(array(
                        'taxonomy'   => 'gmina',
                        'hide_empty' => true,
                    ));
                    foreach ($gminy as $g) {
                        echo '<a href="' . esc_url(get_term_link($g)) . '" class="filter">' . esc_html($g->name) . '</a>';
                    }
                    ?>
                </div>
            </div>
        <?php endif; ?>
    </section>
</div>

<?php get_footer(); ?>
