// Pagination Dots component for Stimme Loops

export function createPaginationDots({ total = 4, activeIndex = 2, onChange } = {}) {
  const container = document.createElement("div");
  container.className = "loops-pagination-dots";

  for (let i = 0; i < total; i++) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `pagination-dot ${i === activeIndex ? "is-active" : ""}`.trim();
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => {
      if (onChange) onChange(i);
    });
    container.appendChild(dot);
  }

  return container;
}
