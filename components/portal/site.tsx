"use client";
import {useEffect,useRef,useState} from 'react';
import {CountyMap} from './county-map';
import {MapPin,ArrowUpRight,ArrowRight,Search,Map,Menu,Info,Navigation,Filter} from 'lucide-react';
import {Select,SelectTrigger,SelectValue,SelectContent,SelectItem} from '@/components/ui/select';
import {cmentarze, rodzajeLabels} from '@/data/atlas-cmentarzy';
import mapPoints from '@/data/map-points.json';
import {GoogleMapConsent} from './google-map-consent';

const GMINY = ['Myszków','Żarki','Niegowa','Poraj','Koziegłowy'] as const;
const RODZAJE = ['wszystkie', 'parafialny', 'komunalny', 'wojenny', 'żydowski', 'mariawicki'] as const;
const NAV_LINKS = [
  {href:'/#cmentarze',label:'Cmentarze'},
  {href:'/#mapa',label:'Mapa'},
  {href:'/cmentarze/myszkow/cmentarz-komunalny/',label:'Kaplica'},
] as const;

// Katalog cmentarzy z mapPoints
const catalog = mapPoints.map(p => {
  const atlasData = cmentarze.find(c => c.id === p.id);
  return {
    id: p.id,
    name: p.name,
    gmina: p.gmina,
    rodzaj: p.rodzaj || 'parafialny',
    type: p.kind,
    lat: p.lat,
    lon: p.lon,
    href: p.href,
    searchUrl: p.searchUrl || '',
    parish: p.parish || '',
    description: atlasData?.teksty.opis_krotki || 'Cmentarz w powiecie myszkowskim.',
    address: atlasData?.lokalizacja.ulica || 'Lokalizacja dostępna na mapie'
  };
});

function searchProvider(url:string){try{const host=new URL(url).hostname.replace(/^www\./,'');if(host==='grobonet.com'||host.endsWith('.grobonet.com'))return 'Grobonet';if(host==='ecmentarze.pl')return 'eCmentarze';if(host==='mogily.pl')return 'Mogiły.pl';return host;}catch{return 'Wyszukiwarka zewnętrzna';}}

function GraveSearchBadge({url,name}:{url:string;name:string}){return <a className="grave-search-badge" href={url} target="_blank" rel="noopener noreferrer" aria-label={'Wyszukiwarka grobów '+searchProvider(url)+' - '+name+' (otwiera nową kartę)'}><Search size={18}/><span><span className="grave-search-label">Wyszukiwarka grobów</span><strong>{searchProvider(url)}</strong></span><ArrowUpRight size={17}/></a>}

function PremiumIcon({index=0,className=''}:{index?:number;className?:string}){return <span aria-hidden="true" className={'premium-icon '+className} style={{backgroundPosition:`${(index%3)*50}% ${Math.floor(index/3)*100}%`}}/>}

function HeroBackdrop(){const frame=useRef<HTMLDivElement>(null);const[motion,setMotion]=useState(false);useEffect(()=>{const media=window.matchMedia('(min-width: 681px) and (prefers-reduced-motion: no-preference)');const sync=()=>setMotion(media.matches);sync();media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync)},[]);useEffect(()=>{if(!motion)return;let raf=0;const update=()=>{raf=0;frame.current?.style.setProperty('--hero-shift',`${Math.min(42,window.scrollY*.09)}px`)};const scroll=()=>{if(!raf)raf=requestAnimationFrame(update)};update();window.addEventListener('scroll',scroll,{passive:true});return()=>{window.removeEventListener('scroll',scroll);if(raf)cancelAnimationFrame(raf)}},[motion]);return <div className="hero-backdrop" ref={frame} aria-hidden="true">{motion?<video autoPlay muted loop playsInline preload="metadata" poster="/images/jura-mgla-poster.webp"><source src="/images/jura-mgla-higgsfield.mp4" type="video/mp4"/></video>:<img src="/images/jura-mgla-poster.webp" alt=""/>}<span className="hero-backdrop-shade"/></div>}

function StaticHeroPicture(){return <div className="hero-picture"><img src="/images/jura-editorial.webp" alt="Krajobraz Jury Krakowsko-Częstochowskiej"/><span className="picture-label">Jura Krakowsko-Częstochowska</span></div>}

export function Header(){const [open,setOpen]=useState(false);return <header className="header"><a className="skip" href="#main">Przejdź do treści</a><div className="wrap header-row"><a href="/" className="brand"><img className="portal-logo" src="/images/portal-logo.webp" alt="Cmentarzemyszkow.pl - Lokalny portal pamięci" width="1448" height="1086"/></a><nav className="nav" aria-label="Menu główne">{NAV_LINKS.map((l,i)=><a key={l.href} className={i===0?'active':''} href={l.href}>{l.label}</a>)}<a className="outline" href="/#o-projekcie">O projekcie <ArrowUpRight size={15}/></a></nav><button className="outline menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Menu"><Menu size={21}/></button></div>{open&&<nav className="wrap mobile-links">{NAV_LINKS.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}<a href="/#o-projekcie">O projekcie</a></nav>}</header>}

export function Footer(){return <footer className="footer" id="o-projekcie"><div className="wrap footer-row"><div className="brand"><img className="lilia-signature" src="/images/lilia-logo.webp" alt="Dom Pogrzebowy Lilia"/><img className="portal-logo" src="/images/portal-logo.webp" alt="Cmentarzemyszkow.pl - Lokalny portal pamięci" width="1448" height="1086"/></div><div className="footer-copy"><p>Serwis Cmentarze Myszków jest projektem informacyjnym <a href="https://liliamyszkow.com/" target="_blank" rel="noreferrer">Domu Pogrzebowego Lilia w Myszkowie</a>.</p><p><strong>Administrator serwisu:</strong><br/>Dom Pogrzebowy Lilia<br/>ul. Krasickiego 95F, 42-300 Myszków<br/><a href="mailto:biuro@liliamyszkow.com">biuro@liliamyszkow.com</a></p><p>Wersja rozwojowa. Baza jest sukcesywnie uzupełniana. W sprawie aktualnych warunków skontaktuj się z administratorem cmentarza.</p><nav className="footer-legal" aria-label="Informacje prawne"><a href="/regulamin/">Regulamin serwisu</a><a href="/polityka-prywatnosci/">Polityka prywatności</a></nav></div></div></footer>}

export function MapSection(){
  const [selected,setSelected]=useState('cm-10');
  const c = catalog.find(x=>x.id===selected);
  if (!c) return null;
  const destination = `${c.lat},${c.lon}`;
  const q = encodeURIComponent(destination);
  return (
    <section id="mapa" className="map-grid">
      <div className="map-side">
        <div className="eyebrow"><Map size={16}/> Blisko Ciebie</div>
        <h2 style={{marginTop:15}}>Znajdź cmentarz<br/>na mapie</h2>
        <p>Wybierz cmentarz i zaplanuj dojazd.</p>
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger aria-label="Wybierz cmentarz na mapie" className="w-full bg-white mt-4">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent className="bg-white">
            {catalog.filter(x=>x.href).map(x=><SelectItem value={x.id} key={x.id}>{x.name}</SelectItem>)}
          </SelectContent>
        </Select>
        <div className="map-entry">
          <strong>{c.name}</strong>
          <span className="small muted">{c.address}, {c.gmina}</span>
          <a className="text-link" href={c.href}>Informacje o cmentarzu <ArrowRight size={16}/></a>
          <a className="text-link" style={{display:'flex'}} href={'https://www.google.com/maps/dir/?api=1&destination='+q} target="_blank" rel="noreferrer">Wyznacz trasę <Navigation size={16}/></a>
        </div>
      </div>
      <GoogleMapConsent destination={destination} name={c.name} zoom={14}/>
    </section>
  );
}

export function Home(){
  const [query,setQuery]=useState('');
  const [city,setCity]=useState('Myszków');
  const [rodzaj,setRodzaj]=useState<string>('wszystkie');
  const [term,setTerm]=useState('');

  const normalize=(v:string)=>v.toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ł/g,'l');

  const results = catalog.filter(c => {
    // Filtr gminy
    if (c.gmina !== city) return false;
    // Filtr rodzaju
    if (rodzaj !== 'wszystkie' && c.rodzaj !== rodzaj) return false;
    // Filtr wyszukiwania
    if (term && !normalize(c.name+' '+c.gmina+' '+c.description+' '+c.address+' '+c.parish).includes(normalize(term))) return false;
    return true;
  });

  function search(e:React.FormEvent){
    e.preventDefault();
    const value=query.trim();
    setTerm(value);
    if(value){
      const first=catalog.find(c=>normalize(c.name+' '+c.gmina+' '+c.description).includes(normalize(value)));
      if(first)setCity(first.gmina);
    }
    document.getElementById('cmentarze')?.scrollIntoView({behavior:'smooth'});
  }

  function pick(v:string){
    setCity(v);
    setTerm('');
    setQuery('');
    document.getElementById('cmentarze')?.scrollIntoView({behavior:'smooth'});
  }

  function selectGmina(v:string){
    setCity(v);
    setTerm('');
    setQuery('');
  }

  function selectRodzaj(v:string){
    setRodzaj(v);
  }

  // Liczba cmentarzy per rodzaj w wybranej gminie
  const rodzajCounts = RODZAJE.slice(1).reduce((acc, r) => {
    acc[r] = catalog.filter(c => c.gmina === city && c.rodzaj === r).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      <Header/>
      <main id="main">
        <section className="hero">
          <HeroBackdrop/>
          <div className="wrap hero-content">
            <div className="hero-grid">
              <div>
                <div className="eyebrow"><span style={{width:24,height:1,background:'currentColor'}}/> Myszków i powiat myszkowski</div>
                <h1>Ważne miejsca.<br/><em>Potrzebne informacje.</em></h1>
                <p>Cmentarze w Myszkowie i powiecie myszkowskim.<br/>Adresy, administratorzy, mapy i praktyczne informacje - w jednym miejscu.</p>
              </div>
              <StaticHeroPicture/>
            </div>
            <form className="search" onSubmit={search}>
              <Search size={23}/>
              <label className="sr-only" htmlFor="search">Szukaj cmentarza, miejscowości lub informacji</label>
              <input id="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Szukaj cmentarza, miejscowości lub informacji…"/>
              <button className="btn" type="submit" aria-label="Szukaj"><span>Szukaj</span><ArrowRight size={19}/></button>
            </form>
            <div className="quick">Popularne: <button onClick={()=>pick('Myszków')}>Myszków</button><button onClick={()=>pick('Żarki')}>Żarki</button><a href="/cmentarze/myszkow/cmentarz-komunalny/">Cmentarz Komunalny ↗</a></div>
            <div className="trust"><span><PremiumIcon index={4}/> Źródła przy informacjach</span><span><PremiumIcon index={3}/> 28 cmentarzy w bazie</span><span><PremiumIcon index={5}/> Bezpłatny dostęp</span></div>
          </div>
        </section>

        <div className="wrap">
          <section className="section" style={{paddingTop:32}}>
            <CountyMap selected={city} onSelect={selectGmina}/>
          </section>

          <section className="section" id="cmentarze">
            <div className="section-head">
              <div>
                <h2>Cmentarze - gmina {city}</h2>
                <p>Wybierz miejsce i sprawdź najważniejsze informacje. {catalog.filter(c=>c.gmina===city).length} cmentarzy w gminie.</p>
              </div>
              <a href="#mapa" className="text-link"><Map size={16}/> Zobacz na mapie</a>
            </div>

            {/* Filtr gminy */}
            <div className="filters" aria-label="Filtr gminy">
              {GMINY.map(c=><button key={c} data-gmina={c} className={'filter '+(city===c?'selected':'')} aria-pressed={city===c} onClick={()=>pick(c)}>{c}</button>)}
            </div>

            {/* Filtr rodzaju */}
            <div className="filters filters-secondary" aria-label="Filtr rodzaju cmentarza" style={{marginTop: 12}}>
              <span className="filter-label"><Filter size={14}/> Rodzaj:</span>
              <button
                className={'filter filter-small '+(rodzaj==='wszystkie'?'selected':'')}
                aria-pressed={rodzaj==='wszystkie'}
                onClick={()=>selectRodzaj('wszystkie')}
              >
                Wszystkie ({catalog.filter(c=>c.gmina===city).length})
              </button>
              {RODZAJE.slice(1).map(r => rodzajCounts[r] > 0 && (
                <button
                  key={r}
                  data-rodzaj={r}
                  className={'filter filter-small '+(rodzaj===r?'selected':'')}
                  aria-pressed={rodzaj===r}
                  onClick={()=>selectRodzaj(r)}
                >
                  {rodzajeLabels[r] || r} ({rodzajCounts[r]})
                </button>
              ))}
            </div>

            {term&&<p className="small" style={{marginBottom:16,marginTop:16}}>Wyniki dla „{term}" · {results.length} <button className="filter" onClick={()=>{setTerm('');setQuery('')}}>Wyczyść</button></p>}

            <div className="cards">
              {results.map(c=>(
                <article className="card" data-gmina={c.gmina} data-rodzaj={c.rodzaj} key={c.id}>
                  <div className="card-image">
                    <div className="symbol-panel">
                      <PremiumIcon index={c.rodzaj==='parafialny'?1:c.rodzaj==='wojenny'||c.rodzaj==='żydowski'?2:c.rodzaj==='komunalny'?0:3}/>
                      <span className="symbol-caption">{c.gmina}</span>
                    </div>
                    <span className="tag">{c.type}</span>
                  </div>
                  <div className="card-body">
                    <h3>{c.name}</h3>
                    <p className="card-parish">{c.description}</p>
                    <div className="location"><MapPin size={15}/>{c.gmina} · {c.address}</div>
                    <div className="card-links">
                      {c.searchUrl&&<GraveSearchBadge url={c.searchUrl} name={c.name}/>}
                      <div className="card-bottom">
                        {c.href ? (
                          <a className="text-link" href={c.href}>Zobacz informacje <ArrowRight size={17}/></a>
                        ) : (
                          <span className="muted">Karta w przygotowaniu</span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {results.length===0&&(
              <div className="empty">
                <h3>Brak cmentarzy dla wybranych filtrów</h3>
                <p>Spróbuj zmienić rodzaj cmentarza lub wybierz inną gminę.</p>
                <button className="outline" onClick={()=>{setRodzaj('wszystkie');pick('Myszków')}}>Pokaż wszystkie w Myszkowie</button>
              </div>
            )}
          </section>

          <section className="section" style={{paddingTop:8}}>
            <div className="regional-links">
              <span>Oficjalne informacje o regionie</span>
              <a href="https://www.powiatmyszkowski.pl/" target="_blank" rel="noreferrer">Powiat myszkowski ↗</a>
              <a href="https://www.miastomyszkow.pl/" target="_blank" rel="noreferrer">Miasto Myszków ↗</a>
            </div>
            <div className="notice">
              <Info size={26}/>
              <div>
                <strong>Pomóż nam tworzyć rzetelną bazę</strong>
                <p>Zauważyłeś nieaktualną informację? Skontaktuj się z zespołem projektu.</p>
              </div>
              <a className="text-link" href="https://liliamyszkow.com/kontakt/" target="_blank" rel="noreferrer">Zgłoś zmianę <ArrowUpRight size={16}/></a>
            </div>
            <p className="photo-credit">Animacja Jury w nagłówku: wygenerowana w Higgsfield i inspirowana regionem. Zdjęcie Cmentarza Komunalnego: SANIKO BIS. Pozostałe karty mają symboliczne ilustracje - nie są to zdjęcia tych cmentarzy. Źródła danych znajdziesz na poszczególnych kartach.</p>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}
