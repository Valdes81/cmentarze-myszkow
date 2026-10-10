</main><!-- #main -->

<footer class="footer" id="o-projekcie">
    <div class="wrap footer-row">
        <div class="brand">
            <?php
            // Lilia logo
            $lilia_logo = CMENTARZE_URI . '/assets/images/lilia-logo.webp';
            if (file_exists(CMENTARZE_DIR . '/assets/images/lilia-logo.webp')) {
                echo '<img class="lilia-signature" src="' . esc_url($lilia_logo) . '" alt="Dom Pogrzebowy Lilia">';
            }

            // Portal logo
            $custom_logo_id = get_theme_mod('custom_logo');
            if ($custom_logo_id) {
                echo wp_get_attachment_image($custom_logo_id, 'medium', false, array(
                    'class' => 'portal-logo',
                    'alt'   => get_bloginfo('name'),
                ));
            } else {
            ?>
                <img class="portal-logo"
                     src="<?php echo esc_url(CMENTARZE_URI . '/assets/images/portal-logo.webp'); ?>"
                     alt="<?php bloginfo('name'); ?>"
                     width="200" height="auto">
            <?php } ?>
        </div>

        <div class="footer-copy">
            <p>
                Serwis <?php bloginfo('name'); ?> jest projektem informacyjnym
                <a href="https://liliamyszkow.com/" target="_blank" rel="noreferrer">Domu Pogrzebowego Lilia w Myszkowie</a>.
            </p>

            <p>
                <strong>Administrator serwisu:</strong><br>
                Dom Pogrzebowy Lilia<br>
                <?php echo esc_html(get_theme_mod('cmentarze_address', 'ul. Krasickiego 95F, 42-300 Myszków')); ?><br>
                <a href="mailto:<?php echo esc_attr(get_theme_mod('cmentarze_email', 'biuro@liliamyszkow.com')); ?>">
                    <?php echo esc_html(get_theme_mod('cmentarze_email', 'biuro@liliamyszkow.com')); ?>
                </a>
            </p>

            <p>
                Wersja rozwojowa. Baza jest sukcesywnie uzupełniana.
                W sprawie aktualnych warunków skontaktuj się z administratorem cmentarza.
            </p>

            <nav class="footer-legal" aria-label="<?php esc_attr_e('Informacje prawne', 'cmentarze-myszkow'); ?>">
                <?php
                // Check if legal pages exist
                $regulamin_page = get_page_by_path('regulamin');
                $privacy_page = get_page_by_path('polityka-prywatnosci');

                if ($regulamin_page) {
                    echo '<a href="' . esc_url(get_permalink($regulamin_page)) . '">Regulamin serwisu</a>';
                }
                if ($privacy_page) {
                    echo '<a href="' . esc_url(get_permalink($privacy_page)) . '">Polityka prywatności</a>';
                }

                // If pages don't exist, show placeholder links
                if (!$regulamin_page && !$privacy_page) {
                ?>
                    <a href="<?php echo esc_url(home_url('/regulamin/')); ?>">Regulamin serwisu</a>
                    <a href="<?php echo esc_url(home_url('/polityka-prywatnosci/')); ?>">Polityka prywatności</a>
                <?php
                }
                ?>
            </nav>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('primary-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            var expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            menu.classList.toggle('active');
        });
    }
});
</script>
</body>
</html>
