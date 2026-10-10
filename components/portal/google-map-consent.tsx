"use client";

import {useState} from 'react';
import {ExternalLink,MapPinned,ShieldCheck} from 'lucide-react';

export function GoogleMapConsent({destination,name,zoom=15}:{destination:string;name:string;zoom?:number}){
  const [allowed,setAllowed]=useState(false);
  const encoded=encodeURIComponent(destination);
  const directionsUrl=`https://www.google.com/maps/dir/?api=1&destination=${encoded}`;

  if(allowed){
    return <div className="map-consent map-consent-loaded">
      <iframe
        title={'Mapa Google - '+name}
        className="map-frame"
        loading="lazy"
        referrerPolicy="no-referrer"
        src={`https://maps.google.com/maps?q=${encoded}&z=${zoom}&output=embed`}
      />
    </div>;
  }

  return <div className="map-consent" role="region" aria-label={'Mapa Google - '+name}>
    <div className="map-consent-icon" aria-hidden="true"><MapPinned size={34}/></div>
    <div className="map-consent-copy">
      <div className="eyebrow"><ShieldCheck size={17}/> Prywatność</div>
      <h3>Mapa Google jest wyłączona</h3>
      <p>Załadujemy ją dopiero po Twoim kliknięciu. Google może wtedy otrzymać dane techniczne urządzenia i korzystać z plików cookies.</p>
      <div className="map-consent-actions">
        <button className="btn" type="button" onClick={()=>setAllowed(true)}>Pokaż mapę Google</button>
        <a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">Otwórz w Google Maps <ExternalLink size={17}/></a>
      </div>
      <a className="map-privacy-link" href="/polityka-prywatnosci/#mapy">Jak chronimy prywatność przy mapach</a>
    </div>
  </div>;
}
