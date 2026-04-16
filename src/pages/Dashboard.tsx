import React from "react";
import { COLORS, FONTS, CARD_STYLES } from "../styles/theme";
import { FileText, FlaskConical, Zap, Bot } from "lucide-react";
import homeImage from "../assets/dashboard.png";

interface HomePageProps {
  onNavigate?: (screen: string) => void;
}

const QUICK_LINKS = [
  {
    label: "RTM Agent",
    description: "Traceability mapping and coverage analysis",
    target: "RTM Agent",
    icon: FileText,
  },
  {
    label: "BDD Agent",
    description: "Business design and requirements alignment",
    target: "BDD Agent",
    icon: FlaskConical,
  },
  {
    label: "FUT Agent",
    description: "Future state analysis and solution planning",
    target: "FUT Agent",
    icon: Zap,
  },
  {
    label: "Selection Agent",
    description: "Select the best solution based on needs",
    target: "Selection Agent",
    icon: Bot,
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "24px",
          minHeight: "420px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            ...CARD_STYLES,
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <h1
              style={{
                fontFamily: FONTS.serif,
                fontSize: "40px",
                color: COLORS.primary,
                fontWeight: 800,
                margin: 0,
              }}
            >
              ETRM
            </h1>
            <div style={{ display: "flex", gap: "10px" }}>
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "4px",
                    background: "#F7C419",
                  }}
                />
              ))}
            </div>
          </div>

          <p
            style={{
              fontSize: "16px",
              color: COLORS.textMuted,
              lineHeight: 1.8,
              maxWidth: "560px",
              fontFamily: FONTS.primary,
              margin: 0,
            }}
          >
            An integrated platform for transforming unstructured documents into actionable data through effective management, analysis, and utilization.
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <span
              style={{
                width: "48px",
                height: "48px",
                background: COLORS.primary,
                borderRadius: "12px",
              }}
            />
            <span
              style={{
                width: "48px",
                height: "48px",
                background: COLORS.primary,
                borderRadius: "12px",
              }}
            />
            <span
              style={{
                width: "48px",
                height: "48px",
                background: COLORS.primary,
                borderRadius: "12px",
              }}
            />
          </div>
        </div>

        <div style={{ ...CARD_STYLES, padding: 0, overflow: "hidden" }}>
          <img
            src={homeImage}
            alt="Home overview"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      <div style={{ ...CARD_STYLES, padding: "28px 24px", display: "grid", gap: "20px" }}>
        <div>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              margin: 0,
              fontFamily: FONTS.serif,
              color: COLORS.primary,
            }}
          >
            Quick links
          </h2>
          <p style={{ margin: "10px 0 0", color: COLORS.textMuted, fontFamily: FONTS.primary }}>
            Jump directly to the agent workflows you need most.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {QUICK_LINKS.map(({ label, description, target, icon: Icon }) => (
            <button
              key={label}
              onClick={() => onNavigate?.(target)}
              style={{
                ...CARD_STYLES,
                border: `1px solid ${COLORS.borderLight}`,
                padding: "18px",
                textAlign: "left",
                cursor: "pointer",
                background: COLORS.card,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "12px", background: COLORS.accent }}>
                <Icon color={COLORS.text} size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: COLORS.primary, fontFamily: FONTS.primary }}>
                  {label}
                </h3>
                <p style={{ margin: "8px 0 0", fontSize: "13px", color: COLORS.textMuted, fontFamily: FONTS.primary }}>
                  {description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  const [message, setMessage] = React.useState("");
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "8px",
          }}
        >
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: "28px",
              color: COLORS.text,
              fontWeight: 700,
              margin: 0,
            }}
          >
            ETRM Design Agent
          </h1>
        </div>
        <p style={{ fontSize: "14px", color: COLORS.textMuted, margin: 0 }}>
          Requirements Gathering
        </p>
      </div>

      {/* Upload Meeting Notes Section */}
      <div
        style={{
          ...CARD_STYLES,
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: COLORS.primary,
            marginBottom: "20px",
            fontFamily: FONTS.primary,
          }}
        >
          Upload Meeting Notes and/or Audio Recordings
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <label
            style={{
              display: "inline-block",
              padding: "12px 20px",
              background: COLORS.primary,
              color: "#fff",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: FONTS.primary,
            }}
          >
            Choose Files
            <input
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={(e) => setSelectedFiles(Array.from(e.target.files || []))}
            />
          </label>
          <span style={{ fontSize: "14px", color: COLORS.textMuted, fontFamily: FONTS.primary }}>
            {selectedFiles.length > 0 ? `${selectedFiles.length} file(s) selected` : "No files chosen"}
          </span>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: COLORS.textMuted,
            marginTop: "12px",
            margin: "12px 0 0 0",
            fontFamily: FONTS.primary,
          }}
        >
          Upload stakeholder notes, audio, or recordings to inform requirement discovery.
        </p>
      </div>

      {/* Message Section */}
      <div
        style={{
          ...CARD_STYLES,
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: COLORS.primary,
            marginBottom: "20px",
            fontFamily: FONTS.primary,
          }}
        >
          Message ETRM Design Agent
        </h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Additional information"
          style={{
            width: "100%",
            minHeight: "180px",
            padding: "14px",
            background: COLORS.surface,
            border: `1.5px solid ${COLORS.borderLight}`,
            borderRadius: "8px",
            fontSize: "14px",
            fontFamily: FONTS.primary,
            color: COLORS.text,
            resize: "vertical",
          }}
        />
      </div>

      {/* Next Button */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p
          style={{
            fontSize: "13px",
            color: COLORS.textMuted,
            margin: 0,
            fontFamily: FONTS.primary,
          }}
        >
          Next: Map captured requirements to solution features and identify coverage.
        </p>
        <button
          style={{
            padding: "12px 28px",
            background: COLORS.accent,
            color: COLORS.primary,
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: FONTS.primary,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
