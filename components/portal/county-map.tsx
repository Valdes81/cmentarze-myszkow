"use client";
import {useEffect,useRef,useState} from 'react';
import points from '@/data/map-points.json';

const names=['Myszków','Żarki','Niegowa','Poraj','Koziegłowy'];
const colors:Record<string,string>={'Myszków':'#255e4f','Żarki':'#8b6945','Niegowa':'#62794d','Poraj':'#426f88','Koziegłowy':'#79688b'};

// Kolory i ikony dla rodzajów cmentarzy
const rodzajColors:Record<string,string>={
  'parafialny':'#2a6a5a',
  'komunalny':'#3a6a8a',
  'wojenny':'#8a3a3a',
  'żydowski':'#8a7030',
  'mariawicki':'#6a4a8a'
};
const rodzajIcons:Record<string,string>={
  'parafialny':'⛪',
  'komunalny':'🏛',
  'wojenny':'✚',
  'żydowski':'✡',
  'mariawicki':'☦'
};
const rodzajLabels:Record<string,string>={
  'parafialny':'Parafialny',
  'komunalny':'Komunalny',
  'wojenny':'Wojenny',
  'żydowski':'Żydowski',
  'mariawicki':'Mariawicki'
};

// Wykryj punkty blisko siebie (w promieniu ~100m)
function findNearbyPoints(lat: number, lon: number, excludeId: string) {
  const threshold = 0.002; // ~200m
  return points.filter(p =>
    p.id !== excludeId &&
    Math.abs(p.lat - lat) < threshold &&
    Math.abs(p.lon - lon) < threshold
  );
}

export function CountyMap({selected,onSelect}:{selected:string;onSelect:(gmina:string)=>void}){
  const host=useRef<HTMLDivElement>(null);
  const api=useRef<any>(null);
  const [ready,setReady]=useState(false);
  const [error,setError]=useState(false);

  useEffect(()=>{
    const focus=(event:Event)=>{
      const id=(event as CustomEvent<string>).detail;
      const p=points.find(x=>x.id===id);
      if(!p)return;
      onSelect(p.gmina);
      setTimeout(()=>{
        const a=api.current;
        if(a){
          a.map.setView([p.lat,p.lon],15);
          a.markers.get(id)?.openPopup();
        }
      },100);
    };
    window.addEventListener('focus-cemetery',focus);
    return()=>window.removeEventListener('focus-cemetery',focus);
  },[onSelect,ready]);

  const filtered=points.filter(p=>p.gmina===selected);

  useEffect(()=>{
    let active=true;
    let map:any;

    const start=async()=>{
      try{
        if(!(window as any).L) {
          await new Promise<void>((resolve,reject)=>{
            const s=document.createElement('script');
            s.src='/vendor/leaflet/leaflet.js';
            s.onload=()=>resolve();
            s.onerror=reject;
            document.head.appendChild(s);
          });
        }

        const geo=await fetch('/gminy.json').then(r=>r.json());
        if(!active||!host.current)return;
        const L=(window as any).L;

        map=L.map(host.current,{scrollWheelZoom:false}).setView([50.61,19.34],11);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
          maxZoom:19,
          attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const boundaries=L.geoJSON(geo,{
          style:(f:any)=>({color:colors[f.properties.name],weight:2,fillOpacity:.13}),
          onEachFeature:(f:any,layer:any)=>{
            const n=f.properties.name;
            layer.bindTooltip(`${n} · ${points.filter(p=>p.gmina===n).length} miejsc`);
            layer.on({
              mouseover:()=>layer.setStyle({fillOpacity:.28,weight:3}),
              mouseout:()=>layer.setStyle({fillOpacity:.13,weight:2}),
              click:()=>onSelect(n)
            });
          }
        }).addTo(map);

        const markers=new Map<string,any>();
        const escape=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));

        // Tworzymy mapę punktów już dodanych w danej lokalizacji
        const processedLocations = new Set<string>();

        points.forEach(p=>{
          const locationKey = `${p.lat.toFixed(3)}_${p.lon.toFixed(3)}`;
          const nearbyPoints = findNearbyPoints(p.lat, p.lon, p.id);
          const hasNearby = nearbyPoints.length > 0;

          // Sprawdź czy już przetworzono tę lokalizację jako grupę
          const isSecondary = nearbyPoints.some(np => processedLocations.has(`${np.lat.toFixed(3)}_${np.lon.toFixed(3)}`));

          // Tworzenie popupu
          let popupContent: string;

          if (hasNearby && !isSecondary) {
            // To jest główny marker dla grupy - pokaż wszystkie cmentarze w pobliżu
            const allPoints = [p, ...nearbyPoints];
            popupContent = `<div class="place-popup place-popup-group">
              <small>GMINA ${escape(p.gmina.toLocaleUpperCase('pl'))} · ${allPoints.length} CMENTARZE W POBLIŻU</small>
              ${allPoints.map(point => `
                <div class="popup-item">
                  <h3>${escape(point.name)}</h3>
                  <p>${escape(point.parish || point.kind)}</p>
                  <div class="popup-links">
                    ${point.href ? `<a href="${point.href}">Informacje →</a>` : ''}
                    ${point.searchUrl ? `<a target="_blank" rel="noreferrer" href="${point.searchUrl}">Wyszukaj grób ↗</a>` : ''}
                  </div>
                </div>
              `).join('<hr/>')}
              <a class="popup-route" target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lon}">Wyznacz trasę ↗</a>
            </div>`;
            processedLocations.add(locationKey);
          } else {
            // Pojedynczy cmentarz lub drugorzędny marker
            popupContent = `<div class="place-popup">
              <small>GMINA ${escape(p.gmina.toLocaleUpperCase('pl'))}</small>
              <h3>${escape(p.name)}</h3>
              <p>${escape(p.parish || p.kind)}</p>
              ${p.searchUrl ? `<a target="_blank" rel="noreferrer" href="${p.searchUrl}">Wyszukaj grób ↗</a>` : ''}
              ${p.href ? `<a href="${p.href}">Informacje o cmentarzu →</a>` : ''}
              <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lon}">Wyznacz trasę ↗</a>
              <a class="source-link" target="_blank" rel="noreferrer" href="${p.source}">Źródło lokalizacji ↗</a>
            </div>`;
          }

          // Ikona - kolor według rodzaju, specjalna dla grup
          const markerColor = rodzajColors[p.rodzaj] || colors[p.gmina];
          const markerIcon = rodzajIcons[p.rodzaj] || '';
          const iconHtml = hasNearby && !isSecondary
            ? `<span style="background:${markerColor}" title="${rodzajLabels[p.rodzaj] || p.rodzaj}"><b>2</b></span>`
            : `<span style="background:${markerColor}" title="${rodzajLabels[p.rodzaj] || p.rodzaj}">${markerIcon}</span>`;

          const m=L.marker([p.lat, p.lon],{
            title: hasNearby && !isSecondary ? `${p.name} i okolice` : p.name,
            alt: p.name,
            icon: L.divIcon({
              className: hasNearby && !isSecondary ? 'cemetery-pin cemetery-pin-group' : 'cemetery-pin',
              html: iconHtml,
              iconSize: [26, 26],
              iconAnchor: [13, 13]
            })
          });

          m.bindPopup(popupContent, {minWidth: 210, maxWidth: 300});
          m.on('mouseover', () => m.openPopup());
          m.on('click', () => m.openPopup());
          m.addTo(map);
          markers.set(p.id, m);
        });

        map.fitBounds(boundaries.getBounds(),{padding:[18,18]});
        api.current={map,boundaries,markers,L};
        setReady(true);
      } catch {
        if(active) setError(true);
      }
    };

    start();
    return()=>{active=false;map?.remove();api.current=null};
  },[]);

  useEffect(()=>{
    const a=api.current;
    if(!a)return;

    const layers:any[]=[];
    a.boundaries.eachLayer((l:any)=>{
      const match=l.feature.properties.name===selected;
      l.setStyle({fillOpacity:match?.16:.035,opacity:match?1:.25});
      if(match)layers.push(l);
    });

    points.forEach(p=>{
      const m=a.markers.get(p.id);
      if(p.gmina===selected) m.addTo(a.map);
      else a.map.removeLayer(m);
    });

    if(layers.length) a.map.fitBounds(a.L.featureGroup(layers).getBounds(),{padding:[25,25]});
  },[selected,ready]);

  return (
    <section id="mapa" className="county-section">
      <link rel="stylesheet" href="/vendor/leaflet/leaflet.css"/>
      <div className="county-heading">
        <div>
          <div className="eyebrow">ATLAS MIEJSC PAMIĘCI</div>
          <h2>Cały powiat. Jedna mapa.</h2>
          <p>Wybierz gminę. Najedź na punkt, aby otworzyć kartę cmentarza.</p>
        </div>
        <span className="county-total"><strong>{points.length}</strong> miejsc na mapie · 5 gmin</span>
      </div>

      <div className="county-filters" aria-label="Wybierz gminę na mapie">
        {names.map(n => (
          <button
            key={n}
            aria-pressed={selected===n}
            className={selected===n ? 'chosen' : ''}
            onClick={() => onSelect(n)}
          >
            <i style={{background:colors[n]}}/>
            {n}
            <span>{points.filter(p=>p.gmina===n).length}</span>
          </button>
        ))}
      </div>

      <div className="county-layout">
        <aside className="county-list">
          <div className="county-list-title">
            <strong>Gmina {selected}</strong>
            <small aria-live="polite">Liczba miejsc: {filtered.length}</small>
          </div>
          <div className="county-scroll">
            {filtered.map(p => (
              <button
                key={p.id}
                onClick={() => {
                  const a = api.current;
                  if(a) {
                    a.map.setView([p.lat, p.lon], 15);
                    a.markers.get(p.id).openPopup();
                  }
                }}
              >
                <i style={{background:colors[p.gmina]}}/>
                <span>
                  <strong>{p.name}</strong>
                  <small>{p.gmina} · {p.kind}</small>
                </span>
                <b>↗</b>
              </button>
            ))}
          </div>
        </aside>
        <div
          className="county-map"
          ref={host}
          aria-label="Interaktywna mapa cmentarzy powiatu myszkowskiego"
        >
          {!ready && (
            <div className="map-loading">
              {error
                ? 'Mapa jest chwilowo niedostępna. Lokalizacje znajdziesz na kartach cmentarzy.'
                : 'Wczytywanie mapy powiatu…'
              }
            </div>
          )}
        </div>
      </div>

      <div className="map-legend" aria-label="Legenda rodzajów cmentarzy">
        <span className="map-legend-title">Rodzaje:</span>
        <span className="map-legend-item" style={{['--dot-color' as any]:'#2a6a5a'}}>⛪ Parafialny</span>
        <span className="map-legend-item" style={{['--dot-color' as any]:'#3a6a8a'}}>🏛 Komunalny</span>
        <span className="map-legend-item" style={{['--dot-color' as any]:'#8a3a3a'}}>✚ Wojenny</span>
        <span className="map-legend-item" style={{['--dot-color' as any]:'#8a7030'}}>✡ Żydowski</span>
        <span className="map-legend-item" style={{['--dot-color' as any]:'#6a4a8a'}}>☦ Mariawicki</span>
      </div>

      <div className="county-note">
        <span>Na telefonie dotknij znacznika. Przybliż mapę, aby rozdzielić pobliskie miejsca.</span>
        <span>
          Granice: <a href="https://wody.gios.gov.pl/arcgis/rest/services/MPP/AdministrativeDivisionSHP/MapServer/2" target="_blank" rel="noreferrer">GIOŚ</a> ·
          Punkty: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">© OpenStreetMap, ODbL</a>
        </span>
      </div>

      <p className="map-disclaimer">
        Lokalizacje z OpenStreetMap oraz źródeł wskazanych na kartach, w tym miejsca historyczne.
        Baza: 28 cmentarzy powiatu myszkowskiego. Punkty wskazują teren cmentarza, nie jego bramę.
      </p>
    </section>
  );
}
