<?php
/**
 * Default Page Template
 *
 * @package CmentarzeMyszkow
 */

get_header();
?>

<div class="wrap">
    <?php while (have_posts()) : the_post(); ?>

    <nav class="crumb" aria-label="Ścieżka nawigacji">
        <a href="<?php echo esc_url(home_url('/')); ?>">Strona główna</a> / <?php the_title(); ?>
    </nav>

    <article class="legal-page" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="legal-hero">
            <div class="eyebrow">Informacje</div>
            <h1><?php the_title(); ?></h1>
            <?php if (has_excerpt()): ?>
            <p><?php the_excerpt(); ?></p>
            <?php endif; ?>
        </header>

        <div class="legal-content">
            <section>
                <?php the_content(); ?>
            </section>
        </div>

        <?php if (get_edit_post_link()): ?>
        <footer class="source">
            <?php
            edit_post_link(
                'Edytuj stronę',
                '<span class="edit-link">',
                '</span>'
            );
            ?>
        </footer>
        <?php endif; ?>
    </article>

    <?php endwhile; ?>
</div>

<?php get_footer(); ?>
