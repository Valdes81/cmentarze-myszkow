import type {Metadata} from 'next';
import {Footer,Header} from '@/components/portal/site';

export const metadata:Metadata={
  title:'Regulamin serwisu - Cmentarze Myszków',
  description:'Zasady korzystania z bezpłatnego portalu informacyjnego Cmentarze Myszków.'
};

export default function TermsPage(){
  return <><Header/><main className="wrap legal-page" id="main">
    <nav className="crumb" aria-label="Ścieżka nawigacji"><a href="/">Strona główna</a> / Regulamin serwisu</nav>
    <header className="legal-hero">
      <div className="eyebrow">Informacje prawne</div>
      <h1>Regulamin serwisu</h1>
      <p>Zasady korzystania z bezpłatnego portalu informacyjnego Cmentarze Myszków.</p>
      <span>Obowiązuje od 27 września 2026 r.</span>
    </header>

    <div className="legal-layout">
      <aside className="legal-nav" aria-label="Spis treści">
        <strong>Na tej stronie</strong>
        <a href="#operator">Operator serwisu</a>
        <a href="#uslugi">Zakres usług</a>
        <a href="#korzystanie">Zasady korzystania</a>
        <a href="#informacje">Charakter informacji</a>
        <a href="#reklamacje">Zgłoszenia i reklamacje</a>
        <a href="#postanowienia">Postanowienia końcowe</a>
      </aside>

      <article className="legal-content">
        <section id="operator">
          <h2>1. Operator serwisu</h2>
          <p>Operatorem portalu Cmentarze Myszków i usługodawcą jest:</p>
          <address className="legal-address">
            <strong>Dom Pogrzebowy Lilia</strong><br/>
            ul. Krasickiego 95F<br/>
            42-300 Myszków<br/>
            e-mail: <a href="mailto:biuro@liliamyszkow.com">biuro@liliamyszkow.com</a>
          </address>
          <p>Regulamin jest dostępny bezpłatnie w formie pozwalającej na jego wyświetlenie, zapisanie i wydrukowanie.</p>
        </section>

        <section id="uslugi">
          <h2>2. Rodzaj i zakres usług</h2>
          <p>Portal świadczy bezpłatne usługi informacyjne drogą elektroniczną. Obejmują one w szczególności:</p>
          <ul>
            <li>przeglądanie katalogu cmentarzy w Myszkowie i powiecie myszkowskim;</li>
            <li>wyszukiwanie oraz filtrowanie miejsc według gminy i nazwy;</li>
            <li>korzystanie z interaktywnej mapy i informacji o dojeździe;</li>
            <li>zapoznawanie się z adresami, kontaktami, źródłami, regulaminami, historią i informacjami praktycznymi;</li>
            <li>przechodzenie do zewnętrznych wyszukiwarek grobów, stron parafii, zarządców i innych źródeł;</li>
            <li>zgłaszanie zauważonych zmian lub błędów za pomocą poczty elektronicznej.</li>
          </ul>
          <p>Portal nie prowadzi rezerwacji miejsc, nie pobiera opłat cmentarnych i nie zastępuje kontaktu z zarządcą cmentarza.</p>
        </section>

        <section>
          <h2>3. Rozpoczęcie i zakończenie korzystania</h2>
          <p>Korzystanie z usługi rozpoczyna się w chwili otwarcia strony lub wybranej funkcji portalu. Użytkownik może zakończyć korzystanie w dowolnym momencie przez zamknięcie strony. Założenie konta ani zawarcie płatnej umowy nie jest wymagane.</p>
        </section>

        <section>
          <h2>4. Wymagania techniczne</h2>
          <p>Do korzystania z portalu potrzebne są urządzenie z dostępem do internetu oraz aktualna przeglądarka obsługująca standardowe technologie internetowe. JavaScript jest potrzebny do działania wyszukiwarki, filtrów i mapy interaktywnej.</p>
          <p>Google Maps jest domyślnie wyłączone i ładuje się dopiero po decyzji użytkownika. Szczegóły opisuje <a href="/polityka-prywatnosci/#mapy">polityka prywatności</a>.</p>
        </section>

        <section id="korzystanie">
          <h2>5. Zasady korzystania</h2>
          <p>Użytkownik zobowiązuje się korzystać z portalu zgodnie z prawem, dobrymi obyczajami i jego informacyjnym przeznaczeniem. Zabronione jest w szczególności:</p>
          <ul>
            <li>podejmowanie działań zakłócających działanie portalu lub jego zabezpieczeń;</li>
            <li>automatyczne pobieranie danych w sposób nadmiernie obciążający serwis albo usługi zewnętrzne;</li>
            <li>wykorzystywanie treści do wprowadzania innych osób w błąd;</li>
            <li>przesyłanie w zgłoszeniach treści bezprawnych, obraźliwych lub naruszających prawa innych osób.</li>
          </ul>
        </section>

        <section id="informacje">
          <h2>6. Charakter i aktualność informacji</h2>
          <p>Cmentarze Myszków jest niezależnym portalem informacyjnym. Nie jest oficjalną stroną wszystkich opisanych cmentarzy, parafii ani jednostek samorządowych.</p>
          <p>Dokładamy starań, aby dane były rzetelne i zawierały źródło oraz datę sprawdzenia. Adresy, numery telefonów, godziny kancelarii, opłaty i regulaminy mogą jednak ulec zmianie. Przed podjęciem ważnej decyzji, dokonaniem opłaty, rozpoczęciem prac przy grobie lub organizacją pochówku należy potwierdzić aktualne warunki bezpośrednio u zarządcy cmentarza.</p>
          <p>Punkty na mapie wskazują teren cmentarza. Nie zawsze oznaczają dokładne położenie bramy, kancelarii, kaplicy lub parkingu.</p>
        </section>

        <section>
          <h2>7. Strony i usługi zewnętrzne</h2>
          <p>Portal zawiera linki do zewnętrznych map, wyszukiwarek grobów i stron źródłowych. Podmioty prowadzące te strony odpowiadają za ich treść, dostępność oraz własne zasady prywatności. Otwarcie zewnętrznego linku powoduje przejście poza portal Cmentarze Myszków.</p>
          <p>Operator nie odpowiada za czasowe przerwy lub błędy usług zewnętrznych, na które nie ma wpływu. Nie ogranicza to odpowiedzialności operatora w zakresie, którego nie można wyłączyć na podstawie prawa.</p>
        </section>

        <section>
          <h2>8. Treści, zdjęcia i oznaczenia</h2>
          <p>Układ portalu, opracowania redakcyjne, grafiki i materiały własne są chronione zgodnie z właściwymi przepisami. Materiały pochodzące od innych podmiotów są oznaczane źródłem lub informacją o autorze.</p>
          <p>Dane mapowe OpenStreetMap są udostępniane na warunkach licencji ODbL. Wykorzystanie zdjęć, znaków, nazw i treści podmiotów zewnętrznych odbywa się w celach informacyjnych z poszanowaniem praw ich właścicieli.</p>
        </section>

        <section id="reklamacje">
          <h2>9. Zgłoszenia błędów i reklamacje</h2>
          <p>Błąd w danych, problem techniczny lub reklamację dotyczącą usługi można zgłosić na adres <a href="mailto:biuro@liliamyszkow.com">biuro@liliamyszkow.com</a>.</p>
          <p>Zgłoszenie powinno wskazywać cmentarz lub podstronę, opisywać problem i - jeśli to możliwe - zawierać źródło aktualnej informacji. Podanie danych kontaktowych jest potrzebne tylko wtedy, gdy użytkownik oczekuje odpowiedzi.</p>
          <p>Reklamacje rozpatrujemy bez zbędnej zwłoki, nie później niż w ciągu 14 dni od otrzymania kompletnego zgłoszenia.</p>
        </section>

        <section>
          <h2>10. Prywatność</h2>
          <p>Zasady dotyczące danych technicznych, korespondencji, map zewnętrznych i publikowanych danych kontaktowych opisuje <a href="/polityka-prywatnosci/">polityka prywatności</a>.</p>
        </section>

        <section id="postanowienia">
          <h2>11. Zmiany regulaminu i postanowienia końcowe</h2>
          <p>Regulamin może być aktualizowany w związku ze zmianą funkcji portalu, przepisów lub sposobu świadczenia usług. Aktualna wersja i data jej obowiązywania są publikowane na tej stronie. Użytkownik, który nie akceptuje zmian, może w każdej chwili zaprzestać korzystania z portalu.</p>
          <p>W sprawach nieuregulowanych stosuje się prawo polskie. Spory są rozpatrywane przez właściwe sądy powszechne zgodnie z obowiązującymi przepisami.</p>
          <p className="legal-basis">Podstawa: <a href="https://eli.gov.pl/eli/DU/2024/1513/ogl" target="_blank" rel="noopener noreferrer">ustawa o świadczeniu usług drogą elektroniczną</a>.</p>
        </section>
      </article>
    </div>
  </main><Footer/></>;
}
