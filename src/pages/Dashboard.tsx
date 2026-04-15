import React from "react";
import { COLORS, FONTS, CARD_STYLES } from "../styles/theme";

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
              color: "#000",
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
            background: "#f9f9fc",
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
