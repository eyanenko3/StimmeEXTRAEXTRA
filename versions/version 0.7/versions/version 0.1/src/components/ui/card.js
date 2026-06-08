// Reusable base Card UI component

export function createCard({ className = "", children = [], id = "" } = {}) {
  const card = document.createElement("div");
  card.className = `ui-card ${className}`.trim();
  if (id) card.id = id;

  if (typeof children === "string") {
    card.innerHTML = children;
  } else if (children instanceof HTMLElement) {
    card.appendChild(children);
  } else if (Array.isArray(children)) {
    children.forEach((child) => {
      if (child instanceof HTMLElement) {
        card.appendChild(child);
      } else if (child) {
        const textNode = document.createTextNode(child.toString());
        card.appendChild(textNode);
      }
    });
  }

  return card;
}
