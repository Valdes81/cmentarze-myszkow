# Cmentarze Myszków - Motyw WordPress

Motyw WordPress dla portalu Cmentarze Myszków - lokalnej bazy cmentarzy powiatu myszkowskiego.

## Instalacja

### Wymagania
- WordPress 6.0+
- PHP 8.0+
- MySQL 5.7+ lub MariaDB 10.3+

### Kroki instalacji

1. **Zainstaluj WordPress** (LocalWP, XAMPP lub hosting)

2. **Skopiuj folder motywu** do `wp-content/themes/`:
   ```bash
   cp -r wp-content/themes/cmentarze-myszkow /path/to/wordpress/wp-content/themes/
   ```

3. **Aktywuj motyw** w panelu WordPress:
   - Wygląd → Motywy → Cmentarze Myszków → Aktywuj

4. **Zainstaluj Leaflet** (dla mapy interaktywnej):
   - Pobierz Leaflet z https://leafletjs.com/download.html
   - Skopiuj `leaflet.js` i `leaflet.css` do `assets/js/` i `assets/css/`

5. **Importuj dane cmentarzy** (opcjonalnie):
   ```bash
   cd /path/to/wordpress
   wp eval-file wp-content/themes/cmentarze-myszkow/inc/import-cemeteries.php
   ```

   Lub w pliku `functions.php` dodaj tymczasowo:
   ```php
   require_once get_template_directory() . '/inc/import-cemeteries.php';
   cmentarze_run_import();
   ```

6. **Utwórz strony prawne**:
   - Strony → Dodaj nową → "Regulamin" (slug: `regulamin`, szablon: "Regulamin serwisu")
   - Strony → Dodaj nową → "Polityka prywatności" (slug: `polityka-prywatnosci`, szablon: "Polityka prywatności")

7. **Ustaw stronę główną**:
   - Ustawienia → Czytanie → Strona główna wyświetla: Strona statyczna
   - Utwórz pustą stronę i wybierz ją jako stronę główną

8. **Skonfiguruj menu**:
   - Wygląd → Menu → Utwórz nowe menu
   - Dodaj linki: Cmentarze (#cmentarze), Mapa (#mapa), O projekcie (#o-projekcie)
   - Przypisz do lokalizacji "Menu główne"

9. **Dodaj logo** (opcjonalnie):
   - Wygląd → Dostosuj → Tożsamość witryny → Logo
   - Lub skopiuj `portal-logo.webp` i `lilia-logo.webp` do `assets/images/`

## Struktura plików

```
cmentarze-myszkow/
├── style.css                 # Główne style
├── functions.php             # Custom Post Types, menu, ustawienia
├── header.php                # Nagłówek
├── footer.php                # Stopka
├── front-page.php            # Strona główna
├── single-cmentarz.php       # Pojedynczy cmentarz
├── archive-cmentarz.php      # Lista cmentarzy
├── taxonomy-gmina.php        # Archiwum gminy
├── page.php                  # Strony
├── page-regulamin.php        # Szablon: Regulamin
├── page-polityka-prywatnosci.php  # Szablon: Polityka prywatności
├── search.php                # Wyniki wyszukiwania
├── 404.php                   # Strona błędu
├── index.php                 # Fallback
├── assets/
│   ├── css/
│   │   └── leaflet.css       # Style mapy (do pobrania)
│   ├── js/
│   │   ├── main.js           # Główny JavaScript
│   │   └── leaflet.js        # Biblioteka mapy (do pobrania)
│   └── images/
│       ├── portal-logo.webp  # Logo portalu
│       └── lilia-logo.webp   # Logo Lilia
├── inc/
│   ├── custom-fields.php     # Metaboxy dla cmentarzy
│   └── import-cemeteries.php # Skrypt importu danych
└── template-parts/
    └── card-cemetery.php     # Karta cmentarza
```

## Custom Post Type: Cmentarz

### Pola (meta fields)
- **Podstawowe**: Adres, miejscowość, parafia/zarządca, godziny otwarcia, URL wyszukiwarki grobów
- **Kontaktowe**: Telefon, dodatkowe telefony, email, strona WWW, adres biura, godziny kancelarii
- **Lokalizacja**: Współrzędne GPS (lat, lon), adres do potwierdzenia
- **Administrator**: Nazwa, rola, adres, telefon, strona WWW, uwagi
- **Źródła**: Data aktualizacji, lista źródeł (repeater)
- **Regulamin**: URL, podsumowanie, uwagi, pełna treść (WYSIWYG), uwagi o opłatach
- **Historia**: Sekcje historyczne (repeater)

### Taksonomie
- **Gmina**: Myszków, Żarki, Niegowa, Poraj, Koziegłowy
- **Typ cmentarza**: Komunalny, Parafialny, Wojenny, Żydowski, Mariawicki, Ewangelicki

## Dostosowanie

### Customizer
- Wygląd → Dostosuj → Dane kontaktowe (email, adres firmy)
- Wygląd → Dostosuj → Strona główna - Hero (nagłówek, tekst)

### Kolory gmin
Kolory są zdefiniowane w `style.css` i `main.js`:
- Myszków: `#3a8a6a`
- Żarki: `#a07030`
- Niegowa: `#6a8a30`
- Poraj: `#4080b0`
- Koziegłowy: `#7a60a0`

## Zalecane wtyczki

- **Advanced Custom Fields PRO** - rozszerzone pola niestandardowe (alternatywa dla wbudowanych metaboxów)
- **Yoast SEO** - optymalizacja pod wyszukiwarki
- **WP Super Cache** - cache dla szybszego ładowania
- **UpdraftPlus** - kopie zapasowe

## Licencja

GNU General Public License v2 or later

## Autor

Dom Pogrzebowy Lilia
https://liliamyszkow.com/
