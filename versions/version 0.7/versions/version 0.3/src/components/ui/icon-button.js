// Reusable base Icon Button UI component

export function createIconButton({ icon, ariaLabel, onClick, className = "", id = "", active = false } = {}) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `ui-icon-button ${className} ${active ? "is-active" : ""}`.trim();
  button.setAttribute("aria-label", ariaLabel);
  if (id) button.id = id;

  if (typeof icon === "string") {
    button.innerHTML = icon;
  } else if (icon instanceof HTMLElement) {
    button.appendChild(icon);
  }

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  return button;
}
