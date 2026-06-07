// App Page Entry and Main Composition

import { storyLoop } from "../lib/content.js";
import { createTopBar } from "../components/loops/top-bar.js";
import { createStatusPill } from "../components/loops/status-pill.js";
import { createHeroStoryCard } from "../components/loops/hero-story-card.js";
import { createPaginationDots } from "../components/loops/pagination-dots.js";
import { createExplainerCard } from "../components/loops/explainer-card.js";
import { createInsetImpactPanel } from "../components/loops/inset-impact-panel.js";

let activeStoryId = "heilbronn-beats";
let _storyLoadedByUser = false;

const allStories = [
  {
    id: "heilbronn-beats",
    title: "Heilbronn Beats: Riesiges Open-Air-Festival im Neckarpark angekündigt",
    category: "Events",
    status: "EILMELDUNG",
    author: "Sarah Lenz",
    summary: "Ein massives neues Electro- und Hip-Hop-Festival kommt diesen Sommer in den Neckarpark.",
    age: "vor 1 Std.",
    distance: "1,2 km entfernt",
    sources: "Offizielle PR",
    thumb: "../public/images/heilbronn_beats_festival.png",
    articleBody: `<p class="drawer-lead">Heilbronn rüstet sich für die größte Sommerparty aller Zeiten. <mark class="editorial-highlight">Das "Heilbronn Beats" Open-Air-Festival kommt offiziell in den Neckarpark.</mark></p>
      <img src="../public/images/heilbronn_beats_festival.png" alt="Konzertmenge" class="drawer-image" />
      <p class="drawer-body">Die Veranstalter gaben heute das erste Line-up bekannt und versprechen ein gewaltiges Wochenende voller elektronischer Musik, Hip-Hop und interaktiver Kunstinstallationen. Das Festival richtet sich speziell an die Jugend und Studierenden der Stadt.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Wir wollten ein Erlebnis schaffen, das Heilbronn für junge Menschen im ganzen Bundesland auf die Karte setzt.</p>
      </div>
      <p class="drawer-body">Early-Bird-Tickets gehen nächsten Freitag um Mitternacht in den Vorverkauf. <mark class="editorial-highlight">Studierende mit gültigem Ausweis erhalten 30 % Rabatt auf Wochenendtickets.</mark></p>`,
    loops: [
      {
        step: 1,
        title: "Heilbronn Beats: Riesiges Open-Air-Festival im Neckarpark angekündigt",
        category: "Events",
        status: "EILMELDUNG",
        age: "vor 1 Std.",
        distance: "1,2 km entfernt",
        impactTitle: "",
        impactText: "Ein massives neues Electro- und Hip-Hop-Festival kommt diesen Sommer in den Neckarpark, mit internationalen Headlinern und einem riesigen Studentenrabatt.",
        imageUrl: "../public/images/heilbronn_beats_festival.png",
        imageAlt: "Konzertmenge"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "Was bedeutet das für dich?",
        category: "Events",
        status: "EILMELDUNG",
        age: "vor 1 Std.",
        distance: "1,2 km entfernt",
        impactTitle: "DEINE MEINUNG",
        impactText: "Mach dich bereit für ein episches Sommerwochenende! Wenn du studierst, sichere dir frühzeitig die vergünstigten Tickets, bevor sie ausverkauft sind.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Fragezeichen"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Schau dir das Festival-Line-up an",
        category: "Events",
        status: "EILMELDUNG",
        age: "Aktiv",
        distance: "Neckarpark",
        imageUrl: "../public/images/heilbronn_beats_festival.png",
        imageAlt: "Konzertmenge",
        actionBtnText: "Am Event teilnehmen",
        actionType: "email",
        emailFormTitle: "Event-Updates erhalten",
        emailFormText: "Trage deine E-Mail-Adresse ein, um Updates und Ticketinformationen zu erhalten."
      }
    ]
  },
  {
    id: "skatepark-drama",
    title: "Stadtrat stimmt für Abriss des beliebten Skateparks in der Innenstadt",
    category: "Gesellschaft",
    status: "AKTUALISIERUNG",
    author: "Marc Richter",
    summary: "Im Internet kam es heute zu großer Empörung, nachdem der Heilbronner Stadtrat Pläne bekannt gab, den legendären Skatepark abzureißen.",
    age: "vor 3 Std.",
    distance: "Innenstadt",
    sources: "3 Quellen",
    thumb: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80",
    articleBody: `<p class="drawer-lead">Eine umstrittene Entscheidung hat heute unter den Jugendlichen in Heilbronn massive Empörung ausgelöst. <mark class="editorial-highlight">Der Stadtrat hat stillschweigend einen Plan zum Abriss des beliebten Skateparks in der Innenstadt gebilligt.</mark></p>
      <img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80" alt="Skatepark" class="drawer-image" />
      <p class="drawer-body">Der Park, der seit über einem Jahrzehnt ein kultureller Treffpunkt für Skater, BMX-Fahrer und Künstler ist, soll durch einen luxuriösen Apartmentkomplex ersetzt werden. Lokale Jugendorganisationen beklagen, sie seien vom Entscheidungsprozess völlig ausgeschlossen worden.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Sie reißen den einzigen kostenlosen, sicheren Raum ab, den wir in der Stadt noch haben, nur um Wohnungen zu bauen, die sich niemand von uns leisten kann.</p>
      </div>
      <p class="drawer-body">Aktivisten organisieren bereits einen massiven Protest, der für diesen Samstag am Rathaus geplant ist. <mark class="editorial-highlight">Eine Petition zur Rücknahme der Entscheidung hat in nur zwei Stunden über 5.000 Unterschriften gesammelt.</mark></p>`,
    loops: [
      {
        step: 1,
        title: "Stadtrat stimmt für Abriss des beliebten Skateparks in der Innenstadt",
        category: "Gesellschaft",
        status: "AKTUALISIERUNG",
        age: "vor 3 Std.",
        distance: "Innenstadt",
        impactTitle: "",
        impactText: "Der beliebte Skatepark in der Innenstadt soll abgerissen werden, um Luxuswohnungen zu bauen, was bei der lokalen Jugend große Empörung und Proteste auslöst.",
        imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Skatepark"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "Was bedeutet das für dich?",
        category: "Gesellschaft",
        status: "AKTUALISIERUNG",
        age: "vor 3 Std.",
        distance: "Innenstadt",
        impactTitle: "DEINE MEINUNG",
        impactText: "Ein wichtiger Treffpunkt für Jugendliche verschwindet. Wenn du dir Gehör verschaffen willst, schließe dich den Protesten an oder unterschreibe die Online-Petition.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Fragezeichen"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Beteilige dich an der Diskussion über den Skatepark",
        category: "Gesellschaft",
        status: "AKTUALISIERUNG",
        age: "Aktiv",
        distance: "Innenstadt",
        imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Skatepark"
      }
    ]
  },
  {
    id: "tech-hub-jobs",
    title: "Großer Tech-Hub in Heilbronn eröffnet: 500 neue Einstiegsjobs",
    category: "Jobs",
    status: "NEU",
    author: "Elena Weber",
    summary: "Ein riesiger neuer KI-Innovationscampus wurde in Heilbronn eröffnet.",
    age: "vor 10 Min.",
    distance: "Innovationspark",
    sources: "2 Quellen",
    thumb: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    articleBody: `<p class="drawer-lead">Heilbronn festigt seinen Status als nächster großer KI-Hotspot Europas. <mark class="editorial-highlight">Ein mit Spannung erwarteter Tech-Campus hat heute Morgen offiziell seine Türen geöffnet.</mark></p>
      <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" alt="Tech-Campus" class="drawer-image" />
      <p class="drawer-body">Die neue Einrichtung, die von führenden Tech-Giganten finanziert wird, konzentriert sich ganz auf Künstliche Intelligenz und Green-Tech. Was diesen Start für die lokale Gemeinschaft besonders aufregend macht, ist die massive Einstellungsoffensive, die sich an Absolventen und junge Talente richtet.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Wir suchen nicht nur leitende Ingenieure. Wir wollen frische, junge Köpfe aus Heilbronn, die uns helfen, die Zukunft der KI zu gestalten.</p>
      </div>
      <p class="drawer-body">Mehr als 500 Einstiegspositionen und bezahlte Praktika wurden soeben online ausgeschrieben. <mark class="editorial-highlight">Der Hub bietet zudem kostenlose Wochenend-Coding-Bootcamps für Anwohner an.</mark></p>`,
    loops: [
      {
        step: 1,
        title: "Großer Tech-Hub in Heilbronn eröffnet: 500 neue Einstiegsjobs",
        category: "Jobs",
        status: "NEU",
        age: "vor 10 Min.",
        distance: "Innovationspark",
        impactTitle: "",
        impactText: "Ein riesiger neuer KI-Innovationscampus wurde in Heilbronn eröffnet und bietet sofort 500 Einstiegsjobs und bezahlte Praktika für lokale junge Talente an.",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Tech-Campus"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "Was bedeutet das für dich?",
        category: "Jobs",
        status: "NEU",
        age: "vor 10 Min.",
        distance: "Innovationspark",
        impactTitle: "DEINE MEINUNG",
        impactText: "Möchtest du deine Karriere ankurbeln? Dies ist eine einmalige Gelegenheit, einen hochbezahlten Job oder ein Praktikum in der Tech-Branche zu ergattern, ohne Heilbronn verlassen zu müssen.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Fragezeichen"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Sieh dir die neuen Stellenangebote an",
        category: "Jobs",
        status: "NEU",
        age: "Aktiv",
        distance: "Innovationspark",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Tech-Campus",
        actionBtnText: "Stellenangebote ansehen",
        actionType: "email",
        emailFormTitle: "Stellenangebote erhalten",
        emailFormText: "Trage deine E-Mail-Adresse ein, um Infos zu Stellenangeboten zu erhalten."
      }
    ]
  },
  {
    id: "weststadt",
    title: "Weststadt-Radweg: Sanierung und Sicherheitsausbau abgeschlossen",
    category: "Infrastruktur",
    status: "Weststadt Radweg...",
    author: "Hb Stimme Redaktion",
    summary: "Die Bauarbeiten haben offiziell begonnen. Autofahrer müssen mit lokalen Umleitungen rechnen. Radfahrer werden vorübergehend durch ruhige Seitenstraßen geleitet.",
    age: "vor 3 Min.",
    distance: "0,4 km entfernt",
    sources: "4 Quellen",
    thumb: "../public/images/loops-bike-corridor.png",
    articleBody: `<p class="drawer-lead">Die Stadtverwaltung Heilbronn hat umfangreiche Sanierungsarbeiten am zentralen Weststadt-Radweg abgeschlossen. <mark class="editorial-highlight">Das Millionenprojekt zielt vor allem darauf ab, Schulwege sicherer zu machen.</mark></p>
      <img src="../public/images/loops-bike-corridor.png" alt="Weststadt-Radweg" class="drawer-image" />
      <p class="drawer-body">Nach knapp vier Monaten Bauzeit ist die vielbefahrene Weststadt-Strecke wieder vollständig für den Verkehr freigegeben. Neben einem lärmoptimierten, glatten Asphaltbelag wurden auf einer Länge von etwa 1,8 Kilometern breitere, farblich abgesetzte Schutzstreifen aufgebracht.</p>
      <p class="drawer-body">„Das Projekt zeigt, wie moderne lokale Mobilität in unserer Region aussehen kann“, sagte Oberbürgermeister Harry Mergel bei der offiziellen Eröffnung. <mark class="editorial-highlight">Der Fokus lag besonders auf der Erhöhung der passiven Sicherheit an komplexen Kreuzungen</mark>, wo reflektierende Markierungselemente und optimierte Ampelphasen installiert wurden.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Vor allem die verbesserte Entwässerung an den Straßenrändern sorgt dafür, dass Radfahrer bei starkem Regen nicht mehr durch tiefe Pfützen gefährdet werden.</p>
      </div>
      <p class="drawer-body"><mark class="editorial-highlight">Die Kosten belaufen sich auf rund 820.000 €</mark>, der Großteil wurde über das Gemeindeverkehrsfinanzierungsgesetz des Landes finanziert. Pendler und Anwohner äußerten in ersten Umfragen positives Feedback zum neuen Fahrkomfort.</p>`,
    loops: [
      {
        step: 1,
        title: "Weststadt-Radweg: Sanierung und Sicherheitsausbau abgeschlossen",
        category: "Infrastruktur",
        status: "Weststadt Radweg...",
        age: "vor 3 Min.",
        distance: "0,4 km entfernt",
        impactTitle: "",
        impactText: "Die Bauarbeiten haben offiziell begonnen. Autofahrer müssen mit lokalen Umleitungen rechnen. Radfahrer werden vorübergehend durch ruhige Seitenstraßen geleitet.",
        imageUrl: "../public/images/loops-bike-corridor.png",
        imageAlt: "Planungsdarstellung des Weststadt-Korridors"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "Was bedeutet das für dich?",
        category: "Infrastruktur",
        status: "Weststadt Radweg...",
        age: "vor 1 Tag",
        distance: "0,4 km entfernt",
        impactTitle: "DEINE MEINUNG",
        impactText: "Die Strecke ist jetzt sicherer und einfacher zu nutzen. Wir möchten deine Meinung zum neuen Radweg wissen.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Fragezeichen"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Weststadt-Radweg: Sanierung und Sicherheitsausbau abgeschlossen",
        category: "Infrastruktur",
        status: "Weststadt Radweg...",
        age: "Aktiv",
        distance: "Heilbronn",
        imageUrl: "../public/images/damaged-road.png",
        imageAlt: "Foto lokaler Straßen"
      }
    ]
  },
  {
    id: "stadtradeln",
    title: "Stadtradeln 2026: Heilbronn will neuen Rekord im Klimaschutz aufstellen",
    category: "Klima",
    status: "EILMELDUNG",
    author: "Max Mustermann",
    summary: "Die Stadt hat ihre jährliche Stadtradeln-Kampagne gestartet. Bürger werden ermutigt, mit dem Rad zur Arbeit zu fahren, um CO2-Emissionen zu sparen und Preise zu gewinnen.",
    age: "vor 1 Std.",
    distance: "Stadtweit",
    sources: "2 Quellen",
    thumb: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    articleBody: `<p class="drawer-lead">Die Stadt Heilbronn nimmt erneut an der internationalen Stadtradeln-Kampagne teil. <mark class="editorial-highlight">Ziel ist es, in 21 Tagen so viele Kilometer wie möglich zu radeln.</mark></p>
      <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80" alt="Radfahrer" class="drawer-image" />
      <p class="drawer-body">Bürger, Kommunalpolitiker und Schulklassen bilden Teams, um ihre täglichen Fahrten zu dokumentieren. Die Initiative zielt darauf ab, nachhaltige Mobilität zu fördern und auf den Bedarf an besserer Fahrradinfrastruktur in der Region aufmerksam zu machen.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Jeder geradelte Kilometer ist ein direkter Beitrag zum Klimaschutz und ein klares Signal für ein grüneres Heilbronn.</p>
      </div>
      <p class="drawer-body">Die Anmeldung ist kostenlos und steht jedem offen, der in der Stadt lebt, arbeitet oder einem Verein angehört. Die Kampagne endet am Monatsende mit einer großen Preisverleihung auf dem Marktplatz.</p>`,
    loops: [
      {
        step: 1,
        title: "Stadtradeln 2026: Heilbronn will neuen Rekord im Klimaschutz aufstellen",
        category: "Klima",
        status: "EILMELDUNG",
        age: "vor 1 Std.",
        distance: "Stadtweit",
        impactTitle: "",
        impactText: "Die Stadt hat ihre jährliche Stadtradeln-Kampagne gestartet. Bürger werden ermutigt, mit dem Rad zur Arbeit zu fahren, um CO2 zu sparen und Preise zu gewinnen.",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Radfahrer in Heilbronn"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "Was bedeutet das für dich?",
        category: "Klima",
        status: "EILMELDUNG",
        age: "vor 1 Std.",
        distance: "Stadtweit",
        impactTitle: "DEINE MEINUNG",
        impactText: "Wirst du diesen Monat auf das Fahrrad für deinen Arbeitsweg umsteigen? Teile deine Gedanken und verpflichte dich zu Kilometern.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Fragezeichen"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Stadtradeln 2026: Heilbronn will neuen Rekord im Klimaschutz aufstellen",
        category: "Klima",
        status: "EILMELDUNG",
        age: "Aktiv",
        distance: "Heilbronn",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Radfahrer in Heilbronn"
      }
    ]
  },
  {
    id: "water",
    title: "Landkreis warnt vor Wasserknappheit: Appell zum Sparen",
    category: "Kommunalpolitik",
    status: "AKTUALISIERUNG",
    author: "Regionalredaktion",
    summary: "Aufgrund anhaltender Trockenperioden hat der Landkreis Heilbronn eine offizielle Warnung herausgegeben und die Bevölkerung zum Wassersparen aufgerufen.",
    age: "vor 2 Std.",
    distance: "Region",
    sources: "5 Quellen",
    thumb: "../public/images/water_shortage_drought.png",
    articleBody: `<p class="drawer-lead">Der massive Regenmangel der letzten Wochen hat die Behörden dazu veranlasst, eine offizielle Warnung zur Wasserersparnis herauszugeben. <mark class="editorial-highlight">Die Wasserstände in den lokalen Stauseen haben einen kritischen Tiefstand erreicht.</mark></p>
      <img src="../public/images/water_shortage_drought.png" alt="Dürre" class="drawer-image" />
      <p class="drawer-body">Der Landkreis Heilbronn hat alle Bewohner aufgefordert, sofort das Bewässern privater Rasenflächen, das Befüllen von Schwimmbecken und das Autowaschen einzustellen. Auch die Landwirtschaft unterliegt strengen Beschränkungen bei der Grundwasserentnahme während der Tageszeit.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Wir beobachten die Lage genau. Sollte die Trockenheit anhalten, werden rechtlich bindende Verbote der unvermeidliche nächste Schritt sein.</p>
      </div>
      <p class="drawer-body">Meteorologen erwarten in den kommenden zwei Wochen keine nennenswerten Niederschläge. Bürger werden gebeten, größere Leckagen oder Wasserverschwendung über die städtische Hotline zu melden.</p>`,
    loops: [
      {
        step: 1,
        title: "Landkreis warnt vor Wasserknappheit: Appell zum Sparen",
        category: "Kommunalpolitik",
        status: "AKTUALISIERUNG",
        age: "vor 2 Std.",
        distance: "Region",
        impactTitle: "",
        impactText: "Aufgrund anhaltender Trockenperioden hat der Landkreis Heilbronn eine offizielle Warnung herausgegeben und die Bevölkerung zum Wassersparen aufgerufen.",
        imageUrl: "../public/images/water_shortage_drought.png",
        imageAlt: "Wasserknappheit"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "Was bedeutet das für dich?",
        category: "Kommunalpolitik",
        status: "AKTUALISIERUNG",
        age: "vor 2 Std.",
        distance: "Region",
        impactTitle: "DEINE MEINUNG",
        impactText: "Änderst du deinen täglichen Wasserverbrauch aufgrund der Warnungen? Teile deine Spartipps mit der Community.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Fragezeichen"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Landkreis warnt vor Wasserknappheit: Appell zum Sparen",
        category: "Kommunalpolitik",
        status: "AKTUALISIERUNG",
        age: "Aktiv",
        distance: "Region",
        imageUrl: "../public/images/water_shortage_drought.png",
        imageAlt: "Wasserknappheit"
      }
    ]
  }
];

export function renderApp(mountNode) {
  if (!mountNode) return;

  // Clear previous content
  mountNode.innerHTML = "";

  // 1. Manage local interactive states
  let isBookmarked = localStorage.getItem("loops_bookmarked") === "true";
  const currentStory = allStories.find(s => s.id === activeStoryId);
  const loopSteps = currentStory.loops;
  let activeStepIndex = 0; // Default to first step

  // Top bar references
  let resolvedPill = createStatusPill({ label: loopSteps[activeStepIndex].status, type: loopSteps[activeStepIndex].status === "EILMELDUNG" ? "eilmeldung" : "resolved" });
  let categoryPill = createStatusPill({ label: loopSteps[activeStepIndex].category, type: "category" });

  const topBar = createTopBar({
    isBookmarked,
    pills: [resolvedPill, categoryPill],
    onBack: () => {
      openNewsList();
    },
    onBookmark: (e) => {
      isBookmarked = !isBookmarked;
      localStorage.setItem("loops_bookmarked", isBookmarked.toString());
      const btn = e.currentTarget;
      btn.classList.toggle("is-active", isBookmarked);
      showToast(isBookmarked ? "Lesezeichen gespeichert" : "Lesezeichen entfernt");
    },
    onShare: () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => showToast("Link in Zwischenablage kopiert"))
        .catch(() => showToast("Teilen fehlgeschlagen"));
    }
  });

  // Main Content Area wrapper
  const contentArea = document.createElement("main");
  contentArea.className = "app-content";

  // Create the horizontal scroll container
  const scrollContainer = document.createElement("div");
  scrollContainer.className = "loop-scroll-container";

  // Render all steps inside the scroll container
  loopSteps.forEach((stepData, index) => {
    const slide = document.createElement("div");
    slide.className = "loop-slide";
    slide.dataset.index = index;

    if (stepData.isFlipCard) {
      const flipContainer = document.createElement("div");
      flipContainer.className = "flip-container";
      
      const flipInner = document.createElement("div");
      flipInner.className = "flip-card-inner";
      
      const flipFront = document.createElement("div");
      flipFront.className = "flip-front";
      flipFront.innerHTML = `
        <div class="question-front-card-new">
          <div class="q-front-image-wrapper">
            <img src="${currentStory.thumb}" alt="Artikel-Titelbild" />
          </div>
          <div class="q-front-button-wrapper">
            <button class="q-front-action-btn" type="button" aria-label="Karte umdrehen">
              <span class="q-mark">?</span>
              <span class="q-text">Was das für Sie bedeutet</span>
              <span class="q-subtext" style="font-size: 13px; font-weight: 500; color: rgba(255, 255, 255, 0.9); margin-top: 4px;">Klicken zum Umdrehen</span>
            </button>
          </div>
        </div>
      `;

      const flipBack = document.createElement("div");
      flipBack.className = "flip-back";
      
      const otherStories = allStories.filter(s => s.id !== currentStory.id).slice(0, 3);
      const relatedLinksHtml = otherStories.map(s => `
        <a href="#" class="related-link-item" data-story-id="${s.id}">
          <span class="link-bullet"></span>
          <span class="link-text">${s.title}</span>
          <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
      `).join('');

      flipBack.innerHTML = `
        <div class="mystery-back-content">
          <div style="width: 100%;">
            <h3 class="mystery-back-title">Was bedeutet das für dich?</h3>
            <div class="mystery-back-body">
              <p>${stepData.impactText}</p>
            </div>
          </div>
          <div class="mystery-related-links" style="width: 100%; margin-top: 16px; text-align: left;">
            <span class="related-links-label">ÄHNLICHE ARTIKEL ANSEHEN</span>
            ${relatedLinksHtml}
          </div>
        </div>
      `;

      const relatedLinks = flipBack.querySelectorAll(".related-link-item");
      relatedLinks.forEach(link => {
        link.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();
          const storyId = e.currentTarget.getAttribute("data-story-id");
          if (storyId) {
            showToast("Artikel wird geladen...");
            setTimeout(() => {
              window.loadStory(storyId);
            }, 300);
          }
        });
      });
      
      flipInner.appendChild(flipFront);
      flipInner.appendChild(flipBack);
      flipContainer.appendChild(flipInner);
      
      // Flip logic (click and swipe down)
      const toggleFlip = () => flipInner.classList.toggle("is-flipped");

      flipContainer.addEventListener("click", toggleFlip);

      // Swipe down detection for flipContainer
      let startY = 0;
      flipContainer.addEventListener("touchstart", (e) => {
        startY = e.changedTouches[0].screenY;
      }, { passive: true });

      flipContainer.addEventListener("touchend", (e) => {
        const endY = e.changedTouches[0].screenY;
        const deltaY = endY - startY;
        // If swiped down or up by more than 50px, toggle flip
        if (Math.abs(deltaY) > 50) {
          toggleFlip();
        }
      }, { passive: true });

      const slidePaginationDots = createPaginationDots({
        total: loopSteps.length,
        activeIndex: index,
        onChange: (targetIdx) => {
          scrollContainer.scrollTo({
            left: targetIdx * scrollContainer.clientWidth,
            behavior: "smooth"
          });
        }
      });

      slide.appendChild(flipContainer);
      slide.appendChild(slidePaginationDots);
      scrollContainer.appendChild(slide);
      return; // Skip normal rendering for this step
    }

    // Create Hero Card
    const heroCardWrapper = createHeroStoryCard({
      imageUrl: stepData.imageUrl,
      altText: stepData.imageAlt,
      distance: stepData.distance,
      recency: stepData.age
    });

    // Handle Hero Peeks (make them scroll instead of rendering a new step) if they exist
    const leftPeek = heroCardWrapper.querySelector(".left-peek");
    const rightPeek = heroCardWrapper.querySelector(".right-peek");

    if (leftPeek) {
      leftPeek.addEventListener("click", () => {
        if (index > 0) {
          scrollContainer.scrollTo({
            left: (index - 1) * scrollContainer.clientWidth,
            behavior: "smooth"
          });
        } else {
          triggerBounce("left");
        }
      });
    }

    if (rightPeek) {
      rightPeek.addEventListener("click", () => {
        if (index < loopSteps.length - 1) {
          scrollContainer.scrollTo({
            left: (index + 1) * scrollContainer.clientWidth,
            behavior: "smooth"
          });
        } else {
          triggerBounce("right");
        }
      });
    }

    // Dots Spacer
    const dotsSpacer = document.createElement("div");
    dotsSpacer.className = "slide-dots-spacer";

    // Explainer or DO NEXT Card
    let explainerCard;
    if (stepData.isDoNext) {
      explainerCard = document.createElement("div");
      explainerCard.className = "loops-explainer-card do-next-card";
      explainerCard.innerHTML = `
        <div class="explainer-card-content">
          <div class="explainer-header-row">
            <div class="explainer-header-left">
              <span class="do-next-arrow-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
              <span class="explainer-header-title">ALS NÄCHSTES</span>
            </div>
            <div class="explainer-header-right">${loopSteps.length}/${loopSteps.length}</div>
          </div>
          <h2 class="explainer-headline">${stepData.title}</h2>
          
          <button type="button" class="btn-take-action" id="takeActionBtn">
            <span>${stepData.actionBtnText || "Jetzt handeln"}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <div style="height: 48px; width: 100%;"></div>
        </div>
      `;

      const actionBtn = explainerCard.querySelector("#takeActionBtn");
      actionBtn.addEventListener("click", (e) => {
        triggerFireExplosion(e);
        setTimeout(() => {
          if (stepData.actionType === "email") {
            openEmailModal(stepData.emailFormTitle || "Anmelden", stepData.emailFormText || "E-Mail-Adresse eingeben.");
          } else {
            openCommentModal();
          }
        }, 600);
      });

    } else {
      const children = [];
      if (stepData.impactText) {
        const impactPanel = createInsetImpactPanel({ text: stepData.impactText });
        children.push(impactPanel);
      }
      
      const fullReportLink = document.createElement("a");
      fullReportLink.href = "#";
      fullReportLink.className = "full-report-cue";
      fullReportLink.setAttribute("role", "button");
      fullReportLink.setAttribute("aria-label", "Den vollständigen Artikel lesen");
      fullReportLink.innerHTML = `
        <svg class="swipe-up-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      `;
      fullReportLink.addEventListener("click", (e) => {
        e.preventDefault();
        openArticleDrawer();
      });

      explainerCard = createExplainerCard({
        title: stepData.title,
        impactTitle: stepData.impactTitle,
        counter: `${stepData.step}/${loopSteps.length}`,
        children: [...children, fullReportLink]
      });
    }

    // Create pagination dots for this slide
    const slidePaginationDots = createPaginationDots({
      total: loopSteps.length,
      activeIndex: index,
      onChange: (targetIdx) => {
        scrollContainer.scrollTo({
          left: targetIdx * scrollContainer.clientWidth,
          behavior: "smooth"
        });
      }
    });

    slide.appendChild(heroCardWrapper);
    slide.appendChild(slidePaginationDots);
    slide.appendChild(explainerCard);
    scrollContainer.appendChild(slide);
  });

  // Dynamic visual updates (dots + top bar pills) when active step changes
  function updateActiveStepVisuals(index) {
    const currentStepData = loopSteps[index];

    // Update Topbar pills
    const topBarPillsContainer = topBar.querySelector(".loops-top-bar-pills");
    if (topBarPillsContainer) {
      topBarPillsContainer.innerHTML = "";
      resolvedPill = createStatusPill({ label: currentStepData.status, type: currentStepData.status === "EILMELDUNG" ? "eilmeldung" : (currentStepData.status === "RESOLVED" || currentStepData.status === "DO NEXT" ? "resolved" : "category") });
      categoryPill = createStatusPill({ label: currentStepData.category, type: "category" });
      topBarPillsContainer.appendChild(resolvedPill);
      topBarPillsContainer.appendChild(categoryPill);
    }

  }

  // Scroll event listener to track active step
  scrollContainer.addEventListener("scroll", () => {
    const index = Math.round(scrollContainer.scrollLeft / scrollContainer.clientWidth);
    if (index !== activeStepIndex && index >= 0 && index < loopSteps.length) {
      activeStepIndex = index;
      updateActiveStepVisuals(index);
    }
  });

  // Bounce simulation for boundaries
  function triggerBounce(direction) {
    scrollContainer.classList.remove("slide-bounce-left", "slide-bounce-right");
    void scrollContainer.offsetWidth;
    if (direction === "left") {
      scrollContainer.classList.add("slide-bounce-left");
      showToast("Erste Seite erreicht");
    } else {
      scrollContainer.classList.add("slide-bounce-right");
      showToast("Letzte Seite erreicht");
    }
    setTimeout(() => {
      scrollContainer.classList.remove("slide-bounce-left", "slide-bounce-right");
    }, 500);
  }

  // Set initial scroll position to default step (Step 3 is index 2)
  setTimeout(() => {
    scrollContainer.scrollLeft = activeStepIndex * scrollContainer.clientWidth;
    updateActiveStepVisuals(activeStepIndex);
  }, 50);

  contentArea.appendChild(scrollContainer);


  // Append elements to app shell
  mountNode.appendChild(topBar);
  // Swipe-up gesture to open drawer (only when at the bottom of the slide)
  let touchStartY = 0;
  let wasAtBottomOnStart = false;
  
  contentArea.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
    const slide = e.target.closest('.loop-slide');
    if (slide) {
      wasAtBottomOnStart = slide.scrollTop + slide.clientHeight >= slide.scrollHeight - 10;
    } else {
      wasAtBottomOnStart = true;
    }
  }, { passive: true });
  
  contentArea.addEventListener('touchend', (e) => {
    // If the swipe originated on a flip card, ignore it for the article drawer
    if (e.target.closest('.flip-container')) return;

    const touchEndY = e.changedTouches[0].screenY;
    const distance = touchStartY - touchEndY;
    // Less aggressive swipe: require 100px swipe AND being at the bottom of the content
    if (distance > 100 && wasAtBottomOnStart) {
      openArticleDrawer();
    }
  }, { passive: true });

  mountNode.appendChild(contentArea);

  // 11. Create Toast Notification element (inside shell)
  const toast = document.createElement("div");
  toast.className = "app-toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  mountNode.appendChild(toast);

  let toastTimeout;
  function showToast(message) {
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimeout = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2000);
  }

  // 12. Create Expanded Article Bottom Drawer
  const articleDrawer = document.createElement("div");
  articleDrawer.className = "article-drawer";
  articleDrawer.innerHTML = `
    <div class="drawer-header">
      <div class="drawer-drag-handle"></div>
      <button type="button" class="btn-drawer-close" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="drawer-content">
      <div class="drawer-meta">
        <span class="drawer-category">${currentStory.category.toUpperCase()}</span>
        <span class="drawer-divider">•</span>
        <span class="drawer-time">${currentStory.age}</span>
      </div>
      <h1 class="drawer-title">${currentStory.title}</h1>
      
      ${currentStory.articleBody}
      
      <!-- Completion Zone -->
      <div class="article-completion-zone">
        <div class="completion-badge"></div>
        <p class="completion-text">Du hast den vollständigen Artikel gelesen!</p>
      </div>

      <!-- Sources & Credits Zone -->
      <div class="article-sources-zone">
        <h4 class="sources-heading">Quellen & Autoren</h4>
        <ul class="sources-list">
          <li><a href="#" class="source-link" onclick="event.preventDefault()">Offizielle Pressemitteilung (Kommunalverwaltung)</a></li>
          <li><span class="source-informant">Vertraulicher Informant (Verifiziert)</span></li>
          <li><span class="source-writer">Geschrieben von: ${currentStory.author}</span></li>
        </ul>
      </div>
    </div>
  `;
  mountNode.appendChild(articleDrawer);

  // --- News List Drawer Setup ---
  const newsListDrawer = document.createElement("div");
  newsListDrawer.className = "news-list-drawer";
  newsListDrawer.innerHTML = `
    <div class="news-list-header">
      <h3 class="news-list-title">Stimme Loops</h3>
      <button class="btn-news-close" aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="feed-filters">
      <button class="feed-filter-pill active">Alle</button>
      <button class="feed-filter-pill">Events</button>
      <button class="feed-filter-pill">Gesellschaft</button>
      <button class="feed-filter-pill">Jobs</button>
      <button class="feed-filter-pill">Wohnen</button>
      <button class="feed-filter-pill">Mobilität</button>
      <button class="feed-filter-pill">Klima</button>
      <button class="feed-filter-pill">Kommunalpolitik</button>
    </div>
    <div class="news-list-content">
      ${allStories.map(story => `
        <div class="feed-card" data-story-id="${story.id}">
          <div class="feed-image-container">
            <img src="${story.thumb}" class="feed-image" alt="${story.title}">
            <div class="feed-badges-top-left">
              ${story.status === "BREAKING" || story.status === "UPDATE" || story.status === "EILMELDUNG" ? 
                `<span class="feed-badge-urgent" ${story.status === "UPDATE" ? 'style="background-color: #D98A2B"' : ''}>${story.status}</span>` : ''}
              <span class="feed-badge-cat">${story.category}</span>
            </div>
            <div class="feed-badge-trust">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              92%
            </div>
          </div>
          <div class="feed-content">
            <h4 class="feed-headline" style="margin-top: 4px; margin-bottom: 12px;">${story.title}</h4>
            <div class="feed-meta">
              <div class="feed-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${story.distance}
              </div>
              <div class="feed-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                ${story.age}
              </div>
              <div class="feed-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                ${story.sources}
              </div>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  mountNode.appendChild(newsListDrawer);

  window.openNewsList = function() {
    newsListDrawer.classList.add("is-open");
  };

  function closeNewsList() {
    newsListDrawer.classList.remove("is-open");
  }

  newsListDrawer.querySelector(".btn-news-close").addEventListener("click", closeNewsList);

  // Attach click listener to filter pills
  newsListDrawer.querySelectorAll(".feed-filter-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      // Remove active class from all pills
      newsListDrawer.querySelectorAll(".feed-filter-pill").forEach(p => p.classList.remove("active"));
      // Add active class to the clicked pill
      e.currentTarget.classList.add("active");
      
      const selectedCategory = e.currentTarget.textContent.trim();
      const allCards = newsListDrawer.querySelectorAll(".feed-card");
      
      allCards.forEach(card => {
        if (selectedCategory === "Alle") {
          card.style.display = "flex";
        } else {
          const cardCat = card.querySelector(".feed-badge-cat").textContent.trim();
          if (cardCat.toUpperCase() === selectedCategory.toUpperCase()) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });
  
  // Attach click listener to each card to load a new story
  newsListDrawer.querySelectorAll(".feed-card").forEach(card => {
    card.addEventListener("click", (e) => {
      const storyId = e.currentTarget.getAttribute("data-story-id");
      closeNewsList();
      setTimeout(() => {
        window.loadStory(storyId);
      }, 300); // Wait for drawer to animate out
    });
  });

  window.loadStory = function(storyId) {
    _storyLoadedByUser = true;
    activeStoryId = storyId;
    const appContainer = document.getElementById('app');
    renderApp(appContainer);
  };

  // Auto-open news list on initial page load (not on story reload)
  if (!_storyLoadedByUser) {
    newsListDrawer.classList.add("is-open");
  }

  const closeDrawerBtn = articleDrawer.querySelector(".btn-drawer-close");
  closeDrawerBtn.addEventListener("click", closeArticleDrawer);

  // Drag-to-close and Scroll-up-to-close logic
  const drawerContent = articleDrawer.querySelector(".drawer-content");
  
  let articleValidated = false;

  // Scroll detection for article completion validation animation
  drawerContent.addEventListener("scroll", () => {
    // Only validate if not already validated and drawer is open
    if (articleValidated || !articleDrawer.classList.contains("is-open")) return;

    // Check if user has scrolled to the bottom of the article drawer content
    const threshold = 15; // offset tolerance
    const isAtBottom = drawerContent.scrollTop + drawerContent.clientHeight >= drawerContent.scrollHeight - threshold;

    if (isAtBottom) {
      articleValidated = true;

      const completionZone = drawerContent.querySelector(".article-completion-zone");
      if (completionZone) {
        completionZone.classList.add("is-visible");

        // Insert checkmark SVG to start animation
        const badge = completionZone.querySelector(".completion-badge");
        badge.innerHTML = `
          <svg class="checkmark-svg" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        `;

        // Wait a brief moment for checkmark layout, then calculate coordinates relative to mountNode
        setTimeout(() => {
          const badgeRect = badge.getBoundingClientRect();
          const mountRect = mountNode.getBoundingClientRect();
          const originX = badgeRect.left - mountRect.left + badgeRect.width / 2;
          const originY = badgeRect.top - mountRect.top + badgeRect.height / 2;

          triggerConfetti(originX, originY);
          showToast("Artikel abgeschlossen! 🎉");
        }, 100);
      }
    }
  });
  let drawerStartY = 0;
  let drawerCurrentY = 0;
  let drawerIsDragging = false;

  articleDrawer.addEventListener("touchstart", (e) => {
    if (drawerContent.scrollTop <= 0) {
      drawerStartY = e.touches[0].clientY;
      drawerIsDragging = true;
      articleDrawer.style.transition = "none";
    }
  }, { passive: true });

  articleDrawer.addEventListener("touchmove", (e) => {
    if (!drawerIsDragging) return;
    drawerCurrentY = e.touches[0].clientY;
    const deltaY = drawerCurrentY - drawerStartY;
    if (deltaY > 0) {
      if (e.cancelable) e.preventDefault();
      articleDrawer.style.transform = `translateY(${deltaY}px)`;
    } else {
      articleDrawer.style.transform = "";
      drawerIsDragging = false;
    }
  }, { passive: false });

  articleDrawer.addEventListener("touchend", () => {
    if (!drawerIsDragging) return;
    drawerIsDragging = false;
    articleDrawer.style.transition = "";
    const deltaY = drawerCurrentY - drawerStartY;
    if (deltaY > 150) {
      closeArticleDrawer();
    } else {
      articleDrawer.style.transform = "";
    }
  });

  articleDrawer.addEventListener("mousedown", (e) => {
    if (e.target.closest(".btn-drawer-close") || e.target.closest(".drawer-content") && drawerContent.scrollTop > 0) {
      return;
    }
    drawerStartY = e.clientY;
    drawerIsDragging = true;
    articleDrawer.style.transition = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!drawerIsDragging) return;
    drawerCurrentY = e.clientY;
    const deltaY = drawerCurrentY - drawerStartY;
    if (deltaY > 0) {
      articleDrawer.style.transform = `translateY(${deltaY}px)`;
    } else {
      articleDrawer.style.transform = "";
      drawerIsDragging = false;
    }
  });

  window.addEventListener("mouseup", () => {
    if (!drawerIsDragging) return;
    drawerIsDragging = false;
    articleDrawer.style.transition = "";
    const deltaY = drawerCurrentY - drawerStartY;
    if (deltaY > 150) {
      closeArticleDrawer();
    } else {
      articleDrawer.style.transform = "";
    }
  });

  drawerContent.addEventListener("wheel", (e) => {
    if (drawerContent.scrollTop <= 0 && e.deltaY < -15) {
      closeArticleDrawer();
    }
  }, { passive: true });

  function openArticleDrawer() {
    articleDrawer.style.transform = "";
    articleDrawer.classList.add("is-open");
    
    // Reset validation state on open
    articleValidated = false;
    const completionZone = drawerContent.querySelector(".article-completion-zone");
    if (completionZone) {
      completionZone.classList.remove("is-visible");
      const badge = completionZone.querySelector(".completion-badge");
      if (badge) badge.innerHTML = ""; // Clear checkmark SVG
    }
    
    setTimeout(() => closeDrawerBtn.focus(), 300);
  }

  function closeArticleDrawer() {
    articleDrawer.classList.remove("is-open");
    articleDrawer.style.transform = "";
  }

  // 13. Create Action Modal (Comment & Google Maps Integration)
  const commentModal = document.createElement("div");
  commentModal.className = "action-modal";
  commentModal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <h3 class="modal-title">Bericht einreichen</h3>
        <button type="button" class="btn-modal-close" id="closeModalBtn" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p class="modal-lead-text">Markiere den Gefahrenbereich und beschreibe das Problem für das Weststadt-Team.</p>
        
        <!-- Interactive Dummy Map -->
        <div class="map-container">
          <svg viewBox="0 0 400 200" class="dummy-map-svg">
            <rect width="100%" height="100%" fill="#E4E9EC" />
            <!-- Grid lines for map vibe -->
            <line x1="0" y1="50" x2="400" y2="50" stroke="#D1D9DD" stroke-width="1" />
            <line x1="0" y1="100" x2="400" y2="100" stroke="#D1D9DD" stroke-width="1" />
            <line x1="0" y1="150" x2="400" y2="150" stroke="#D1D9DD" stroke-width="1" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="#D1D9DD" stroke-width="1" />
            <line x1="200" y1="0" x2="200" y2="200" stroke="#D1D9DD" stroke-width="1" />
            <line x1="300" y1="0" x2="300" y2="200" stroke="#D1D9DD" stroke-width="1" />
            
            <!-- Roads -->
            <path d="M 0,100 Q 200,80 400,100" stroke="#FFFFFF" stroke-width="16" fill="none" />
            <path d="M 180,0 Q 200,100 220,200" stroke="#FFFFFF" stroke-width="16" fill="none" />
            <!-- Dashed lines -->
            <path d="M 0,100 Q 200,80 400,100" stroke="#D98A2B" stroke-width="2" stroke-dasharray="6,6" fill="none" />
            <path d="M 180,0 Q 200,100 220,200" stroke="#D98A2B" stroke-width="2" stroke-dasharray="6,6" fill="none" />
            
            <!-- Map Pin -->
            <g class="map-pin" transform="translate(200, 92)">
              <ellipse cx="0" cy="14" rx="8" ry="3" fill="rgba(0,0,0,0.15)" />
              <path d="M 0,14 C -12,14 -12,-2 0,-14 C 12,-2 12,14 0,14 Z" fill="#B64034" />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
            </g>
          </svg>
          <a href="https://maps.google.com/?q=49.1415,9.2078" target="_blank" rel="noopener" class="btn-map-link">
            <span>Auf Google Maps ansehen</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <form id="commentForm" class="modal-form">
          <label for="commentInput" class="form-label">Beschreibung</label>
          <textarea id="commentInput" class="form-textarea" placeholder="z.B. Schlagloch an der Kreuzung, defekte Ampel..." required></textarea>
          
          <button type="submit" class="btn-submit-comment">Bericht absenden</button>
        </form>
      </div>
    </div>
  `;
  mountNode.appendChild(commentModal);

  // Wire Modal events
  const closeModalBtn = commentModal.querySelector("#closeModalBtn");
  const modalBackdrop = commentModal.querySelector(".modal-backdrop");
  const commentForm = commentModal.querySelector("#commentForm");

  closeModalBtn.addEventListener("click", closeCommentModal);
  modalBackdrop.addEventListener("click", closeCommentModal);
  
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = commentModal.querySelector("#commentInput").value;
    if (text.trim()) {
      showToast("Vielen Dank! Dein Bericht wurde eingereicht.");
      closeCommentModal();
      commentForm.reset();
    }
  });

  function openCommentModal() {
    commentModal.classList.add("is-visible");
  }

  function closeCommentModal() {
    commentModal.classList.remove("is-visible");
  }

  // Email Modal
  const emailModal = document.createElement("div");
  emailModal.className = "action-modal";
  emailModal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <h3 class="modal-title" id="emailModalTitle">Anmelden</h3>
        <button type="button" class="btn-modal-close" id="closeEmailModalBtn" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p class="modal-lead-text" id="emailModalText">E-Mail-Adresse für weitere Infos eingeben.</p>
        <form id="emailForm" class="modal-form">
          <label for="firstNameInput" class="form-label">Vorname</label>
          <input type="text" id="firstNameInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="Max" required />
          <label for="lastNameInput" class="form-label" style="margin-top: 8px;">Nachname</label>
          <input type="text" id="lastNameInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="Mustermann" required />
          <label for="emailInput" class="form-label" style="margin-top: 8px;">E-Mail-Adresse</label>
          <input type="email" id="emailInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="deine.email@beispiel.de" required />
          <button type="submit" class="btn-submit-comment" style="margin-top: 12px;">Absenden</button>
        </form>
      </div>
    </div>
  `;
  mountNode.appendChild(emailModal);

  // Wire Email Modal events
  const closeEmailModalBtn = emailModal.querySelector("#closeEmailModalBtn");
  const emailModalBackdrop = emailModal.querySelector(".modal-backdrop");
  const emailForm = emailModal.querySelector("#emailForm");
  const emailModalTitle = emailModal.querySelector("#emailModalTitle");
  const emailModalText = emailModal.querySelector("#emailModalText");

  closeEmailModalBtn.addEventListener("click", closeEmailModal);
  emailModalBackdrop.addEventListener("click", closeEmailModal);
  
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailModal.querySelector("#emailInput").value;
    if (email.trim()) {
      showToast("Vielen Dank! Weitere Informationen werden an deine E-Mail gesendet.");
      closeEmailModal();
      emailForm.reset();
    }
  });

  function openEmailModal(title, text) {
    emailModalTitle.textContent = title;
    emailModalText.textContent = text;
    emailModal.classList.add("is-visible");
  }

  function closeEmailModal() {
    emailModal.classList.remove("is-visible");
  }

  // 14. Fire Explosion Particle Generator
  function triggerFireExplosion(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    // Center of the button
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    const particleContainer = document.createElement("div");
    particleContainer.className = "explosion-container";
    particleContainer.style.position = "absolute";
    particleContainer.style.left = "0";
    particleContainer.style.top = "0";
    particleContainer.style.right = "0";
    particleContainer.style.bottom = "0";
    particleContainer.style.pointerEvents = "none";
    particleContainer.style.zIndex = "300";
    mountNode.appendChild(particleContainer);

    const colors = ["#FF5722", "#FF9800", "#FFC107", "#E91E63", "#FFEB3B"];
    const count = 36;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "fire-particle";
      
      const angle = (i / count) * 2 * Math.PI + (Math.random() * 0.4 - 0.2);
      const distance = 80 + Math.random() * 120;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 10 + Math.random() * 16;
      
      particle.style.left = `${originX - size / 2}px`;
      particle.style.top = `${originY - size / 2}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.setProperty("--dx", `${dx}px`);
      particle.style.setProperty("--dy", `${dy}px`);
      particle.style.setProperty("--color", color);
      
      particleContainer.appendChild(particle);
    }

    // Play visual screenshake
    mountNode.classList.add("shake-screen");
    setTimeout(() => {
      mountNode.classList.remove("shake-screen");
    }, 400);

    // Clean up particles
    setTimeout(() => {
      particleContainer.remove();
    }, 1000);
  }

  // Confetti Particle Generator for Article Validation
  function triggerConfetti(originX, originY) {
    const particleContainer = document.createElement("div");
    particleContainer.className = "explosion-container";
    particleContainer.style.position = "absolute";
    particleContainer.style.left = "0";
    particleContainer.style.top = "0";
    particleContainer.style.right = "0";
    particleContainer.style.bottom = "0";
    particleContainer.style.pointerEvents = "none";
    particleContainer.style.zIndex = "300";
    mountNode.appendChild(particleContainer);

    const colors = ["#4CAF50", "#8BC34A", "#CDDC39", "#214E37", "#00BCD4", "#FFEB3B", "#FF5722"];
    const count = 40;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "fire-particle";
      
      const angle = (i / count) * 2 * Math.PI + (Math.random() * 0.4 - 0.2);
      const distance = 50 + Math.random() * 100;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 8 + Math.random() * 12;
      
      particle.style.left = `${originX - size / 2}px`;
      particle.style.top = `${originY - size / 2}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.setProperty("--dx", `${dx}px`);
      particle.style.setProperty("--dy", `${dy}px`);
      particle.style.setProperty("--color", color);
      
      particleContainer.appendChild(particle);
    }

    setTimeout(() => {
      particleContainer.remove();
    }, 1000);
  }
}
