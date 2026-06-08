// Explainer Card component for Stimme Loops

import { createCard } from "../ui/card.js";

export function createExplainerCard({ title, impactTitle, counter, children = [] } = {}) {
  const contentWrapper = document.createElement("div");
  contentWrapper.className = "explainer-card-content";

  // Header Row
  const headerRow = document.createElement("div");
  headerRow.className = "explainer-header-row";

  // Left: Icon + Title
  const headerLeft = document.createElement("div");
  headerLeft.className = "explainer-header-left";

  const infoIcon = `<svg class="explainer-header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  const titleSpan = document.createElement("span");
  titleSpan.className = "explainer-header-title";
  titleSpan.textContent = impactTitle;

  headerLeft.innerHTML = infoIcon;
  headerLeft.appendChild(titleSpan);

  // Right: Step Counter
  const headerRight = document.createElement("div");
  headerRight.className = "explainer-header-right";
  headerRight.textContent = counter;

  headerRow.appendChild(headerLeft);
  headerRow.appendChild(headerRight);

  // Main Editorial Headline
  const headline = document.createElement("h2");
  headline.className = "explainer-headline";
  headline.textContent = title;

  contentWrapper.appendChild(headerRow);
  contentWrapper.appendChild(headline);

  // Children elements (Impact Panel, Deeper article cues)
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (child instanceof HTMLElement) {
        contentWrapper.appendChild(child);
      }
    });
  } else if (children instanceof HTMLElement) {
    contentWrapper.appendChild(children);
  }

  return createCard({
    className: "loops-explainer-card",
    children: contentWrapper
  });
}
