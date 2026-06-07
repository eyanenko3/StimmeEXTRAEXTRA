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
    title: "Heilbronn Beats: Massive Open-Air Festival Announced for Neckar Park",
    category: "Events",
    status: "BREAKING",
    author: "Sarah Lenz",
    summary: "A massive new electronic and hip-hop music festival is coming to Neckar Park this summer.",
    age: "1h ago",
    distance: "1.2 km away",
    sources: "Official PR",
    thumb: "public/images/heilbronn_beats_festival.png",
    articleBody: `<p class="drawer-lead">Heilbronn is getting ready for its biggest summer party yet. <mark class="editorial-highlight">The "Heilbronn Beats" open-air festival is officially coming to Neckar Park.</mark></p>
      <img src="public/images/heilbronn_beats_festival.png" alt="Concert crowd" class="drawer-image" />
      <p class="drawer-body">Event organizers revealed the initial lineup today, promising a massive weekend of electronic music, hip-hop, and interactive art installations. The festival is specifically aimed at the city's youth and student population.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">"</span>
        <p class="quote-text">We wanted to create an experience that puts Heilbronn on the map for young people across the state.</p>
      </div>
      <p class="drawer-body">Early bird tickets go on sale next Friday at midnight. <mark class="editorial-highlight">Students with a valid ID can claim a 30% discount on weekend passes.</mark></p>`,
    loops: [
      {
        step: 1,
        title: "Heilbronn Beats: Massive Open-Air Festival Announced for Neckar Park",
        category: "Events",
        status: "BREAKING",
        age: "1h ago",
        distance: "1.2 km away",
        impactTitle: "",
        impactText: "A massive new electronic and hip-hop music festival is coming to Neckar Park this summer, featuring international headliners and a massive 30% student discount.",
        imageUrl: "public/images/heilbronn_beats_festival.png",
        imageAlt: "Concert crowd"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "What it means for you",
        category: "Events",
        status: "BREAKING",
        age: "1h ago",
        distance: "1.2 km away",
        impactTitle: "YOUR IMPACT",
        impactText: "Get ready for an epic summer weekend! If you're a student, make sure to grab those discounted tickets early before they sell out.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Question mark"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Check out the festival lineup",
        category: "Events",
        status: "BREAKING",
        age: "Active",
        distance: "Neckar Park",
        imageUrl: "public/images/heilbronn_beats_festival.png",
        imageAlt: "Concert crowd",
        actionBtnText: "Participate in the event",
        actionType: "email",
        emailFormTitle: "Get Event Updates",
        emailFormText: "Put your email to get info about the event and ticket availability."
      }
    ]
  },
  {
    id: "skatepark-drama",
    title: "City Council Votes to Demolish Beloved Downtown Skatepark",
    category: "Society",
    status: "UPDATE",
    author: "Marc Richter",
    summary: "Outrage erupted online today after the Heilbronn City Council announced plans to bulldoze the iconic downtown skatepark.",
    age: "3h ago",
    distance: "City Center",
    sources: "3 sources",
    thumb: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80",
    articleBody: `<p class="drawer-lead">A controversial decision has sparked massive outrage among Heilbronn's youth today. <mark class="editorial-highlight">The City Council has quietly approved a plan to demolish the beloved downtown skatepark.</mark></p>
      <img src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80" alt="Skatepark" class="drawer-image" />
      <p class="drawer-body">The park, which has been a cultural hub for skaters, BMX riders, and artists for over a decade, will be replaced by a high-end commercial and luxury apartment complex. Local youth organizations claim they were entirely excluded from the decision-making process.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">"</span>
        <p class="quote-text">They're tearing down the only free, safe space we have left in the city just to build apartments none of us can afford.</p>
      </div>
      <p class="drawer-body">Activists are already organizing a massive protest scheduled for this Saturday at the town hall. <mark class="editorial-highlight">A petition to reverse the decision has garnered over 5,000 signatures in just two hours.</mark></p>`,
    loops: [
      {
        step: 1,
        title: "City Council Votes to Demolish Beloved Downtown Skatepark",
        category: "Society",
        status: "UPDATE",
        age: "3h ago",
        distance: "City Center",
        impactTitle: "",
        impactText: "The beloved downtown skatepark is set to be demolished to build luxury apartments, sparking massive outrage and protests from local youth.",
        imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Skatepark"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "What it means for you",
        category: "Society",
        status: "UPDATE",
        age: "3h ago",
        distance: "City Center",
        impactTitle: "YOUR IMPACT",
        impactText: "A key youth hangout spot is disappearing. If you want to make your voice heard, join the community protests or sign the petition circulating online.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Question mark"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Join the conversation about the skatepark",
        category: "Society",
        status: "UPDATE",
        age: "Active",
        distance: "City Center",
        imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Skatepark"
      }
    ]
  },
  {
    id: "tech-hub-jobs",
    title: "Major Tech Hub Opens in Heilbronn: 500 New Entry-Level Jobs",
    category: "Jobs",
    status: "NEW",
    author: "Elena Weber",
    summary: "A global tech consortium has just opened its massive new AI innovation campus in Heilbronn.",
    age: "10m ago",
    distance: "Innovation Park",
    sources: "2 sources",
    thumb: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    articleBody: `<p class="drawer-lead">Heilbronn is cementing its status as Europe's next major AI hotspot. <mark class="editorial-highlight">A highly anticipated tech campus officially opened its doors this morning.</mark></p>
      <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" alt="Tech campus" class="drawer-image" />
      <p class="drawer-body">The new facility, funded by leading tech giants, focuses entirely on artificial intelligence and green tech. What makes this launch truly exciting for the local community is its massive hiring initiative targeting recent graduates and young talent.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">"</span>
        <p class="quote-text">We are not just looking for senior engineers. We want fresh, young minds from Heilbronn to help us shape the future of AI.</p>
      </div>
      <p class="drawer-body">Over 500 entry-level positions and paid internships have just been posted online. <mark class="editorial-highlight">The hub is also offering free weekend coding bootcamps for local residents.</mark></p>`,
    loops: [
      {
        step: 1,
        title: "Major Tech Hub Opens in Heilbronn: 500 New Entry-Level Jobs",
        category: "Jobs",
        status: "NEW",
        age: "10m ago",
        distance: "Innovation Park",
        impactTitle: "",
        impactText: "A massive new AI innovation campus has opened in Heilbronn, immediately posting 500 entry-level jobs and paid internships for local young talent.",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Tech campus"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "What it means for you",
        category: "Jobs",
        status: "NEW",
        age: "10m ago",
        distance: "Innovation Park",
        impactTitle: "YOUR IMPACT",
        impactText: "Looking to kickstart your career? This is a golden opportunity to land a high-paying job or internship in the tech industry without leaving Heilbronn.",
        imageUrl: "../public/images/mystery_question_mark.png",
        imageAlt: "Question mark"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Check out the new job openings",
        category: "Jobs",
        status: "NEW",
        age: "Active",
        distance: "Innovation Park",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Tech campus",
        actionBtnText: "Look into job offering",
        actionType: "email",
        emailFormTitle: "Receive Job Offers",
        emailFormText: "Put your email and get the info about job offerings."
      }
    ]
  },
  {
    id: "weststadt",
    title: "Weststadt Bicycle Corridor: Repair and Safety Upgrade Completed",
    category: "Infrastructure",
    status: "Weststadt Bicycle...",
    author: "Hb Stimme Redaktion",
    summary: "Construction has officially started. Drivers should expect local detours. Cyclists are temporarily routed through quiet side streets.",
    age: "3m ago",
    distance: "0.4 km away",
    sources: "4 sources",
    thumb: "public/images/loops-bike-corridor.png",
    articleBody: `<p class="drawer-lead">The Heilbronn city administration has completed extensive renovation work on the central Weststadt bicycle route. <mark class="editorial-highlight">The million-euro project is primarily aimed at making school routes safer.</mark></p>
      <img src="public/images/loops-bike-corridor.png" alt="Weststadt bike corridor" class="drawer-image" />
      <p class="drawer-body">After nearly four months of construction, the busy Weststadt route is fully open to traffic. In addition to a noise-optimized, smooth asphalt surface, wider, color-contrasted protective lanes have been applied along a length of approximately 1.8 kilometers.</p>
      <p class="drawer-body">“The project shows what modern local mobility can look like in our region,” said Mayor Harry Mergel at the official opening. <mark class="editorial-highlight">The focus was particularly on increasing passive safety at complex intersections</mark>, where reflective marking elements and optimized traffic light phases were installed.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Most of all, the improved drainage at the road shoulders ensures that cyclists are no longer endangered by deep puddles during heavy rain.</p>
      </div>
      <p class="drawer-body"><mark class="editorial-highlight">The costs amount to around €820,000</mark>, the majority of which was funded by the state's transport financing act. Commuters and residents expressed positive feedback about the new riding comfort in initial surveys.</p>`,
    loops: [
      {
        step: 1,
        title: "Weststadt Bicycle Corridor: Repair and Safety Upgrade Completed",
        category: "Infrastructure",
        status: "Weststadt Bicycle...",
        age: "3m ago",
        distance: "0.4 km away",
        impactTitle: "",
        impactText: "Construction has officially started. Drivers should expect local detours. Cyclists are temporarily routed through quiet side streets.",
        imageUrl: "public/images/loops-bike-corridor.png",
        imageAlt: "Planning representation of Weststadt corridor"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "What it means for you?",
        category: "Infrastructure",
        status: "Weststadt Bicycle...",
        age: "1d ago",
        distance: "0.4 km away",
        impactTitle: "YOUR OPINION",
        impactText: "The route is now safer and easier to use. We want to know your thoughts on the new bicycle corridor.",
        imageUrl: "public/images/mystery_question_mark.png",
        imageAlt: "Mystery Question Mark"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Weststadt Bicycle Corridor: Repair and Safety Upgrade Completed",
        category: "Infrastructure",
        status: "Weststadt Bicycle...",
        age: "Active",
        distance: "Heilbronn",
        imageUrl: "public/images/damaged-road.png",
        imageAlt: "Community action photo of local roads"
      }
    ]
  },
  {
    id: "stadtradeln",
    title: "Stadtradeln 2026: Heilbronn aims for new record in Climate Action",
    category: "Climate",
    status: "BREAKING",
    author: "Max Mustermann",
    summary: "The city has launched its annual Stadtradeln campaign. Citizens are encouraged to cycle to work to save CO2 emissions and win prizes.",
    age: "1h ago",
    distance: "Citywide",
    sources: "2 sources",
    thumb: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    articleBody: `<p class="drawer-lead">The city of Heilbronn is once again participating in the international Stadtradeln campaign. <mark class="editorial-highlight">The goal is to cycle as many kilometers as possible in 21 days.</mark></p>
      <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80" alt="Cyclists" class="drawer-image" />
      <p class="drawer-body">Citizens, local politicians, and school classes are forming teams to track their daily commutes. The initiative aims to promote sustainable mobility and draw attention to the need for better bicycle infrastructure across the region.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">Every kilometer cycled is a direct contribution to climate protection and a clear signal for a greener Heilbronn.</p>
      </div>
      <p class="drawer-body">Registration is free and open to everyone who lives, works, or belongs to a club in the city. The campaign concludes at the end of the month with a large award ceremony at the Marktplatz.</p>`,
    loops: [
      {
        step: 1,
        title: "Stadtradeln 2026: Heilbronn aims for new record in Climate Action",
        category: "Climate",
        status: "BREAKING",
        age: "1h ago",
        distance: "Citywide",
        impactTitle: "",
        impactText: "The city has launched its annual Stadtradeln campaign. Citizens are encouraged to cycle to work to save CO2 emissions and win prizes.",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Cyclists in Heilbronn"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "What it means for you?",
        category: "Climate",
        status: "BREAKING",
        age: "1h ago",
        distance: "Citywide",
        impactTitle: "YOUR OPINION",
        impactText: "Will you switch to biking for your commute this month? Share your thoughts and pledge your kilometers.",
        imageUrl: "public/images/mystery_question_mark.png",
        imageAlt: "Mystery Question Mark"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Stadtradeln 2026: Heilbronn aims for new record in Climate Action",
        category: "Climate",
        status: "BREAKING",
        age: "Active",
        distance: "Heilbronn",
        imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Cyclists in Heilbronn"
      }
    ]
  },
  {
    id: "water",
    title: "Landkreis warns of water shortages: Appeals for conservation",
    category: "Local Gov",
    status: "UPDATE",
    author: "Regional Desk",
    summary: "Due to ongoing dry periods, the Landkreis Heilbronn has issued an official warning urging residents to save water.",
    age: "2h ago",
    distance: "Region",
    sources: "5 sources",
    thumb: "public/images/water_shortage_drought.png",
    articleBody: `<p class="drawer-lead">The severe lack of rainfall over the past few weeks has prompted authorities to issue an official water conservation warning. <mark class="editorial-highlight">Water levels in local reservoirs have reached a critical low.</mark></p>
      <img src="public/images/water_shortage_drought.png" alt="Drought" class="drawer-image" />
      <p class="drawer-body">The Landkreis Heilbronn has asked all residents to immediately cease watering private lawns, filling swimming pools, and washing cars. Agricultural sectors are also facing strict limitations on groundwater extraction during the daylight hours.</p>
      <div class="drawer-quote-panel">
        <span class="quote-symbol">„</span>
        <p class="quote-text">We are closely monitoring the situation. If the dry spell continues, legally binding bans will be the inevitable next step.</p>
      </div>
      <p class="drawer-body">Meteorologists do not expect significant precipitation in the coming fortnight. Citizens are encouraged to report major leaks or water wastage to the municipal hotline.</p>`,
    loops: [
      {
        step: 1,
        title: "Landkreis warns of water shortages: Appeals for conservation",
        category: "Local Gov",
        status: "UPDATE",
        age: "2h ago",
        distance: "Region",
        impactTitle: "",
        impactText: "Due to ongoing dry periods, the Landkreis Heilbronn has issued an official warning urging residents to save water.",
        imageUrl: "public/images/water_shortage_drought.png",
        imageAlt: "Water shortage"
      },
      {
        step: 2,
        isFlipCard: true,
        title: "What it means for you?",
        category: "Local Gov",
        status: "UPDATE",
        age: "2h ago",
        distance: "Region",
        impactTitle: "YOUR OPINION",
        impactText: "Are you changing your daily water usage due to the warnings? Share your conservation tips with the community.",
        imageUrl: "public/images/mystery_question_mark.png",
        imageAlt: "Mystery Question Mark"
      },
      {
        step: 3,
        isDoNext: true,
        title: "Landkreis warns of water shortages: Appeals for conservation",
        category: "Local Gov",
        status: "UPDATE",
        age: "Active",
        distance: "Region",
        imageUrl: "public/images/water_shortage_drought.png",
        imageAlt: "Water shortage"
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
  categoryPill.style.cursor = "pointer";
  categoryPill.addEventListener("click", () => {
    if (window.openNewsList) {
      window.openNewsList();
      setTimeout(() => {
        const pills = document.querySelectorAll('.feed-filter-pill');
        pills.forEach(pill => {
          if (pill.textContent.trim() === loopSteps[activeStepIndex].category) {
            pill.click();
          }
        });
      }, 50); // slight delay to allow drawer to render/open if needed
    }
  });

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
            <img src="${currentStory.thumb}" alt="Article Hero Image" />
          </div>
          <div class="q-front-button-wrapper">
            <button class="q-front-action-btn" type="button" aria-label="Flip Card">
              <span class="q-mark">?</span>
              <span class="q-text">What it means for you</span>
              <span class="q-subtext" style="font-size: 13px; font-weight: 500; color: rgba(255, 255, 255, 0.9); margin-top: 4px;">Click to flip</span>
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
            <h3 class="mystery-back-title">What it means for you</h3>
            <div class="mystery-back-body">
              <p>${stepData.impactText}</p>
            </div>
          </div>
          <div class="mystery-related-links" style="width: 100%; margin-top: 16px; text-align: left;">
            <span class="related-links-label">CHECK OUT SOMETHING SIMILAR</span>
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
            showToast("Loading story...");
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
              <span class="explainer-header-title">DO NEXT</span>
            </div>
            <div class="explainer-header-right">${loopSteps.length}/${loopSteps.length}</div>
          </div>
          <h2 class="explainer-headline">${stepData.title}</h2>
          
          <button type="button" class="btn-take-action" id="takeActionBtn">
            <span>${stepData.actionBtnText || "Take Action"}</span>
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
            openEmailModal(stepData.emailFormTitle || "Sign Up", stepData.emailFormText || "Enter your email for more info.");
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
      fullReportLink.setAttribute("aria-label", "Read the full article");
      fullReportLink.innerHTML = `
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 12px; width: 100%;">
          <svg class="swipe-up-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="17 11 12 6 7 11"></polyline>
            <polyline points="17 18 12 13 7 18"></polyline>
          </svg>
          <span style="font-size: 16px; font-weight: 600; text-align: center;">Swipe up to read the full article</span>
          <svg class="swipe-up-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="17 11 12 6 7 11"></polyline>
            <polyline points="17 18 12 13 7 18"></polyline>
          </svg>
        </div>
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
  // Swipe-up gesture to open drawer (only when at the bottom of the slide)
  let touchStartY = 0;
  let wasAtBottomOnStart = false;
  let isDraggingDrawer = false;
  
  contentArea.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
    const slide = e.target.closest('.loop-slide');
    if (slide) {
      wasAtBottomOnStart = slide.scrollTop + slide.clientHeight >= slide.scrollHeight - 10;
    } else {
      wasAtBottomOnStart = true;
    }
    isDraggingDrawer = false;
  }, { passive: true });

  contentArea.addEventListener('touchmove', (e) => {
    if (!wasAtBottomOnStart || e.target.closest('.flip-container')) return;
    const touchCurrentY = e.changedTouches[0].screenY;
    const distance = touchStartY - touchCurrentY;
    
    if (distance > 10) {
      isDraggingDrawer = true;
      if (e.cancelable) e.preventDefault();
      articleDrawer.style.transition = "none";
      const percent = Math.max(0, 100 - (distance / window.innerHeight * 100));
      articleDrawer.style.transform = `translateY(${percent}%)`;
    }
  }, { passive: false });
  
  contentArea.addEventListener('touchend', (e) => {
    if (e.target.closest('.flip-container')) return;

    const touchEndY = e.changedTouches[0].screenY;
    const distance = touchStartY - touchEndY;
    
    if (isDraggingDrawer) {
      articleDrawer.style.transition = "transform 380ms cubic-bezier(0.32, 0.94, 0.6, 1)";
      articleDrawer.style.transform = ""; 
      
      if (distance > 100) {
        openArticleDrawer();
      }
      isDraggingDrawer = false;
    } else if (distance > 100 && wasAtBottomOnStart) {
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
        <p class="completion-text">You've read the full article!</p>
      </div>

      <!-- Sources & Credits Zone -->
      <div class="article-sources-zone">
        <h4 class="sources-heading">Sources & Credits</h4>
        <ul class="sources-list">
          <li><a href="#" class="source-link" onclick="event.preventDefault()">Official Press Release (Local Govt)</a></li>
          <li><span class="source-informant">Confidential Informant (Verified)</span></li>
          <li><span class="source-writer">Written by: ${currentStory.author}</span></li>
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
      <button class="feed-filter-pill active">All</button>
      <button class="feed-filter-pill">Events</button>
      <button class="feed-filter-pill">Society</button>
      <button class="feed-filter-pill">Jobs</button>
      <button class="feed-filter-pill">Housing</button>
      <button class="feed-filter-pill">Mobility</button>
      <button class="feed-filter-pill">Climate</button>
      <button class="feed-filter-pill">Local Gov</button>
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
        if (selectedCategory === "All") {
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
          showToast("Article completed! 🎉");
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

  // Email Modal
  const emailModal = document.createElement("div");
  emailModal.className = "action-modal";
  emailModal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-wrapper">
      <div class="modal-header">
        <h3 class="modal-title" id="emailModalTitle">Sign Up</h3>
        <button type="button" class="btn-modal-close" id="closeEmailModalBtn" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p class="modal-lead-text" id="emailModalText">Enter your email for more info.</p>
        <form id="emailForm" class="modal-form">
          <label for="firstNameInput" class="form-label">First Name</label>
          <input type="text" id="firstNameInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="Jane" required />
          <label for="lastNameInput" class="form-label" style="margin-top: 8px;">Last Name</label>
          <input type="text" id="lastNameInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="Doe" required />
          <label for="emailInput" class="form-label" style="margin-top: 8px;">Email Address</label>
          <input type="email" id="emailInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="your.email@example.com" required />
          <button type="submit" class="btn-submit-comment" style="margin-top: 12px;">Submit</button>
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
      showToast("Thank you! Information will be sent to your email.");
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
