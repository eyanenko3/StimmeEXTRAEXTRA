// Top Bar component for Stimme Loops

import { createIconButton } from "../ui/icon-button.js";

export function createTopBar({ onBack, onBookmark, onShare, isBookmarked = false, pills = [] } = {}) {
  const container = document.createElement("header");
  container.className = "loops-top-bar";

  // Left button: Back (rounded-square ui-icon-button, uses border-radius: var(--radius-button) = 16px)
  const backIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
  const backBtn = createIconButton({
    icon: backIcon,
    ariaLabel: "Go back",
    onClick: onBack,
    className: "btn-back"
  });

  // Center area: Pills
  const pillsContainer = document.createElement("div");
  pillsContainer.className = "loops-top-bar-pills";
  pills.forEach((pill) => {
    if (pill instanceof HTMLElement) {
      pillsContainer.appendChild(pill);
    }
  });

  // Right area: Actions (circular buttons)
  const rightContainer = document.createElement("div");
  rightContainer.className = "loops-top-bar-actions";

  const bookmarkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
  const bookmarkBtn = createIconButton({
    icon: bookmarkIcon,
    ariaLabel: "Bookmark this story",
    onClick: onBookmark,
    className: "btn-bookmark btn-circular",
    active: isBookmarked
  });

  const shareIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`;
  const shareBtn = createIconButton({
    icon: shareIcon,
    ariaLabel: "Share this story",
    onClick: onShare,
    className: "btn-share btn-circular"
  });

  rightContainer.appendChild(bookmarkBtn);
  rightContainer.appendChild(shareBtn);

  container.appendChild(backBtn);
  container.appendChild(pillsContainer);
  container.appendChild(rightContainer);

  return container;
}
