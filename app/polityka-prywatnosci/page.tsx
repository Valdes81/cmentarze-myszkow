import type {Metadata} from 'next';
import {Footer,Header} from '@/components/portal/site';

export const metadata:Metadata={
  title:'Polityka prywatności - Cmentarze Myszków',
  description:'Informacje o prywatności, danych technicznych, mapach i źródłach danych w portalu Cmentarze Myszków.'
};

export default function PrivacyPolicyPage(){
  return <><Header/><main className="wrap legal-page" id="main">
    <nav className="crumb" aria-label="Ścieżka nawigacji"><a href="/">Strona główna</a> / Polityka prywatności</nav>
    <header className="legal-hero">
      <div className="eyebrow">Informacje prawne</div>
      <h1>Polityka prywatności</h1>
      <p>Wyjaśniamy prostym językiem, jakie dane techniczne mogą powstawać podczas korzystania z portalu i w jaki sposób dbamy o prywatność użytkowników.</p>
      <span>Obowiązuje od 27 września 2026 r.</span>
    </header>

    <div className="legal-layout">
      <aside className="legal-nav" aria-label="Spis treści">
        <strong>Na tej stronie</strong>
        <a href="#administrator">Administrator</a>
        <a href="#zakres">Jakie dane przetwarzamy</a>
        <a href="#cele">Cele i podstawy</a>
        <a href="#mapy">Mapy zewnętrzne</a>
        <a href="#cookies">Pliki cookies</a>
        <a href="#kontakty">Dane osób kontaktowych</a>
        <a href="#prawa">Twoje prawa</a>
      </aside>

      <article className="legal-content">
        <section id="administrator">
          <h2>1. Administrator danych</h2>
          <p>Administratorem danych przetwarzanych w związku z działaniem portalu Cmentarze Myszków jest:</p>
          <address className="legal-address">
            <strong>Dom Pogrzebowy Lilia</strong><br/>
            ul. Krasickiego 95F<br/>
            42-300 Myszków<br/>
            e-mail: <a href="mailto:biuro@liliamyszkow.com">biuro@liliamyszkow.com</a>
          </address>
          <p>W sprawach dotyczących prywatności, sprostowania danych lub usunięcia nieaktualnego kontaktu można napisać na powyższy adres e-mail.</p>
        </section>

        <section id="zakres">
          <h2>2. Jakie dane mogą być przetwarzane</h2>
          <h3>Dane techniczne użytkowników</h3>
          <p>Podczas wyświetlania strony dostawca hostingu może rejestrować standardowe dane techniczne, takie jak adres IP, data i godzina połączenia, adres odwiedzonej podstrony, rodzaj przeglądarki i urządzenia, strona odsyłająca oraz informacje o błędach. Dane te służą do prawidłowego i bezpiecznego działania serwisu.</p>
          <p>Portal nie posiada kont użytkowników, newslettera ani formularza zbierającego dane. Frazy wpisywane w wyszukiwarce cmentarzy są przetwarzane lokalnie w przeglądarce i nie są wysyłane przez formularz do administratora.</p>

          <h3>Korespondencja e-mail</h3>
          <p>Link „Napisz do zespołu” otwiera program pocztowy użytkownika. Dane trafiają do administratora dopiero wtedy, gdy użytkownik sam wyśle wiadomość. Przetwarzamy wówczas adres e-mail, treść wiadomości i inne informacje podane dobrowolnie w celu udzielenia odpowiedzi i obsługi zgłoszenia.</p>
        </section>

        <section id="cele">
          <h2>3. Cele i podstawy przetwarzania</h2>
          <div className="legal-table-wrap"><table className="legal-table">
            <thead><tr><th>Cel</th><th>Podstawa</th></tr></thead>
            <tbody>
              <tr><td>Wyświetlanie strony, bezpieczeństwo, wykrywanie błędów i nadużyć</td><td>Uzasadniony interes administratora - art. 6 ust. 1 lit. f RODO</td></tr>
              <tr><td>Odpowiedź na wiadomość lub zgłoszenie aktualizacji</td><td>Uzasadniony interes administratora albo działania na żądanie użytkownika - art. 6 ust. 1 lit. f lub b RODO</td></tr>
              <tr><td>Prowadzenie rzetelnego katalogu kontaktów cmentarnych</td><td>Uzasadniony interes administratora i mieszkańców poszukujących właściwego kontaktu - art. 6 ust. 1 lit. f RODO</td></tr>
              <tr><td>Załadowanie osadzonej mapy Google</td><td>Zgoda wyrażona przez świadome kliknięcie przycisku „Pokaż mapę Google” - art. 6 ust. 1 lit. a RODO</td></tr>
            </tbody>
          </table></div>
        </section>

        <section>
          <h2>4. Odbiorcy danych</h2>
          <p>W zakresie niezbędnym do działania serwisu dane mogą być przetwarzane przez dostawcę hostingu i zaplecza technicznego, dostawcę poczty elektronicznej oraz podmioty obsługujące mapy. Dostęp mogą mieć również osoby upoważnione do utrzymania i aktualizacji portalu.</p>
          <p>Nie sprzedajemy danych użytkowników i nie wykorzystujemy ich do tworzenia profili reklamowych.</p>
        </section>

        <section id="mapy">
          <h2>5. Mapy i usługi zewnętrzne</h2>
          <h3>OpenStreetMap</h3>
          <p>Interaktywna mapa powiatu korzysta z kafelków OpenStreetMap. Podczas ich pobierania przeglądarka łączy się z serwerami OpenStreetMap Foundation, które mogą otrzymać adres IP oraz podstawowe dane techniczne dotyczące urządzenia i żądania.</p>
          <p><a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">Polityka prywatności OpenStreetMap Foundation</a></p>

          <h3>Google Maps</h3>
          <p>Osadzone mapy Google są domyślnie wyłączone. Po kliknięciu przycisku „Pokaż mapę Google” przeglądarka nawiązuje połączenie z Google. Google może wówczas przetwarzać dane techniczne i zapisywać własne pliki cookies zgodnie ze swoimi zasadami.</p>
          <p>Użytkownik może zamiast osadzonej mapy skorzystać z linku otwierającego Google Maps w osobnej karcie.</p>
          <p><a href="https://policies.google.com/privacy?hl=pl" target="_blank" rel="noopener noreferrer">Polityka prywatności Google</a></p>
        </section>

        <section id="cookies">
          <h2>6. Pliki cookies</h2>
          <p>Portal nie używa własnych plików cookies do reklamy, profilowania ani analityki marketingowej. Dostawca hostingu może stosować rozwiązania techniczne niezbędne do bezpieczeństwa i prawidłowego udostępniania strony.</p>
          <p>Cookies Google mogą pojawić się dopiero po świadomym włączeniu mapy Google. Zgoda nie jest zapisywana przez portal - po ponownym otwarciu strony mapa pozostaje wyłączona do kolejnego kliknięcia.</p>
        </section>

        <section>
          <h2>7. Czas przechowywania</h2>
          <ul>
            <li>dane techniczne są przechowywane przez okres wynikający z ustawień bezpieczeństwa i procedur dostawcy hostingu, nie dłużej niż jest to potrzebne do wskazanych celów;</li>
            <li>korespondencję przechowujemy przez czas potrzebny do obsługi sprawy, a później tylko tak długo, jak jest to uzasadnione obowiązkami prawnymi lub możliwością dochodzenia i obrony roszczeń;</li>
            <li>dane kontaktowe administratorów, opiekunów i grabarzy publikujemy do czasu utraty aktualności, zmiany osoby kontaktowej albo uzasadnionego żądania sprostowania lub usunięcia.</li>
          </ul>
        </section>

        <section id="kontakty">
          <h2>8. Dane osób kontaktowych przy cmentarzach</h2>
          <p>Na kartach cmentarzy możemy publikować nazwę podmiotu, imię i nazwisko osoby pełniącej funkcję, jej rolę zawodową lub organizacyjną, numer telefonu oraz źródło informacji. Zakres ograniczamy do danych potrzebnych mieszkańcom do kontaktu w sprawach cmentarnych.</p>
          <p>Jeżeli numer pochodzi z oficjalnej strony parafii, cmentarza, gminy albo podmiotu obsługującego cmentarz, przy kontakcie wskazujemy źródło. Dane przekazane bezpośrednio zespołowi portalu oznaczamy jako „Dodane przez administratora serwisu”.</p>
          <p>Osoba, której dane dotyczą, może zażądać ich poprawienia, uzupełnienia lub usunięcia, pisząc na adres <a href="mailto:biuro@liliamyszkow.com">biuro@liliamyszkow.com</a>.</p>
        </section>

        <section id="prawa">
          <h2>9. Prawa osób, których dane dotyczą</h2>
          <p>W przypadkach przewidzianych przez RODO przysługuje prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu oraz wycofania zgody. Wycofanie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania.</p>
          <p>Przysługuje również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</p>
        </section>

        <section>
          <h2>10. Zmiany polityki</h2>
          <p>Polityka może być aktualizowana wraz ze zmianą funkcji portalu, dostawców lub przepisów. Aktualna wersja oraz data jej obowiązywania są zawsze dostępne na tej stronie.</p>
          <p className="legal-basis">Podstawowe akty: <a href="https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32016R0679" target="_blank" rel="noopener noreferrer">RODO</a> oraz <a href="https://eli.gov.pl/eli/DU/2024/1221/ogl" target="_blank" rel="noopener noreferrer">Prawo komunikacji elektronicznej</a>.</p>
        </section>
      </article>
    </div>
  </main><Footer/></>;
}
