import React from "react";
import { COLORS, FONTS, CARD_STYLES } from "../styles/theme";

const BLUE_900 = "#1a2b4d";
const YELLOW_400 = "#f5c842";
const TEAL_700 = "#0d8a78";
const SLATE_300 = "#cbd5e1";

export function FUTAgent() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const metrics = [
    { name: "Front-Office", color: YELLOW_400, progress: 85 },
    { name: "Scheduling", color: TEAL_700, progress: 72 },
    { name: "Risk", color: BLUE_900, progress: 68 },
    { name: "Accounting", color: SLATE_300, progress: 91 },
  ];

  const tests = [
    { title: "Trading: Primary Price Provision", color: SLATE_300, status: 0 },
    { title: "Risk: Transfer Pricing", color: BLUE_900, status: 1 },
    { title: "Scheduling: Supply and Demand Balance Report", color: TEAL_700, status: 1 },
    { title: "Accounting: Invoice Template", color: YELLOW_400, status: 1 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
                color: COLORS.primary,
                fontWeight: 700,
                margin: 0,
              }}
            >
              Functional Unit Test Document
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
          <p style={{ fontSize: "14px", color: COLORS.textMuted, margin: 0 }}>
            Defines tests to validate functional capabilities and business flows.
          </p>
        </div>
        <button
          style={{
            background: COLORS.accent,
            color: COLORS.primary,
            fontWeight: 700,
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: FONTS.primary,
          }}
        >
          ⬇ Download FUT
        </button>
      </div>

      {/* Executive Summary */}
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
          Executive Summary
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {metrics.map((metric, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                padding: "16px",
                background: "#f9f9fc",
                borderRadius: "10px",
                border: `1px solid ${COLORS.borderLight}`,
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: metric.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: FONTS.primary,
                }}
              >
                {metric.name === "Front-Office" ? "1" : "1"}
              </div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: COLORS.primary,
                  textAlign: "center",
                  margin: 0,
                  fontFamily: FONTS.primary,
                }}
              >
                {metric.name}
              </p>
              <div
                style={{
                  width: "100%",
                  height: "6px",
                  background: "#e0e0e6",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${metric.progress}%`,
                    background: metric.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Functional Unit Tests */}
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
          Key Functional Unit Tests
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          {tests.map((test, i) => (
            <div
              key={i}
              style={{
                padding: "16px",
                background: "#f9f9fc",
                borderRadius: "10px",
                border: `1px solid ${COLORS.borderLight}`,
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: test.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 700,
                  flexShrink: 0,
                  fontFamily: FONTS.primary,
                }}
              >
                1
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: COLORS.primary,
                    margin: 0,
                    fontFamily: FONTS.primary,
                  }}
                >
                  {test.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload BDD */}
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
            marginBottom: "16px",
            fontFamily: FONTS.primary,
          }}
        >
          Upload BDD
        </h2>
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
          Choose File
          <input
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          />
        </label>
        <span style={{ marginLeft: "16px", fontSize: "14px", color: COLORS.textMuted, fontFamily: FONTS.primary }}>
          {selectedFile ? selectedFile.name : "No file chosen"}
        </span>
      </div>

      {/* Gaps or Risks */}
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
            marginBottom: "16px",
            fontFamily: FONTS.primary,
          }}
        >
          Gaps or Risks
        </h2>
        <p style={{ fontSize: "14px", color: COLORS.textMuted, margin: 0, fontFamily: FONTS.primary }}>
          No unmapped FUTs detected
        </p>
      </div>
    </div>
  );
}
