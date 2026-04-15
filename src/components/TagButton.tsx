import { COLORS, FONTS } from "../styles/theme";

interface TagButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function TagButton({ label, selected, onClick }: TagButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 14px",
        borderRadius: "999px",
        border: selected
          ? `2px solid ${COLORS.primary}`
          : `1.5px solid ${COLORS.border}`,
        background: selected ? COLORS.primary : "#fff",
        color: selected ? "#fff" : COLORS.text,
        fontSize: "13px",
        fontFamily: FONTS.primary,
        fontWeight: selected ? 600 : 400,
        cursor: "pointer",
        transition: "all 0.18s",
        boxShadow: selected ? "0 2px 8px rgba(26,26,46,0.13)" : "none",
      }}
    >
      {label}
    </button>
  );
}
