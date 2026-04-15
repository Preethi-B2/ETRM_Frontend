import { COLORS, FONTS } from "../styles/theme";

export function HelpSupport() {
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
          Help & Support
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
            marginBottom: "16px",
            fontWeight: 600,
          }}
        >
          FAQ & Documentation
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <p
              style={{
                fontSize: "14px",
                color: COLORS.primary,
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              How do I get started?
            </p>
            <p style={{ fontSize: "13px", color: COLORS.textMuted }}>
              Begin with the Dashboard to view your current status, then proceed
              through the workflow steps.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                color: COLORS.primary,
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              What is the RTM Agent?
            </p>
            <p style={{ fontSize: "13px", color: COLORS.textMuted }}>
              The RTM Agent helps with requirements traceability and mapping
              across your development lifecycle.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                color: COLORS.primary,
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Where can I contact support?
            </p>
            <p style={{ fontSize: "13px", color: COLORS.textMuted }}>
              For additional support, please refer to the Settings page or
              contact your system administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
