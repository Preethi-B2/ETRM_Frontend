import { useState } from "react";
import { CARD_STYLES, COLORS, FONTS } from "../../styles/theme";
import { REPORT } from "../../data/content";
import { generatePowerPoint } from "../../utils/powerPointGenerator";

interface Step4Props {
  onReset: () => void;
  onBack: () => void;
  companyName: string;
  startDate: string;
  userBase: { from: string; to: string };
  selections: Record<string, string[]>;
  others: Record<string, string>;
}

export function Step4({
  onReset,
  onBack,
  companyName,
  startDate,
  userBase,
  selections,
  others,
}: Step4Props) {
  const [downloaded, setDownloaded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      generatePowerPoint({
        companyName,
        startDate,
        userBase,
        selections,
        others,
      });
      setDownloaded(true);
    } catch (error) {
      console.error("Error generating PowerPoint:", error);
      alert("Error generating PowerPoint. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={CARD_STYLES}>
        <div
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: COLORS.primary,
            marginBottom: "6px",
            fontFamily: FONTS.serif,
          }}
        >
          Recommendation Report
        </div>
        <p style={{ fontSize: "13px", color: COLORS.textMuted }}>
          Executive-ready summary tailored to your requirements.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {REPORT.map((r) => (
          <div
            key={r.name}
            style={{
              ...CARD_STYLES,
              padding: 0,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                borderBottom: `1.5px solid ${COLORS.borderLight}`,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontWeight: 700,
                  fontSize: "16px",
                  color: COLORS.primary,
                }}
              >
                {r.name}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: COLORS.textMuted,
                  marginLeft: "8px",
                  fontFamily: FONTS.primary,
                }}
              >
                (Vendor: {r.vendor})
              </span>
            </div>

            <div
              style={{
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                {
                  label: "About",
                  content: (
                    <p
                      style={{
                        fontSize: "12px",
                        color: COLORS.textSecondary,
                        lineHeight: 1.6,
                        fontFamily: FONTS.primary,
                      }}
                    >
                      {r.about}
                    </p>
                  ),
                },
                {
                  label: "Rationale",
                  content: r.rationale.map((i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "6px",
                        marginBottom: "5px",
                      }}
                    >
                      <span
                        style={{
                          color: COLORS.primary,
                          fontSize: "10px",
                          marginTop: "3px",
                        }}
                      >
                        •
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#444",
                          lineHeight: 1.5,
                          fontFamily: FONTS.primary,
                        }}
                      >
                        {i}
                      </span>
                    </div>
                  )),
                },
                {
                  label: "Key Features",
                  content: r.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        gap: "6px",
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        style={{
                          color: COLORS.primary,
                          fontSize: "10px",
                          marginTop: "3px",
                        }}
                      >
                        •
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#444",
                          fontFamily: FONTS.primary,
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  )),
                },
              ].map((sec) => (
                <div key={sec.label}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: COLORS.warning,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase" as const,
                      marginBottom: "8px",
                      fontFamily: FONTS.primary,
                    }}
                  >
                    {sec.label}
                  </div>
                  {sec.content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          ...CARD_STYLES,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={onReset}
          style={{
            padding: "10px 24px",
            borderRadius: "9px",
            border: `1.5px solid ${COLORS.border}`,
            background: "#fff",
            color: COLORS.textSecondary,
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: FONTS.primary,
          }}
        >
          Reset
        </button>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={onBack}
            style={{
              padding: "10px 24px",
              borderRadius: "9px",
              border: `1.5px solid ${COLORS.border}`,
              background: "#fff",
              color: COLORS.textSecondary,
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: FONTS.primary,
            }}
          >
            ← Back
          </button>
          <button
            onClick={handleDownload}
            disabled={isGenerating}
            style={{
              padding: "10px 28px",
              borderRadius: "9px",
              border: "none",
              background: isGenerating ? "#cccccc" : COLORS.primary,
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: isGenerating ? "not-allowed" : "pointer",
              fontFamily: FONTS.primary,
              boxShadow: isGenerating
                ? "none"
                : "0 3px 12px rgba(26,26,46,0.18)",
              opacity: isGenerating ? 0.7 : 1,
            }}
          >
            {isGenerating ? "Generating..." : "Download PowerPoint (.pptx)"}
          </button>
        </div>
      </div>

      {downloaded && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#f0fdf4",
            border: `1.5px solid ${COLORS.success}`,
            borderRadius: "10px",
            padding: "14px 20px",
          }}
        >
          <span style={{ color: COLORS.success, fontSize: "18px" }}>✓</span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#15803d",
              fontFamily: FONTS.primary,
            }}
          >
            PowerPoint has been downloaded successfully
          </span>
        </div>
      )}
    </div>
  );
}
