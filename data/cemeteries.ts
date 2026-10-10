export type CemeteryRecord = { openingHours?:string; regulationsContent?:{intro:string;source:string;points:{text:string;items?:string[]}[]}; gmina?:string; coordinates?:[number,number]; history?:{title:string;text:string;source:string}[]; feesNote?:string; regulationsNote?:string; additionalPhones?:string[]; phoneNote?:string; addressPending?:boolean; id:string; slug:string; name:string; city:string; district:string; address:string; type:string; image:string; href:string; description:string; parish:string; officeAddress:string; phone:string; email:string; website:string; officeHours:string; graveSearchUrl:string; regulationsUrl:string; regulationsSummary:string; sources:{label:string;url:string;scope:string}[]; lastUpdated:string; administrator?:{role?:string;note?:string;name:string;address:string;phone:string;website:string} };
export const cemeteries:CemeteryRecord[] = [
  {
    "id": "komunalny",
    "slug": "cmentarz-komunalny",
    "name": "Cmentarz Komunalny",
    "city": "Myszków",
    "district": "Komunalny",
    "address": "ul. Jana Pawła II 100",
    "type": "Komunalny",
    "image": "/images/komunalny.webp",
    "href": "/cmentarze/myszkow/cmentarz-komunalny/",
    "description": "SANIKO BIS Sp. z o.o.",
    "parish": "SANIKO BIS Sp. z o.o.",
    "officeAddress": "ul. Prusa 70",
    "phone": "600 065 202",
    "website": "https://www.sanikobis.pl/",
    "email": "bok@sanikobis.pl",
    "officeHours": "Biuro obsługi klienta: poniedziałek-piątek 7:00-15:00, z wyjątkiem dni ustawowo wolnych.",
    "graveSearchUrl": "https://myszkow.grobonet.com/",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "SANIKO BIS - kontakt",
        "url": "https://www.sanikobis.pl/kategorie/kontakt",
        "scope": "Biuro obsługi klienta, e-mail, godziny pracy i telefon całodobowy"
      },
      {
        "label": "SANIKO BIS - cmentarz",
        "url": "https://www.sanikobis.pl/kategorie/cmentarz-komunalny",
        "scope": "Zarządzanie cmentarzem i wyszukiwarka Grobonet"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/224827871",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "gmina": "Myszków",
    "additionalPhones": [
      "608 035 527"
    ],
    "phoneNote": "600 065 202 - biuro obsługi klienta; 608 035 527 - telefon całodobowy.",
    "coordinates": [
      50.5893252,
      19.325466
    ],
    "administrator": {
      "name": "SANIKO BIS Sp. z o.o.",
      "role": "Administrator cmentarza",
      "address": "ul. Prusa 70, 42-300 Myszków",
      "phone": "600 065 202",
      "website": "https://www.sanikobis.pl/kategorie/cmentarz-komunalny",
      "note": "SANIKO BIS podaje osobny telefon całodobowy: 608 035 527."
    }
  },
  {
    "id": "mrzyglod",
    "slug": "cmentarz-mrzyglod",
    "name": "Cmentarz Mrzygłód",
    "city": "Myszków",
    "district": "Mrzygłód",
    "address": "ul. Cmentarna 33",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/myszkow/cmentarz-mrzyglod/",
    "description": "Parafia NMP Różańcowej w Myszkowie-Mrzygłodzie",
    "parish": "Parafia NMP Różańcowej w Myszkowie-Mrzygłodzie",
    "history": [
      {
        "title": "Miejsca pamięci i odnowa",
        "text": "Na cmentarzu znajduje się grób wojenny upamiętniający partyzantów rozstrzelanych przez Niemców 27 czerwca 1944 roku podczas pacyfikacji Mrzygłódki. Miejsce poświęcono także pamięci osób zamordowanych w obozach oraz żołnierzy poległych podczas I i II wojny światowej. W 2013 roku odnowiono alejki cmentarne.",
        "source": "Oficjalna strona internetowa parafii"
      }
    ],
    "officeAddress": "ul. Królowej Jadwigi 9",
    "phone": "34 313 92 84",
    "website": "https://sanktuariummrzyglod.pl/",
    "email": "",
    "officeHours": "",
    "graveSearchUrl": "https://mogily.pl/mrzyglod",
    "regulationsUrl": "https://mogily.pl/mrzyglod/informacje",
    "regulationsSummary": "Zasady korzystania z cmentarza i sprawy dotyczące grobów opisano w sekcji Informacje serwisu Mogiły.pl. Przed załatwieniem formalności sprawdź aktualne warunki w kancelarii parafialnej.",
    "sources": [
      {
        "label": "Sanktuarium Mrzygłód",
        "url": "https://sanktuariummrzyglod.pl/?page_id=494",
        "scope": "Nazwa parafii i sprawy cmentarne"
      },
      {
        "label": "Lilia - wykaz parafii",
        "url": "https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/",
        "scope": "Adres kancelarii i telefon"
      },
      {
        "label": "Lilia - informacja o lokalizacji",
        "url": "https://liliamyszkow.com/nekrolog/stanislawa-borowka/",
        "scope": "Adres cmentarza"
      },
      {
        "label": "Mogiły.pl",
        "url": "https://mogily.pl/mrzyglod",
        "scope": "Wyszukiwarka grobów"
      },
      {
        "label": "Mogiły.pl - kontakt do zarządcy",
        "url": "https://mogily.pl/mrzyglod/kontakt",
        "scope": "Parafia jako zarządca, ksiądz proboszcz jako administrator i telefon 34 313 92 84"
      },
      {
        "label": "Mogiły.pl - informacje i regulamin",
        "url": "https://mogily.pl/mrzyglod/informacje",
        "scope": "Zasady korzystania z cmentarza w Mrzygłodzie"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/225029357",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "27 września 2026",
    "additionalPhones": [
      "608 450 004"
    ],
    "gmina": "Myszków",
    "coordinates": [
      50.5383846,
      19.3635006
    ],
    "administrator": {
      "name": "Ksiądz proboszcz / Parafia NMP Różańcowej",
      "role": "Administrator cmentarza",
      "address": "ul. Królowej Jadwigi 9, 42-300 Myszków",
      "phone": "34 313 92 84",
      "website": "https://mogily.pl/mrzyglod/kontakt",
      "note": "Mogiły.pl wskazuje parafię jako zarządcę, a księdza proboszcza jako administratora cmentarza."
    }
  },
  {
    "id": "sw-stanislawa",
    "slug": "cmentarz-sw-stanislawa",
    "name": "Cmentarz św. Stanisława",
    "city": "Myszków",
    "district": "Św. Stanisława",
    "address": "ul. Sikorskiego / ul. Hubala",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/myszkow/cmentarz-sw-stanislawa/",
    "description": "Parafia św. Stanisława Biskupa i Męczennika",
    "parish": "Parafia św. Stanisława Biskupa i Męczennika",
    "history": [
      {
        "title": "Najstarsza nekropolia w Myszkowie",
        "text": "Cmentarz został założony w 1910 roku, a najstarsze zachowane nagrobki pochodzą z 1911 roku. Znajdują się tu również zbiorowe mogiły żołnierzy poległych podczas I wojny światowej.",
        "source": "cmentarze24.pl"
      }
    ],
    "officeAddress": "ul. Stefana Wyszyńskiego 7",
    "phone": "34 313 10 21",
    "website": "https://www.facebook.com/sw.StanislawBMMyszkow",
    "email": "",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "Cmentarze24",
        "url": "https://cmentarze24.pl/index.php/cmentarze/slaskie/item/1187-cmentarz-sw-stanislawa-biskupa-i-meczennika-myszkow",
        "scope": "Położenie cmentarza i zarządca"
      },
      {
        "label": "Lilia - wykaz parafii",
        "url": "https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/",
        "scope": "Adres parafii i telefon"
      },
      {
        "label": "Dodane przez administratora serwisu",
        "url": "",
        "scope": "Sławek Dębiński - opiekun cmentarza, tel. 507 136 042; dodano 26 września 2026"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/67999246",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "additionalPhones": [
      "507 090 933"
    ],
    "gmina": "Myszków",
    "coordinates": [
      50.5802939,
      19.3392886
    ],
    "administrator": {
      "name": "Sławek Dębiński",
      "role": "Opiekun cmentarza",
      "address": "",
      "phone": "507 136 042",
      "website": "",
      "note": "Dodane przez administratora serwisu - 26 września 2026."
    }
  },
  {
    "id": "bedusz",
    "slug": "cmentarz-bedusz",
    "name": "Cmentarz Będusz",
    "city": "Myszków",
    "district": "Będusz",
    "address": "ul. Stefana Czarnieckiego - okolice nr 120",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/myszkow/cmentarz-bedusz/",
    "description": "Parafia św. Anny w Myszkowie-Będuszu",
    "parish": "Parafia św. Anny w Myszkowie-Będuszu",
    "officeAddress": "ul. Wyzwolenia 56",
    "phone": "34 313 80 70",
    "website": "https://www.parafiabedusz.info/",
    "email": "parafia.anna.myszkow@gmail.com",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "Parafia św. Anny",
        "url": "https://www.parafiabedusz.info/",
        "scope": "Nazwa i kontakt do parafii"
      },
      {
        "label": "Lilia - informacja o lokalizacji",
        "url": "https://liliamyszkow.com/nekrolog/stefan-palka/",
        "scope": "Lokalizacja cmentarza; numer porządkowy do potwierdzenia"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/220028325",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "gmina": "Myszków",
    "coordinates": [
      50.5438858,
      19.3053825
    ]
  },
  {
    "id": "nowa-wies",
    "slug": "cmentarz-nowa-wies",
    "name": "Cmentarz Nowa Wieś",
    "city": "Myszków",
    "district": "Nowa Wieś",
    "address": "ul. Koziegłowska",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/myszkow/cmentarz-nowa-wies/",
    "description": "Parafia Trójcy Przenajświętszej w Myszkowie",
    "parish": "Parafia Trójcy Przenajświętszej w Myszkowie",
    "history": [
      {
        "title": "Powstanie parafii",
        "text": "Wikariat terenowy utworzono w 1975 roku, a parafię Trójcy Przenajświętszej erygowano 27 października 1985 roku. Cmentarz znajduje się około 500 metrów od kościoła, przy ulicy Koziegłowskiej.",
        "source": "Oficjalna strona Parafii Trójcy Przenajświętszej w Myszkowie"
      }
    ],
    "officeAddress": "ul. Nowowiejska 32",
    "phone": "666 685 788",
    "website": "https://www.parafianowawies.pl/",
    "email": "admin@parafianowawies.pl",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "Parafia Trójcy Przenajświętszej",
        "url": "https://www.parafianowawies.pl/o-parafii/",
        "scope": "Adres cmentarza, nazwa parafii i dane kontaktowe"
      },
      {
        "label": "Lilia - wykaz parafii",
        "url": "https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/",
        "scope": "Dodatkowy telefon do parafii"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/1210801086",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "additionalPhones": [
      "602 103 730"
    ],
    "gmina": "Myszków",
    "coordinates": [
      50.6036202,
      19.2939155
    ]
  },
  {
    "id": "swiatowit",
    "slug": "cmentarz-swiatowit",
    "name": "Cmentarz Światowit",
    "city": "Myszków",
    "district": "Światowit",
    "address": "ul. Graniczna",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/myszkow/cmentarz-swiatowit/",
    "description": "Parafia św. Andrzeja Boboli w Myszkowie",
    "parish": "Parafia św. Andrzeja Boboli w Myszkowie",
    "officeAddress": "ul. Papieska 1",
    "phone": "505 247 324",
    "website": "https://swandrzejbobola.pl/",
    "email": "",
    "officeHours": "Poniedziałek, środa, piątek: 16:00-16:30. W pilnych sprawach kontakt telefoniczny.",
    "graveSearchUrl": "",
    "regulationsUrl": "https://swandrzejbobola.pl/cmentarz/",
    "regulationsSummary": "Parafia prosi o zachowanie ciszy i porządku. Prace budowlane wymagają zgody administracji cmentarza.",
    "sources": [
      {
        "label": "Parafia - cmentarz",
        "url": "https://swandrzejbobola.pl/cmentarz/",
        "scope": "Właściciel, administrator i zasady prac"
      },
      {
        "label": "Parafia św. Andrzeja Boboli",
        "url": "https://swandrzejbobola.pl/",
        "scope": "Adres parafii, telefon i godziny kancelarii"
      },
      {
        "label": "Lilia - informacja o lokalizacji",
        "url": "https://liliamyszkow.com/nekrolog/paulina-czerniak/",
        "scope": "Adres cmentarza"
      },
      {
        "label": "Lilia - wykaz parafii",
        "url": "https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/",
        "scope": "Dodatkowy telefon do parafii"
      },
      {
        "label": "Dodane przez administratora serwisu",
        "url": "",
        "scope": "Andrzej Krakowiak - grabarz, tel. 696 445 211; dodano 27 września 2026"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/222011950",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "27 września 2026",
    "additionalPhones": [
      "34 313 03 09"
    ],
    "gmina": "Myszków",
    "coordinates": [
      50.5787603,
      19.3585494
    ],
    "administrator": {
      "name": "Andrzej Krakowiak",
      "role": "Grabarz",
      "address": "",
      "phone": "696 445 211",
      "website": "",
      "note": "Dodane przez administratora serwisu - 27 września 2026. Właścicielem i administratorem cmentarza jest Parafia św. Andrzeja Boboli."
    }
  },
  {
    "id": "mijaczow",
    "slug": "cmentarz-mijaczow",
    "name": "Cmentarz Mijaczów",
    "city": "Myszków",
    "district": "Mijaczów",
    "address": "ul. Wyzwolenia",
    "type": "Parafialny",
    "image": "/images/mijaczow.webp",
    "href": "/cmentarze/myszkow/cmentarz-mijaczow/",
    "description": "Parafia Narodzenia Najświętszej Maryi Panny w Myszkowie-Mijaczowie",
    "parish": "Parafia Narodzenia Najświętszej Maryi Panny w Myszkowie-Mijaczowie",
    "officeAddress": "ul. Pułaskiego 5",
    "phone": "508 585 873",
    "website": "https://parafiamijaczow.pl/",
    "email": "",
    "officeHours": "",
    "graveSearchUrl": "https://www.ecmentarze.pl/cmentarz/myszkow",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "eCmentarze - kontakt",
        "url": "https://www.ecmentarze.pl/cmentarz/myszkow/kontakt",
        "scope": "Zarządca, administrator, adresy biur i telefony"
      },
      {
        "label": "Lilia - cmentarz Mijaczów",
        "url": "https://liliamyszkow.com/cmentarz-mijaczow/",
        "scope": "Adres cmentarza i obsługa administracyjna"
      },
      {
        "label": "Lilia - wykaz parafii",
        "url": "https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/",
        "scope": "Alternatywne numery parafii; rozbieżność z eCmentarze do potwierdzenia"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/225029356",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "administrator": {
      "name": "Dom Pogrzebowy Lilia",
      "address": "ul. Krasickiego 95F, 42-300 Myszków",
      "phone": "518 518 208",
      "website": "https://liliamyszkow.com/cmentarz-mijaczow/"
    },
    "additionalPhones": [
      "34 313 15 15",
      "533 955 389"
    ],
    "phoneNote": "Numery z wykazu parafii Lilia: 34 313 15 15 i 533 955 389. eCmentarze podaje 508 585 873. Aktualność kontaktu do parafii wymaga potwierdzenia. Kontakt do administratora Lilia jest podany osobno.",
    "gmina": "Myszków",
    "coordinates": [
      50.559663,
      19.321451
    ],
    "regulationsNote": "Serwis eCmentarze ma zakładkę regulaminu, ale obecnie informuje o braku dokumentu. Aktualne zasady potwierdź u administratora."
  },
  {
    "id": "ciszowka",
    "slug": "cmentarz-ciszowka",
    "name": "Cmentarz Ciszówka",
    "city": "Myszków",
    "district": "Ciszówka",
    "address": "ul. Pohulańska 33",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/myszkow/cmentarz-ciszowka/",
    "description": "Parafia Męczeństwa św. Jana Chrzciciela",
    "parish": "Parafia Męczeństwa św. Jana Chrzciciela w Myszkowie",
    "officeAddress": "ul. Piękna 12",
    "phone": "34 313 00 89",
    "website": "http://www.ciszowka.webd.pl/",
    "email": "",
    "officeHours": "16:00 - 16:30. W niedziele i święta kancelaria nieczynna.",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "Lilia - wykaz parafii",
        "url": "https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/",
        "scope": "Nazwa parafii, adres kancelarii i telefon"
      },
      {
        "label": "Gazeta Myszkowska - informacja o cmentarzu",
        "url": "https://www.gazetamyszkowska.pl/artykul/6237,policjanci-karza-za-lamanie-zakazow-zwiazanych-z-epidemia",
        "scope": "Wzmianka o cmentarzu parafii na Ciszówce; artykuł archiwalny"
      },
      {
        "label": "Lilia - lokalizacja cmentarza Ciszówka",
        "url": "https://liliamyszkow.com/nekrolog/miroslaw-skorek/",
        "scope": "Adres cmentarza i odnośnik do jego lokalizacji; odrębnie wskazany adres kościoła"
      },
      {
        "label": "Google Maps - Cmentarz Parafii św. Jana Chrzciciela",
        "url": "https://maps.app.goo.gl/x1EXBMjsjL6eqDVD9",
        "scope": "Lokalizacja cmentarza na Ciszówce; link przekazany przez redakcję"
      }
    ],
    "lastUpdated": "26 września 2026",
    "addressPending": false,
    "gmina": "Myszków",
    "coordinates": [
      50.5647505,
      19.3348839
    ],
    "openingHours": "Codziennie od 7:00 do zmroku",
    "feesNote": "Przekazany regulamin przewiduje opłaty za pochowanie (pokładne) i wybudowanie pomnika. Nie podaje ich wysokości.",
    "regulationsContent": {
      "intro": "Cmentarz jest miejscem grzebania zmarłych. Należy zachować ciszę, porządek i powagę.",
      "source": "Treść regulaminu przekazana przez redakcję Lilia 26 września 2026. W przekazanej treści nie podano daty wejścia w życie.",
      "points": [
        {
          "text": "Administratorem cmentarza jest Proboszcz Parafii Męczeństwa św. Jana Chrzciciela w Myszkowie."
        },
        {
          "text": "Na cmentarzu wolno przebywać każdego dnia od godz. 7.00 do zmroku."
        },
        {
          "text": "Należy uzyskać zgodę zarządcy cmentarza na wszelkie prace prowadzone na cmentarzu, np.:",
          "items": [
            "pogrzeb",
            "ekshumację zwłok bądź przeniesienie do innego grobu",
            "budowę nowego pomnika",
            "remont pomnika, np.: naprawa bądź wymiana płyty, tablicy itp.",
            "budowę ławek, kwietników i innych elementów zdobniczych przy grobie (budowane bez zgody mogą być rozebrane)."
          ]
        },
        {
          "text": "Przy budowie nowego grobowca należy:",
          "items": [
            "zachować linię sąsiednich grobów",
            "wywieźć ziemię z cmentarza w przypadku, gdy grób jest wymurowany wewnątrz."
          ]
        },
        {
          "text": "Prace budowlane i remontowe wolno prowadzić w dni powszednie w porozumieniu z grabarzem."
        },
        {
          "text": "Pozostały po remoncie lub rozbiórce gruz ze starego pomnika należy wywieźć z cmentarza."
        },
        {
          "text": "Za pochowanie na cmentarzu (pokładne) i za wybudowanie pomnika itd. pobierane są opłaty."
        },
        {
          "text": "Zabrania się:",
          "items": [
            "pozostawiania dzieci do lat siedmiu bez opieki",
            "wjazdu pojazdami mechanicznymi lub konnymi bez zgody zarządcy cmentarza",
            "wprowadzania zwierząt",
            "zanieczyszczania cmentarza."
          ]
        },
        {
          "text": "Nieczystości - zwiędłe kwiaty itp. składamy w miejscu do tego wyznaczonym."
        },
        {
          "text": "Za opiekę i estetyczny wygląd grobu odpowiada rodzina zmarłego."
        }
      ]
    }
  },
  {
    "id": "choron",
    "slug": "cmentarz-choron",
    "name": "Cmentarz parafialny w Choroniu",
    "city": "Choroń",
    "gmina": "Poraj",
    "district": "Choroń",
    "address": "Adres uliczny do potwierdzenia",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/choron/cmentarz-choron/",
    "description": "Parafia św. Jana Chrzciciela w Choroniu",
    "parish": "Parafia św. Jana Chrzciciela w Choroniu",
    "history": [
      {
        "title": "Fundacja rodziny Bylińskich",
        "text": "Na początku XX wieku rodzina Bylińskich wspierała rozwój miejscowej wspólnoty. W latach 1903-1913 sfinansowała remont kościoła, przekazała grunty pod plebanię i zabudowania parafialne oraz wydzieliła parcele przeznaczone na cmentarz grzebalny. Samodzielna parafia w Choroniu została erygowana w czerwcu 1916 roku.",
        "source": "Aktywny Poraj"
      }
    ],
    "officeAddress": "ul. Częstochowska 3, 42-360 Choroń",
    "phone": "34 314 56 93",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "https://www.ecmentarze.pl/cmentarz/choron",
    "regulationsUrl": "https://www.ecmentarze.pl/cmentarz/choron/regulamin",
    "regulationsSummary": "Zarząd sprawuje proboszcz w imieniu parafii. Prace przy nagrobkach wymagają wcześniejszych ustaleń, a wjazd pojazdem - zgody zarządcy. Odpady należy odkładać w wyznaczonych miejscach.",
    "sources": [
      {
        "label": "eCmentarze - karta cmentarza",
        "url": "https://www.ecmentarze.pl/cmentarz/choron",
        "scope": "Nazwa cmentarza, parafia, wyszukiwarka i lokalizacja"
      },
      {
        "label": "eCmentarze - kontakt",
        "url": "https://www.ecmentarze.pl/cmentarz/choron/kontakt",
        "scope": "Adres parafii i dane kontaktowe; adres parafii nie jest adresem cmentarza"
      },
      {
        "label": "Regulamin cmentarza w Choroniu",
        "url": "https://www.ecmentarze.pl/cmentarz/choron/regulamin",
        "scope": "Zarządca, zasady prac i wjazdu"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/517078370",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "27 września 2026",
    "coordinates": [
      50.695353,
      19.25366
    ],
    "administrator": {
      "name": "Proboszcz Parafii św. Jana Chrzciciela",
      "role": "Zarządca cmentarza",
      "address": "ul. Częstochowska 3, 42-360 Choroń",
      "phone": "34 314 56 93",
      "website": "https://www.ecmentarze.pl/cmentarz/choron/regulamin",
      "note": "Regulamin wskazuje proboszcza jako osobę wykonującą czynności administracyjne w imieniu parafii."
    }
  },
  {
    "id": "poraj",
    "slug": "cmentarz-poraj",
    "name": "Cmentarz parafialny w Poraju",
    "city": "Poraj",
    "gmina": "Poraj",
    "district": "Poraj",
    "address": "Adres uliczny do potwierdzenia",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/poraj/cmentarz-poraj/",
    "description": "Parafia Najświętszego Serca Pana Jezusa w Poraju",
    "parish": "Parafia Najświętszego Serca Pana Jezusa w Poraju",
    "officeAddress": "ul. Kościelna 7, 42-360 Poraj",
    "phone": "34 314 50 13",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "https://poraj.grobonet.com/grobonet/start.php",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "Grobonet - Poraj",
        "url": "https://poraj.grobonet.com/kontakt.php",
        "scope": "Parafia, adres biura, telefon i wyszukiwarka grobów"
      },
      {
        "label": "Grobonet - cennik",
        "url": "https://poraj.grobonet.com/cennik.php",
        "scope": "Brak opublikowanych stawek"
      },
      {
        "label": "Grobonet - regulamin",
        "url": "https://poraj.grobonet.com/regulamin.php",
        "scope": "Zakładka bez treści regulaminu"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/329434159",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "coordinates": [
      50.6720037,
      19.2115709
    ],
    "feesNote": "Serwis Grobonet ma zakładkę cennika, ale podczas sprawdzania widniała w niej informacja „Dział w budowie”. Stawki należy uzyskać w parafii.",
    "regulationsNote": "Zakładka regulaminu w serwisie Grobonet jest oznaczona jako „w budowie”. Poproś parafię o aktualny dokument."
  },
  {
    "id": "siedlec-duzy",
    "slug": "cmentarz-siedlec-duzy",
    "name": "Cmentarz parafialny w Siedlcu Dużym",
    "city": "Siedlec Duży",
    "gmina": "Koziegłowy",
    "district": "Siedlec Duży",
    "address": "Adres uliczny do potwierdzenia",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/siedlec-duzy/cmentarz-siedlec-duzy/",
    "description": "Parafia Podwyższenia Krzyża Świętego w Siedlcu Dużym",
    "parish": "Parafia Podwyższenia Krzyża Świętego w Siedlcu Dużym",
    "officeAddress": "ul. Jana Pawła II 62, 42-350 Siedlec Duży",
    "phone": "34 314 11 64",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "https://www.ecmentarze.pl/cmentarz/siedlec-duzy",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "eCmentarze - karta cmentarza",
        "url": "https://www.ecmentarze.pl/cmentarz/siedlec-duzy",
        "scope": "Nazwa cmentarza, parafia, wyszukiwarka i lokalizacja"
      },
      {
        "label": "eCmentarze - kontakt",
        "url": "https://www.ecmentarze.pl/cmentarz/siedlec-duzy/kontakt",
        "scope": "Adres parafii i dane kontaktowe; adres parafii nie jest adresem cmentarza"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/1239708368",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "coordinates": [
      50.632035,
      19.13199
    ]
  },
  {
    "id": "gniazdow",
    "slug": "cmentarz-gniazdow",
    "name": "Cmentarz rzymskokatolicki w Gniazdowie",
    "city": "Gniazdów",
    "gmina": "Koziegłowy",
    "district": "Gniazdów",
    "address": "Adres uliczny do potwierdzenia",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/gniazdow/cmentarz-gniazdow/",
    "description": "Parafia Najświętszego Serca Pana Jezusa w Gniazdowie",
    "parish": "Parafia Najświętszego Serca Pana Jezusa w Gniazdowie",
    "officeAddress": "ul. Szkolna 58, 42-350 Gniazdów",
    "phone": "513 135 661",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "https://www.ecmentarze.pl/cmentarz/gniazdow",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "eCmentarze - karta cmentarza",
        "url": "https://www.ecmentarze.pl/cmentarz/gniazdow",
        "scope": "Nazwa cmentarza, parafia, wyszukiwarka i lokalizacja"
      },
      {
        "label": "eCmentarze - kontakt",
        "url": "https://www.ecmentarze.pl/cmentarz/gniazdow/kontakt",
        "scope": "Adres parafii i dane kontaktowe; adres parafii nie jest adresem cmentarza"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/318832604",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "coordinates": [
      50.602291,
      19.109954
    ]
  },
  {
    "id": "gniazdow-mariawicki",
    "slug": "cmentarz-gniazdow-mariawicki",
    "name": "Cmentarz mariawicki w Gniazdowie",
    "city": "Gniazdów",
    "gmina": "Koziegłowy",
    "district": "Gniazdów",
    "address": "Adres uliczny do potwierdzenia",
    "type": "Mariawicki",
    "image": "",
    "href": "/cmentarze/gniazdow-mariawicki/cmentarz-gniazdow-mariawicki/",
    "description": "Osobny cmentarz Kościoła Starokatolickiego Mariawitów. Nie należy go mylić z cmentarzem rzymskokatolickim w Gniazdowie.",
    "parish": "Parafia św. Marii Magdaleny - Kościół Starokatolicki Mariawitów",
    "officeAddress": "",
    "phone": "",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "Kościół Starokatolicki Mariawitów",
        "url": "https://mariawita.pl/2006_jubileusz.php",
        "scope": "Wezwanie parafii w Gniazdowie"
      },
      {
        "label": "OpenStreetMap",
        "url": "https://www.openstreetmap.org/way/318832603",
        "scope": "Nazwa, wyznanie i położenie cmentarza"
      }
    ],
    "lastUpdated": "26 września 2026",
    "coordinates": [
      50.6031232,
      19.1298607
    ]
  },
  {
    "id": "kozieglowki",
    "slug": "cmentarz-kozieglowki",
    "name": "Cmentarz parafialny w Koziegłówkach",
    "city": "Koziegłówki",
    "gmina": "Koziegłowy",
    "district": "Koziegłówki",
    "address": "Adres uliczny do potwierdzenia",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/kozieglowki/cmentarz-kozieglowki/",
    "description": "Parafia św. Antoniego z Padwy w Koziegłówkach",
    "parish": "Parafia św. Antoniego z Padwy w Koziegłówkach",
    "officeAddress": "ul. Rynek 20, 42-350 Koziegłówki",
    "phone": "34 314 13 06",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "https://www.ecmentarze.pl/cmentarz/sw-antoni-kozieglowki",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "eCmentarze - karta cmentarza",
        "url": "https://www.ecmentarze.pl/cmentarz/sw-antoni-kozieglowki",
        "scope": "Nazwa cmentarza, parafia, wyszukiwarka i lokalizacja"
      },
      {
        "label": "eCmentarze - kontakt",
        "url": "https://www.ecmentarze.pl/cmentarz/sw-antoni-kozieglowki/kontakt",
        "scope": "Adres parafii i dane kontaktowe; adres parafii nie jest adresem cmentarza"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/129896469",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "coordinates": [
      50.584314,
      19.187003
    ],
    "administrator": {
      "name": "Marcin Kurek - opiekun cmentarza",
      "address": "",
      "phone": "600 652 659",
      "website": "https://www.ecmentarze.pl/cmentarz/sw-antoni-kozieglowki/kontakt"
    }
  },
  {
    "id": "pinczyce",
    "slug": "cmentarz-pinczyce",
    "name": "Cmentarz parafialny w Pińczycach",
    "city": "Pińczyce",
    "gmina": "Koziegłowy",
    "district": "Pińczyce",
    "address": "ul. Śląska 21 (według Targeo)",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/pinczyce/cmentarz-pinczyce/",
    "description": "Parafia św. Michała Archanioła w Pińczycach",
    "parish": "Parafia św. Michała Archanioła w Pińczycach",
    "officeAddress": "ul. Kościelna 4, 42-350 Pińczyce",
    "phone": "34 314 35 34",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "Targeo - cmentarz w Pińczycach",
        "url": "https://mapa.targeo.pl/parafialny-w-pinczycach-slaska-21-42-350-pinczyce~4663511/cmentarz/adres",
        "scope": "Adres cmentarza; wpis źródłowy aktualizowany 02.04.2017 - numer wymaga potwierdzenia"
      },
      {
        "label": "Wykaz parafii - Pińczyce",
        "url": "https://parafia.com.pl/pinczyce",
        "scope": "Wezwanie parafii, adres kancelarii i telefon"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/306214866",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "26 września 2026",
    "coordinates": [
      50.5376833,
      19.2277054
    ]
  },
  {
    "id": "przybynow",
    "slug": "cmentarz-przybynow",
    "name": "Cmentarz parafialny w Przybynowie",
    "city": "Przybynów",
    "gmina": "Żarki",
    "district": "Przybynów",
    "address": "ul. Żarecka (według Narodowego Instytutu Dziedzictwa)",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/przybynow/cmentarz-przybynow/",
    "description": "Parafia św. Mikołaja w Przybynowie",
    "parish": "Parafia św. Mikołaja w Przybynowie",
    "officeAddress": "ul. Częstochowska 2, 42-310 Przybynów",
    "phone": "34 314 88 35",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "sources": [
      {
        "label": "Narodowy Instytut Dziedzictwa - Zabytek.pl",
        "url": "https://zabytek.pl/pl/obiekty/cmentarz-rzymskokatolick-694900",
        "scope": "Cmentarz rzymskokatolicki w Przybynowie, ul. Żarecka"
      },
      {
        "label": "Lilia - wykaz parafii",
        "url": "https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/",
        "scope": "Kontakt do parafii"
      },
      {
        "label": "Epitafium - usługi grabarskie",
        "url": "https://www.epitafium.net/",
        "scope": "Opieka i usługi grabarskie na cmentarzu w Przybynowie; telefon 506 148 634"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/391069606",
        "scope": "Położenie terenu cmentarza na mapie; punkt nie oznacza potwierdzonego wejścia"
      }
    ],
    "lastUpdated": "27 września 2026",
    "coordinates": [
      50.6489418,
      19.318319
    ],
    "additionalPhones": [
      "608 321 884"
    ],
    "administrator": {
      "name": "Epitafium - Damian Rajczyk",
      "role": "Usługi grabarskie / opieka",
      "address": "ul. Skargi 9, 42-360 Poraj",
      "phone": "506 148 634",
      "website": "https://www.epitafium.net/",
      "note": "Firma publikuje informację, że opiekuje się cmentarzem w Przybynowie i wykonuje tam usługi grabarskie. Zarządcą pozostaje parafia."
    },
    "history": [
      {
        "title": "Cmentarz w opisie z 1938 roku",
        "text": "Przytoczona publikacja wiąże początki cmentarza z połową XVIII wieku. Opisuje nekropolię położoną poza wsią przy drodze do Żarek, dwukrotnie powiększaną. Wspomina kamienny most prowadzący do żelaznej bramy, ogrodzenie oraz groby dawnych proboszczów: Konstantego Nawrockiego i Kazimierza Kucewicza. To opis stanu historycznego, nie dzisiejszego wyposażenia cmentarza.",
        "source": "Źródło: „Parafia św. Mikołaja b-pa i kościół p. w. św. ap. Piotra i Pawła w Przybynowie (k/Żarek) diecezji częstochowskiej”, 1938. Fragment przekazany redakcji; bez weryfikacji skanu całej publikacji."
      },
      {
        "title": "Ślad metrykalny z 1774 roku",
        "text": "Według przekazanego redakcji odczytu księgi zgonów zapis z 6 maja 1774 r. dotyczy pochówku na starym cmentarzu (akt 13), a zapis z 20 maja - pochówku Agnieszki Łepkowskiej na nowym cmentarzu (akt 14). Kolejny wskazany zapis pochówku na nowym cmentarzu nosi datę 27 czerwca 1774 r. (akt 16). Wskazuje to na użytkowanie nowego cmentarza już w maju 1774 r., lecz samo w sobie nie dowodzi daty jego założenia ani pierwszego pochówku.",
        "source": "Ustalenie genealogiczne przekazane redakcji. Daty i odczyt wymagają porównania ze skanami aktów 13, 14 i 16 z 1774 r."
      }
    ]
  },
  {
    "id": "zarki",
    "slug": "cmentarz-zarki",
    "name": "Cmentarz parafialny w Żarkach",
    "city": "Żarki",
    "gmina": "Żarki",
    "district": "Żarki",
    "address": "ul. Ofiar Katynia",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/zarki/cmentarz-zarki/",
    "description": "Zabytkowy cmentarz przy ul. Ofiar Katynia, założony w 1819 roku. Wpisany do rejestru zabytków.",
    "parish": "Parafia Świętych Apostołów Szymona i Judy Tadeusza w Żarkach",
    "officeAddress": "ul. Leśniowska 1, 42-310 Żarki",
    "phone": "34 314 80 16",
    "email": "",
    "website": "https://www.parafiazarki.pl/",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "coordinates": [
      50.624815,
      19.3730043
    ],
    "history": [
      {
        "title": "Od 1819 roku",
        "text": "Cmentarz założono w 1819 roku, około 700 metrów od ówczesnego centrum Żarek. Zajmuje ponad 2,5 ha i jest otoczony murem z łamanego wapienia. Rozbudowano go ku wschodowi w 1876 roku, budując kostnicę, oraz w 1899 roku, przenosząc wejście z południa na zachód.",
        "source": "Turystyka Żarki - oficjalny portal Miasta i Gminy Żarki."
      },
      {
        "title": "Najstarsze nagrobki",
        "text": "W zachodniej, najstarszej części zachowały się nagrobki Justyny Groty Włockiej (1846), Xawerego Groty Włockiego (1855) i Rudolfa Stanisława Franaszka (1863). Wraz z Franaszkiem spoczywa dziewięciu powstańców styczniowych. Rosyjskie i niemieckie inskrypcje z przełomu XIX i XX wieku przypominają o wielonarodowej społeczności miasta.",
        "source": "Opracowanie na podstawie opisu turystykazarki.pl."
      },
      {
        "title": "Miejsca pamięci",
        "text": "Spoczywają tu mieszkańcy, żołnierze i ofiary wojen światowych. W mogile żołnierzy Września umieszczono ziemię z Katynia ku pamięci sześciu zamordowanych żarczan. Osobną kwaterę mają paulini z Leśniowa; pochowano tu również miejscowych księży. Po lewej stronie wejścia stoi obelisk upamiętniający rozstrzelanie przez Niemców ponad stu mieszkańców Żarek i okolic na początku września 1939 roku.",
        "source": "Opracowanie na podstawie opisu turystykazarki.pl."
      }
    ],
    "sources": [
      {
        "label": "Turystyka Żarki - historia cmentarza",
        "url": "https://www.turystykazarki.pl/artykuly/122",
        "scope": "Adres, data założenia, powierzchnia, rozbudowa i miejsca pamięci"
      },
      {
        "label": "Parafia w Żarkach",
        "url": "https://www.parafiazarki.pl/",
        "scope": "Wezwanie parafii"
      },
      {
        "label": "Lilia - parafie Myszkowa i okolic",
        "url": "https://liliamyszkow.com/porady/parafie-myszkow-i-okolice-adresy-telefony/",
        "scope": "Adres i telefon parafii"
      },
      {
        "label": "Źródło lokalizacji",
        "url": "https://www.openstreetmap.org/way/67867877",
        "scope": "Położenie terenu cmentarza; punkt nie oznacza potwierdzonego wejścia"
      },
      {
        "label": "Google Maps - link do cmentarza",
        "url": "https://maps.app.goo.gl/y5rcc9cihLx5qcj56",
        "scope": "Link przekazany przez redakcję"
      }
    ],
    "lastUpdated": "26 września 2026"
  },
  {
    "id": "lgota-mokrzesz",
    "slug": "cmentarz-lgota-mokrzesz",
    "name": "Cmentarz parafialny w Lgocie-Mokrzeszy",
    "city": "Lgota-Mokrzesz",
    "gmina": "Koziegłowy",
    "district": "Lgota-Mokrzesz",
    "address": "Adres uliczny do potwierdzenia",
    "addressPending": true,
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/lgota-mokrzesz/cmentarz-lgota-mokrzesz/",
    "description": "Parafia św. Jana Chrzciciela w Lgocie-Mokrzeszy",
    "parish": "Parafia św. Jana Chrzciciela w Lgocie-Mokrzeszy",
    "officeAddress": "ul. Szkolna 1, 42-350 Lgota-Mokrzesz",
    "phone": "508 220 891",
    "website": "",
    "email": "",
    "officeHours": "",
    "graveSearchUrl": "https://www.ecmentarze.pl/cmentarz/lgota-mokrzesz",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "coordinates": [
      50.603966,
      19.232873
    ],
    "sources": [
      {
        "label": "eCmentarze - Lgota-Mokrzesz",
        "url": "https://www.ecmentarze.pl/cmentarz/lgota-mokrzesz",
        "scope": "Nazwa cmentarza i parafii, telefon, wyszukiwarka grobów i lokalizacja z odnośnika dojazdu"
      }
    ],
    "phoneNote": "Telefon potwierdzony w eCmentarze. Adres kancelarii przekazany przez redakcję Lilia.",
    "lastUpdated": "26 września 2026"
  },
  {
    "id": "jastrzab",
    "slug": "cmentarz-jastrzab",
    "name": "Cmentarz parafialny w Jastrzębiu",
    "city": "Jastrząb",
    "gmina": "Poraj",
    "district": "Jastrząb",
    "address": "Adres uliczny do potwierdzenia",
    "addressPending": true,
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/jastrzab/cmentarz-jastrzab/",
    "description": "Parafia NMP Matki Miłosierdzia w Jastrzębiu",
    "parish": "Parafia Najświętszej Maryi Panny Matki Miłosierdzia w Jastrzębiu",
    "officeAddress": "ul. 19 Stycznia 89, 42-360 Jastrząb",
    "phone": "34 314 51 68",
    "additionalPhones": [
      "798 472 662"
    ],
    "website": "https://parafiajastrzab.pl/",
    "email": "parafiajastrzab@op.pl",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "https://parafiajastrzab.pl/regulamin-cmentarza",
    "regulationsSummary": "Regulamin określa zasady zarządzania, użytkowania grobów i prac na cmentarzu. Wysokość opłat jest dostępna w kancelarii parafialnej.",
    "feesNote": "Opłaty i zasady ich przedłużania opisano w regulaminie. Aktualna wysokość opłat jest dostępna w kancelarii parafialnej.",
    "coordinates": [
      50.6696805,
      19.1924148
    ],
    "history": [
      {
        "title": "Powstanie cmentarza",
        "text": "Cmentarz został założony dzięki staraniom księdza Jarosława Binka. Poświęcenia nekropolii dokonał 2 marca 1997 roku arcybiskup Stanisław Nowak.",
        "source": "parafiajastrzab.pl"
      },
      {
        "title": "Kaplica przedpogrzebowa",
        "text": "W 2017 roku na terenie cmentarza poświęcono kaplicę przedpogrzebową pod wezwaniem Najświętszej Maryi Panny Bolesnej.",
        "source": "parafiajastrzab.pl"
      }
    ],
    "administrator": {
      "name": "Epitafium - Damian Rajczyk",
      "role": "Usługi grabarskie / opieka",
      "address": "ul. Skargi 9, 42-360 Poraj",
      "phone": "506 148 634",
      "website": "https://www.epitafium.net/",
      "note": "Firma publikuje informację, że opiekuje się cmentarzem w Jastrzębiu i wykonuje tam usługi grabarskie. Regulamin wskazuje proboszcza parafii jako zarządcę cmentarza."
    },
    "sources": [
      {
        "label": "Parafia Jastrząb - historia",
        "url": "https://parafiajastrzab.pl/historia-parafii",
        "scope": "Powstanie i poświęcenie cmentarza"
      },
      {
        "label": "Parafia Jastrząb - kontakt",
        "url": "https://parafiajastrzab.pl/webpage_131",
        "scope": "Adres i numery telefonu parafii"
      },
      {
        "label": "Parafia Jastrząb - regulamin",
        "url": "https://parafiajastrzab.pl/regulamin-cmentarza",
        "scope": "Zarząd proboszcza, zasady cmentarne i informacja o opłatach"
      },
      {
        "label": "Epitafium - usługi grabarskie",
        "url": "https://www.epitafium.net/",
        "scope": "Opieka i usługi grabarskie na cmentarzu w Jastrzębiu; telefon 506 148 634"
      },
      {
        "label": "Google Maps - cmentarz w Jastrzębiu",
        "url": "https://maps.app.goo.gl/TRqazLANNb3TFsME6",
        "scope": "Lokalizacja wskazana przez redakcję"
      }
    ],
    "lastUpdated": "27 września 2026"
  },
  {
    "id": "zarki-letnisko",
    "slug": "cmentarz-zarki-letnisko",
    "name": "Cmentarz parafialny w Żarkach-Letnisku",
    "city": "Żarki-Letnisko",
    "gmina": "Poraj",
    "district": "Żarki-Letnisko",
    "address": "ul. Spokojna",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/zarki-letnisko/cmentarz-zarki-letnisko/",
    "description": "Parafia Matki Bożej Nieustającej Pomocy w Żarkach-Letnisku",
    "parish": "Parafia Matki Bożej Nieustającej Pomocy w Żarkach-Letnisku",
    "officeAddress": "ul. Grunwaldzka 14, 42-311 Żarki-Letnisko",
    "phone": "662 675 417",
    "website": "https://www.parafiazarkiletnisko.pl/",
    "email": "maklek@tlen.pl",
    "officeHours": "Poniedziałek-piątek: 16:30-17:30 (1 maja - 30 sierpnia), 15:30-16:30 (1 września - 30 kwietnia).",
    "openingHours": "Codziennie 7:00-20:00 (1 kwietnia - 30 września); w pozostałych miesiącach 8:00 do zmroku.",
    "graveSearchUrl": "https://zarki.grobonet.com/",
    "regulationsUrl": "https://www.parafiazarkiletnisko.pl/cmentarz/",
    "regulationsSummary": "Regulamin parafialny określa zasady korzystania z cmentarza i wykonywania prac. Godziny otwarcia są sezonowe.",
    "feesNote": "Rodzaje opłat opisano w regulaminie parafialnym. Aktualna wysokość opłat jest dostępna w kancelarii parafialnej.",
    "coordinates": [
      50.6279202,
      19.2793261
    ],
    "administrator": {
      "name": "Damian Rajczyk",
      "role": "Grabarz",
      "address": "",
      "phone": "506 148 634",
      "website": "https://www.parafiazarkiletnisko.pl/cmentarz/"
    },
    "sources": [
      {
        "label": "Parafia Żarki-Letnisko - cmentarz i regulamin",
        "url": "https://www.parafiazarkiletnisko.pl/cmentarz/",
        "scope": "Adres cmentarza, grabarz, godziny otwarcia, regulamin i kancelaria"
      },
      {
        "label": "Grobonet - Żarki-Letnisko",
        "url": "https://zarki.grobonet.com/",
        "scope": "Wyszukiwarka grobów, kontakt do parafii"
      },
      {
        "label": "Google Maps - cmentarz katolicki",
        "url": "https://maps.app.goo.gl/E3QpFD6bBkZa4oLi9",
        "scope": "Lokalizacja wskazana przez redakcję"
      }
    ],
    "lastUpdated": "27 września 2026"
  },
  {
    "id": "sokolniki",
    "slug": "cmentarz-sokolniki",
    "name": "Cmentarz parafialny w Sokolnikach",
    "city": "Sokolniki",
    "gmina": "Niegowa",
    "district": "Sokolniki",
    "address": "Sokolniki 137, 42-320 Sokolniki",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/sokolniki/cmentarz-sokolniki/",
    "description": "Parafia Najświętszego Serca Jezusa w Sokolnikach",
    "parish": "Parafia Najświętszego Serca Jezusa w Sokolnikach",
    "officeAddress": "Sokolniki 131, 42-320 Niegowa",
    "phone": "606 971 945",
    "website": "https://www.diecezja.kielce.pl/parafie/sokolniki-najswietszego-serca-jezusa",
    "email": "",
    "officeHours": "",
    "graveSearchUrl": "https://mogily.pl/sokolniki",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "coordinates": [
      50.63667,
      19.59155
    ],
    "additionalPhones": [
      "34 315 46 61"
    ],
    "phoneNote": "606 971 945 - aktualny kontakt opublikowany przez diecezję; 34 315 46 61 - kontakt do administratora cmentarza podany w Mogiły.pl.",
    "administrator": {
      "name": "Ksiądz proboszcz / Parafia Najświętszego Serca Jezusa",
      "role": "Administrator cmentarza",
      "address": "Sokolniki 131, 42-320 Niegowa",
      "phone": "34 315 46 61",
      "website": "https://mogily.pl/sokolniki/kontakt",
      "note": "Mogiły.pl wskazuje parafię jako zarządcę, a księdza proboszcza jako administratora cmentarza."
    },
    "sources": [
      {
        "label": "Mogiły.pl - Sokolniki",
        "url": "https://mogily.pl/sokolniki",
        "scope": "Internetowa wyszukiwarka osób pochowanych na cmentarzu parafialnym"
      },
      {
        "label": "Mogiły.pl - kontakt do zarządcy",
        "url": "https://mogily.pl/sokolniki/kontakt",
        "scope": "Parafia jako zarządca, ksiądz proboszcz jako administrator i telefon 34 315 46 61"
      },
      {
        "label": "Diecezja kielecka - parafia",
        "url": "https://www.diecezja.kielce.pl/parafie/sokolniki-najswietszego-serca-jezusa",
        "scope": "Nazwa parafii, adres kancelarii i numer telefonu"
      },
      {
        "label": "OpenStreetMap - cmentarz w Sokolnikach",
        "url": "https://www.openstreetmap.org/way/145014959",
        "scope": "Położenie terenu cmentarza na mapie"
      },
      {
        "label": "Targeo - cmentarz w Sokolnikach",
        "url": "https://mapa.targeo.pl/parafialny-w-sokolnikach-sokolniki-137-42-320-sokolniki~18604064/cmentarz/adres",
        "scope": "Adres Sokolniki 137 i gmina Niegowa"
      }
    ],
    "lastUpdated": "27 września 2026"
  },
  {
    "id": "kozieglowy",
    "slug": "cmentarz-kozieglowy",
    "name": "Cmentarz parafialny w Koziegłowach",
    "city": "Koziegłowy",
    "gmina": "Koziegłowy",
    "district": "Koziegłowy",
    "address": "ul. Kościuszki",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/kozieglowy/cmentarz-kozieglowy/",
    "description": "Parafia św. Marii Magdaleny w Koziegłowach",
    "parish": "Parafia św. Marii Magdaleny w Koziegłowach",
    "history": [
      {
        "title": "Historia pochówków w Koziegłowach",
        "text": "Przy kościele św. Barbary znajdowało się miejsce pochówku poświęcone 12 grudnia 1805 roku. Zmarłych grzebano tam do czasu zapełnienia terenu i przygotowania nowego cmentarza poza miastem. Przy kościele parafialnym istniał również niewielki, starszy cmentarz przykościelny. Ta informacja opisuje historię pochówków w mieście, a nie datę założenia obecnego cmentarza przy ulicy Kościuszki.",
        "source": "Koziegłowy"
      }
    ],
    "officeAddress": "ul. Kościelna 4, 42-350 Koziegłowy",
    "phone": "571 572 304",
    "email": "parafia.kozieglowy.kontakt@gmail.com",
    "website": "https://parafiakozieglowy.wixsite.com/home/cmentarz",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "coordinates": [
      50.5909957,
      19.1631589
    ],
    "administrator": {
      "name": "Epitafium - Damian Rajczyk",
      "role": "Usługi grabarskie / opieka",
      "address": "ul. Skargi 9, 42-360 Poraj",
      "phone": "506 148 634",
      "website": "https://www.epitafium.net/",
      "note": "Firma publikuje informację, że opiekuje się cmentarzem w Koziegłowach i wykonuje tam usługi grabarskie. Zarządcą cmentarza jest parafia."
    },
    "sources": [
      {
        "label": "Parafia Koziegłowy - cmentarz",
        "url": "https://parafiakozieglowy.wixsite.com/home/cmentarz",
        "scope": "Aktualny kontakt do parafii i strona cmentarza"
      },
      {
        "label": "Cmentarze24 - Koziegłowy",
        "url": "https://cmentarze24.pl/index.php/cmentarze/slaskie/item/2448-cmentarz-parafii-sw-marii-magdaleny-kozieglowy",
        "scope": "Parafia jako zarządca i położenie przy ul. Kościuszki; serwis podaje starszy numer telefonu"
      },
      {
        "label": "Epitafium - usługi grabarskie",
        "url": "https://www.epitafium.net/",
        "scope": "Opieka i usługi grabarskie na cmentarzu w Koziegłowach; telefon 506 148 634"
      },
      {
        "label": "Google Maps - cmentarz w Koziegłowach",
        "url": "https://maps.app.goo.gl/T7p8riMEnCUY9a259",
        "scope": "Lokalizacja wskazana przez redakcję"
      }
    ],
    "lastUpdated": "27 września 2026"
  },
  {
    "id": "niegowa",
    "slug": "cmentarz-niegowa",
    "name": "Cmentarz parafialny w Niegowie",
    "city": "Niegowa",
    "gmina": "Niegowa",
    "district": "Niegowa",
    "address": "ul. Szkolna",
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/niegowa/cmentarz-niegowa/",
    "description": "Parafia św. Mikołaja Biskupa i Męczennika w Niegowie",
    "parish": "Parafia św. Mikołaja Biskupa i Męczennika w Niegowie",
    "history": [
      {
        "title": "Groby powstańców styczniowych",
        "text": "Na cmentarzu spoczywają uczestnicy powstania styczniowego związani z oddziałem Alberta Otto. Są to Albert Otto, Joachim Sokołowski i Szymon Kamieński, którzy zmarli na początku października 1863 roku po walkach prowadzonych w okolicy Niegowy.",
        "source": "niegowa.pl"
      },
      {
        "title": "Mur cmentarny",
        "text": "W okresie międzywojennym, dzięki staraniom księdza Hamerlinga, cmentarz został otoczony murem.",
        "source": "niegowa.pl"
      }
    ],
    "officeAddress": "ul. Szkolna 31, 42-320 Niegowa",
    "phone": "34 315 10 04",
    "email": "kontakt@parafianiegowa.pl",
    "website": "https://parafianiegowa.pl/",
    "officeHours": "Poniedziałek, wtorek, środa, piątek i sobota: 18:30-19:00 (wiosna-lato) lub 17:30-18:00 (jesień-zima); czwartek 9:00-9:30. Od 1 października do 8 listopada: 18:00-18:30.",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "coordinates": [
      50.6441121,
      19.4706834
    ],
    "administrator": {
      "name": "Parafia św. Mikołaja w Niegowie",
      "role": "Zarządca cmentarza",
      "address": "ul. Szkolna 31, 42-320 Niegowa",
      "phone": "34 315 10 04",
      "website": "https://parafianiegowa.pl/kontakt",
      "note": "Publiczne źródła wskazują parafię jako zarządcę. Nie znaleźliśmy opublikowanego nazwiska ani numeru do grabarza."
    },
    "sources": [
      {
        "label": "Parafia Niegowa - kontakt",
        "url": "https://parafianiegowa.pl/kontakt",
        "scope": "Aktualny adres, telefon, e-mail i godziny kancelarii"
      },
      {
        "label": "Cmentarze24 - Niegowa",
        "url": "https://www.cmentarze24.pl/index.php/cmentarze/slaskie/myszkowski/cmentarz-parafii-sw-mikolaja-niegowa",
        "scope": "Parafia św. Mikołaja wskazana jako zarządca cmentarza"
      },
      {
        "label": "Google Maps - cmentarz w Niegowie",
        "url": "https://maps.app.goo.gl/1jymmxtrq8XHPCcr8",
        "scope": "Lokalizacja wskazana przez redakcję"
      }
    ],
    "lastUpdated": "27 września 2026"
  },
  {
    "id": "kotowice",
    "slug": "cmentarz-kotowice",
    "name": "Cmentarz parafialny w Kotowicach",
    "city": "Kotowice",
    "gmina": "Żarki",
    "district": "Kotowice",
    "address": "Adres uliczny do potwierdzenia",
    "addressPending": true,
    "type": "Parafialny",
    "image": "",
    "href": "/cmentarze/kotowice/cmentarz-kotowice/",
    "description": "Parafia Najświętszej Maryi Panny Różańcowej w Kotowicach",
    "parish": "Parafia Najświętszej Maryi Panny Różańcowej w Kotowicach",
    "officeAddress": "ul. Włodowska 12, 42-310 Kotowice",
    "phone": "34 314 88 94",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "coordinates": [
      50.5866003,
      19.450981
    ],
    "administrator": {
      "name": "Andrzej Krakowiak",
      "role": "Grabarz",
      "address": "",
      "phone": "696 445 211",
      "website": "",
      "note": "Dodane przez administratora serwisu - 27 września 2026. Dotyczy cmentarza parafialnego, nie cmentarza wojennego w Kotowicach."
    },
    "sources": [
      {
        "label": "Miasto i Gmina Żarki - parafie",
        "url": "https://www.umigzarki.pl/kategorie/parafie-i-koscioly",
        "scope": "Nazwa parafii, adres kancelarii i telefon 34 314 88 94"
      },
      {
        "label": "Google Maps - cmentarz parafialny w Kotowicach",
        "url": "https://maps.app.goo.gl/UNF5qajx9kvmgh5EA",
        "scope": "Lokalizacja wskazana przez redakcję"
      },
      {
        "label": "Dodane przez administratora serwisu",
        "url": "",
        "scope": "Andrzej Krakowiak - grabarz, tel. 696 445 211; dodano 27 września 2026"
      }
    ],
    "lastUpdated": "27 września 2026"
  },
  {
    "id": "kotowice-wojenny",
    "slug": "cmentarz-wojenny-kotowice",
    "name": "Cmentarz wojenny w Kotowicach",
    "city": "Kotowice",
    "gmina": "Żarki",
    "district": "Kotowice",
    "address": "Adres uliczny do potwierdzenia",
    "addressPending": true,
    "type": "Wojenny",
    "image": "",
    "href": "/cmentarze/kotowice/cmentarz-wojenny-kotowice/",
    "description": "Cmentarz wojenny z I wojny światowej wpisany do rejestru zabytków. Spoczywa tu prawie 2000 żołnierzy różnych narodowości.",
    "parish": "",
    "officeAddress": "",
    "phone": "",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "coordinates": [
      50.587305,
      19.451025
    ],
    "history": [
      {
        "title": "Powstanie cmentarza",
        "text": "Cmentarz powstał bezpośrednio po walkach stoczonych w okolicy w listopadzie 1914 roku. Ostateczny układ nekropolii ukształtowano w latach 1917-1918. Początkowo spoczywało tu około 800 żołnierzy armii austro-węgierskiej, niemieckiej i rosyjskiej.",
        "source": "Twoje miejsce na Jurze"
      },
      {
        "title": "Rozbudowa w 1936 roku",
        "text": "W 1936 roku przeniesiono tu szczątki żołnierzy z likwidowanych cmentarzy wojennych między innymi w Przewodziszowicach, Podgaju, Ludwinowie, Nowej Wsi, Łutowcu, Hucisku, Parkoszowicach i Morsku. Obecnie spoczywa tu prawie 2000 żołnierzy różnych narodowości.",
        "source": "Twoje miejsce na Jurze"
      }
    ],
    "sources": [
      {
        "label": "Twoje miejsce na Jurze",
        "url": "",
        "scope": "Historia cmentarza, informacje o żołnierzach i rozbudowie"
      },
      {
        "label": "OpenStreetMap",
        "url": "https://www.openstreetmap.org/way/35711539",
        "scope": "Lokalizacja cmentarza"
      }
    ],
    "lastUpdated": "27 września 2026"
  },
  {
    "id": "zarki-zydowski",
    "slug": "cmentarz-zydowski-zarki",
    "name": "Nowy cmentarz żydowski w Żarkach",
    "city": "Żarki",
    "gmina": "Żarki",
    "district": "Żarki",
    "address": "ul. Polna",
    "type": "Cmentarz żydowski",
    "image": "",
    "href": "/cmentarze/zarki/cmentarz-zydowski-zarki/",
    "description": "Kirkut założony w 1821 roku jako trzecia żydowska nekropolia w Żarkach.",
    "parish": "",
    "officeAddress": "",
    "phone": "",
    "email": "",
    "website": "",
    "officeHours": "",
    "graveSearchUrl": "",
    "regulationsUrl": "",
    "regulationsSummary": "",
    "coordinates": [
      50.630197,
      19.3600055
    ],
    "history": [
      {
        "title": "Trzeci kirkut w Żarkach",
        "text": "Nowy cmentarz żydowski, położony w rejonie obecnej ulicy Polnej, został założony w 1821 roku jako trzecia żydowska nekropolia w Żarkach. Wcześniejszy cmentarz znajdował się przy ulicy Górki.",
        "source": "Twoje miejsce na Jurze"
      },
      {
        "title": "Odnaleziona macewa",
        "text": "W 2009 roku odnaleziono fragment macewy pochodzącej ze starego kirkutu przy ulicy Górki. Zachowana inskrypcja wskazuje, że upamiętniona osoba zmarła 24 lutego 1739 roku. Fragment nagrobka umieszczono w 2010 roku w miejscu pamięci przy ulicy Górki.",
        "source": "Twoje miejsce na Jurze"
      }
    ],
    "sources": [
      {
        "label": "Twoje miejsce na Jurze",
        "url": "",
        "scope": "Historia cmentarza, informacje o macewie"
      },
      {
        "label": "OpenStreetMap",
        "url": "https://www.openstreetmap.org/way/227296156",
        "scope": "Lokalizacja cmentarza"
      }
    ],
    "lastUpdated": "27 września 2026"
  }
];
export const cemetery = {name:'Cmentarz Komunalny w Myszkowie',address:'ul. Jana Pawła II 100, 42-300 Myszków',administrator:{name:'SANIKO BIS Sp. z o.o.',address:'ul. Prusa 70, 42-300 Myszków',phone:'+48 600 065 202',email:'bok@sanikobis.pl',website:'https://www.sanikobis.pl/'},sources:[{label:'SANIKO BIS - kontakt',url:'https://www.sanikobis.pl/kategorie/kontakt'},{label:'Strona administratora',url:'https://www.sanikobis.pl/kategorie/cmentarz-komunalny'}],lastUpdated:'26 września 2026',graveSearchUrl:'https://myszkow.grobonet.com/'};
