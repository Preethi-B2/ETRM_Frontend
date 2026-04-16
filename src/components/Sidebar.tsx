import { useState } from "react";
import { COLORS, FONTS } from "../styles/theme";
import {
  Home,
  Settings,
  FileText,
  FlaskConical,
  HelpCircle,
  Zap,
  Bot,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const MENU_ITEMS = [
  { label: "Dashboard", icon: Home },
  { label: "RTM Agent", icon: FileText },
  { label: "BDD Agent", icon: FlaskConical },
  { label: "FUT Agent", icon: Zap },
  { label: "Selection Agent", icon: Bot },
  { label: "Help & Support", icon: HelpCircle },
  { label: "Settings", icon: Settings },
] as const;

interface SidebarProps {
  onMenuClick?: (label: string) => void;
}

export function Sidebar({ onMenuClick }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      style={{
        width: expanded ? "240px" : "72px",
        minHeight: "100vh",
        background: "#fff",
        borderRight: `1.5px solid ${COLORS.borderLight}`,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        padding: "16px 8px",
        transition: "width 0.25s ease",
        overflowX: "hidden",
      }}
    >
      {/* ---------- Logo ---------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: expanded ? "space-between" : "center",
          padding: "8px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            background: COLORS.primary,
            color: COLORS.accent,
            fontWeight: 800,
            fontSize: "14px",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "0.05em",
            flexShrink: 0,
          }}
        >
          EY
        </div>

        {expanded && (
          <span
            style={{
              marginLeft: "12px",
              fontWeight: 700,
              fontFamily: FONTS.primary,
              fontSize: "14px",
            }}
          >
            
          </span>
        )}
      </div>

      {/* ---------- Menu ---------- */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          flex: 1,
        }}
      >
        {MENU_ITEMS.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onMenuClick?.(label)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 12px",
              borderRadius: "8px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = COLORS.accent)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <Icon size={20} color="#000" />

            {expanded && (
              <span
                style={{
                  fontFamily: FONTS.primary,
                  fontSize: "14px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {label}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* ---------- Expand / Collapse ---------- */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label="Toggle sidebar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: expanded ? "flex-end" : "center",
          padding: "8px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        {expanded ? (
          <ChevronLeft size={18} />
        ) : (
          <ChevronRight size={18} />
        )}
      </button>
    </aside>
  );
}