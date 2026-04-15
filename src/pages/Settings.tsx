import { COLORS, FONTS } from "../styles/theme";

export function Settings() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontSize: "24px",
            color: COLORS.primary,
            fontWeight: 700,
          }}
        >
          Settings
        </h1>
        <div style={{ display: "flex", gap: "6px" }}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                width: "12px",
                height: "12px",
                background: COLORS.accent,
                borderRadius: "2px",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          border: `1.5px solid ${COLORS.borderLight}`,
          borderRadius: "14px",
          padding: "22px 24px",
          boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            color: COLORS.primary,
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          Configuration & Preferences
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>
            <label
              style={{
                fontSize: "14px",
                color: COLORS.primary,
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Theme Preference
            </label>
            <select
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: `1px solid ${COLORS.borderLight}`,
                fontSize: "13px",
                fontFamily: FONTS.primary,
                color: COLORS.text,
              }}
            >
              <option>Light Theme</option>
              <option>Dark Theme</option>
              <option>Auto</option>
            </select>
          </div>
          <div>
            <label
              style={{
                fontSize: "14px",
                color: COLORS.primary,
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Notification Frequency
            </label>
            <select
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: `1px solid ${COLORS.borderLight}`,
                fontSize: "13px",
                fontFamily: FONTS.primary,
                color: COLORS.text,
              }}
            >
              <option>Immediate</option>
              <option>Daily Digest</option>
              <option>Weekly Digest</option>
              <option>Disabled</option>
            </select>
          </div>
          <div>
            <label
              style={{
                fontSize: "14px",
                color: COLORS.primary,
                fontWeight: 600,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Data Export Format
            </label>
            <select
              style={{
                width: "100%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: `1px solid ${COLORS.borderLight}`,
                fontSize: "13px",
                fontFamily: FONTS.primary,
                color: COLORS.text,
              }}
            >
              <option>PDF</option>
              <option>Excel</option>
              <option>JSON</option>
              <option>PowerPoint</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
