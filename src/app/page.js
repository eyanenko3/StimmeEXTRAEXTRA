// App Page Entry and Main Composition

import { storyLoop } from "../lib/content.js";
import { createTopBar } from "../components/loops/top-bar.js";
import { createStatusPill } from "../components/loops/status-pill.js";
import { createHeroStoryCard } from "../components/loops/hero-story-card.js";
import { createPaginationDots } from "../components/loops/pagination-dots.js";
import { createExplainerCard } from "../components/loops/explainer-card.js";
import { createInsetImpactPanel } from "../components/loops/inset-impact-panel.js";

export function renderApp(mountNode) {
  if (!mountNode) return;

  // Clear previous content
  mountNode.innerHTML = "";

  // 1. Manage local interactive states
  let isBookmarked = localStorage.getItem("loops_bookmarked") === "true";

  // 2. Create status pills
  const resolvedPill = createStatusPill({ label: storyLoop.status, type: "resolved" });
  const categoryPill = createStatusPill({ label: storyLoop.category, type: "category" });

  // 3. Compose Top Bar
  const topBar = createTopBar({
    isBookmarked,
    pills: [resolvedPill, categoryPill],
    onBack: () => {
      showToast("Navigate back simulation");
    },
    onBookmark: (e) => {
      isBookmarked = !isBookmarked;
      localStorage.setItem("loops_bookmarked", isBookmarked.toString());
      
      // Toggle class on the button
      const btn = e.currentTarget;
      btn.classList.toggle("is-active", isBookmarked);
      showToast(isBookmarked ? "Beitrag gemerkt" : "Lesezeichen entfernt");
    },
    onShare: () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => showToast("Link in die Zwischenablage kopiert"))
        .catch(() => showToast("Teilen fehlgeschlagen"));
    }
  });

  // 4. Create App Content area
  const contentArea = document.createElement("main");
  contentArea.className = "app-content";

  // 5. Container for swipeable sequence items
  const loopContainer = document.createElement("div");
  loopContainer.className = "loop-container";

  // 6. Create Hero Story Card
  const heroCardWrapper = createHeroStoryCard({
    imageUrl: storyLoop.imageUrl,
    altText: storyLoop.imageAlt,
    distance: storyLoop.distance,
    recency: storyLoop.age
  });

  // Add click handlers on peeks to demonstrate sequence bounce
  const leftPeek = heroCardWrapper.querySelector(".left-peek");
  const rightPeek = heroCardWrapper.querySelector(".right-peek");
  const mainHeroCard = heroCardWrapper.querySelector(".hero-story-card");

  leftPeek.addEventListener("click", () => triggerBounce("left"));
  rightPeek.addEventListener("click", () => triggerBounce("right"));

  function triggerBounce(direction) {
    loopContainer.classList.remove("slide-bounce-left", "slide-bounce-right");
    // Trigger reflow
    void loopContainer.offsetWidth;
    
    if (direction === "left") {
      loopContainer.classList.add("slide-bounce-left");
      showToast("Vorherige Karte (2/4) vorschau");
    } else {
      loopContainer.classList.add("slide-bounce-right");
      showToast("Nächste Karte (4/4) vorschau");
    }
    
    setTimeout(() => {
      loopContainer.classList.remove("slide-bounce-left", "slide-bounce-right");
    }, 500);
  }

  // 7. Create Pagination Dots
  const paginationDots = createPaginationDots({
    total: storyLoop.totalSteps,
    activeIndex: storyLoop.step - 1 // 3rd card is activeIndex 2
  });

  // 8. Create Inset Impact Panel
  const impactPanel = createInsetImpactPanel({ text: storyLoop.impactText });

  // 9. Create "Open Full Report" Cue
  const fullReportLink = document.createElement("a");
  fullReportLink.href = storyLoop.fullReportUrl;
  fullReportLink.className = "full-report-cue";
  fullReportLink.setAttribute("role", "button");
  fullReportLink.setAttribute("aria-label", "Vollständigen Bericht lesen");
  fullReportLink.innerHTML = `
    <span>Vollständigen Bericht lesen</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;
  fullReportLink.addEventListener("click", (e) => {
    e.preventDefault();
    openArticleDrawer();
  });

  // 10. Create Explainer Card (contains headline, impact panel, full report link)
  const explainerCard = createExplainerCard({
    title: storyLoop.title,
    impactTitle: storyLoop.impactTitle,
    counter: `${storyLoop.step}/${storyLoop.totalSteps}`,
    children: [impactPanel, fullReportLink]
  });

  // Assemble loop elements into container
  loopContainer.appendChild(heroCardWrapper);
  loopContainer.appendChild(paginationDots);
  loopContainer.appendChild(explainerCard);

  contentArea.appendChild(loopContainer);

  // Append elements to app shell
  mountNode.appendChild(topBar);
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

  // 12. Create Expanded Article Bottom Drawer (for stakeholder WOW factor)
  const articleDrawer = document.createElement("div");
  articleDrawer.className = "article-drawer";
  articleDrawer.innerHTML = `
    <div class="drawer-header">
      <div class="drawer-drag-handle"></div>
      <button type="button" class="btn-drawer-close" aria-label="Schließen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="drawer-content">
      <div class="drawer-meta">
        <span class="drawer-category">LOKALPOLITIK</span>
        <span class="drawer-divider">•</span>
        <span class="drawer-time">1d ago</span>
      </div>
      <h1 class="drawer-title">Fahrradkorridor Weststadt: Sanierung und Sicherheits-Upgrade fertiggestellt</h1>
      <p class="drawer-lead">Die Stadtverwaltung Heilbronn hat die umfassenden Sanierungsarbeiten an der zentralen Radverkehrsachse Weststadt abgeschlossen. <mark class="editorial-highlight">Das Millionenprojekt soll vor allem Schulwege sicherer machen.</mark></p>
      
      <img src="${storyLoop.imageUrl}" alt="${storyLoop.imageAlt}" class="drawer-image" />
      
      <p class="drawer-body">Nach fast viermonatiger Bauzeit ist die vielbefahrene Weststadt-Route wieder uneingeschränkt für den Verkehr freigegeben. Neben einem lärmoptimierten, glatten Asphaltbelag wurden auf einer Länge von rund 1,8 Kilometern breitere, farblich abgesetzte Schutzstreifen aufgetragen.</p>
      
      <p class="drawer-body">„Das Projekt zeigt, wie moderne Nahmobilität in unserer Region aussehen kann“, so Oberbürgermeister Harry Mergel bei der offiziellen Freigabe. <mark class="editorial-highlight">Besonders im Fokus stand die Erhöhung der passiven Sicherheit an unübersichtlichen Einmündungen.</mark> Hier wurden reflektierende Markierungselemente und optimierte Ampelschaltungen installiert.</p>
      
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Vor allem die verbesserten Abflüsse an den Fahrbahnrändern sorgen dafür, dass Radfahrer auch bei starkem Regen nicht mehr durch tiefe Pfützen gefährdet werden.</p>
      </div>

      <p class="drawer-body"><mark class="editorial-highlight">Die Kosten belaufen sich auf rund 820.000 Euro</mark>, wovon ein Großteil aus Mitteln des Landes-Verkehrsfinanzierungsgesetzes gefördert wurde. Pendler und Anwohner äußerten sich in ersten Befragungen positiv über den neuen Fahrkomfort.</p>
    </div>
  `;
  mountNode.appendChild(articleDrawer);

  const closeDrawerBtn = articleDrawer.querySelector(".btn-drawer-close");
  closeDrawerBtn.addEventListener("click", closeArticleDrawer);

  // Drag-to-close and Scroll-up-to-close logic
  const drawerContent = articleDrawer.querySelector(".drawer-content");
  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  // Touch Drag-to-Close
  articleDrawer.addEventListener("touchstart", (e) => {
    if (drawerContent.scrollTop <= 0) {
      startY = e.touches[0].clientY;
      isDragging = true;
      articleDrawer.style.transition = "none";
    }
  }, { passive: true });

  articleDrawer.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;
    if (deltaY > 0) {
      if (e.cancelable) e.preventDefault();
      articleDrawer.style.transform = `translateY(${deltaY}px)`;
    } else {
      articleDrawer.style.transform = "";
      isDragging = false;
    }
  }, { passive: false });

  articleDrawer.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    articleDrawer.style.transition = "";
    const deltaY = currentY - startY;
    if (deltaY > 100) {
      closeArticleDrawer();
    } else {
      articleDrawer.style.transform = "";
    }
  });

  // Mouse Drag-to-Close
  articleDrawer.addEventListener("mousedown", (e) => {
    // Avoid initiating drag on scrollbar click or close button
    if (e.target.closest(".btn-drawer-close") || e.target.closest(".drawer-content") && drawerContent.scrollTop > 0) {
      return;
    }
    startY = e.clientY;
    isDragging = true;
    articleDrawer.style.transition = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentY = e.clientY;
    const deltaY = currentY - startY;
    if (deltaY > 0) {
      articleDrawer.style.transform = `translateY(${deltaY}px)`;
    } else {
      articleDrawer.style.transform = "";
      isDragging = false;
    }
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    articleDrawer.style.transition = "";
    const deltaY = currentY - startY;
    if (deltaY > 100) {
      closeArticleDrawer();
    } else {
      articleDrawer.style.transform = "";
    }
  });

  // Scroll Up to Close (wheel event at top)
  drawerContent.addEventListener("wheel", (e) => {
    if (drawerContent.scrollTop <= 0 && e.deltaY < -15) {
      closeArticleDrawer();
    }
  }, { passive: true });

  function openArticleDrawer() {
    articleDrawer.style.transform = "";
    articleDrawer.classList.add("is-open");
    setTimeout(() => closeDrawerBtn.focus(), 300);
  }

  function closeArticleDrawer() {
    articleDrawer.classList.remove("is-open");
    articleDrawer.style.transform = "";
    fullReportLink.focus();
  }
}
