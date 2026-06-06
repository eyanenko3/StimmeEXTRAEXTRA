// Design system tokens for Stimme Loops

export const COLORS = {
  bg: {
    base: "#F6F4F1",       // App background (warm newsprint off-white)
    surface: "#FFFFFF",    // Cards, primary button containers
    subtle: "#F8F6F3",     // Inset panels and subtle layers
  },
  border: {
    soft: "#D9D6D1",       // Main card/app borders
    subtle: "#E7E3DE",     // Separation lines/dividers
  },
  text: {
    primary: "#202327",    // Editorial headlines, body copy
    secondary: "#5F6873",  // Nav labels, secondary details
  },
  brand: {
    navy: "#16324A",       // Brand anchor color
    steel: "#6C8194",      // Muted steel accent
  },
  accent: {
    orange: "#D98A2B",     // Active pagination dot, highlights
    red: "#B64034",        // Urgent / breaking news alerts
  },
  pill: {
    resolved: {
      bg: "#E9F1ED",
      text: "#214E37",
    },
    category: {
      bg: "#EEF2F5",
      text: "#3F5568",
    }
  }
};

export const TYPOGRAPHY = {
  fonts: {
    editorial: "'Merriweather', Georgia, serif",
    body: "'Source Sans 3', system-ui, sans-serif",
    ui: "'Inter', system-ui, sans-serif",
  },
  roles: {
    title: {
      font: "editorial",
      size: "28px",
      weight: "700",
      lineHeight: "1.2",
    },
    sectionTitle: {
      font: "ui",
      size: "14px",
      weight: "700",
      lineHeight: "1.2",
    },
    explainerBody: {
      font: "body",
      size: "18px",
      weight: "400",
      lineHeight: "1.55",
    },
    utilityLabel: {
      font: "ui",
      size: "12px",
      weight: "600",
      lineHeight: "1.2",
    },
    metadata: {
      font: "ui",
      size: "12px",
      weight: "500",
      lineHeight: "1.2",
    },
    counter: {
      font: "ui",
      size: "14px",
      weight: "700",
      lineHeight: "1.2",
    }
  }
};

export const SPACING = {
  paddingX: "16px",
  majorSection: "24px",
  internal: "16px",
  metadataGap: "8px",
  rhythm: "4px",
};

export const RADIUS = {
  button: "16px",
  pill: "999px",
  heroCard: "28px",
  mainCard: "24px",
  innerPanel: "20px",
};
