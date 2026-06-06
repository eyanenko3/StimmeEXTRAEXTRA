// App Page Entry and Main Composition

import { storyLoop } from "../lib/content.js";
import { createTopBar } from "../components/loops/top-bar.js";
import { createStatusPill } from "../components/loops/status-pill.js";
import { createHeroStoryCard } from "../components/loops/hero-story-card.js";
import { createPaginationDots } from "../components/loops/pagination-dots.js";
import { createExplainerCard } from "../components/loops/explainer-card.js";
import { createInsetImpactPanel } from "../components/loops/inset-impact-panel.js";

// Multi-step story constants
const loopSteps = [
  {
    step: 1,
    title: "Weststadt redevelopment plans presented",
    category: "Planning",
    status: "PLANNED",
    age: "3m ago",
    distance: "0.4 km away",
    impactTitle: "WHAT IS PLANNED",
    impactText: "The city plans to comprehensively renovate several roads in the Weststadt district over the coming months to improve safety on school routes and make them more bicycle-friendly.",
    imageUrl: "public/images/weststadt-planning.png",
    imageAlt: "Planning representation of Weststadt corridor"
  },
  {
    step: 2,
    title: "Construction starts on central bicycle route",
    category: "Infrastructure",
    status: "IN PROGRESS",
    age: "2m ago",
    distance: "0.4 km away",
    impactTitle: "CURRENT DISRUPTIONS",
    impactText: "Construction has officially started. Drivers should expect local detours. Cyclists are temporarily routed through quiet side streets.",
    imageUrl: "public/images/bike-construction.png",
    imageAlt: "Construction works in Weststadt"
  },
  {
    step: 3,
    title: "Bike corridor repair completed on Weststadt route",
    category: "Local Gov",
    status: "RESOLVED",
    age: "1d ago",
    distance: "0.4 km away",
    impactTitle: "WHAT IT MEANS FOR YOU",
    impactText: "If you bike or drive through this area, the route is now safer and easier to use. The city also added clearer lane markings and improved drainage, which should reduce disruptions after rain.",
    imageUrl: "public/images/loops-bike-corridor.png",
    imageAlt: "Completed Weststadt bike corridor"
  },
  {
    step: 4,
    isDoNext: true,
    title: "Know another road that needs fixing? File a report.",
    category: "Community",
    status: "DO NEXT",
    age: "Active",
    distance: "Heilbronn",
    imageUrl: "public/images/damaged-road.png",
    imageAlt: "Community action photo of local roads"
  }
];

export function renderApp(mountNode) {
  if (!mountNode) return;

  // Clear previous content
  mountNode.innerHTML = "";

  // 1. Manage local interactive states
  let isBookmarked = localStorage.getItem("loops_bookmarked") === "true";
  let activeStepIndex = 2; // Step 3 by default (0-indexed is 2)

  // Top bar references
  let resolvedPill = createStatusPill({ label: loopSteps[activeStepIndex].status, type: "resolved" });
  let categoryPill = createStatusPill({ label: loopSteps[activeStepIndex].category, type: "category" });

  const topBar = createTopBar({
    isBookmarked,
    pills: [resolvedPill, categoryPill],
    onBack: () => {
      showToast("Back navigation simulation");
    },
    onBookmark: (e) => {
      isBookmarked = !isBookmarked;
      localStorage.setItem("loops_bookmarked", isBookmarked.toString());
      const btn = e.currentTarget;
      btn.classList.toggle("is-active", isBookmarked);
      showToast(isBookmarked ? "Bookmark saved" : "Bookmark removed");
    },
    onShare: () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => showToast("Link copied to clipboard"))
        .catch(() => showToast("Sharing failed"));
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

    // Create Hero Card
    const heroCardWrapper = createHeroStoryCard({
      imageUrl: stepData.imageUrl,
      altText: stepData.imageAlt,
      distance: stepData.distance,
      recency: stepData.age
    });

    // Handle Hero Peeks (make them scroll instead of rendering a new step)
    const leftPeek = heroCardWrapper.querySelector(".left-peek");
    const rightPeek = heroCardWrapper.querySelector(".right-peek");

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
              <span class="explainer-header-title">DO NEXT</span>
            </div>
            <div class="explainer-header-right">4/4</div>
          </div>
          <h2 class="explainer-headline">${stepData.title}</h2>
          
          <button type="button" class="btn-take-action" id="takeActionBtn">
            <span>Take Action</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      `;

      const actionBtn = explainerCard.querySelector("#takeActionBtn");
      actionBtn.addEventListener("click", (e) => {
        triggerFireExplosion(e);
        setTimeout(() => {
          openCommentModal();
        }, 600);
      });

    } else {
      const impactPanel = createInsetImpactPanel({ text: stepData.impactText });
      
      const fullReportLink = document.createElement("a");
      fullReportLink.href = "#";
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

      explainerCard = createExplainerCard({
        title: stepData.title,
        impactTitle: stepData.impactTitle,
        counter: `${stepData.step}/${loopSteps.length}`,
        children: [impactPanel, fullReportLink]
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
      resolvedPill = createStatusPill({ label: currentStepData.status, type: currentStepData.status === "RESOLVED" || currentStepData.status === "DO NEXT" ? "resolved" : "category" });
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
      showToast("First page reached");
    } else {
      scrollContainer.classList.add("slide-bounce-right");
      showToast("Last page reached");
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
        <span class="drawer-category">LOCAL GOVERNMENT</span>
        <span class="drawer-divider">•</span>
        <span class="drawer-time">1d ago</span>
      </div>
      <h1 class="drawer-title">Weststadt Bicycle Corridor: Repair and Safety Upgrade Completed</h1>
      <p class="drawer-lead">The Heilbronn city administration has completed extensive renovation work on the central Weststadt bicycle route. <mark class="editorial-highlight">The million-euro project is primarily aimed at making school routes safer.</mark></p>
      
      <img src="${storyLoop.imageUrl}" alt="${storyLoop.imageAlt}" class="drawer-image" />
      
      <p class="drawer-body">After nearly four months of construction, the busy Weststadt route is fully open to traffic. In addition to a noise-optimized, smooth asphalt surface, wider, color-contrasted protective lanes have been applied along a length of approximately 1.8 kilometers.</p>
      
      <p class="drawer-body">“The project shows what modern local mobility can look like in our region,” said Mayor Harry Mergel at the official opening. <mark class="editorial-highlight">The focus was particularly on increasing passive safety at complex intersections</mark>, where reflective marking elements and optimized traffic light phases were installed.</p>
      
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Most of all, the improved drainage at the road shoulders ensures that cyclists are no longer endangered by deep puddles during heavy rain.</p>
      </div>

      <p class="drawer-body"><mark class="editorial-highlight">The costs amount to around €820,000</mark>, the majority of which was funded by the state's transport financing act. Commuters and residents expressed positive feedback about the new riding comfort in initial surveys.</p>
    </div>
  `;
  mountNode.appendChild(articleDrawer);

  const closeDrawerBtn = articleDrawer.querySelector(".btn-drawer-close");
  closeDrawerBtn.addEventListener("click", closeArticleDrawer);

  // Drag-to-close and Scroll-up-to-close logic
  const drawerContent = articleDrawer.querySelector(".drawer-content");
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
    if (deltaY > 100) {
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
    if (deltaY > 100) {
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
        <h3 class="modal-title">Submit Report</h3>
        <button type="button" class="btn-modal-close" id="closeModalBtn" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p class="modal-lead-text">Mark the hazard area and describe the issue for the Weststadt team.</p>
        
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
            <span>View on Google Maps</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <form id="commentForm" class="modal-form">
          <label for="commentInput" class="form-label">Description</label>
          <textarea id="commentInput" class="form-textarea" placeholder="e.g., pothole at the intersection, broken traffic light..." required></textarea>
          
          <button type="submit" class="btn-submit-comment">Submit Report</button>
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
      showToast("Thank you! Your report has been submitted.");
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
}
