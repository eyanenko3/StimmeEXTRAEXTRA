// Pagination Dots component for Stimme Loops

export function createPaginationDots({ total = 4, activeIndex = 2 } = {}) {
  const container = document.createElement("div");
  container.className = "loops-pagination-dots";

  for (let i = 0; i < total; i++) {
    const dot = document.createElement("span");
    dot.className = `pagination-dot ${i === activeIndex ? "is-active" : ""}`.trim();
    dot.setAttribute("aria-hidden", "true");
    container.appendChild(dot);
  }

  return container;
}
