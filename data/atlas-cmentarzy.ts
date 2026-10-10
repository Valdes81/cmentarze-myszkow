// Atlas cmentarzy powiatu myszkowskiego - 28 cmentarzy
// Wersja 1.0, data opracowania: 2026-10-10

import type { AtlasData, CemeteryV2, SourceReference, CertaintyLevel } from './types';

// Słownik źródeł
export const zrodla: Record<string, SourceReference> = {
  "S01": { tytul: "Narodowy Instytut Dziedzictwa — rejestr zabytków nieruchomych woj. śląskiego (stan 31.12.2025)", url: "https://nid.pl/wp-content/uploads/2026/02/SLS-rej_12.02.2026.pdf", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S02": { tytul: "NID Zabytek.pl — cmentarz w Cynkowie", url: "https://zabytek.pl/pl/obiekty/cmentarz-rzymskokatolick-695196", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S03": { tytul: "NID Zabytek.pl — cmentarz rzymskokatolicki w Gniazdowie", url: "https://zabytek.pl/pl/obiekty/cmentarz-rzymskokatolick-695199", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S04": { tytul: "NID Zabytek.pl — cmentarz w Winownie", url: "https://zabytek.pl/pl/obiekty/cmentarz-rzymskokatolick-694264", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S05": { tytul: "NID Zabytek.pl — cmentarz w Koziegłowach", url: "https://zabytek.pl/pl/obiekty/cmentarz-rzymskokatolick-694262", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S06": { tytul: "NID Zabytek.pl — cmentarz w Poraju", url: "https://zabytek.pl/pl/obiekty/cmentarz-rzymskokatolick-695054", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S07": { tytul: "Turystyka Żarki — cmentarz parafialny w Żarkach", url: "https://www.turystykazarki.pl/artykuly/122", typ: "samorządowy", data_dostepu: "2026-10-10" },
  "S08": { tytul: "NID Zabytek.pl — cmentarz żydowski w Żarkach", url: "https://zabytek.pl/pl/obiekty/zarki-cmentarz-zydowski", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S09": { tytul: "Turystyka Żarki — Kirkut na Kierkowie", url: "https://www.turystykazarki.pl/artykuly/134", typ: "samorządowy", data_dostepu: "2026-10-10" },
  "S10": { tytul: "Parafia Żarki-Letnisko — historia parafii i cmentarza", url: "https://www.parafiazarkiletnisko.pl/historia/", typ: "parafialny", data_dostepu: "2026-10-10" },
  "S11": { tytul: "Parafia Żarki-Letnisko — cmentarz i regulamin", url: "https://www.parafiazarkiletnisko.pl/cmentarz/", typ: "parafialny", data_dostepu: "2026-10-10" },
  "S12": { tytul: "Grobonet — Żarki-Letnisko", url: "https://zarki.grobonet.com/", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S13": { tytul: "SANIKO BIS — cmentarz komunalny w Myszkowie", url: "https://www.sanikobis.pl/kategorie/cmentarz-komunalny", typ: "zarządca", data_dostepu: "2026-10-10" },
  "S14": { tytul: "Parafia Jastrząb — historia", url: "https://parafiajastrzab.pl/historia-parafii", typ: "parafialny", data_dostepu: "2026-10-10" },
  "S15": { tytul: "Parafia Jastrząb — regulamin cmentarza", url: "https://parafiajastrzab.pl/regulamin-cmentarza", typ: "parafialny", data_dostepu: "2026-10-10" },
  "S16": { tytul: "eCmentarze — Gniazdów", url: "https://www.ecmentarze.pl/cmentarz/gniazdow", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S17": { tytul: "eCmentarze — Gniazdów: kontakt", url: "https://www.ecmentarze.pl/cmentarz/gniazdow/kontakt", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S18": { tytul: "eCmentarze — Lgota-Mokrzesz", url: "https://www.ecmentarze.pl/cmentarz/lgota-mokrzesz", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S19": { tytul: "eCmentarze — Lgota-Mokrzesz: kontakt", url: "https://www.ecmentarze.pl/cmentarz/lgota-mokrzesz/kontakt", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S20": { tytul: "eCmentarze — Siedlec Duży", url: "https://www.ecmentarze.pl/cmentarz/siedlec-duzy", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S21": { tytul: "eCmentarze — Siedlec Duży: kontakt", url: "https://www.ecmentarze.pl/cmentarz/siedlec-duzy/kontakt", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S22": { tytul: "eCmentarze — Choroń", url: "https://www.ecmentarze.pl/cmentarz/choron", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S23": { tytul: "eCmentarze — Choroń: kontakt", url: "https://www.ecmentarze.pl/cmentarz/choron/kontakt", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S24": { tytul: "Grobonet — Poraj, wyszukiwarka", url: "https://poraj.grobonet.com/", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S25": { tytul: "Grobonet — Poraj: kontakt", url: "https://poraj.grobonet.com/kontakt", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S26": { tytul: "Mogiły.pl — Sokolniki, wyszukiwarka", url: "https://mogily.pl/sokolniki", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S27": { tytul: "Mogiły.pl — Sokolniki: kontakt", url: "https://mogily.pl/sokolniki/kontakt", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S28": { tytul: "Gmina Niegowa — studium (mogiły wojenne Niegowa, Sokolniki)", url: "https://www.niegowa.pl/dokumenty/Studium_Niegowa-Tekst.pdf", typ: "samorządowy", data_dostepu: "2026-10-10" },
  "S29": { tytul: "Zabytek.pl — zbiorowa mogiła w Niegowie (1)", url: "https://zabytek.pl/pl/obiekty/zbiorowa-mogila-wojenna--924428", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S30": { tytul: "Zabytek.pl — zbiorowa mogiła w Niegowie (2)", url: "https://zabytek.pl/pl/obiekty/zbiorowa-mogila-wojenna--924427", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S31": { tytul: "Zabytek.pl — mogiła powstańców 1863 w Niegowie", url: "https://zabytek.pl/pl/obiekty/mogila-zbiorowa-powstanc-924429", typ: "urzędowy", data_dostepu: "2026-10-10" },
  "S32": { tytul: "Miasto i Gmina Żarki — miejsca pamięci, Kotowice", url: "https://www.umigzarki.pl/aktualnosci/1141", typ: "samorządowy", data_dostepu: "2026-10-10" },
  "S33": { tytul: "Śląska Organizacja Turystyczna — cmentarz wojenny w Kotowicach", url: "https://www.silesia.travel/culturalheritage/15711/cmentarz-wojenny-z-i-wojny-swiatowej-w-kotowicach", typ: "regionalny", data_dostepu: "2026-10-10" },
  "S34": { tytul: "Gazeta Myszkowska — historia cmentarza wojennego w Kotowicach", url: "https://www.gazetamyszkowska.pl/artykul/10442,z-cyklu-na-kartach-historii-cmentarz-wojenny-z-i-wojny-swiatowej-w-kotowicach", typ: "regionalny", data_dostepu: "2026-10-10" },
  "S35": { tytul: "Uchwała / studium Gmina Żarki — zabytki i cmentarze", url: "https://rastry.gison.pl/mpzp-public/zarki/uchwaly/U_2016_112_XVII_studium_tekst.pdf", typ: "samorządowy", data_dostepu: "2026-10-10" },
  "S36": { tytul: "Parafia Nowa Wieś — o parafii", url: "https://www.parafianowawies.pl/o-parafii/", typ: "parafialny", data_dostepu: "2026-10-10" },
  "S37": { tytul: "Sanktuarium Mrzygłód — kontakt", url: "https://sanktuariummrzyglod.pl/?page_id=39", typ: "parafialny", data_dostepu: "2026-10-10" },
  "S38": { tytul: "Lilia Myszków — nekrolog z lokalizacją cmentarza Światowit", url: "https://liliamyszkow.com/nekrolog/boguslawa-mucha/", typ: "lokalny", data_dostepu: "2026-10-10" },
  "S39": { tytul: "Lilia Myszków — nekrolog z lokalizacją cmentarza Ciszówka", url: "https://liliamyszkow.com/nekrolog/miroslaw-skorek/", typ: "lokalny", data_dostepu: "2026-10-10" },
  "S40": { tytul: "Lilia Myszków — nekrolog z lokalizacją cmentarza św. Stanisława", url: "https://liliamyszkow.com/nekrolog/tadeusz-lesniak/", typ: "lokalny", data_dostepu: "2026-10-10" },
  "S41": { tytul: "Lilia Myszków — nekrolog z lokalizacją cmentarza Nowa Wieś", url: "https://liliamyszkow.com/nekrolog/marian-kolodziejczyk/", typ: "lokalny", data_dostepu: "2026-10-10" },
  "S42": { tytul: "Regionalna historia parafii i cmentarza w Będuszu", url: "https://gazetacz.com.pl/nowe-parafie-na-poludniowym-obrzezu-myszkow-6562/", typ: "regionalny", data_dostepu: "2026-10-10" },
  "S43": { tytul: "Genealodzy Częstochowa — historia Koziegłówek, teren cmentarza w 1853", url: "https://www.genealodzy.czestochowa.pl/zasoby/artykuly/wykaz-proboszczow-prowadzcych-ksigi-parafialne-parafii-koziegowki", typ: "regionalny", data_dostepu: "2026-10-10" },
  "S44": { tytul: "Gmina Koziegłowy — historia Pińczyc", url: "https://www.kozieglowy.pl/aktualnosci/31", typ: "samorządowy", data_dostepu: "2026-10-10" },
  "S45": { tytul: "Historia Koziegłów — dzieje parafii i starej nekropolii", url: "https://historia.kozieglowy.org/r-4-kozieglowy-historia-parafii/", typ: "lokalny", data_dostepu: "2026-10-10" },
  "S46": { tytul: "Parafia Koziegłowy — cmentarz", url: "https://parafiakozieglowy.wixsite.com/home/cmentarz", typ: "parafialny", data_dostepu: "2026-10-10" },
  "S47": { tytul: "Mogiły.pl Sokolniki — pochowane znane osoby", url: "https://mogily.pl/sokolniki/znani-zmarli", typ: "operator-wyszukiwarki", data_dostepu: "2026-10-10" },
  "S48": { tytul: "Portal miejski Myszków — planowanie przestrzenne, cmentarze", url: "https://mmyszkow.e-mapa.net/wykazplanow/", typ: "samorządowy", data_dostepu: "2026-10-10" },
  "S49": { tytul: "Opracowanie lokalne — cmentarze Myszkowa", url: "https://mementis.com.pl/myszkow/", typ: "wtórny", data_dostepu: "2026-10-10" },
  "S50": { tytul: "Mariawicki cmentarz Gniazdów — opracowanie encyklopedyczne, wymaga dodatkowej weryfikacji", url: "https://xn--meb.pisz.pl/Cmentarz_mariawicki_w_Gniazdowie", typ: "wtórny", data_dostepu: "2026-10-10" },
  "S51": { tytul: "Żarki — studium turystyczne i konserwatorskie (PDF)", url: "https://www.umigzarki.pl/dokumenty/turystyka_maj_2016.pdf", typ: "samorządowy", data_dostepu: "2026-10-10" }
};

// 28 cmentarzy powiatu myszkowskiego
export const cmentarze: CemeteryV2[] = [
  {
    id: "cm-01", gmina: "Koziegłowy", nazwa: "Cmentarz mariawicki w Gniazdowie", slug: "cmentarz-mariawicki-gniazdow", rodzaj: "mariawicki",
    lokalizacja: { szerokosc: 50.603, dlugosc: 19.13, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: null, telefon_publiczny: null, adres_kancelarii: null, uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Historyczna nekropolia mariawicka w Gniazdowie, związana z miejscową wspólnotą wyznaniową.", opis_rozszerzony: "Cmentarz mariawicki w Gniazdowie jest jednym z rzadziej spotykanych wyznaniowych miejsc pochówku w powiecie myszkowskim. Powstanie miejscowej nekropolii wiąże się z rozwojem mariawityzmu na początku XX wieku." },
    fakty_zrodlowe: [{ pole: "historia", informacja: "W opracowaniu wtórnym podano początek nekropolii w 1906 roku.", zrodla: ["S50"], pewnosc: "niska", uwaga: "Potwierdzić w archiwum Kościoła Starokatolickiego Mariawitów lub NID." }],
    kontekst_parafialny: [], ciekawostki: ["Jeden z nielicznych cmentarzy mariawickich w tej części województwa."],
    uwagi_redakcyjne: ["Rok 1906 i szczegóły dotyczące przeniesienia szczątków w 2001 r. pochodzą ze źródła wtórnego."],
    brakujace_dane: ["dokładny adres wejścia", "weryfikacja GPS", "aktualny administrator"], zrodla: ["S50"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-02", gmina: "Koziegłowy", nazwa: "Cmentarz parafialny w Cynkowie", slug: "cmentarz-parafialny-cynkow", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.548, dlugosc: 19.117, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Śląska", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Wawrzyńca w Cynkowie", telefon_publiczny: "34 314 13 93", adres_kancelarii: "ul. Graniczna 10, 42-350 Cynków", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: "1983 r. według bazy ewidencyjnej NID", powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: "Ewidencja zabytków", numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz katolicki w Cynkowie przy ulicy Śląskiej, ujęty w ewidencji zabytków.", opis_rozszerzony: "Cmentarz parafialny w Cynkowie znajduje się przy ulicy Śląskiej. Narodowy Instytut Dziedzictwa ujmuje obiekt w ewidencji zabytków i datuje go na 1983 r." },
    fakty_zrodlowe: [{ pole: "lokalizacja.ulica", informacja: "ul. Śląska", zrodla: ["S02"], pewnosc: "wysoka", uwaga: null }, { pole: "informacje.ochrona", informacja: "Ewidencja zabytków", zrodla: ["S02"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["dokładny adres wejścia", "aktualny administrator"], zrodla: ["S02"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-03", gmina: "Koziegłowy", nazwa: "Cmentarz rzymskokatolicki w Gniazdowie", slug: "cmentarz-rzymskokatolicki-gniazdow", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.602, dlugosc: 19.11, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Szkolna", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia Najświętszego Serca Pana Jezusa w Gniazdowie", telefon_publiczny: "513 135 661", adres_kancelarii: "ul. Szkolna 58, Gniazdów", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: "1987 r. — datowanie obiektu wg NID", powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: "Ewidencja zabytków", numer_rejestru: null, wyszukiwarka_grobow: "https://www.ecmentarze.pl/cmentarz/gniazdow", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz rzymskokatolicki w Gniazdowie przy ul. Szkolnej, z internetową wyszukiwarką pochowanych.", opis_rozszerzony: "Katolicki cmentarz parafialny w Gniazdowie położony jest przy ulicy Szkolnej. W ewidencji Narodowego Instytutu Dziedzictwa został opisany jako cmentarz z 1987 r." },
    fakty_zrodlowe: [{ pole: "administracja.telefon_publiczny", informacja: "513 135 661", zrodla: ["S17"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S03", "S16", "S17"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-04", gmina: "Koziegłowy", nazwa: "Cmentarz parafialny w Winownie", slug: "cmentarz-parafialny-winowno", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.543, dlugosc: 19.15, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Leśna", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia Zesłania Ducha Świętego w Winownie", telefon_publiczny: "601 692 900", adres_kancelarii: "ul. Opolska 182, 42-350 Winowno", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: "1990 r. — datowanie obiektu wg NID", powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: "Ewidencja zabytków", numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz katolicki przy ul. Leśnej w Winownie, ujęty w ewidencji zabytków.", opis_rozszerzony: "Cmentarz parafialny w Winownie mieści się przy ulicy Leśnej. Narodowy Instytut Dziedzictwa ujmuje tę nekropolię w ewidencji zabytków z datowaniem na 1990 r." },
    fakty_zrodlowe: [{ pole: "lokalizacja.ulica", informacja: "ul. Leśna", zrodla: ["S04"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S04"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-05", gmina: "Koziegłowy", nazwa: "Cmentarz parafialny w Koziegłowach", slug: "cmentarz-parafialny-kozieglowy", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.591, dlugosc: 19.163, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Kościuszki 85", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Marii Magdaleny w Koziegłowach", telefon_publiczny: "34 393 96 09", adres_kancelarii: "ul. Kościelna 4, 42-350 Koziegłowy", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: 1785, datowanie_opis: "Poświęcony w 1785/1805 r., powiększony w 1909 r.", powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: "Ewidencja zabytków", numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Historyczny cmentarz przy ul. Kościuszki 85 w Koziegłowach z księgą zmarłych od 1751 roku.", opis_rozszerzony: "Katolicki cmentarz w Koziegłowach położony jest przy ulicy Kościuszki 85. Najstarsza zachowana księga zmarłych pochodzi z 1751 roku. Cmentarz za zachodnią ścianą kościoła poświęcono w latach 1785–1805. W 1909 roku 397 parafian podjęło decyzję o powiększeniu nekropolii, nabywając nowe grunty." },
    fakty_zrodlowe: [{ pole: "lokalizacja.ulica", informacja: "ul. Kościuszki 85", zrodla: ["S05"], pewnosc: "wysoka", uwaga: null }, { pole: "historia", informacja: "Najstarsza zachowana księga zmarłych pochodzi z 1751 roku.", zrodla: ["S45"], pewnosc: "wysoka", uwaga: null }, { pole: "historia", informacja: "W 1909 r. rada parafialna z 397 parafianami podjęła decyzję o powiększeniu cmentarza.", zrodla: ["S45"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: ["Najstarsza zachowana księga zmarłych pochodzi z 1751 roku.", "Do XVIII wieku pochówki odbywały się w kościele — przed ołtarzem głównym, pod kaplicami bocznymi.", "W 1783 r. zebrano starsze kości w większych grobach zbiorowych.", "W 1909 r. 397 parafian zebrało się, by uchwalić powiększenie cmentarza."], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S05", "S45", "S46"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-06", gmina: "Koziegłowy", nazwa: "Cmentarz parafialny w Koziegłówkach", slug: "cmentarz-parafialny-kozieglowki", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.584, dlugosc: 19.187, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Antoniego z Padwy w Koziegłówkach", telefon_publiczny: "34 314 13 06", adres_kancelarii: "ul. Rynek 20, 42-350 Koziegłówki", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://www.ecmentarze.pl/cmentarz/sw-antoni-kozieglowki", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Koziegłówkach, którego rozwojem zajmowano się już w połowie XIX wieku.", opis_rozszerzony: "Cmentarz parafialny w Koziegłówkach jest związany z miejscową parafią. W 1853 r. proboszcz nabył grunt pod cmentarz." },
    fakty_zrodlowe: [{ pole: "historia", informacja: "Opracowanie historyczne opisuje zakup gruntu i prace przy cmentarzu w 1853 r.", zrodla: ["S43"], pewnosc: "średnia", uwaga: "Nie wpisywać jako pewnej daty założenia." }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S01", "S43"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-07", gmina: "Koziegłowy", nazwa: "Cmentarz parafialny w Lgocie-Mokrzeszy", slug: "cmentarz-parafialny-lgota-mokrzesz", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.604, dlugosc: 19.233, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Jana Chrzciciela w Lgocie-Mokrzeszy", telefon_publiczny: "508 220 891", adres_kancelarii: "ul. Szkolna 1, Lgota-Mokrzesz", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://www.ecmentarze.pl/cmentarz/lgota-mokrzesz", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafii św. Jana Chrzciciela w Lgocie-Mokrzeszy, dostępny również w wyszukiwarce eCmentarze.", opis_rozszerzony: "Cmentarz w Lgocie-Mokrzeszy związany jest z parafią św. Jana Chrzciciela. Nekropolia posiada internetową wyszukiwarkę pochowanych w serwisie eCmentarze." },
    fakty_zrodlowe: [{ pole: "administracja.telefon_publiczny", informacja: "508 220 891", zrodla: ["S19"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S18", "S19"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-08", gmina: "Koziegłowy", nazwa: "Cmentarz parafialny w Pińczycach", slug: "cmentarz-parafialny-pinczyce", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.538, dlugosc: 19.228, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Michała Archanioła w Pińczycach", telefon_publiczny: "34 314 35 34", adres_kancelarii: "ul. Kościelna 4, 42-350 Pińczyce", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Pińczycach; historia pochówków wymaga oddzielnego opracowania.", opis_rozszerzony: "Cmentarz parafialny w Pińczycach stanowi jedno z miejsc pochówku mieszkańców gminy Koziegłowy." },
    fakty_zrodlowe: [], kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S01", "S44"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-09", gmina: "Koziegłowy", nazwa: "Cmentarz parafialny w Siedlcu Dużym", slug: "cmentarz-parafialny-siedlec-duzy", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.632, dlugosc: 19.132, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia Podwyższenia Krzyża Świętego w Siedlcu Dużym", telefon_publiczny: "34 314 11 64", adres_kancelarii: "ul. Jana Pawła II 62, Siedlec Duży", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://www.ecmentarze.pl/cmentarz/siedlec-duzy", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Siedlcu Dużym z internetową wyszukiwarką grobów.", opis_rozszerzony: "Cmentarz parafialny w Siedlcu Dużym powiązany jest z parafią Podwyższenia Krzyża Świętego. W bazie eCmentarze dostępna jest wyszukiwarka pochowanych." },
    fakty_zrodlowe: [{ pole: "administracja.telefon_publiczny", informacja: "34 314 11 64", zrodla: ["S21"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S20", "S21"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-10", gmina: "Myszków", nazwa: "Cmentarz Komunalny w Myszkowie", slug: "cmentarz-komunalny", rodzaj: "komunalny",
    lokalizacja: { szerokosc: 50.589, dlugosc: 19.325, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Jana Pawła II 100", nr_porzadkowy: null },
    administracja: { zarzadca: "SANIKO BIS Sp. z o.o.", telefon_publiczny: "600 065 202", adres_kancelarii: "ul. Prusa 70, 42-300 Myszków", uwaga: "Siedziba spółki - nie adres cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://myszkow.grobonet.com/", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: true, kaplica_typ: "przedpogrzebowa", parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz komunalny w Myszkowie, administrowany przez SANIKO BIS, z wyszukiwarką grobów Grobonet.", opis_rozszerzony: "Cmentarz komunalny w Myszkowie jest prowadzony przez spółkę SANIKO BIS, która publikuje informacje o opłatach i zasadach obsługi." },
    fakty_zrodlowe: [{ pole: "administracja.zarzadca", informacja: "SANIKO BIS Sp. z o.o.", zrodla: ["S13"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S13"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-11", gmina: "Myszków", nazwa: "Cmentarz św. Stanisława w Myszkowie", slug: "cmentarz-sw-stanislawa", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.58, dlugosc: 19.339, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Władysława Sikorskiego", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Stanisława BM w Myszkowie", telefon_publiczny: "34 313 10 21; 507 090 933", adres_kancelarii: "ul. Prymasa Wyszyńskiego 7, 42-300 Myszków", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny św. Stanisława w Myszkowie, w rejonie ul. Sikorskiego.", opis_rozszerzony: "Cmentarz św. Stanisława w Myszkowie to nekropolia parafialna związana z lokalną historią miasta." },
    fakty_zrodlowe: [{ pole: "lokalizacja.ulica", informacja: "ul. Władysława Sikorskiego", zrodla: ["S40"], pewnosc: "średnia", uwaga: "Lokalizacja ulicy na podstawie nekrologu." }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S40"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-12", gmina: "Myszków", nazwa: "Cmentarz Będusz", slug: "cmentarz-bedusz", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.544, dlugosc: 19.305, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Anny w Myszkowie-Będuszu", telefon_publiczny: "34 313 80 70", adres_kancelarii: "ul. Wyzwolenia 56, 42-300 Myszków", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: "1979 r. — według lokalnego opracowania", powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz w myszkowskim Będuszu, związany z parafią św. Anny; w źródłach lokalnych pojawia się rok 1979.", opis_rozszerzony: "Cmentarz w Będuszu jest związany z parafią św. Anny. Lokalne opracowanie wskazuje, że w 1979 r. urządzono tu cmentarz." },
    fakty_zrodlowe: [{ pole: "informacje.datowanie_opis", informacja: "1979 r. — według lokalnego opracowania", zrodla: ["S42"], pewnosc: "średnia", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S42"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-13", gmina: "Myszków", nazwa: "Cmentarz Mrzygłód", slug: "cmentarz-mrzyglod", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.538, dlugosc: 19.364, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia/Sanktuarium NMP Różańcowej w Mrzygłodzie", telefon_publiczny: "34 313 92 84", adres_kancelarii: "ul. Królowej Jadwigi 9, Myszków-Mrzygłód", uwaga: "Adres sanktuarium." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://mogily.pl/mrzyglod", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Myszkowie-Mrzygłodzie, związany z sanktuarium NMP Różańcowej.", opis_rozszerzony: "Cmentarz w Mrzygłodzie służy miejscowej społeczności parafialnej, której duchowym centrum jest sanktuarium Najświętszej Maryi Panny Różańcowej." },
    fakty_zrodlowe: [{ pole: "administracja.telefon_publiczny", informacja: "34 313 92 84", zrodla: ["S37"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S37"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-14", gmina: "Myszków", nazwa: "Cmentarz Nowa Wieś", slug: "cmentarz-nowa-wies", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.604, dlugosc: 19.294, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "rejon ul. Koziegłowskiej", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia Trójcy Przenajświętszej w Myszkowie", telefon_publiczny: "666 685 788", adres_kancelarii: "ul. Nowowiejska 32, 42-300 Myszków", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w dzielnicy Nowa Wieś, związany z parafią Trójcy Przenajświętszej.", opis_rozszerzony: "Cmentarz w Myszkowie-Nowej Wsi związany jest z parafią Trójcy Przenajświętszej." },
    fakty_zrodlowe: [{ pole: "lokalizacja.ulica", informacja: "rejon ul. Koziegłowskiej", zrodla: ["S41"], pewnosc: "średnia", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S36", "S41"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-15", gmina: "Myszków", nazwa: "Cmentarz Mijaczów", slug: "cmentarz-mijaczow", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.56, dlugosc: 19.321, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "rejon ul. Wyzwolenia", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia Narodzenia NMP w Myszkowie-Mijaczowie", telefon_publiczny: "533 955 389; 34 313 15 15", adres_kancelarii: "ul. Pułaskiego 5, 42-300 Myszków", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://www.ecmentarze.pl/cmentarz/myszkow", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Myszkowie-Mijaczowie, w rejonie ulicy Wyzwolenia.", opis_rozszerzony: "Cmentarz w myszkowskiej dzielnicy Mijaczów znajduje się w rejonie ulicy Wyzwolenia." },
    fakty_zrodlowe: [{ pole: "lokalizacja.ulica", informacja: "rejon ul. Wyzwolenia", zrodla: ["S49"], pewnosc: "średnia", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S48", "S49"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-16", gmina: "Myszków", nazwa: "Cmentarz Światowit", slug: "cmentarz-swiatowit", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.579, dlugosc: 19.359, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "rejon ul. Granicznej", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Andrzeja Boboli w Myszkowie", telefon_publiczny: "34 313 03 09; 505 247 324", adres_kancelarii: "ul. Papieska 1, 42-300 Myszków", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz Światowit w Myszkowie, w rejonie ulicy Granicznej.", opis_rozszerzony: "Cmentarz Światowit należy do charakterystycznych nekropolii Myszkowa. W materiałach pogrzebowych jest lokalizowany przy ul. Granicznej." },
    fakty_zrodlowe: [{ pole: "lokalizacja.ulica", informacja: "rejon ul. Granicznej", zrodla: ["S38"], pewnosc: "średnia", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S38", "S48"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-17", gmina: "Myszków", nazwa: "Cmentarz Ciszówka", slug: "cmentarz-ciszowka", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.565, dlugosc: 19.335, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Pohulańska", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia Męczeństwa św. Jana Chrzciciela w Myszkowie", telefon_publiczny: "34 313 00 89", adres_kancelarii: "ul. Piękna 12, 42-300 Myszków", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz na Ciszówce w Myszkowie, związany z parafią św. Jana Chrzciciela.", opis_rozszerzony: "Cmentarz Ciszówka znajduje się w Myszkowie i związany jest z miejscową parafią św. Jana Chrzciciela." },
    fakty_zrodlowe: [{ pole: "lokalizacja.ulica", informacja: "ul. Pohulańska", zrodla: ["S39"], pewnosc: "średnia", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S39"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-18", gmina: "Niegowa", nazwa: "Cmentarz parafialny w Sokolnikach", slug: "cmentarz-parafialny-sokolniki", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.637, dlugosc: 19.592, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia Najświętszego Serca Pana Jezusa w Sokolnikach", telefon_publiczny: "34 315 46 61", adres_kancelarii: "Sokolniki 131", uwaga: "Adres parafii." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://mogily.pl/sokolniki", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Sokolnikach z wyszukiwarką mogił oraz miejscem pamięci związanym z II wojną światową.", opis_rozszerzony: "Cmentarz parafialny w Sokolnikach należy do parafii Najświętszego Serca Pana Jezusa. System Mogiły.pl umożliwia wyszukiwanie pochowanych." },
    fakty_zrodlowe: [{ pole: "administracja.telefon_publiczny", informacja: "34 315 46 61", zrodla: ["S27"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: ["Mogiła żołnierza AK Tadeusza Żurka jest udokumentowanym lokalnym miejscem pamięci."], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S26", "S27", "S28"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-19", gmina: "Niegowa", nazwa: "Cmentarz parafialny w Niegowie", slug: "cmentarz-parafialny-niegowa", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.644, dlugosc: 19.471, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Mikołaja w Niegowie", telefon_publiczny: "34 315 10 04", adres_kancelarii: "ul. Szkolna 31, 42-320 Niegowa", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: true, kaplica_typ: "kapliczka na cmentarzu", parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Niegowie, na którego terenie znajdują się upamiętnienia wojenne.", opis_rozszerzony: "Cmentarz parafialny w Niegowie jest ważnym miejscem pamięci miejscowej społeczności. Gminne studium uwarunkowań wymienia znajdujące się tu groby wojenne." },
    fakty_zrodlowe: [{ pole: "miejsca_pamieci", informacja: "Studium gminne opisuje groby żołnierzy poległych podczas wojen światowych.", zrodla: ["S28"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S28", "S29", "S30", "S31"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-20", gmina: "Poraj", nazwa: "Cmentarz parafialny w Jastrzębiu", slug: "cmentarz-parafialny-jastrzab", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.67, dlugosc: 19.192, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia NMP Matki Miłosierdzia w Jastrzębiu", telefon_publiczny: "34 314 51 68; 798 472 662", adres_kancelarii: "ul. 19-go Stycznia 89, 42-360 Jastrząb", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: "https://parafiajastrzab.pl/regulamin-cmentarza", godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz w Jastrzębiu, należący do parafii NMP Matki Miłosierdzia; poświęcony w latach 90. XX wieku.", opis_rozszerzony: "Cmentarz parafialny w Jastrzębiu jest związany z parafią Najświętszej Maryi Panny Matki Miłosierdzia. Datę poświęcenia cmentarza wskazuje się na 2 marca 1997 r." },
    fakty_zrodlowe: [{ pole: "historia", informacja: "Oficjalna historia parafii wskazuje 2 marca 1997 r. jako datę poświęcenia cmentarza.", zrodla: ["S14"], pewnosc: "wysoka", uwaga: "Nie utożsamiać z datą pierwszego pochówku." }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S14", "S15"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-21", gmina: "Poraj", nazwa: "Cmentarz parafialny w Choroniu", slug: "cmentarz-parafialny-choron", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.695, dlugosc: 19.254, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Jana Chrzciciela w Choroniu", telefon_publiczny: "34 314 56 93", adres_kancelarii: "ul. Częstochowska 3, Choroń", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://www.ecmentarze.pl/cmentarz/choron", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: false, kaplica_typ: "przedpogrzebowa przy kościele", parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz w Choroniu z internetową wyszukiwarką grobów eCmentarze.", opis_rozszerzony: "Cmentarz parafialny w Choroniu jest związany z parafią św. Jana Chrzciciela. W serwisie eCmentarze można wyszukiwać osoby pochowane." },
    fakty_zrodlowe: [{ pole: "administracja.telefon_publiczny", informacja: "34 314 56 93", zrodla: ["S23"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S22", "S23"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-22", gmina: "Poraj", nazwa: "Cmentarz parafialny w Poraju", slug: "cmentarz-parafialny-poraj", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.672, dlugosc: 19.212, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia Najświętszego Serca Pana Jezusa w Poraju", telefon_publiczny: "34 314 50 13", adres_kancelarii: "ul. Kościelna 7, Poraj", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: "1933 r. — datowanie obiektu wg NID", powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: "Ewidencja zabytków", numer_rejestru: null, wyszukiwarka_grobow: "https://poraj.grobonet.com/", regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: false, kaplica_typ: "przy kościele", parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Poraju z 1933 r. według ewidencji NID; dostępna jest wyszukiwarka Grobonet.", opis_rozszerzony: "Cmentarz parafialny w Poraju jest związany z parafią Najświętszego Serca Pana Jezusa. Narodowy Instytut Dziedzictwa datuje nekropolię na 1933 rok." },
    fakty_zrodlowe: [{ pole: "informacje.ochrona", informacja: "Ewidencja zabytków", zrodla: ["S06"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S06", "S24", "S25"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-23", gmina: "Poraj", nazwa: "Cmentarz parafialny w Żarkach-Letnisku", slug: "cmentarz-zarki-letnisko", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.628, dlugosc: 19.279, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Spokojna", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia NMP Nieustającej Pomocy w Żarkach-Letnisku", telefon_publiczny: "662 675 417", adres_kancelarii: "ul. Grunwaldzka 14, Żarki-Letnisko", uwaga: "Adres parafii." },
    informacje: { rok_zalozenia: null, datowanie_opis: "1940: zgoda; 1941: uruchamianie cmentarza", powierzchnia_ha: null, powierzchnia_historyczna: "ok. 3500 m² na początku; w 1975 r. zakupiono ok. 7000 m² dodatkowej ziemi", ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: "https://zarki.grobonet.com/", regulamin_url: "https://www.parafiazarkiletnisko.pl/cmentarz/", godziny_otwarcia: "1 IV–30 IX: 7:00–20:00; pozostały okres: 8:00–do zmroku", status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Żarkach-Letnisku, utworzony podczas II wojny światowej i rozbudowany w 1975 r.; posiada Grobonet.", opis_rozszerzony: "Historia cmentarza w Żarkach-Letnisku jest dobrze udokumentowana w kronice parafialnej. W 1940 r. uzyskano zgodę kościelną na nową nekropolię." },
    fakty_zrodlowe: [{ pole: "informacje.godziny_otwarcia", informacja: "1 IV–30 IX: 7:00–20:00; pozostały okres: 8:00–do zmroku", zrodla: ["S11"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S10", "S11", "S12"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-24", gmina: "Żarki", nazwa: "Cmentarz wojenny w Kotowicach", slug: "cmentarz-wojenny-kotowice", rodzaj: "wojenny",
    lokalizacja: { szerokosc: 50.587, dlugosc: 19.451, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Włodowska", nr_porzadkowy: null },
    administracja: { zarzadca: null, telefon_publiczny: null, adres_kancelarii: null, uwaga: null },
    informacje: { rok_zalozenia: 1918, datowanie_opis: "Powstał po bitwie w listopadzie 1914 r., uporządkowany w 1918 r.", powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: "Wpis do rejestru zabytków nieruchomych", numer_rejestru: "434/88, decyzja z 27.05.1988", wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Największa nekropolia wojenna na Jurze Krakowsko-Częstochowskiej z ponad 2000 żołnierzami trzech armii.", opis_rozszerzony: "Cmentarz wojenny w Kotowicach powstał w wyniku bitwy między Częstochową a Krakowem w listopadzie 1914 roku. Początkowo spoczęło tu około 500 żołnierzy, a po przeniesieniu szczątków z innych kwater w latach 30. XX wieku liczba wzrosła do ponad 2000. Pochowani tu są żołnierze armii niemieckiej, austro-węgierskiej i rosyjskiej." },
    fakty_zrodlowe: [{ pole: "informacje.numer_rejestru", informacja: "434/88, decyzja z 27.05.1988", zrodla: ["S01"], pewnosc: "wysoka", uwaga: null }, { pole: "historia", informacja: "W 1918 r. pochowano tu około 500 żołnierzy. W latach 30. XX w. przeniesiono szczątki z innych kwater, zwiększając liczbę do ponad 2000.", zrodla: ["S33"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: ["Największa nekropolia wojenna na Jurze Krakowsko-Częstochowskiej.", "Na cmentarzu znajduje się 6 typów żeliwnych krzyży — 3 katolickie i 3 prawosławne.", "Spoczywają tu żołnierze trzech armii: niemieckiej, austro-węgierskiej i rosyjskiej.", "Charakterystyczna brama wejściowa jest jednym z symboli cmentarza."], uwagi_redakcyjne: ["Identyczne współrzędne z cmentarzem parafialnym - rozdzielić punkty."], brakujace_dane: [], zrodla: ["S01", "S32", "S33", "S34", "S51"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-25", gmina: "Żarki", nazwa: "Cmentarz parafialny w Kotowicach", slug: "cmentarz-parafialny-kotowice", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.5866, dlugosc: 19.4505, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia NMP Różańcowej w Kotowicach", telefon_publiczny: "34 314 88 94", adres_kancelarii: "ul. Włodowska 12, 42-310 Kotowice", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Kotowicach, sąsiadujący z zabytkowym cmentarzem wojennym.", opis_rozszerzony: "Cmentarz parafialny w Kotowicach sąsiaduje z zabytkową nekropolią wojenną z okresu I wojny światowej. Są to jednak dwa odrębne obiekty." },
    fakty_zrodlowe: [{ pole: "geografia", informacja: "Cmentarz parafialny i cmentarz wojenny sąsiadują, ale mają odrębny charakter.", zrodla: ["S51"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: ["PILNE: współrzędne dwóch nekropolii wymagają rozróżnienia."], brakujace_dane: ["aktualny administrator"], zrodla: ["S51"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-26", gmina: "Żarki", nazwa: "Cmentarz parafialny w Przybynowie", slug: "cmentarz-parafialny-przybynow", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.649, dlugosc: 19.318, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: null, nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Mikołaja w Przybynowie", telefon_publiczny: "34 314 88 35; 608 321 884", adres_kancelarii: "ul. Częstochowska 2, 42-310 Przybynów", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: null, datowanie_opis: null, powierzchnia_ha: null, powierzchnia_historyczna: null, ochrona: null, numer_rejestru: null, wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Przybynowie, funkcjonujący przy historycznej wspólnocie parafialnej.", opis_rozszerzony: "Cmentarz parafialny w Przybynowie związany jest z miejscową parafią świętych Apostołów Piotra i Pawła." },
    fakty_zrodlowe: [{ pole: "przestrzen", informacja: "Studium gminne wyróżnia teren cmentarza w Przybynowie.", zrodla: ["S35"], pewnosc: "średnia", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: [], uwagi_redakcyjne: [], brakujace_dane: ["aktualny administrator"], zrodla: ["S35"], jakosc_karty: "częściowa", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-27", gmina: "Żarki", nazwa: "Cmentarz parafialny w Żarkach", slug: "cmentarz-zarki", rodzaj: "parafialny",
    lokalizacja: { szerokosc: 50.625, dlugosc: 19.373, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Ofiar Katynia", nr_porzadkowy: null },
    administracja: { zarzadca: "Parafia św. Szymona i Judy Tadeusza Apostołów w Żarkach", telefon_publiczny: "34 314 80 16", adres_kancelarii: "ul. Leśniowska 1, 42-310 Żarki", uwaga: "Adres kancelarii parafialnej nie oznacza adresu cmentarza." },
    informacje: { rok_zalozenia: 1819, datowanie_opis: "Rozbudowany w 1876 r. (kostnica) i 1899 r. (brama główna)", powierzchnia_ha: "ponad 2,5 ha", powierzchnia_historyczna: null, ochrona: "Wpis do rejestru zabytków nieruchomych", numer_rejestru: "A/651/2020", wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: true, kaplica_typ: "kostnica (1876)", parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Cmentarz parafialny w Żarkach przy ul. Ofiar Katynia, założony w 1819 r. i zajmujący ponad 2,5 ha.", opis_rozszerzony: "Cmentarz parafialny w Żarkach założono w 1819 roku, około 700 metrów od ówczesnej centralnej zabudowy miasta. Jego obszar przekracza 2,5 hektara. Nekropolia otoczona jest charakterystycznym murem z łamanego kamienia wapiennego. Cmentarz powiększano dwukrotnie — w 1876 r. powstała kostnica, a w 1899 r. wybudowano bramę główną od zachodu." },
    fakty_zrodlowe: [{ pole: "informacje.rok_zalozenia", informacja: "1819", zrodla: ["S07"], pewnosc: "wysoka", uwaga: null }, { pole: "informacje.ochrona", informacja: "Wpis do rejestru zabytków nieruchomych", zrodla: ["S01"], pewnosc: "wysoka", uwaga: null }, { pole: "historia", informacja: "We wrześniu 1939 r. hitlerowcy rozstrzelali tu ponad stu mieszkańców Żarek i okolic — wydarzenie upamiętnione obeliskiem.", zrodla: ["S07"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: ["W starej części zachowały się epitafia w językach polskim, rosyjskim i niemieckim.", "Na cmentarzu znajduje się kwatera ojców i braci paulinów związanych z Leśniowem.", "Spoczywa tu dziewięciu powstańców styczniowych z 1863 roku.", "Obelisk upamiętnia rozstrzelanie przez hitlerowców we wrześniu 1939 r. ponad stu mieszkańców Żarek.", "W mogile żołnierzy Września spoczywa ziemia z Katynia oraz sześciu żarczan — ofiary katyńskie.", "Najstarsze nagrobki z XIX w.: Justyny Groty Włockiej (†1846), Xawerego Groty Włockiego (1855), Rudolfa Stanisława Franaszka (†1863)."], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S01", "S07"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja"
  },
  {
    id: "cm-28", gmina: "Żarki", nazwa: "Nowy cmentarz żydowski w Żarkach", slug: "cmentarz-zydowski-zarki", rodzaj: "żydowski",
    lokalizacja: { szerokosc: 50.63, dlugosc: 19.36, wspolrzedne_status: "dane_wejsciowe_niezweryfikowane", ulica: "ul. Polna", nr_porzadkowy: null },
    administracja: { zarzadca: null, telefon_publiczny: null, adres_kancelarii: null, uwaga: null },
    informacje: { rok_zalozenia: 1821, datowanie_opis: "Trzeci kirkut w Żarkach, w lokalizacji Kierkowie", powierzchnia_ha: "1,5 ha", powierzchnia_historyczna: null, ochrona: "Wpis do rejestru zabytków nieruchomych", numer_rejestru: "A/1457/24", wyszukiwarka_grobow: null, regulamin_url: null, godziny_otwarcia: null, status_czynnosci: null, kaplica: null, kaplica_typ: null, parking: null, toaleta: null, woda: null, dostepnosc: null, wjazd_samochodem: null },
    teksty: { opis_krotki: "Zabytkowy kirkut w Żarkach przy ul. Polnej, założony w 1821 r., z około 1100 zachowanymi grobami.", opis_rozszerzony: "Nowy cmentarz żydowski w Żarkach, przy ul. Polnej w miejscu zwanym Kierkowie, założono w 1821 roku jako trzeci kirkut w mieście. Zajmuje 1,5 hektara i jest jedną z najcenniejszych nekropolii żydowskich Jury Krakowsko-Częstochowskiej. Podczas Zagłady, w 1942 roku, na terenie cmentarza naziści zamordowali około 300 osób. W latach 1983–1985 zinwentaryzowano około 900 nagrobków; dziś zachowało się około 1100 grobów." },
    fakty_zrodlowe: [{ pole: "informacje.rok_zalozenia", informacja: "1821", zrodla: ["S08", "S09"], pewnosc: "wysoka", uwaga: null }, { pole: "historia", informacja: "W 1942 r. na terenie cmentarza naziści rozstrzelali około 300 osób pochodzenia żydowskiego.", zrodla: ["S08"], pewnosc: "wysoka", uwaga: null }, { pole: "historia", informacja: "W 2004 r. Zakład Judaistyki Uniwersytetu Jagiellońskiego przeprowadził inwentaryzację naukową cmentarza.", zrodla: ["S09"], pewnosc: "wysoka", uwaga: null }],
    kontekst_parafialny: [], ciekawostki: ["Wyróżniają go oryginalne żydowskie symbole nagrobne, w tym rzadkie 8- i 12-ramienne gwiazdy oraz hebrajsko-polskie inskrypcje.", "Najstarszy zachowany nagrobek pochodzi z 1835 roku.", "W 2013 r. odkryto trzy niezwykle rzadkie żeliwne macewy z lat 1880, 1886 i 1894 — takie zachowały się tylko w 5–6 miejscach w Polsce i Europie.", "Eli Zborowski, urodzony w Żarkach, lider American Society for Yad Vashem, zainicjował odrestaurowanie cmentarza.", "W 1836 r. wybuchł spór między ojcami paulinami a dozorem synagogi o granice cmentarza."], uwagi_redakcyjne: [], brakujace_dane: [], zrodla: ["S01", "S08", "S09"], jakosc_karty: "rozbudowana", status_publikacji: "tekst_do_weryfikacji_przed_publikacja",
    // Przykładowa galeria - podmień ścieżki na prawdziwe zdjęcia
    galeria: {
      zdjecie_glowne: {
        id: "g-kirkut-main",
        typ: "photo",
        url: "/images/galeria/kirkut-zarki-brama.jpg",
        alt: "Brama wejściowa na cmentarz żydowski w Żarkach",
        tytul: "Brama główna kirkutu",
        autor: "Dom Pogrzebowy Lilia"
      },
      zdjecia_drone: [
        { id: "g-kirkut-drone-1", typ: "drone", url: "/images/galeria/kirkut-zarki-drone-1.jpg", alt: "Widok z drona na cmentarz żydowski w Żarkach", tytul: "Panorama kirkutu z lotu ptaka" },
        { id: "g-kirkut-drone-2", typ: "drone", url: "/images/galeria/kirkut-zarki-drone-2.jpg", alt: "Macewy kirkutu z drona", tytul: "Zabytkowe macewy" }
      ],
      zdjecia: [
        { id: "g-kirkut-photo-1", typ: "photo", url: "/images/galeria/kirkut-zarki-macewa-1.jpg", alt: "Zabytkowa macewa z symbolem menory", tytul: "Macewa z menorą" },
        { id: "g-kirkut-photo-2", typ: "photo", url: "/images/galeria/kirkut-zarki-lapidarium.jpg", alt: "Lapidarium na cmentarzu żydowskim", tytul: "Lapidarium" }
      ],
      filmy: [
        { id: "g-kirkut-video-1", typ: "video", url: "https://www.youtube.com/watch?v=EXAMPLE", thumb: "/images/galeria/kirkut-zarki-video-thumb.jpg", alt: "Film z lotu drona nad kirkutem", tytul: "Lot dronem nad kirkutem" }
      ]
    }
  }
];

// Funkcje pomocnicze

export function getCemeteryById(id: string): CemeteryV2 | undefined {
  return cmentarze.find(c => c.id === id);
}

export function getCemeteryBySlug(slug: string): CemeteryV2 | undefined {
  return cmentarze.find(c => c.slug === slug);
}

export function getCemeteriesByGmina(gmina: string): CemeteryV2[] {
  return cmentarze.filter(c => c.gmina === gmina);
}

export function getCemeteriesByRodzaj(rodzaj: string): CemeteryV2[] {
  return cmentarze.filter(c => c.rodzaj === rodzaj);
}

export function getSourceDetails(sourceId: string): SourceReference | undefined {
  return zrodla[sourceId];
}

export function getSourcesForCemetery(cemetery: CemeteryV2): SourceReference[] {
  return cemetery.zrodla
    .map(id => zrodla[id])
    .filter((s): s is SourceReference => s !== undefined);
}

export function getHighCertaintyFacts(cemetery: CemeteryV2) {
  return cemetery.fakty_zrodlowe.filter(f => f.pewnosc === 'wysoka');
}

export function getMediumCertaintyFacts(cemetery: CemeteryV2) {
  return cemetery.fakty_zrodlowe.filter(f => f.pewnosc === 'średnia');
}

// Mapa rodzajów dla filtrowania
export const rodzajeLabels: Record<string, string> = {
  'parafialny': 'Parafialny',
  'komunalny': 'Komunalny',
  'wojenny': 'Wojenny',
  'żydowski': 'Żydowski',
  'mariawicki': 'Mariawicki'
};

// Zliczenia per gmina
export const gminyCounts = [
  { nazwa: "Koziegłowy", liczba: 9 },
  { nazwa: "Myszków", liczba: 8 },
  { nazwa: "Niegowa", liczba: 2 },
  { nazwa: "Poraj", liczba: 4 },
  { nazwa: "Żarki", liczba: 5 }
];
