// Theme and shared styles
export const COLORS = {
  primary: "#1a1a2e",
  accent: "#f5c842",
  success: "#22c55e",
  danger: "#f87171",
  warning: "#f5a623",
  text: "#1a1a2e",
  textSecondary: "#555",
  textMuted: "#888",
  border: "#d0d0d8",
  borderLight: "#e8e8ef",
  background: "#f4f4f8",
  backgroundLight: "#fafafa",
  backgroundLighter: "#f8f8fb",
} as const;

export const FONTS = {
  primary: "'DM Sans', sans-serif",
  serif: "'Playfair Display', serif",
} as const;

export const INPUT_STYLES: React.CSSProperties = {
  padding: "11px 16px",
  border: `1.5px solid ${COLORS.border}`,
  borderRadius: "9px",
  fontSize: "14px",
  color: COLORS.text,
  background: COLORS.backgroundLight,
  fontFamily: FONTS.primary,
};

export const CARD_STYLES: React.CSSProperties = {
  background: "#fff",
  border: `1.5px solid ${COLORS.borderLight}`,
  borderRadius: "14px",
  padding: "22px 24px",
  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
};

export const LABEL_STYLES: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  color: COLORS.textMuted,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "14px",
};

export const BAR_COLORS = ["#f5c842", "#4ade80", "#818cf8", "#fb923c"] as const;
