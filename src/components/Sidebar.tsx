import { COLORS, FONTS } from "../styles/theme";
import {
  Home,
  Settings,
  FileText,
  FlaskConical,
  HelpCircle,
  Zap,
  Bot,
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
  return (
    <div
      style={{
        width: "80px",
        minHeight: "100vh",
        background: "#ffffff",
        borderRight: `1.5px solid ${COLORS.borderLight}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 0",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        boxShadow: "2px 0 12px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          background: COLORS.primary,
          color: COLORS.accent,
          fontWeight: 800,
          fontSize: "16px",
          borderRadius: "7px",
          letterSpacing: "0.05em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "32px",
        }}
      >
        EY
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: 1,
        }}
      >
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="sidebar-item-group"
            >
              <button
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  padding: 0,
                }}
                className="sidebar-icon-button"
                onClick={() => onMenuClick?.(item.label)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = COLORS.accent;
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) {
                    icon.style.color = "#000";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  const icon = e.currentTarget.querySelector("svg");
                  if (icon) {
                    icon.style.color = "#000";
                  }
                }}
              >
                <Icon size={20} strokeWidth={2} color="#000" />
              </button>
              <div
                style={{
                  position: "absolute",
                  left: "64px",
                  background: COLORS.primary,
                  color: "#fff",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  fontFamily: FONTS.primary,
                  opacity: 0,
                  pointerEvents: "none",
                  transition: "opacity 0.2s ease-in-out",
                  zIndex: 20,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                className="sidebar-label"
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "auto",
          height: "40px",
        }}
      />

      <style>{`
        .sidebar-item-group:hover .sidebar-label {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
