<?php
/**
 * Cemetery Data Import Script
 *
 * This script imports cemetery data from the original Next.js data file.
 * Run this ONCE after WordPress installation via WP-CLI or admin.
 *
 * Usage via WP-CLI:
 *   wp eval-file wp-content/themes/cmentarze-myszkow/inc/import-cemeteries.php
 *
 * Or add to functions.php temporarily:
 *   require_once get_template_directory() . '/inc/import-cemeteries.php';
 *   cmentarze_run_import();
 *
 * @package CmentarzeMyszkow
 */

if (!defined('ABSPATH')) {
    // Allow running via WP-CLI
    if (php_sapi_name() !== 'cli') {
        exit('Direct access not allowed');
    }
}

/**
 * Cemetery data array (converted from TypeScript)
 */
function cmentarze_get_import_data() {
    return array(
        array(
            'id' => 'komunalny',
            'slug' => 'cmentarz-komunalny',
            'name' => 'Cmentarz Komunalny',
            'city' => 'Myszków',
            'gmina' => 'Myszków',
            'address' => 'ul. Jana Pawła II 100',
            'type' => 'Komunalny',
            'parish' => 'SANIKO BIS Sp. z o.o.',
            'office_address' => 'ul. Prusa 70',
            'phone' => '600 065 202',
            'additional_phones' => '608 035 527',
            'phone_note' => '600 065 202 - biuro obsługi klienta; 608 035 527 - telefon całodobowy.',
            'website' => 'https://www.sanikobis.pl/',
            'email' => 'bok@sanikobis.pl',
            'office_hours' => 'Biuro obsługi klienta: poniedziałek-piątek 7:00-15:00, z wyjątkiem dni ustawowo wolnych.',
            'grave_search_url' => 'https://myszkow.grobonet.com/',
            'lat' => '50.5893252',
            'lon' => '19.325466',
            'admin_name' => 'SANIKO BIS Sp. z o.o.',
            'admin_role' => 'Administrator cmentarza',
            'admin_address' => 'ul. Prusa 70, 42-300 Myszków',
            'admin_phone' => '600 065 202',
            'admin_website' => 'https://www.sanikobis.pl/kategorie/cmentarz-komunalny',
            'admin_note' => 'SANIKO BIS podaje osobny telefon całodobowy: 608 035 527.',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'SANIKO BIS - kontakt', 'url' => 'https://www.sanikobis.pl/kategorie/kontakt', 'scope' => 'Biuro obsługi klienta, e-mail, godziny pracy i telefon całodobowy'),
                array('label' => 'SANIKO BIS - cmentarz', 'url' => 'https://www.sanikobis.pl/kategorie/cmentarz-komunalny', 'scope' => 'Zarządzanie cmentarzem i wyszukiwarka Grobonet'),
            ),
        ),
        array(
            'id' => 'mrzyglod',
            'slug' => 'cmentarz-mrzyglod',
            'name' => 'Cmentarz Mrzygłód',
            'city' => 'Myszków',
            'gmina' => 'Myszków',
            'address' => 'ul. Cmentarna 33',
            'type' => 'Parafialny',
            'parish' => 'Parafia NMP Różańcowej w Myszkowie-Mrzygłodzie',
            'office_address' => 'ul. Królowej Jadwigi 9',
            'phone' => '34 313 92 84',
            'additional_phones' => '608 450 004',
            'website' => 'https://sanktuariummrzyglod.pl/',
            'grave_search_url' => 'https://mogily.pl/mrzyglod',
            'regulations_url' => 'https://mogily.pl/mrzyglod/informacje',
            'regulations_summary' => 'Zasady korzystania z cmentarza i sprawy dotyczące grobów opisano w sekcji Informacje serwisu Mogiły.pl.',
            'lat' => '50.5383846',
            'lon' => '19.3635006',
            'admin_name' => 'Ksiądz proboszcz / Parafia NMP Różańcowej',
            'admin_role' => 'Administrator cmentarza',
            'admin_address' => 'ul. Królowej Jadwigi 9, 42-300 Myszków',
            'admin_phone' => '34 313 92 84',
            'admin_website' => 'https://mogily.pl/mrzyglod/kontakt',
            'admin_note' => 'Mogiły.pl wskazuje parafię jako zarządcę, a księdza proboszcza jako administratora cmentarza.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Sanktuarium Mrzygłód', 'url' => 'https://sanktuariummrzyglod.pl/?page_id=494', 'scope' => 'Nazwa parafii i sprawy cmentarne'),
                array('label' => 'Mogiły.pl', 'url' => 'https://mogily.pl/mrzyglod', 'scope' => 'Wyszukiwarka grobów'),
            ),
        ),
        array(
            'id' => 'sw-stanislawa',
            'slug' => 'cmentarz-sw-stanislawa',
            'name' => 'Cmentarz św. Stanisława',
            'city' => 'Myszków',
            'gmina' => 'Myszków',
            'address' => 'ul. Sikorskiego / ul. Hubala',
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Stanisława Biskupa i Męczennika',
            'office_address' => 'ul. Stefana Wyszyńskiego 7',
            'phone' => '34 313 10 21',
            'additional_phones' => '507 090 933',
            'website' => 'https://www.facebook.com/sw.StanislawBMMyszkow',
            'lat' => '50.5802939',
            'lon' => '19.3392886',
            'admin_name' => 'Sławek Dębiński',
            'admin_role' => 'Opiekun cmentarza',
            'admin_phone' => '507 136 042',
            'admin_note' => 'Dodane przez administratora serwisu - 26 września 2026.',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'Cmentarze24', 'url' => 'https://cmentarze24.pl/index.php/cmentarze/slaskie/item/1187-cmentarz-sw-stanislawa-biskupa-i-meczennika-myszkow', 'scope' => 'Położenie cmentarza i zarządca'),
            ),
        ),
        array(
            'id' => 'bedusz',
            'slug' => 'cmentarz-bedusz',
            'name' => 'Cmentarz Będusz',
            'city' => 'Myszków',
            'gmina' => 'Myszków',
            'address' => 'ul. Stefana Czarnieckiego - okolice nr 120',
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Anny w Myszkowie-Będuszu',
            'office_address' => 'ul. Wyzwolenia 56',
            'phone' => '34 313 80 70',
            'email' => 'parafia.anna.myszkow@gmail.com',
            'website' => 'https://www.parafiabedusz.info/',
            'lat' => '50.5438858',
            'lon' => '19.3053825',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'Parafia św. Anny', 'url' => 'https://www.parafiabedusz.info/', 'scope' => 'Nazwa i kontakt do parafii'),
            ),
        ),
        array(
            'id' => 'nowa-wies',
            'slug' => 'cmentarz-nowa-wies',
            'name' => 'Cmentarz Nowa Wieś',
            'city' => 'Myszków',
            'gmina' => 'Myszków',
            'address' => 'ul. Koziegłowska',
            'type' => 'Parafialny',
            'parish' => 'Parafia Trójcy Przenajświętszej w Myszkowie',
            'office_address' => 'ul. Nowowiejska 32',
            'phone' => '666 685 788',
            'additional_phones' => '602 103 730',
            'email' => 'admin@parafianowawies.pl',
            'website' => 'https://www.parafianowawies.pl/',
            'lat' => '50.6036202',
            'lon' => '19.2939155',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'Parafia Trójcy Przenajświętszej', 'url' => 'https://www.parafianowawies.pl/o-parafii/', 'scope' => 'Adres cmentarza, nazwa parafii i dane kontaktowe'),
            ),
        ),
        array(
            'id' => 'swiatowit',
            'slug' => 'cmentarz-swiatowit',
            'name' => 'Cmentarz Światowit',
            'city' => 'Myszków',
            'gmina' => 'Myszków',
            'address' => 'ul. Graniczna',
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Andrzeja Boboli w Myszkowie',
            'office_address' => 'ul. Papieska 1',
            'phone' => '505 247 324',
            'additional_phones' => '34 313 03 09',
            'website' => 'https://swandrzejbobola.pl/',
            'office_hours' => 'Poniedziałek, środa, piątek: 16:00-16:30. W pilnych sprawach kontakt telefoniczny.',
            'regulations_url' => 'https://swandrzejbobola.pl/cmentarz/',
            'regulations_summary' => 'Parafia prosi o zachowanie ciszy i porządku. Prace budowlane wymagają zgody administracji cmentarza.',
            'lat' => '50.5787603',
            'lon' => '19.3585494',
            'admin_name' => 'Andrzej Krakowiak',
            'admin_role' => 'Grabarz',
            'admin_phone' => '696 445 211',
            'admin_note' => 'Dodane przez administratora serwisu - 27 września 2026. Właścicielem i administratorem cmentarza jest Parafia św. Andrzeja Boboli.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Parafia - cmentarz', 'url' => 'https://swandrzejbobola.pl/cmentarz/', 'scope' => 'Właściciel, administrator i zasady prac'),
            ),
        ),
        array(
            'id' => 'mijaczow',
            'slug' => 'cmentarz-mijaczow',
            'name' => 'Cmentarz Mijaczów',
            'city' => 'Myszków',
            'gmina' => 'Myszków',
            'address' => 'ul. Wyzwolenia',
            'type' => 'Parafialny',
            'parish' => 'Parafia Narodzenia Najświętszej Maryi Panny w Myszkowie-Mijaczowie',
            'office_address' => 'ul. Pułaskiego 5',
            'phone' => '508 585 873',
            'additional_phones' => "34 313 15 15\n533 955 389",
            'phone_note' => 'Numery z wykazu parafii Lilia: 34 313 15 15 i 533 955 389. eCmentarze podaje 508 585 873.',
            'website' => 'https://parafiamijaczow.pl/',
            'grave_search_url' => 'https://www.ecmentarze.pl/cmentarz/myszkow',
            'lat' => '50.559663',
            'lon' => '19.321451',
            'admin_name' => 'Dom Pogrzebowy Lilia',
            'admin_address' => 'ul. Krasickiego 95F, 42-300 Myszków',
            'admin_phone' => '518 518 208',
            'admin_website' => 'https://liliamyszkow.com/cmentarz-mijaczow/',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'eCmentarze - kontakt', 'url' => 'https://www.ecmentarze.pl/cmentarz/myszkow/kontakt', 'scope' => 'Zarządca, administrator, adresy biur i telefony'),
                array('label' => 'Lilia - cmentarz Mijaczów', 'url' => 'https://liliamyszkow.com/cmentarz-mijaczow/', 'scope' => 'Adres cmentarza i obsługa administracyjna'),
            ),
        ),
        array(
            'id' => 'ciszowka',
            'slug' => 'cmentarz-ciszowka',
            'name' => 'Cmentarz Ciszówka',
            'city' => 'Myszków',
            'gmina' => 'Myszków',
            'address' => 'ul. Pohulańska 33',
            'type' => 'Parafialny',
            'parish' => 'Parafia Męczeństwa św. Jana Chrzciciela w Myszkowie',
            'office_address' => 'ul. Piękna 12',
            'phone' => '34 313 00 89',
            'website' => 'http://www.ciszowka.webd.pl/',
            'office_hours' => '16:00 - 16:30. W niedziele i święta kancelaria nieczynna.',
            'opening_hours' => 'Codziennie od 7:00 do zmroku',
            'lat' => '50.5647505',
            'lon' => '19.3348839',
            'fees_note' => 'Przekazany regulamin przewiduje opłaty za pochowanie (pokładne) i wybudowanie pomnika. Nie podaje ich wysokości.',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'Lilia - wykaz parafii', 'url' => 'https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/', 'scope' => 'Nazwa parafii, adres kancelarii i telefon'),
            ),
        ),
        // Poraj
        array(
            'id' => 'choron',
            'slug' => 'cmentarz-choron',
            'name' => 'Cmentarz parafialny w Choroniu',
            'city' => 'Choroń',
            'gmina' => 'Poraj',
            'address' => 'Adres uliczny do potwierdzenia',
            'address_pending' => true,
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Jana Chrzciciela w Choroniu',
            'office_address' => 'ul. Częstochowska 3, 42-360 Choroń',
            'phone' => '34 314 56 93',
            'grave_search_url' => 'https://www.ecmentarze.pl/cmentarz/choron',
            'regulations_url' => 'https://www.ecmentarze.pl/cmentarz/choron/regulamin',
            'regulations_summary' => 'Zarząd sprawuje proboszcz w imieniu parafii. Prace przy nagrobkach wymagają wcześniejszych ustaleń.',
            'lat' => '50.695353',
            'lon' => '19.25366',
            'admin_name' => 'Proboszcz Parafii św. Jana Chrzciciela',
            'admin_role' => 'Zarządca cmentarza',
            'admin_address' => 'ul. Częstochowska 3, 42-360 Choroń',
            'admin_phone' => '34 314 56 93',
            'admin_website' => 'https://www.ecmentarze.pl/cmentarz/choron/regulamin',
            'admin_note' => 'Regulamin wskazuje proboszcza jako osobę wykonującą czynności administracyjne w imieniu parafii.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'eCmentarze - karta cmentarza', 'url' => 'https://www.ecmentarze.pl/cmentarz/choron', 'scope' => 'Nazwa cmentarza, parafia, wyszukiwarka i lokalizacja'),
            ),
        ),
        array(
            'id' => 'poraj',
            'slug' => 'cmentarz-poraj',
            'name' => 'Cmentarz parafialny w Poraju',
            'city' => 'Poraj',
            'gmina' => 'Poraj',
            'address' => 'Adres uliczny do potwierdzenia',
            'address_pending' => true,
            'type' => 'Parafialny',
            'parish' => 'Parafia Najświętszego Serca Pana Jezusa w Poraju',
            'office_address' => 'ul. Kościelna 7, 42-360 Poraj',
            'phone' => '34 314 50 13',
            'grave_search_url' => 'https://poraj.grobonet.com/grobonet/start.php',
            'lat' => '50.6720037',
            'lon' => '19.2115709',
            'fees_note' => 'Serwis Grobonet ma zakładkę cennika, ale podczas sprawdzania widniała w niej informacja „Dział w budowie".',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'Grobonet - Poraj', 'url' => 'https://poraj.grobonet.com/kontakt.php', 'scope' => 'Parafia, adres biura, telefon i wyszukiwarka grobów'),
            ),
        ),
        array(
            'id' => 'jastrzab',
            'slug' => 'cmentarz-jastrzab',
            'name' => 'Cmentarz parafialny w Jastrzębiu',
            'city' => 'Jastrząb',
            'gmina' => 'Poraj',
            'address' => 'Adres uliczny do potwierdzenia',
            'address_pending' => true,
            'type' => 'Parafialny',
            'parish' => 'Parafia Najświętszej Maryi Panny Matki Miłosierdzia w Jastrzębiu',
            'office_address' => 'ul. 19 Stycznia 89, 42-360 Jastrząb',
            'phone' => '34 314 51 68',
            'additional_phones' => '798 472 662',
            'email' => 'parafiajastrzab@op.pl',
            'website' => 'https://parafiajastrzab.pl/',
            'regulations_url' => 'https://parafiajastrzab.pl/regulamin-cmentarza',
            'regulations_summary' => 'Regulamin określa zasady zarządzania, użytkowania grobów i prac na cmentarzu.',
            'fees_note' => 'Opłaty i zasady ich przedłużania opisano w regulaminie. Aktualna wysokość opłat jest dostępna w kancelarii parafialnej.',
            'lat' => '50.6696805',
            'lon' => '19.1924148',
            'admin_name' => 'Epitafium - Damian Rajczyk',
            'admin_role' => 'Usługi grabarskie / opieka',
            'admin_address' => 'ul. Skargi 9, 42-360 Poraj',
            'admin_phone' => '506 148 634',
            'admin_website' => 'https://www.epitafium.net/',
            'admin_note' => 'Firma publikuje informację, że opiekuje się cmentarzem w Jastrzębiu i wykonuje tam usługi grabarskie.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Parafia Jastrząb - historia', 'url' => 'https://parafiajastrzab.pl/historia-parafii', 'scope' => 'Powstanie i poświęcenie cmentarza'),
                array('label' => 'Parafia Jastrząb - regulamin', 'url' => 'https://parafiajastrzab.pl/regulamin-cmentarza', 'scope' => 'Zarząd proboszcza, zasady cmentarne'),
            ),
        ),
        array(
            'id' => 'zarki-letnisko',
            'slug' => 'cmentarz-zarki-letnisko',
            'name' => 'Cmentarz parafialny w Żarkach-Letnisku',
            'city' => 'Żarki-Letnisko',
            'gmina' => 'Poraj',
            'address' => 'ul. Spokojna',
            'type' => 'Parafialny',
            'parish' => 'Parafia Matki Bożej Nieustającej Pomocy w Żarkach-Letnisku',
            'office_address' => 'ul. Grunwaldzka 14, 42-311 Żarki-Letnisko',
            'phone' => '662 675 417',
            'email' => 'maklek@tlen.pl',
            'website' => 'https://www.parafiazarkiletnisko.pl/',
            'office_hours' => 'Poniedziałek-piątek: 16:30-17:30 (1 maja - 30 sierpnia), 15:30-16:30 (1 września - 30 kwietnia).',
            'opening_hours' => 'Codziennie 7:00-20:00 (1 kwietnia - 30 września); w pozostałych miesiącach 8:00 do zmroku.',
            'grave_search_url' => 'https://zarki.grobonet.com/',
            'regulations_url' => 'https://www.parafiazarkiletnisko.pl/cmentarz/',
            'regulations_summary' => 'Regulamin parafialny określa zasady korzystania z cmentarza i wykonywania prac. Godziny otwarcia są sezonowe.',
            'lat' => '50.6279202',
            'lon' => '19.2793261',
            'admin_name' => 'Damian Rajczyk',
            'admin_role' => 'Grabarz',
            'admin_phone' => '506 148 634',
            'admin_website' => 'https://www.parafiazarkiletnisko.pl/cmentarz/',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Parafia Żarki-Letnisko - cmentarz i regulamin', 'url' => 'https://www.parafiazarkiletnisko.pl/cmentarz/', 'scope' => 'Adres cmentarza, grabarz, godziny otwarcia, regulamin'),
            ),
        ),
        // Koziegłowy
        array(
            'id' => 'siedlec-duzy',
            'slug' => 'cmentarz-siedlec-duzy',
            'name' => 'Cmentarz parafialny w Siedlcu Dużym',
            'city' => 'Siedlec Duży',
            'gmina' => 'Koziegłowy',
            'address' => 'Adres uliczny do potwierdzenia',
            'address_pending' => true,
            'type' => 'Parafialny',
            'parish' => 'Parafia Podwyższenia Krzyża Świętego w Siedlcu Dużym',
            'office_address' => 'ul. Jana Pawła II 62, 42-350 Siedlec Duży',
            'phone' => '34 314 11 64',
            'grave_search_url' => 'https://www.ecmentarze.pl/cmentarz/siedlec-duzy',
            'lat' => '50.632035',
            'lon' => '19.13199',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'eCmentarze - karta cmentarza', 'url' => 'https://www.ecmentarze.pl/cmentarz/siedlec-duzy', 'scope' => 'Nazwa cmentarza, parafia, wyszukiwarka i lokalizacja'),
            ),
        ),
        array(
            'id' => 'gniazdow',
            'slug' => 'cmentarz-gniazdow',
            'name' => 'Cmentarz rzymskokatolicki w Gniazdowie',
            'city' => 'Gniazdów',
            'gmina' => 'Koziegłowy',
            'address' => 'Adres uliczny do potwierdzenia',
            'address_pending' => true,
            'type' => 'Parafialny',
            'parish' => 'Parafia Najświętszego Serca Pana Jezusa w Gniazdowie',
            'office_address' => 'ul. Szkolna 58, 42-350 Gniazdów',
            'phone' => '513 135 661',
            'grave_search_url' => 'https://www.ecmentarze.pl/cmentarz/gniazdow',
            'lat' => '50.602291',
            'lon' => '19.109954',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'eCmentarze - karta cmentarza', 'url' => 'https://www.ecmentarze.pl/cmentarz/gniazdow', 'scope' => 'Nazwa cmentarza, parafia, wyszukiwarka i lokalizacja'),
            ),
        ),
        array(
            'id' => 'kozieglowki',
            'slug' => 'cmentarz-kozieglowki',
            'name' => 'Cmentarz parafialny w Koziegłówkach',
            'city' => 'Koziegłówki',
            'gmina' => 'Koziegłowy',
            'address' => 'Adres uliczny do potwierdzenia',
            'address_pending' => true,
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Antoniego z Padwy w Koziegłówkach',
            'office_address' => 'ul. Rynek 20, 42-350 Koziegłówki',
            'phone' => '34 314 13 06',
            'grave_search_url' => 'https://www.ecmentarze.pl/cmentarz/sw-antoni-kozieglowki',
            'lat' => '50.584314',
            'lon' => '19.187003',
            'admin_name' => 'Marcin Kurek - opiekun cmentarza',
            'admin_phone' => '600 652 659',
            'admin_website' => 'https://www.ecmentarze.pl/cmentarz/sw-antoni-kozieglowki/kontakt',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'eCmentarze - karta cmentarza', 'url' => 'https://www.ecmentarze.pl/cmentarz/sw-antoni-kozieglowki', 'scope' => 'Nazwa cmentarza, parafia, wyszukiwarka'),
            ),
        ),
        array(
            'id' => 'kozieglowy',
            'slug' => 'cmentarz-kozieglowy',
            'name' => 'Cmentarz parafialny w Koziegłowach',
            'city' => 'Koziegłowy',
            'gmina' => 'Koziegłowy',
            'address' => 'ul. Kościuszki',
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Marii Magdaleny w Koziegłowach',
            'office_address' => 'ul. Kościelna 4, 42-350 Koziegłowy',
            'phone' => '571 572 304',
            'email' => 'parafia.kozieglowy.kontakt@gmail.com',
            'website' => 'https://parafiakozieglowy.wixsite.com/home/cmentarz',
            'lat' => '50.5909957',
            'lon' => '19.1631589',
            'admin_name' => 'Epitafium - Damian Rajczyk',
            'admin_role' => 'Usługi grabarskie / opieka',
            'admin_address' => 'ul. Skargi 9, 42-360 Poraj',
            'admin_phone' => '506 148 634',
            'admin_website' => 'https://www.epitafium.net/',
            'admin_note' => 'Firma publikuje informację, że opiekuje się cmentarzem w Koziegłowach i wykonuje tam usługi grabarskie.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Parafia Koziegłowy - cmentarz', 'url' => 'https://parafiakozieglowy.wixsite.com/home/cmentarz', 'scope' => 'Aktualny kontakt do parafii i strona cmentarza'),
            ),
        ),
        array(
            'id' => 'lgota-mokrzesz',
            'slug' => 'cmentarz-lgota-mokrzesz',
            'name' => 'Cmentarz parafialny w Lgocie-Mokrzeszy',
            'city' => 'Lgota-Mokrzesz',
            'gmina' => 'Koziegłowy',
            'address' => 'Adres uliczny do potwierdzenia',
            'address_pending' => true,
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Jana Chrzciciela w Lgocie-Mokrzeszy',
            'office_address' => 'ul. Szkolna 1, 42-350 Lgota-Mokrzesz',
            'phone' => '508 220 891',
            'phone_note' => 'Telefon potwierdzony w eCmentarze. Adres kancelarii przekazany przez redakcję Lilia.',
            'grave_search_url' => 'https://www.ecmentarze.pl/cmentarz/lgota-mokrzesz',
            'lat' => '50.603966',
            'lon' => '19.232873',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'eCmentarze - Lgota-Mokrzesz', 'url' => 'https://www.ecmentarze.pl/cmentarz/lgota-mokrzesz', 'scope' => 'Nazwa cmentarza i parafii, telefon, wyszukiwarka grobów'),
            ),
        ),
        array(
            'id' => 'pinczyce',
            'slug' => 'cmentarz-pinczyce',
            'name' => 'Cmentarz parafialny w Pińczycach',
            'city' => 'Pińczyce',
            'gmina' => 'Koziegłowy',
            'address' => 'ul. Śląska 21 (według Targeo)',
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Michała Archanioła w Pińczycach',
            'office_address' => 'ul. Kościelna 4, 42-350 Pińczyce',
            'phone' => '34 314 35 34',
            'lat' => '50.5376833',
            'lon' => '19.2277054',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'Wykaz parafii - Pińczyce', 'url' => 'https://parafia.com.pl/pinczyce', 'scope' => 'Wezwanie parafii, adres kancelarii i telefon'),
            ),
        ),
        // Żarki
        array(
            'id' => 'przybynow',
            'slug' => 'cmentarz-przybynow',
            'name' => 'Cmentarz parafialny w Przybynowie',
            'city' => 'Przybynów',
            'gmina' => 'Żarki',
            'address' => 'ul. Żarecka (według Narodowego Instytutu Dziedzictwa)',
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Mikołaja w Przybynowie',
            'office_address' => 'ul. Częstochowska 2, 42-310 Przybynów',
            'phone' => '34 314 88 35',
            'additional_phones' => '608 321 884',
            'lat' => '50.6489418',
            'lon' => '19.318319',
            'admin_name' => 'Epitafium - Damian Rajczyk',
            'admin_role' => 'Usługi grabarskie / opieka',
            'admin_address' => 'ul. Skargi 9, 42-360 Poraj',
            'admin_phone' => '506 148 634',
            'admin_website' => 'https://www.epitafium.net/',
            'admin_note' => 'Firma publikuje informację, że opiekuje się cmentarzem w Przybynowie i wykonuje tam usługi grabarskie.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Narodowy Instytut Dziedzictwa - Zabytek.pl', 'url' => 'https://zabytek.pl/pl/obiekty/cmentarz-rzymskokatolick-694900', 'scope' => 'Cmentarz rzymskokatolicki w Przybynowie, ul. Żarecka'),
            ),
        ),
        array(
            'id' => 'zarki',
            'slug' => 'cmentarz-zarki',
            'name' => 'Cmentarz parafialny w Żarkach',
            'city' => 'Żarki',
            'gmina' => 'Żarki',
            'address' => 'ul. Ofiar Katynia',
            'type' => 'Parafialny',
            'parish' => 'Parafia Świętych Apostołów Szymona i Judy Tadeusza w Żarkach',
            'office_address' => 'ul. Leśniowska 1, 42-310 Żarki',
            'phone' => '34 314 80 16',
            'website' => 'https://www.parafiazarki.pl/',
            'lat' => '50.624815',
            'lon' => '19.3730043',
            'last_updated' => '26 września 2026',
            'sources' => array(
                array('label' => 'Turystyka Żarki - historia cmentarza', 'url' => 'https://www.turystykazarki.pl/artykuly/122', 'scope' => 'Adres, data założenia, powierzchnia, rozbudowa i miejsca pamięci'),
            ),
        ),
        array(
            'id' => 'kotowice',
            'slug' => 'cmentarz-kotowice',
            'name' => 'Cmentarz parafialny w Kotowicach',
            'city' => 'Kotowice',
            'gmina' => 'Żarki',
            'address' => 'Adres uliczny do potwierdzenia',
            'address_pending' => true,
            'type' => 'Parafialny',
            'parish' => 'Parafia Najświętszej Maryi Panny Różańcowej w Kotowicach',
            'office_address' => 'ul. Włodowska 12, 42-310 Kotowice',
            'phone' => '34 314 88 94',
            'lat' => '50.5866003',
            'lon' => '19.450981',
            'admin_name' => 'Andrzej Krakowiak',
            'admin_role' => 'Grabarz',
            'admin_phone' => '696 445 211',
            'admin_note' => 'Dodane przez administratora serwisu - 27 września 2026. Dotyczy cmentarza parafialnego, nie cmentarza wojennego w Kotowicach.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Miasto i Gmina Żarki - parafie', 'url' => 'https://www.umigzarki.pl/kategorie/parafie-i-koscioly', 'scope' => 'Nazwa parafii, adres kancelarii i telefon'),
            ),
        ),
        // Niegowa
        array(
            'id' => 'sokolniki',
            'slug' => 'cmentarz-sokolniki',
            'name' => 'Cmentarz parafialny w Sokolnikach',
            'city' => 'Sokolniki',
            'gmina' => 'Niegowa',
            'address' => 'Sokolniki 137, 42-320 Sokolniki',
            'type' => 'Parafialny',
            'parish' => 'Parafia Najświętszego Serca Jezusa w Sokolnikach',
            'office_address' => 'Sokolniki 131, 42-320 Niegowa',
            'phone' => '606 971 945',
            'additional_phones' => '34 315 46 61',
            'phone_note' => '606 971 945 - aktualny kontakt opublikowany przez diecezję; 34 315 46 61 - kontakt do administratora cmentarza podany w Mogiły.pl.',
            'website' => 'https://www.diecezja.kielce.pl/parafie/sokolniki-najswietszego-serca-jezusa',
            'grave_search_url' => 'https://mogily.pl/sokolniki',
            'lat' => '50.63667',
            'lon' => '19.59155',
            'admin_name' => 'Ksiądz proboszcz / Parafia Najświętszego Serca Jezusa',
            'admin_role' => 'Administrator cmentarza',
            'admin_address' => 'Sokolniki 131, 42-320 Niegowa',
            'admin_phone' => '34 315 46 61',
            'admin_website' => 'https://mogily.pl/sokolniki/kontakt',
            'admin_note' => 'Mogiły.pl wskazuje parafię jako zarządcę, a księdza proboszcza jako administratora cmentarza.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Mogiły.pl - Sokolniki', 'url' => 'https://mogily.pl/sokolniki', 'scope' => 'Internetowa wyszukiwarka osób pochowanych na cmentarzu parafialnym'),
            ),
        ),
        array(
            'id' => 'niegowa',
            'slug' => 'cmentarz-niegowa',
            'name' => 'Cmentarz parafialny w Niegowie',
            'city' => 'Niegowa',
            'gmina' => 'Niegowa',
            'address' => 'ul. Szkolna',
            'type' => 'Parafialny',
            'parish' => 'Parafia św. Mikołaja Biskupa i Męczennika w Niegowie',
            'office_address' => 'ul. Szkolna 31, 42-320 Niegowa',
            'phone' => '34 315 10 04',
            'email' => 'kontakt@parafianiegowa.pl',
            'website' => 'https://parafianiegowa.pl/',
            'office_hours' => 'Poniedziałek, wtorek, środa, piątek i sobota: 18:30-19:00 (wiosna-lato) lub 17:30-18:00 (jesień-zima); czwartek 9:00-9:30.',
            'lat' => '50.6441121',
            'lon' => '19.4706834',
            'admin_name' => 'Parafia św. Mikołaja w Niegowie',
            'admin_role' => 'Zarządca cmentarza',
            'admin_address' => 'ul. Szkolna 31, 42-320 Niegowa',
            'admin_phone' => '34 315 10 04',
            'admin_website' => 'https://parafianiegowa.pl/kontakt',
            'admin_note' => 'Publiczne źródła wskazują parafię jako zarządcę. Nie znaleźliśmy opublikowanego nazwiska ani numeru do grabarza.',
            'last_updated' => '27 września 2026',
            'sources' => array(
                array('label' => 'Parafia Niegowa - kontakt', 'url' => 'https://parafianiegowa.pl/kontakt', 'scope' => 'Aktualny adres, telefon, e-mail i godziny kancelarii'),
            ),
        ),
    );
}

/**
 * Run the import
 */
function cmentarze_run_import() {
    // Check if already imported
    if (get_option('cmentarze_data_imported') === 'yes') {
        echo "Data already imported. Skipping.\n";
        return;
    }

    $data = cmentarze_get_import_data();
    $imported = 0;

    foreach ($data as $cemetery) {
        // Check if already exists
        $existing = get_page_by_path($cemetery['slug'], OBJECT, 'cmentarz');
        if ($existing) {
            echo "Skipping (exists): {$cemetery['name']}\n";
            continue;
        }

        // Create post
        $post_data = array(
            'post_title'   => $cemetery['name'],
            'post_name'    => $cemetery['slug'],
            'post_type'    => 'cmentarz',
            'post_status'  => 'publish',
            'post_content' => isset($cemetery['description']) ? $cemetery['description'] : '',
        );

        $post_id = wp_insert_post($post_data);

        if (is_wp_error($post_id)) {
            echo "Error creating: {$cemetery['name']}\n";
            continue;
        }

        // Set gmina taxonomy
        if (!empty($cemetery['gmina'])) {
            wp_set_object_terms($post_id, $cemetery['gmina'], 'gmina');
        }

        // Set type taxonomy
        if (!empty($cemetery['type'])) {
            wp_set_object_terms($post_id, $cemetery['type'], 'typ_cmentarza');
        }

        // Save meta fields
        $meta_fields = array(
            'address', 'city', 'parish', 'opening_hours', 'grave_search_url',
            'phone', 'additional_phones', 'phone_note', 'email', 'website',
            'office_address', 'office_hours',
            'lat', 'lon',
            'admin_name', 'admin_role', 'admin_address', 'admin_phone', 'admin_website', 'admin_note',
            'last_updated',
            'regulations_url', 'regulations_summary', 'regulations_note', 'fees_note',
        );

        foreach ($meta_fields as $field) {
            if (!empty($cemetery[$field])) {
                update_post_meta($post_id, '_cmentarz_' . $field, $cemetery[$field]);
            }
        }

        // Address pending checkbox
        if (!empty($cemetery['address_pending'])) {
            update_post_meta($post_id, '_cmentarz_address_pending', '1');
        }

        // Sources array
        if (!empty($cemetery['sources'])) {
            update_post_meta($post_id, '_cmentarz_sources', $cemetery['sources']);
        }

        // History array
        if (!empty($cemetery['history'])) {
            update_post_meta($post_id, '_cmentarz_history', $cemetery['history']);
        }

        echo "Imported: {$cemetery['name']}\n";
        $imported++;
    }

    // Mark as imported
    update_option('cmentarze_data_imported', 'yes');

    echo "\n=== Import complete: {$imported} cemeteries imported ===\n";
}

// If running via WP-CLI
if (defined('WP_CLI') && WP_CLI) {
    cmentarze_run_import();
}
