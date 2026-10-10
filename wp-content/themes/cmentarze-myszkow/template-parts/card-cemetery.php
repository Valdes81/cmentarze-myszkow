<?php
/**
 * Template part for displaying cemetery card
 *
 * @package CmentarzeMyszkow
 */

$post_id = get_the_ID();
$gmina = cmentarze_get_gmina($post_id);
$gmina_name = $gmina ? $gmina->name : '';
$type = cmentarze_get_type($post_id);
$address = cmentarze_get_meta($post_id, 'address');
$city = cmentarze_get_meta($post_id, 'city');
$parish = cmentarze_get_meta($post_id, 'parish');
$grave_search_url = cmentarze_get_meta($post_id, 'grave_search_url');
$search_provider = cmentarze_get_search_provider($grave_search_url);
?>

<article class="card" data-gmina="<?php echo esc_attr($gmina_name); ?>">
    <div class="card-image">
        <?php if (has_post_thumbnail()): ?>
            <?php the_post_thumbnail('cemetery-card'); ?>
        <?php else: ?>
            <div class="card-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <?php echo esc_html($gmina_name); ?>
            </div>
        <?php endif; ?>
        <span class="tag"><?php echo esc_html($type); ?></span>
    </div>

    <div class="card-body">
        <h3><?php the_title(); ?></h3>

        <p class="card-parish">
            <?php
            if ($parish) {
                echo esc_html($parish);
            } else {
                echo esc_html(get_the_excerpt());
            }
            ?>
        </p>

        <div class="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <?php
            $location_parts = array();
            if ($city) $location_parts[] = $city;
            if ($address) $location_parts[] = $address;
            echo esc_html(implode(' · ', $location_parts));
            ?>
        </div>

        <div class="card-links">
            <?php if ($grave_search_url): ?>
            <a class="grave-search-badge"
               href="<?php echo esc_url($grave_search_url); ?>"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Wyszukiwarka grobów <?php echo esc_attr($search_provider); ?> - <?php the_title_attribute(); ?> (otwiera nową kartę)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>
                    <span class="grave-search-label">Wyszukiwarka grobów</span>
                    <strong><?php echo esc_html($search_provider); ?></strong>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </a>
            <?php endif; ?>

            <div class="card-bottom">
                <a class="text-link" href="<?php the_permalink(); ?>">
                    Zobacz informacje
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</article>
