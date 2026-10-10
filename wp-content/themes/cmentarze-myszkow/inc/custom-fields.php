<?php
/**
 * Custom Fields (Metaboxes) for Cemetery Post Type
 *
 * @package CmentarzeMyszkow
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register meta boxes
 */
function cmentarze_register_meta_boxes() {
    add_meta_box(
        'cmentarz_info',
        'Informacje podstawowe',
        'cmentarze_meta_box_info',
        'cmentarz',
        'normal',
        'high'
    );

    add_meta_box(
        'cmentarz_contact',
        'Dane kontaktowe',
        'cmentarze_meta_box_contact',
        'cmentarz',
        'normal',
        'high'
    );

    add_meta_box(
        'cmentarz_location',
        'Lokalizacja i mapa',
        'cmentarze_meta_box_location',
        'cmentarz',
        'normal',
        'default'
    );

    add_meta_box(
        'cmentarz_administrator',
        'Administrator / Opiekun',
        'cmentarze_meta_box_administrator',
        'cmentarz',
        'normal',
        'default'
    );

    add_meta_box(
        'cmentarz_sources',
        'Źródła i aktualizacja',
        'cmentarze_meta_box_sources',
        'cmentarz',
        'normal',
        'default'
    );

    add_meta_box(
        'cmentarz_regulations',
        'Regulamin cmentarza',
        'cmentarze_meta_box_regulations',
        'cmentarz',
        'normal',
        'default'
    );

    add_meta_box(
        'cmentarz_history',
        'Historia',
        'cmentarze_meta_box_history',
        'cmentarz',
        'normal',
        'default'
    );
}
add_action('add_meta_boxes', 'cmentarze_register_meta_boxes');

/**
 * Meta box: Basic Info
 */
function cmentarze_meta_box_info($post) {
    wp_nonce_field('cmentarze_save_meta', 'cmentarze_meta_nonce');

    $address = get_post_meta($post->ID, '_cmentarz_address', true);
    $city = get_post_meta($post->ID, '_cmentarz_city', true);
    $parish = get_post_meta($post->ID, '_cmentarz_parish', true);
    $opening_hours = get_post_meta($post->ID, '_cmentarz_opening_hours', true);
    $grave_search_url = get_post_meta($post->ID, '_cmentarz_grave_search_url', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="cmentarz_address">Adres cmentarza</label></th>
            <td>
                <input type="text" id="cmentarz_address" name="cmentarz_address"
                       value="<?php echo esc_attr($address); ?>" class="large-text"
                       placeholder="np. ul. Jana Pawła II 100">
                <p class="description">Ulica i numer. Bez miasta i kodu pocztowego.</p>
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_city">Miejscowość</label></th>
            <td>
                <input type="text" id="cmentarz_city" name="cmentarz_city"
                       value="<?php echo esc_attr($city); ?>" class="regular-text"
                       placeholder="np. Myszków">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_parish">Parafia / Zarządca</label></th>
            <td>
                <input type="text" id="cmentarz_parish" name="cmentarz_parish"
                       value="<?php echo esc_attr($parish); ?>" class="large-text"
                       placeholder="np. Parafia św. Stanisława Biskupa i Męczennika">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_opening_hours">Godziny otwarcia</label></th>
            <td>
                <textarea id="cmentarz_opening_hours" name="cmentarz_opening_hours"
                          rows="2" class="large-text"
                          placeholder="np. Codziennie od 7:00 do zmroku"><?php echo esc_textarea($opening_hours); ?></textarea>
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_grave_search_url">URL wyszukiwarki grobów</label></th>
            <td>
                <input type="url" id="cmentarz_grave_search_url" name="cmentarz_grave_search_url"
                       value="<?php echo esc_url($grave_search_url); ?>" class="large-text"
                       placeholder="https://example.grobonet.com/">
                <p class="description">Link do Grobonet, eCmentarze, Mogiły.pl lub innej wyszukiwarki.</p>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Meta box: Contact
 */
function cmentarze_meta_box_contact($post) {
    $phone = get_post_meta($post->ID, '_cmentarz_phone', true);
    $additional_phones = get_post_meta($post->ID, '_cmentarz_additional_phones', true);
    $phone_note = get_post_meta($post->ID, '_cmentarz_phone_note', true);
    $email = get_post_meta($post->ID, '_cmentarz_email', true);
    $website = get_post_meta($post->ID, '_cmentarz_website', true);
    $office_address = get_post_meta($post->ID, '_cmentarz_office_address', true);
    $office_hours = get_post_meta($post->ID, '_cmentarz_office_hours', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="cmentarz_phone">Telefon główny</label></th>
            <td>
                <input type="text" id="cmentarz_phone" name="cmentarz_phone"
                       value="<?php echo esc_attr($phone); ?>" class="regular-text"
                       placeholder="np. 34 313 10 21">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_additional_phones">Dodatkowe telefony</label></th>
            <td>
                <textarea id="cmentarz_additional_phones" name="cmentarz_additional_phones"
                          rows="2" class="large-text"
                          placeholder="Każdy numer w osobnej linii"><?php echo esc_textarea($additional_phones); ?></textarea>
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_phone_note">Uwaga do telefonów</label></th>
            <td>
                <textarea id="cmentarz_phone_note" name="cmentarz_phone_note"
                          rows="2" class="large-text"
                          placeholder="np. 600 065 202 - biuro obsługi klienta; 608 035 527 - telefon całodobowy."><?php echo esc_textarea($phone_note); ?></textarea>
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_email">Email</label></th>
            <td>
                <input type="email" id="cmentarz_email" name="cmentarz_email"
                       value="<?php echo esc_attr($email); ?>" class="regular-text"
                       placeholder="kontakt@example.pl">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_website">Strona WWW</label></th>
            <td>
                <input type="url" id="cmentarz_website" name="cmentarz_website"
                       value="<?php echo esc_url($website); ?>" class="large-text"
                       placeholder="https://www.example.pl">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_office_address">Adres biura / kancelarii</label></th>
            <td>
                <input type="text" id="cmentarz_office_address" name="cmentarz_office_address"
                       value="<?php echo esc_attr($office_address); ?>" class="large-text"
                       placeholder="np. ul. Kościelna 4, 42-350 Koziegłowy">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_office_hours">Godziny kancelarii</label></th>
            <td>
                <textarea id="cmentarz_office_hours" name="cmentarz_office_hours"
                          rows="2" class="large-text"
                          placeholder="np. Poniedziałek-piątek 7:00-15:00"><?php echo esc_textarea($office_hours); ?></textarea>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Meta box: Location
 */
function cmentarze_meta_box_location($post) {
    $lat = get_post_meta($post->ID, '_cmentarz_lat', true);
    $lon = get_post_meta($post->ID, '_cmentarz_lon', true);
    $address_pending = get_post_meta($post->ID, '_cmentarz_address_pending', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="cmentarz_lat">Szerokość geograficzna (lat)</label></th>
            <td>
                <input type="text" id="cmentarz_lat" name="cmentarz_lat"
                       value="<?php echo esc_attr($lat); ?>" class="regular-text"
                       placeholder="np. 50.5893252">
                <p class="description">Współrzędne GPS dla mapy. Możesz skopiować z OpenStreetMap lub Google Maps.</p>
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_lon">Długość geograficzna (lon)</label></th>
            <td>
                <input type="text" id="cmentarz_lon" name="cmentarz_lon"
                       value="<?php echo esc_attr($lon); ?>" class="regular-text"
                       placeholder="np. 19.325466">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_address_pending">Adres do potwierdzenia</label></th>
            <td>
                <label>
                    <input type="checkbox" id="cmentarz_address_pending" name="cmentarz_address_pending"
                           value="1" <?php checked($address_pending, '1'); ?>>
                    Zaznacz, jeśli adres uliczny wymaga jeszcze weryfikacji
                </label>
            </td>
        </tr>
    </table>

    <?php if ($lat && $lon): ?>
    <div id="cmentarz-map-preview" style="height: 300px; margin-top: 15px; border: 1px solid #ddd; border-radius: 4px;"></div>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof L !== 'undefined') {
            var map = L.map('cmentarz-map-preview').setView([<?php echo esc_js($lat); ?>, <?php echo esc_js($lon); ?>], 15);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
            }).addTo(map);
            L.marker([<?php echo esc_js($lat); ?>, <?php echo esc_js($lon); ?>]).addTo(map);
        }
    });
    </script>
    <?php endif;
}

/**
 * Meta box: Administrator
 */
function cmentarze_meta_box_administrator($post) {
    $admin_name = get_post_meta($post->ID, '_cmentarz_admin_name', true);
    $admin_role = get_post_meta($post->ID, '_cmentarz_admin_role', true);
    $admin_address = get_post_meta($post->ID, '_cmentarz_admin_address', true);
    $admin_phone = get_post_meta($post->ID, '_cmentarz_admin_phone', true);
    $admin_website = get_post_meta($post->ID, '_cmentarz_admin_website', true);
    $admin_note = get_post_meta($post->ID, '_cmentarz_admin_note', true);
    ?>
    <p class="description">Dane administratora, opiekuna lub grabarza - jeśli inny niż parafia.</p>
    <table class="form-table">
        <tr>
            <th><label for="cmentarz_admin_name">Nazwa / Imię i nazwisko</label></th>
            <td>
                <input type="text" id="cmentarz_admin_name" name="cmentarz_admin_name"
                       value="<?php echo esc_attr($admin_name); ?>" class="large-text"
                       placeholder="np. SANIKO BIS Sp. z o.o. lub Jan Kowalski">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_admin_role">Rola / Funkcja</label></th>
            <td>
                <input type="text" id="cmentarz_admin_role" name="cmentarz_admin_role"
                       value="<?php echo esc_attr($admin_role); ?>" class="regular-text"
                       placeholder="np. Administrator cmentarza, Grabarz, Opiekun">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_admin_address">Adres</label></th>
            <td>
                <input type="text" id="cmentarz_admin_address" name="cmentarz_admin_address"
                       value="<?php echo esc_attr($admin_address); ?>" class="large-text"
                       placeholder="np. ul. Prusa 70, 42-300 Myszków">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_admin_phone">Telefon</label></th>
            <td>
                <input type="text" id="cmentarz_admin_phone" name="cmentarz_admin_phone"
                       value="<?php echo esc_attr($admin_phone); ?>" class="regular-text"
                       placeholder="np. 600 065 202">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_admin_website">Strona WWW</label></th>
            <td>
                <input type="url" id="cmentarz_admin_website" name="cmentarz_admin_website"
                       value="<?php echo esc_url($admin_website); ?>" class="large-text">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_admin_note">Uwagi</label></th>
            <td>
                <textarea id="cmentarz_admin_note" name="cmentarz_admin_note"
                          rows="2" class="large-text"><?php echo esc_textarea($admin_note); ?></textarea>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Meta box: Sources
 */
function cmentarze_meta_box_sources($post) {
    $last_updated = get_post_meta($post->ID, '_cmentarz_last_updated', true);
    $sources = get_post_meta($post->ID, '_cmentarz_sources', true);
    if (!is_array($sources)) {
        $sources = array();
    }
    ?>
    <table class="form-table">
        <tr>
            <th><label for="cmentarz_last_updated">Data ostatniej aktualizacji</label></th>
            <td>
                <input type="text" id="cmentarz_last_updated" name="cmentarz_last_updated"
                       value="<?php echo esc_attr($last_updated); ?>" class="regular-text"
                       placeholder="np. 27 września 2026">
            </td>
        </tr>
    </table>

    <h4>Źródła informacji</h4>
    <p class="description">Dodaj źródła, z których pochodzą informacje o cmentarzu.</p>

    <div id="cmentarz-sources-list">
        <?php
        $index = 0;
        foreach ($sources as $source) {
            cmentarze_render_source_row($index, $source);
            $index++;
        }
        ?>
    </div>

    <p>
        <button type="button" class="button" id="add-source-row">+ Dodaj źródło</button>
    </p>

    <script>
    (function() {
        var index = <?php echo $index; ?>;
        document.getElementById('add-source-row').addEventListener('click', function() {
            var html = '<div class="source-row" style="background:#f9f9f9;padding:15px;margin:10px 0;border:1px solid #ddd;">' +
                '<p><label>Nazwa źródła<br><input type="text" name="cmentarz_sources[' + index + '][label]" class="large-text"></label></p>' +
                '<p><label>URL<br><input type="url" name="cmentarz_sources[' + index + '][url]" class="large-text"></label></p>' +
                '<p><label>Zakres informacji<br><input type="text" name="cmentarz_sources[' + index + '][scope]" class="large-text"></label></p>' +
                '<p><button type="button" class="button remove-source">Usuń źródło</button></p>' +
                '</div>';
            document.getElementById('cmentarz-sources-list').insertAdjacentHTML('beforeend', html);
            index++;
        });

        document.getElementById('cmentarz-sources-list').addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-source')) {
                e.target.closest('.source-row').remove();
            }
        });
    })();
    </script>
    <?php
}

/**
 * Render single source row
 */
function cmentarze_render_source_row($index, $source) {
    ?>
    <div class="source-row" style="background:#f9f9f9;padding:15px;margin:10px 0;border:1px solid #ddd;">
        <p>
            <label>Nazwa źródła<br>
            <input type="text" name="cmentarz_sources[<?php echo $index; ?>][label]"
                   value="<?php echo esc_attr($source['label'] ?? ''); ?>" class="large-text">
            </label>
        </p>
        <p>
            <label>URL<br>
            <input type="url" name="cmentarz_sources[<?php echo $index; ?>][url]"
                   value="<?php echo esc_url($source['url'] ?? ''); ?>" class="large-text">
            </label>
        </p>
        <p>
            <label>Zakres informacji<br>
            <input type="text" name="cmentarz_sources[<?php echo $index; ?>][scope]"
                   value="<?php echo esc_attr($source['scope'] ?? ''); ?>" class="large-text">
            </label>
        </p>
        <p><button type="button" class="button remove-source">Usuń źródło</button></p>
    </div>
    <?php
}

/**
 * Meta box: Regulations
 */
function cmentarze_meta_box_regulations($post) {
    $regulations_url = get_post_meta($post->ID, '_cmentarz_regulations_url', true);
    $regulations_summary = get_post_meta($post->ID, '_cmentarz_regulations_summary', true);
    $regulations_note = get_post_meta($post->ID, '_cmentarz_regulations_note', true);
    $regulations_content = get_post_meta($post->ID, '_cmentarz_regulations_content', true);
    $fees_note = get_post_meta($post->ID, '_cmentarz_fees_note', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="cmentarz_regulations_url">Link do regulaminu</label></th>
            <td>
                <input type="url" id="cmentarz_regulations_url" name="cmentarz_regulations_url"
                       value="<?php echo esc_url($regulations_url); ?>" class="large-text">
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_regulations_summary">Podsumowanie regulaminu</label></th>
            <td>
                <textarea id="cmentarz_regulations_summary" name="cmentarz_regulations_summary"
                          rows="3" class="large-text"><?php echo esc_textarea($regulations_summary); ?></textarea>
                <p class="description">Krótkie streszczenie najważniejszych zasad.</p>
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_regulations_note">Uwagi do regulaminu</label></th>
            <td>
                <textarea id="cmentarz_regulations_note" name="cmentarz_regulations_note"
                          rows="2" class="large-text"><?php echo esc_textarea($regulations_note); ?></textarea>
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_fees_note">Uwagi o opłatach</label></th>
            <td>
                <textarea id="cmentarz_fees_note" name="cmentarz_fees_note"
                          rows="2" class="large-text"><?php echo esc_textarea($fees_note); ?></textarea>
            </td>
        </tr>
        <tr>
            <th><label for="cmentarz_regulations_content">Pełna treść regulaminu (WYSIWYG)</label></th>
            <td>
                <?php
                wp_editor($regulations_content, 'cmentarz_regulations_content', array(
                    'textarea_name' => 'cmentarz_regulations_content',
                    'textarea_rows' => 10,
                    'media_buttons' => false,
                ));
                ?>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Meta box: History
 */
function cmentarze_meta_box_history($post) {
    $history = get_post_meta($post->ID, '_cmentarz_history', true);
    if (!is_array($history)) {
        $history = array();
    }
    ?>
    <p class="description">Dodaj sekcje historyczne dla cmentarza.</p>

    <div id="cmentarz-history-list">
        <?php
        $index = 0;
        foreach ($history as $item) {
            cmentarze_render_history_row($index, $item);
            $index++;
        }
        ?>
    </div>

    <p>
        <button type="button" class="button" id="add-history-row">+ Dodaj sekcję historii</button>
    </p>

    <script>
    (function() {
        var hindex = <?php echo $index; ?>;
        document.getElementById('add-history-row').addEventListener('click', function() {
            var html = '<div class="history-row" style="background:#f9f9f9;padding:15px;margin:10px 0;border:1px solid #ddd;">' +
                '<p><label>Tytuł sekcji<br><input type="text" name="cmentarz_history[' + hindex + '][title]" class="large-text"></label></p>' +
                '<p><label>Treść<br><textarea name="cmentarz_history[' + hindex + '][text]" rows="4" class="large-text"></textarea></label></p>' +
                '<p><label>Źródło<br><input type="text" name="cmentarz_history[' + hindex + '][source]" class="large-text"></label></p>' +
                '<p><button type="button" class="button remove-history">Usuń sekcję</button></p>' +
                '</div>';
            document.getElementById('cmentarz-history-list').insertAdjacentHTML('beforeend', html);
            hindex++;
        });

        document.getElementById('cmentarz-history-list').addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-history')) {
                e.target.closest('.history-row').remove();
            }
        });
    })();
    </script>
    <?php
}

/**
 * Render single history row
 */
function cmentarze_render_history_row($index, $item) {
    ?>
    <div class="history-row" style="background:#f9f9f9;padding:15px;margin:10px 0;border:1px solid #ddd;">
        <p>
            <label>Tytuł sekcji<br>
            <input type="text" name="cmentarz_history[<?php echo $index; ?>][title]"
                   value="<?php echo esc_attr($item['title'] ?? ''); ?>" class="large-text">
            </label>
        </p>
        <p>
            <label>Treść<br>
            <textarea name="cmentarz_history[<?php echo $index; ?>][text]"
                      rows="4" class="large-text"><?php echo esc_textarea($item['text'] ?? ''); ?></textarea>
            </label>
        </p>
        <p>
            <label>Źródło<br>
            <input type="text" name="cmentarz_history[<?php echo $index; ?>][source]"
                   value="<?php echo esc_attr($item['source'] ?? ''); ?>" class="large-text">
            </label>
        </p>
        <p><button type="button" class="button remove-history">Usuń sekcję</button></p>
    </div>
    <?php
}

/**
 * Save meta box data
 */
function cmentarze_save_meta($post_id) {
    // Security checks
    if (!isset($_POST['cmentarze_meta_nonce'])) return;
    if (!wp_verify_nonce($_POST['cmentarze_meta_nonce'], 'cmentarze_save_meta')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    // Text fields
    $text_fields = array(
        'address', 'city', 'parish', 'opening_hours', 'grave_search_url',
        'phone', 'additional_phones', 'phone_note', 'email', 'website',
        'office_address', 'office_hours',
        'lat', 'lon',
        'admin_name', 'admin_role', 'admin_address', 'admin_phone', 'admin_website', 'admin_note',
        'last_updated',
        'regulations_url', 'regulations_summary', 'regulations_note', 'fees_note',
    );

    foreach ($text_fields as $field) {
        $key = 'cmentarz_' . $field;
        if (isset($_POST[$key])) {
            $value = sanitize_text_field($_POST[$key]);
            update_post_meta($post_id, '_cmentarz_' . $field, $value);
        }
    }

    // Textarea fields (allow line breaks)
    $textarea_fields = array('additional_phones', 'phone_note', 'office_hours', 'admin_note', 'regulations_summary', 'regulations_note', 'fees_note');
    foreach ($textarea_fields as $field) {
        $key = 'cmentarz_' . $field;
        if (isset($_POST[$key])) {
            $value = sanitize_textarea_field($_POST[$key]);
            update_post_meta($post_id, '_cmentarz_' . $field, $value);
        }
    }

    // Checkbox
    $address_pending = isset($_POST['cmentarz_address_pending']) ? '1' : '';
    update_post_meta($post_id, '_cmentarz_address_pending', $address_pending);

    // WYSIWYG
    if (isset($_POST['cmentarz_regulations_content'])) {
        $value = wp_kses_post($_POST['cmentarz_regulations_content']);
        update_post_meta($post_id, '_cmentarz_regulations_content', $value);
    }

    // Sources (repeater)
    if (isset($_POST['cmentarz_sources']) && is_array($_POST['cmentarz_sources'])) {
        $sources = array();
        foreach ($_POST['cmentarz_sources'] as $source) {
            if (!empty($source['label']) || !empty($source['url'])) {
                $sources[] = array(
                    'label' => sanitize_text_field($source['label'] ?? ''),
                    'url'   => esc_url_raw($source['url'] ?? ''),
                    'scope' => sanitize_text_field($source['scope'] ?? ''),
                );
            }
        }
        update_post_meta($post_id, '_cmentarz_sources', $sources);
    } else {
        delete_post_meta($post_id, '_cmentarz_sources');
    }

    // History (repeater)
    if (isset($_POST['cmentarz_history']) && is_array($_POST['cmentarz_history'])) {
        $history = array();
        foreach ($_POST['cmentarz_history'] as $item) {
            if (!empty($item['title']) || !empty($item['text'])) {
                $history[] = array(
                    'title'  => sanitize_text_field($item['title'] ?? ''),
                    'text'   => sanitize_textarea_field($item['text'] ?? ''),
                    'source' => sanitize_text_field($item['source'] ?? ''),
                );
            }
        }
        update_post_meta($post_id, '_cmentarz_history', $history);
    } else {
        delete_post_meta($post_id, '_cmentarz_history');
    }
}
add_action('save_post_cmentarz', 'cmentarze_save_meta');

/**
 * Add Leaflet scripts to admin for map preview
 */
function cmentarze_admin_scripts($hook) {
    global $post_type;

    if ($post_type !== 'cmentarz') return;
    if (!in_array($hook, array('post.php', 'post-new.php'))) return;

    wp_enqueue_style('leaflet-admin', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', array(), '1.9.4');
    wp_enqueue_script('leaflet-admin', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', array(), '1.9.4', true);
}
add_action('admin_enqueue_scripts', 'cmentarze_admin_scripts');
