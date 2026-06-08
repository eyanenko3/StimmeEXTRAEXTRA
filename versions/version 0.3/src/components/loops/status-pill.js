// Status Pill component for Stimme Loops

export function createStatusPill({ label, type = "category" } = {}) {
  const pill = document.createElement("span");
  pill.className = `status-pill pill-${type.toLowerCase()}`;
  pill.textContent = label;
  return pill;
}
