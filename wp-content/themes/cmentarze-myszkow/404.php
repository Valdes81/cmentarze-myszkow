<?php
/**
 * 404 Page Template
 *
 * @package CmentarzeMyszkow
 */

get_header();
?>

<div class="wrap">
    <section class="section" style="text-align: center; padding: 80px 0;">
        <div class="eyebrow" style="justify-content: center;">Błąd 404</div>
        <h1 style="margin-top: 20px;">Strona nie została znaleziona</h1>
        <p style="font-size: 18px; color: #4a4a4a; max-width: 500px; margin: 20px auto;">
            Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>

        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 30px;">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Strona główna
            </a>
            <a href="<?php echo esc_url(get_post_type_archive_link('cmentarz')); ?>" class="btn btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Przeglądaj cmentarze
            </a>
        </div>

        <!-- Search -->
        <div style="max-width: 600px; margin: 50px auto 0;">
            <p style="font-size: 16px; color: #666; margin-bottom: 16px;">Lub wyszukaj cmentarz:</p>
            <form class="search-form-hero" action="<?php echo esc_url(home_url('/')); ?>" method="get">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="search"
                       name="s"
                       placeholder="Szukaj cmentarza, miejscowości..."
                       aria-label="Szukaj cmentarza">
                <input type="hidden" name="post_type" value="cmentarz">
                <button class="btn" type="submit">
                    <span>Szukaj</span>
                </button>
            </form>
        </div>

        <!-- Quick links to gminy -->
        <div style="margin-top: 50px;">
            <p style="font-size: 16px; color: #666; margin-bottom: 16px;">Przeglądaj według gminy:</p>
            <div class="filters" style="justify-content: center;">
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
    </section>
</div>

<?php get_footer(); ?>
