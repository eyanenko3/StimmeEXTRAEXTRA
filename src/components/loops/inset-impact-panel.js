// Inset Impact Panel component for Stimme Loops

export function createInsetImpactPanel({ text } = {}) {
  const panel = document.createElement("div");
  panel.className = "inset-impact-panel";

  const paragraph = document.createElement("p");
  paragraph.className = "impact-text";
  paragraph.textContent = text;

  panel.appendChild(paragraph);
  return panel;
}
