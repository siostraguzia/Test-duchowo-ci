
import { Question, Persona, AxisID } from './types';

export const QUESTIONS: Question[] = [
  // OŚ 1: ŹRÓDŁO (Wnętrze vs Wspólnota)
  { id: 1, text: "Najgłębiej doświadczam obecności Boga, gdy jestem w całkowitej ciszy i samotności.", axis: 'source', invert: false },
  { id: 2, text: "Wspólna liturgia i śpiew w kościele dają mi więcej siły niż modlitwa w domu.", axis: 'source', invert: true },
  { id: 3, text: "Rozmowa z drugim człowiekiem o wierze jest dla mnie naturalnym sposobem spotkania Boga.", axis: 'source', invert: true },
  { id: 4, text: "Potrzebuję długich chwil odosobnienia, aby usłyszeć, co Bóg do mnie mówi.", axis: 'source', invert: false },
  { id: 5, text: "Czuję się bliżej Boga, gdy służę innym we wspólnocie, niż gdy medytuję sam.", axis: 'source', invert: true },
  { id: 6, text: "Moje serce jest świątynią, w której najchętniej przebywam z Panem.", axis: 'source', invert: false },
  { id: 7, text: "Głośna modlitwa uwielbienia we wspólnocie pomaga mi otworzyć się na Ducha Świętego.", axis: 'source', invert: true },
  { id: 8, text: "Hałas i obecność wielu ludzi często utrudniają mi autentyczne skupienie na Bogu.", axis: 'source', invert: false },

  // OŚ 2: JĘZYK (Słowo vs Doświadczenie)
  { id: 9, text: "Analiza tekstów biblijnych i teologicznych to mój główny sposób poznawania Boga.", axis: 'language', invert: false },
  { id: 10, text: "Wierzę, że Bóg mówi do mnie przede wszystkim przez emocje i poruszenia serca.", axis: 'language', invert: true },
  { id: 11, text: "Szukam prawdy w oficjalnym nauczaniu Kościoła i pismach Ojców Kościoła.", axis: 'language', invert: false },
  { id: 12, text: "Znaki i codzienne wydarzenia są dla mnie czytelniejszym głosem Boga niż skomplikowane traktaty.", axis: 'language', invert: true },
  { id: 13, text: "Kiedy czytam Biblię, skupiam się na zrozumieniu historycznego i doktrynalnego sensu tekstu.", axis: 'language', invert: false },
  { id: 14, text: "Podczas modlitwy najważniejsze jest dla mnie to, co aktualnie przeżywam i czuję.", axis: 'language', invert: true },
  { id: 15, text: "Jasne definie wiary dają mi poczucie bezpieczeństwa w relacji z Bogiem.", axis: 'language', invert: false },
  { id: 16, text: "Doświadczenie pokoju lub radości jest dla mnie najlepszym dowodem na Bożą obecność.", axis: 'language', invert: true },

  // OŚ 3: STYL ODPOWIEDZI (Rozeznanie vs Relacja)
  { id: 17, text: "Zanim podejmę decyzję, długo analizuję, co jest logiczne i zgodne z wolą Bożą.", axis: 'style', invert: false },
  { id: 18, text: "W relacji z Jezusem najważniejsza jest dla mnie czułość i poczucie bycia kochanym.", axis: 'style', invert: true },
  { id: 19, text: "Moja wiara opiera się na ciągłym zadawaniu pytań i szukaniu sensu.", axis: 'style', invert: false },
  { id: 20, text: "Kiedy ktoś cierpi, łatwiej jest mi z nim płakać niż tłumaczyć mu sens cierpienia.", axis: 'style', invert: true },
  { id: 21, text: "Duchowość powinna być przede wszystkim mądra i przemyślana.", axis: 'style', invert: false },
  { id: 22, text: "Często mówię do Boga jak do najlepszego przyjaciela, bez zbędnych form.", axis: 'style', invert: true },
  { id: 23, text: "Rozeznawanie duchowe to dla mnie proces intelektualny i modlitewny.", axis: 'style', invert: false },
  { id: 24, text: "Empatia wobec bliźnich jest moją najprostszą drogą do Boga.", axis: 'style', invert: true },

  // OŚ 4: DROGA WZROSTU (Struktura vs Proces)
  { id: 25, text: "Potrzebuję stałego planu dnia i konkretnych reguł modlitwy, by wzrastać.", axis: 'growth', invert: false },
  { id: 26, text: "Moja droga z Bogiem to ciągła zmiana; nie lubię sztywnych schematów.", axis: 'growth', invert: true },
  { id: 27, text: "Wierność codziennym obowiązkom duchowym jest dla mnie fundamentem.", axis: 'growth', invert: false },
  { id: 28, text: "Bóg prowadzi mnie przez różne etapy życia, z których każdy jest inny.", axis: 'growth', invert: true },
  { id: 29, text: "Czuję niepokój, gdy nie mam ustalonego rytmu życia duchowego.", axis: 'growth', invert: false },
  { id: 30, text: "Wydarzenia losowe są dla mnie ważniejszą lekcją niż z góry założony program formacyjny.", axis: 'growth', invert: true },
  { id: 31, text: "Duchowa dyscyplina jest kluczem do wolności.", axis: 'growth', invert: false },
  { id: 32, text: "Najważniejsze to być otwartym na to, co przyniesie 'dzisiaj', a nie trzymać się planu.", axis: 'growth', invert: true },
];

export const PERSONAS: Persona[] = [
  {
    id: 'kontemplator',
    name: 'Kontemplator Słowa',
    description: 'Twoja duchowość budowana jest w ciszy i głębi Słowa Bożego. Spotykasz Boga tam, gdzie milkną głosy świata, a zaczyna mówić Prawda.',
    imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=1200',
    strengths: ['Głębokie słuchanie', 'Wierność modlitwie wewnętrznej', 'Duchowa autonomia', 'Analityczność'],
    shadows: ['Ryzyko izolacji', 'Trudność w dzieleniu się świadectwem', 'Nadmierny intelektualizm'],
    growth: ['Praktyka Lectio Divina', 'Adoracja w ciszy', 'Dzielenie się owocami medytacji'],
    saints: [
      { name: 'św. Jan od Krzyża', note: 'Mistyk nocy ciemnej i głębokiego zjednoczenia.' },
      { name: 'św. Teresa z Avila', note: 'Doktor Kościoła, uczyła o twierdzy wewnętrznej.' },
      { name: 'św. Hieronim', note: 'Zakochany w Piśmie Świętym, patron biblistów.' }
    ],
    matchCriteria: (res) => res.source < 50 && res.language < 50,
  },
  {
    id: 'uczen_drogi',
    name: 'Uczeń Drogi',
    description: 'Dla Ciebie wiara to historia, którą Bóg pisze w Twoim sercu. Widzisz Jego ślady w emocjach i codziennych spotkaniach.',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200',
    strengths: ['Wrażliwość na znaki', 'Autentyczność przeżywania', 'Adaptacyjność', 'Emocjonalna głębia'],
    shadows: ['Zależność od nastroju', 'Brak regularności', 'Pogoń za nowościami'],
    growth: ['Rachunek sumienia ignacjański', 'Stały kierownik duchowy', 'Dziennik duchowy'],
    saints: [
      { name: 'św. Ignacy Loyola', note: 'Mistrz rozeznawania duchów i znajdowania Boga we wszystkim.' },
      { name: 'św. Franciszek z Asyżu', note: 'Odkrywca Bożej obecności w całym stworzeniu.' },
      { name: 'św. Faustyna Kowalska', note: 'Apostołka miłosierdzia, żyjąca bliską relacją serca.' }
    ],
    matchCriteria: (res) => res.source < 50 && res.language >= 50,
  },
  {
    id: 'budowniczy',
    name: 'Budowniczy Wspólnoty',
    description: 'Spotykasz Boga w drugim człowieku i we wspólnym działaniu. Twoja wiara karmi się relacjami i ofiarną służbą.',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200',
    strengths: ['Budowanie więzi', 'Gotowość do służby', 'Radość liturgii', 'Praktyczne miłosierdzie'],
    shadows: ['Lęk przed ciszą', 'Przemęczenie aktywnością', 'Zależność od akceptacji'],
    growth: ['Ciche dni skupienia', 'Modlitwa za nieprzyjaciół', 'Pielęgnowanie samotni serca'],
    saints: [
      { name: 'św. Jan Bosko', note: 'Ojciec młodzieży, widział Boga w gwarze oratorium.' },
      { name: 'św. Matka Teresa', note: 'Widziała oblicze Jezusa w najbiedniejszych z biednych.' },
      { name: 'św. Wincenty de Paul', note: 'Gigant miłosierdzia organizujący pomoc wspólnocie.' }
    ],
    matchCriteria: (res) => res.source >= 50 && res.language >= 50,
  },
  {
    id: 'straznik',
    name: 'Strażnik Prawdy',
    description: 'Twoja wiara opiera się na fundamencie Tradycji i jasnych zasadach. Cenisz porządek, mądrość wieków i wierność Kościołowi.',
    imageUrl: 'https://images.unsplash.com/photo-1548625361-195fe57659df?auto=format&fit=crop&q=80&w=1200',
    strengths: ['Stałość przekonań', 'Jasność rozeznania', 'Szacunek do autorytetu', 'Męstwo w obronie wiary'],
    shadows: ['Rygoryzm', 'Lęk przed tajemnicą', 'Trudność z dialogiem'],
    growth: ['Studium teologiczne', 'Modlitwa Brewiarzowa', 'Ćwiczenie pokory intelektualnej'],
    saints: [
      { name: 'św. Tomasz z Akwinu', note: 'Anielski Doktor, harmonijnie łączył wiarę i rozum.' },
      { name: 'św. Augustyn', note: 'Obrońca ortodoksji, szukający prawdy całym życiem.' },
      { name: 'św. Benedykt', note: 'Twórca reguły, która zaprowadziła ład w zachodnim chrześcijaństwie.' }
    ],
    matchCriteria: (res) => res.source >= 50 && res.language < 50,
  }
];

export const AXIS_INFO: Record<AxisID, { left: string, right: string, desc: string, longDesc: string }> = {
  source: { 
    left: 'Wnętrze', 
    right: 'Wspólnota', 
    desc: 'Skąd czerpiesz siłę?',
    longDesc: 'Określa, czy Twoje spotkanie z Bogiem dokonuje się najpierw w izdebce własnego serca, czy poprzez relacje i wspólne działanie z innymi wierzącymi.'
  },
  language: { 
    left: 'Słowo', 
    right: 'Doświadczenie', 
    desc: 'Jak Bóg mówi do Ciebie?',
    longDesc: 'Wskazuje, czy fundamentem Twojego poznania Boga jest obiektywny przekaz (Biblia, Doktryna), czy subiektywne poruszenia i znaki w codzienności.'
  },
  style: { 
    left: 'Rozeznanie', 
    right: 'Relacja', 
    desc: 'Jak odpowiadasz na głos Pana?',
    longDesc: 'Pokazuje, czy w relacji z Bogiem dominuje u Ciebie namysł, logika i analiza woli Bożej, czy raczej intuicja, uczucie i bezpośrednia bliskość przyjaźni.'
  },
  growth: { 
    left: 'Struktura', 
    right: 'Proces', 
    desc: 'Jak wzrastasz?',
    longDesc: 'Mówi o tym, czy potrzebujesz stałych reguł, rytmów i planów modlitwy, czy Twoja droga jest dynamiczna i zmienia się wraz z etapami życia.'
  },
};
