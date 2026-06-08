// Inset Impact Panel component for Stimme Loops

export function createInsetImpactPanel({ text } = {}) {
  const panel = document.createElement("div");
  panel.className = "inset-impact-panel";

  const paragraph = document.createElement("p");
  paragraph.className = "impact-text";
  // Use innerHTML so we can inject <br> and bold tags for bullet points
  paragraph.innerHTML = text;

  panel.appendChild(paragraph);
  return panel;
}

