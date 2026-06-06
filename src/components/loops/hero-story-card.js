// Hero Story Card component for Stimme Loops

export function createHeroStoryCard({ imageUrl, altText, distance, recency } = {}) {
  const container = document.createElement("div");
  container.className = "hero-story-card-wrapper";

  // Simulated left page (peek)
  const leftPeek = document.createElement("div");
  leftPeek.className = "peek-card left-peek";

  // Active Center Card
  const activeCard = document.createElement("div");
  activeCard.className = "hero-story-card";

  // Image
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = altText;
  img.className = "hero-card-image";

  // Legibility gradient overlay
  const overlay = document.createElement("div");
  overlay.className = "hero-card-overlay";

  // Metadata block
  const metaContainer = document.createElement("div");
  metaContainer.className = "hero-card-metadata";

  const locationIcon = `<svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
  const locationSpan = document.createElement("span");
  locationSpan.className = "meta-item location-meta";
  locationSpan.innerHTML = `${locationIcon}${distance}`;

  const timeIcon = `<svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
  const timeSpan = document.createElement("span");
  timeSpan.className = "meta-item time-meta";
  timeSpan.innerHTML = `${timeIcon}${recency}`;

  metaContainer.appendChild(locationSpan);
  metaContainer.appendChild(timeSpan);

  activeCard.appendChild(img);
  activeCard.appendChild(overlay);
  activeCard.appendChild(metaContainer);

  // Simulated right page (peek)
  const rightPeek = document.createElement("div");
  rightPeek.className = "peek-card right-peek";

  container.appendChild(leftPeek);
  container.appendChild(activeCard);
  container.appendChild(rightPeek);

  return container;
}
