// Typy dla Atlasu cmentarzy powiatu myszkowskiego

export type CertaintyLevel = 'wysoka' | 'średnia' | 'niska';

export type FactSource = {
  pole: string;
  informacja: string;
  zrodla: string[];
  pewnosc: CertaintyLevel;
  uwaga: string | null;
};

export type SourceReference = {
  tytul: string;
  url: string;
  typ: string;
  data_dostepu: string;
};

export type CemeteryRodzaj = 'parafialny' | 'komunalny' | 'wojenny' | 'mariawicki' | 'żydowski';

// Typy mediów dla galerii
export type MediaType = 'photo' | 'drone' | 'video';

export type MediaItem = {
  id: string;
  typ: MediaType;
  url: string;
  thumb?: string;           // miniaturka dla filmów
  alt: string;              // opis dla accessibility
  tytul?: string;           // tytuł zdjęcia/filmu
  data?: string;            // data wykonania
  autor?: string;           // autor zdjęcia
  glowne?: boolean;         // czy to zdjęcie główne
};

export type CemeteryGaleria = {
  zdjecie_glowne?: MediaItem;      // główne zdjęcie (np. brama)
  zdjecia_drone?: MediaItem[];     // zdjęcia z drona
  zdjecia?: MediaItem[];           // pozostałe zdjęcia
  filmy?: MediaItem[];             // filmy (drone, inne)
};

export type CemeteryV2 = {
  id: string;
  gmina: string;
  nazwa: string;
  slug: string;
  rodzaj: CemeteryRodzaj;
  lokalizacja: {
    szerokosc: number;
    dlugosc: number;
    wspolrzedne_status: string;
    ulica: string | null;
    nr_porzadkowy: string | null;
  };
  administracja: {
    zarzadca: string | null;
    telefon_publiczny: string | null;
    adres_kancelarii: string | null;
    uwaga: string | null;
  };
  informacje: {
    rok_zalozenia: number | null;
    datowanie_opis: string | null;
    powierzchnia_ha: string | null;
    powierzchnia_historyczna: string | null;
    ochrona: string | null;
    numer_rejestru: string | null;
    wyszukiwarka_grobow: string | null;
    regulamin_url: string | null;
    godziny_otwarcia: string | null;
    status_czynnosci: string | null;
    kaplica: boolean | null;
    kaplica_typ: string | null;  // "przedpogrzebowa", "modlitewna", "przedpogrzebowa i modlitewna"
    // Infrastruktura
    parking: boolean | null;
    toaleta: boolean | null;
    woda: boolean | null;
    dostepnosc: string | null;  // dostępność dla osób z niepełnosprawnościami
    wjazd_samochodem: string | null;  // "tak", "nie", "za zgodą zarządcy"
  };
  teksty: {
    opis_krotki: string;
    opis_rozszerzony: string;
  };
  fakty_zrodlowe: FactSource[];
  kontekst_parafialny: string[];
  ciekawostki: string[];
  uwagi_redakcyjne: string[];
  brakujace_dane: string[];
  zrodla: string[];
  jakosc_karty: 'rozbudowana' | 'częściowa' | 'podstawowa';
  status_publikacji: string;
  galeria?: CemeteryGaleria;
};

export type AtlasMetadata = {
  nazwa: string;
  wersja: string;
  data_opracowania: string;
  liczba_cmentarzy: number;
  uwaga: string;
  slownik_jakosci: {
    rozbudowana: string;
    częściowa: string;
    podstawowa: string;
  };
};

export type GminaCount = {
  nazwa: string;
  liczba: number;
};

export type AtlasData = {
  metadane: AtlasMetadata;
  gminy: GminaCount[];
  zrodla: Record<string, SourceReference>;
  cmentarze: CemeteryV2[];
};
