<?php
/**
 * Main Index Template
 *
 * This is the most generic template file in a WordPress theme.
 * It's used to display a page when nothing more specific matches a query.
 *
 * @package CmentarzeMyszkow
 */

get_header();
?>

<div class="wrap">
    <section class="section">
        <?php if (is_home() && !is_front_page()): ?>
            <header class="section-head">
                <h1><?php single_post_title(); ?></h1>
            </header>
        <?php endif; ?>

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
                <h3>Nie znaleziono wyników</h3>
                <p>Spróbuj innego wyszukiwania lub wróć do strony głównej.</p>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn">
                    Strona główna
                </a>
            </div>
        <?php endif; ?>
    </section>
</div>

<?php get_footer(); ?>
