import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {cmentarze, zrodla, getSourcesForCemetery} from '@/data/atlas-cmentarzy';
import type {CemeteryV2, FactSource} from '@/data/types';
import {Header, Footer} from '@/components/portal/site';
import {GoogleMapConsent} from '@/components/portal/google-map-consent';
import {CemeteryGallery} from '@/components/portal/cemetery-gallery';
import {MapPin, Navigation, Phone, ArrowUpRight, FileText, Info, Shield, Calendar, Ruler, Book, Camera} from 'lucide-react';

const origin = 'https://cmentarze-myszkow.valdes81.chatgpt.site';

// Rodzaje cmentarzy do wyświetlania
const rodzajLabels: Record<string, string> = {
  'parafialny': 'Cmentarz parafialny',
  'komunalny': 'Cmentarz komunalny',
  'wojenny': 'Cmentarz wojenny',
  'żydowski': 'Cmentarz żydowski',
  'mariawicki': 'Cmentarz mariawicki'
};

function findCemetery(town: string, slug: string): CemeteryV2 | undefined {
  return cmentarze.find(c => {
    const expectedTown = c.gmina.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
    return c.slug === slug && expectedTown === town;
  });
}

export async function generateMetadata({params}: {params: Promise<{slug: string; town: string}>}): Promise<Metadata> {
  const {slug, town} = await params;
  const c = findCemetery(town, slug);

  if (!c) return {title: 'Nie znaleziono cmentarza'};

  const href = `/cmentarze/${town}/${slug}/`;
  return {
    title: `${c.nazwa} - ${c.gmina}, powiat myszkowski`,
    description: c.teksty.opis_krotki,
    alternates: {canonical: origin + href}
  };
}

// Komponent dla faktu ze źródłem i pewnością
function SourcedFact({fact}: {fact: FactSource}) {
  if (fact.pewnosc === 'niska') return null; // Nie wyświetlamy faktów o niskiej pewności

  const sources = fact.zrodla.map(id => zrodla[id]).filter(Boolean);

  return (
    <div className="sourced-fact" style={{marginBottom: 12}}>
      <p style={{margin: 0}}>
        {fact.informacja}
        {fact.pewnosc === 'średnia' && <span className="certainty-note"> (według dostępnych źródeł)</span>}
      </p>
      {sources.length > 0 && (
        <p className="source" style={{marginTop: 4}}>
          Źródło: {sources.map((s, i) => (
            <span key={s.url}>
              {i > 0 && ', '}
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.tytul}</a>
            </span>
          ))}
        </p>
      )}
      {fact.uwaga && <p className="source" style={{marginTop: 4, fontStyle: 'italic'}}>{fact.uwaga}</p>}
    </div>
  );
}

export default async function CemeteryPage({params}: {params: Promise<{slug: string; town: string}>}) {
  const {slug, town} = await params;
  const c = findCemetery(town, slug);

  if (!c) notFound();

  const href = `/cmentarze/${town}/${slug}/`;
  const destination = `${c.lokalizacja.szerokosc},${c.lokalizacja.dlugosc}`;
  const dest = encodeURIComponent(c.nazwa + ', ' + c.gmina);
  const sources = getSourcesForCemetery(c);

  // Filtruj fakty o wysokiej i średniej pewności
  const displayableFacts = c.fakty_zrodlowe.filter(f => f.pewnosc !== 'niska');
  const historiaFacts = displayableFacts.filter(f => f.pole === 'historia');

  return (
    <>
      <Header />
      <main className="wrap" id="main">
        <nav className="crumb" aria-label="Ścieżka nawigacji">
          <a href="/">Strona główna</a> / <a href="/#cmentarze">Cmentarze w powiecie</a> / {c.gmina}
        </nav>

        <div className="detail-title">
          <span className="tag">{rodzajLabels[c.rodzaj] || c.rodzaj} · {c.gmina}</span>
          <h1>{c.nazwa}</h1>
          {c.administracja.zarzadca && <p className="muted">{c.administracja.zarzadca}</p>}
          <p className="location" style={{marginTop: 12}}>
            <MapPin size={18} />
            {c.lokalizacja.ulica || c.gmina}
            {c.lokalizacja.ulica && `, ${c.gmina}`}
          </p>
          <div className="actions">
            <a className="btn" href="#galeria"><Camera size={17} />Galeria</a>
            <a className="outline" href="#mapa"><Navigation size={17} />Mapa</a>
            {c.administracja.telefon_publiczny && <a className="outline" href="#kontakt">Kontakt</a>}
            {c.informacje.regulamin_url && <a className="outline" href="#regulamin">Regulamin</a>}
            <a className="outline" href="#zrodla">Źródła</a>
          </div>
        </div>

        {/* Galeria */}
        <CemeteryGallery
          galeria={c.galeria || {}}
          nazw={c.nazwa}
        />

        <div className="detail-grid">
          <div className="detail-main">

            {/* Opis */}
            <section className="panel">
              <h2>O cmentarzu</h2>
              <p style={{fontSize: '1.05em', lineHeight: 1.7}}>{c.teksty.opis_krotki}</p>
              {c.teksty.opis_rozszerzony && c.teksty.opis_rozszerzony !== c.teksty.opis_krotki && (
                <p style={{marginTop: 16, lineHeight: 1.7}}>{c.teksty.opis_rozszerzony}</p>
              )}
            </section>

            {/* Informacje podstawowe */}
            <section className="panel">
              <h2>Informacje podstawowe</h2>
              <dl className="info">
                <div><dt>Rodzaj</dt><dd>{rodzajLabels[c.rodzaj] || c.rodzaj}</dd></div>
                <div><dt>Gmina</dt><dd>{c.gmina}</dd></div>
                {c.informacje.rok_zalozenia && (
                  <div><dt>Rok założenia</dt><dd>{c.informacje.rok_zalozenia}</dd></div>
                )}
                {c.informacje.datowanie_opis && (
                  <div><dt>Datowanie</dt><dd>{c.informacje.datowanie_opis}</dd></div>
                )}
                {c.informacje.powierzchnia_ha && (
                  <div><dt>Powierzchnia</dt><dd>{c.informacje.powierzchnia_ha}</dd></div>
                )}
                {c.informacje.ochrona && (
                  <div><dt>Ochrona konserwatorska</dt><dd>{c.informacje.ochrona}{c.informacje.numer_rejestru && ` (nr ${c.informacje.numer_rejestru})`}</dd></div>
                )}
                {c.informacje.godziny_otwarcia && (
                  <div><dt>Godziny otwarcia</dt><dd>{c.informacje.godziny_otwarcia}</dd></div>
                )}
              </dl>
            </section>

            {/* Lokalizacja i mapa */}
            <section className="panel" id="mapa">
              <h2>Lokalizacja i dojazd</h2>
              <p>{c.lokalizacja.ulica || 'Lokalizacja dostępna na mapie'}, {c.gmina}</p>
              <GoogleMapConsent destination={destination} name={c.nazwa} />
              <a className="btn" style={{marginTop: 16}} href={`https://www.google.com/maps/dir/?api=1&destination=${destination}`} target="_blank" rel="noreferrer">
                <Navigation size={17} />Wyznacz trasę
              </a>
              <p className="small muted" style={{marginTop: 15}}>
                Mapa wskazuje przybliżoną lokalizację cmentarza. Pozycja bramy głównej może się różnić.
              </p>
              {c.administracja.uwaga && (
                <p className="source" style={{marginTop: 8}}><Info size={14} /> {c.administracja.uwaga}</p>
              )}
            </section>

            {/* Regulamin */}
            {c.informacje.regulamin_url && (
              <section className="panel" id="regulamin">
                <h2>Regulamin cmentarza</h2>
                <p>Cmentarz posiada oficjalny regulamin dostępny na stronie zarządcy lub parafii.</p>
                <a className="text-link" href={c.informacje.regulamin_url} target="_blank" rel="noopener noreferrer">
                  <FileText size={17} />Otwórz regulamin <ArrowUpRight size={16} />
                </a>
                <p className="source" style={{marginTop: 12}}>Zapoznaj się z pełną treścią regulaminu przed rozpoczęciem prac przy grobie.</p>
              </section>
            )}

            {/* Informacje praktyczne */}
            <section className="panel">
              <h2>Informacje praktyczne</h2>
              <dl className="info">
                <div><dt>Parking</dt><dd>{c.informacje.parking === true ? 'Tak' : c.informacje.parking === false ? 'Nie' : 'Dane do uzupełnienia'}</dd></div>
                <div><dt>Kaplica / sala pożegnań</dt><dd>{c.informacje.kaplica === true ? (c.informacje.kaplica_typ || 'Tak') : c.informacje.kaplica === false ? 'Nie' : 'Dane do uzupełnienia'}</dd></div>
                <div><dt>Toaleta</dt><dd>{c.informacje.toaleta === true ? 'Tak' : c.informacje.toaleta === false ? 'Nie' : 'Dane do uzupełnienia'}</dd></div>
                <div><dt>Dostępność dla osób z niepełnosprawnościami</dt><dd>{c.informacje.dostepnosc || 'Dane do uzupełnienia'}</dd></div>
                <div><dt>Wjazd samochodem</dt><dd>{c.informacje.wjazd_samochodem || 'Dane do uzupełnienia'}</dd></div>
                <div><dt>Punkty poboru wody</dt><dd>{c.informacje.woda === true ? 'Tak' : c.informacje.woda === false ? 'Nie' : 'Dane do uzupełnienia'}</dd></div>
              </dl>
            </section>

            {/* Przed organizacją pochówku */}
            <section className="panel">
              <h2>Przed organizacją pochówku</h2>
              <ol style={{listStyle: 'decimal', paddingLeft: 22}}>
                <li>Ustal z administracją miejsce pochówku.</li>
                <li>Zapytaj o wymagane dokumenty i możliwość dochowania.</li>
                <li>Potwierdź termin, opłaty oraz przebieg prac na cmentarzu.</li>
                <li>Uzgodnij organizację ceremonii z wybranym zakładem pogrzebowym.</li>
              </ol>
            </section>

            {/* FAQ */}
            <section className="panel">
              <h2>Najczęściej zadawane pytania</h2>
              <details>
                <summary>Do kogo zwrócić się w sprawach cmentarnych?</summary>
                <p>{c.administracja.zarzadca ? `Skontaktuj się z: ${c.administracja.zarzadca}${c.administracja.telefon_publiczny ? `, tel. ${c.administracja.telefon_publiczny}` : ''}.` : 'Skontaktuj się z kancelarią parafialną lub zarządcą cmentarza.'}</p>
              </details>
              <details>
                <summary>Jak znaleźć grób?</summary>
                <p>{c.informacje.wyszukiwarka_grobow ? 'Na tej karcie udostępniamy link do zewnętrznej wyszukiwarki grobów.' : 'Nie mamy potwierdzonego linku do wyszukiwarki tego cmentarza. O lokalizację grobu zapytaj zarządcę.'}</p>
              </details>
              <details>
                <summary>Czy można pochować urnę w istniejącym grobie?</summary>
                <p>Możliwość pochówku w konkretnym grobie, dokumenty i opłaty należy potwierdzić z administracją.</p>
              </details>
            </section>

            {/* Ciekawostki */}
            {c.ciekawostki.length > 0 && (
              <section className="panel">
                <h2>Ciekawostki</h2>
                <ul style={{paddingLeft: 20, lineHeight: 1.8}}>
                  {c.ciekawostki.map((ciekawostka, i) => (
                    <li key={i}>{ciekawostka}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Historia - jeśli są fakty historyczne */}
            {historiaFacts.length > 0 && (
              <section className="panel" id="historia">
                <h2>Historia</h2>
                {historiaFacts.map((fact, i) => (
                  <SourcedFact key={i} fact={fact} />
                ))}
              </section>
            )}

            {/* Źródła */}
            <section className="panel" id="zrodla">
              <h2>Źródła i aktualność danych</h2>
              <p className="small muted">Jakość karty: {c.jakosc_karty}. Informacje mogą ulec zmianie.</p>
              {sources.map(s => (
                <div key={s.url} className="source" style={{marginTop: 12}}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">{s.tytul} ↗</a>
                  <div className="small muted">Typ: {s.typ} · Dostęp: {s.data_dostepu}</div>
                </div>
              ))}
              {c.brakujace_dane.length > 0 && (
                <details style={{marginTop: 16}}>
                  <summary>Dane do uzupełnienia ({c.brakujace_dane.length})</summary>
                  <ul className="small muted" style={{paddingLeft: 20, marginTop: 8}}>
                    {c.brakujace_dane.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </details>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="aside">
            {/* Kontakt */}
            {(c.administracja.telefon_publiczny || c.administracja.zarzadca) && (
              <section className="panel" id="kontakt">
                <div className="eyebrow">Kontakt</div>
                {c.administracja.zarzadca && <h3 style={{marginTop: 14}}>{c.administracja.zarzadca}</h3>}
                {c.administracja.adres_kancelarii && (
                  <>
                    <p className="small muted">Adres kancelarii:</p>
                    <p className="small">{c.administracja.adres_kancelarii}</p>
                  </>
                )}
                {c.administracja.telefon_publiczny && (
                  <a className="text-link" href={`tel:${c.administracja.telefon_publiczny.replace(/\s/g, '').replace(/;.*/,'')}`} style={{marginTop: 16, display: 'block'}}>
                    <Phone size={17} />{c.administracja.telefon_publiczny}
                  </a>
                )}
                {c.administracja.uwaga && (
                  <p className="source" style={{marginTop: 8}}>{c.administracja.uwaga}</p>
                )}
              </section>
            )}

            {/* Wyszukiwarka grobów */}
            <section className="panel">
              <h3>Znajdź grób</h3>
              {c.informacje.wyszukiwarka_grobow ? (
                <>
                  {c.informacje.wyszukiwarka_grobow.includes('ecmentarze.pl') && (
                    <img
                      src="/images/ecmentarze-logo.svg"
                      alt="eCmentarze"
                      style={{height: 28, marginBottom: 12, display: 'block'}}
                    />
                  )}
                  <p className="small muted">Zewnętrzna baza osób pochowanych na tym cmentarzu.</p>
                  <a className="btn" href={c.informacje.wyszukiwarka_grobow} target="_blank" rel="noopener noreferrer">
                    {c.informacje.wyszukiwarka_grobow.includes('ecmentarze.pl') ? 'Szukaj w eCmentarze' : 'Otwórz wyszukiwarkę'} <ArrowUpRight size={16} />
                  </a>
                </>
              ) : (
                <p className="small muted">Wyszukiwarka grobów: brak danych w bazie. Zapytaj zarządcę o lokalizację grobu.</p>
              )}
            </section>

            {/* Zgłoś zmianę */}
            <section className="panel">
              <h3>Zgłoś zmianę danych</h3>
              <p className="small muted">Podaj nazwę cmentarza oraz źródło aktualnej informacji.</p>
              <a className="text-link" href={`mailto:biuro@liliamyszkow.com?subject=${encodeURIComponent('Aktualizacja danych - ' + c.nazwa)}`}>
                Napisz do zespołu ↗
              </a>
            </section>
          </aside>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Cemetery',
            name: c.nazwa,
            url: origin + href,
            address: {
              '@type': 'PostalAddress',
              ...(c.lokalizacja.ulica ? {streetAddress: c.lokalizacja.ulica} : {}),
              addressLocality: c.gmina,
              addressRegion: 'Powiat myszkowski',
              addressCountry: 'PL'
            },
            ...(c.informacje.rok_zalozenia ? {foundingDate: String(c.informacje.rok_zalozenia)} : {}),
            description: c.teksty.opis_krotki
          })
        }}
      />
    </>
  );
}
