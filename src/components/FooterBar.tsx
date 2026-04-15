import { CARD_STYLES, COLORS, FONTS } from "../styles/theme";

interface FooterBarProps {
  onReset: () => void;
  onBack?: () => void;
  onNext?: () => void;
  hint?: string;
  showBack?: boolean;
  nextLabel?: string;
}

export function FooterBar({
  onReset,
  onBack,
  onNext,
  hint,
  showBack,
  nextLabel,
}: FooterBarProps) {
  const btn = (label: string, onClick: () => void, primary?: boolean) => (
    <button
      onClick={onClick}
      style={{
        padding: "10px 24px",
        borderRadius: "9px",
        border: primary ? "none" : `1.5px solid ${COLORS.border}`,
        background: primary ? COLORS.primary : "#fff",
        color: primary ? "#fff" : COLORS.textSecondary,
        fontSize: "14px",
        fontWeight: primary ? 600 : 500,
        cursor: "pointer",
        fontFamily: FONTS.primary,
        boxShadow: primary ? "0 3px 12px rgba(26,26,46,0.18)" : "none",
      }}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        ...CARD_STYLES,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {btn("Reset", onReset)}
      {hint && (
        <p style={{ fontSize: "13px", color: COLORS.textMuted }}>{hint}</p>
      )}
      <div style={{ display: "flex", gap: "10px" }}>
        {showBack && onBack && btn("← Back", onBack)}
        {onNext && btn(nextLabel || "Next →", onNext, true)}
      </div>
    </div>
  );
}
