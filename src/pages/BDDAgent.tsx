import React from "react";
import { FONTS, CARD_STYLES } from "../styles/theme";
import { generateWordFile } from "../utils/documentGenerator";

const BLUE_900 = "#1a2b4d";
const YELLOW_400 = "#f5c842";
const SLATE_300 = "#060606";

export function BDDAgent() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const businessRequirements = [
    { title: "Trading: Deal Templates", covered: 75 },
    { title: "Trading: Confirmation Templates", covered: 56 },
    { title: "Trading: Primary Price Provisions", covered: 58 },
    { title: "Trading: Secondary Price Provision", covered: 87 },
    { title: "Trading: Credit Setup", covered: 95 },
    { title: "Risk: (Price, Market, and Forward) Curve Configuration", covered: 73 },
    { title: "Risk: Reporting", covered: 73 },
    { title: "Scheduling: Storage Agreements", covered: 56 },
    { title: "Scheduling: Transportation Agreements", covered: 64 },
    { title: "Scheduling: Inventory Valuation", covered: 54 },
    { title: "Accounting: Invoice Templates", covered: 84 },
    { title: "Accounting: Month End Closing Processes", covered: 94 },
  ];

  const executiveSummary = [
    { label: "Front-Office", value: "1" },
    { label: "Scheduling", value: "1" },
    { label: "Risk", value: "1" },
    { label: "Accounting", value: "1" },
  ];

  const handleDownloadBDD = () => {
    const sections = [
      {
        heading: "Executive Summary",
        rows: executiveSummary.map((item) => `${item.label}: ${item.value}`),
      },
      {
        heading: "Key Business Requirements",
        rows: businessRequirements.map(
          (req) => `${req.title} — ${req.covered}% covered`,
        ),
      },
    ];

    generateWordFile("ETRM_BDD_Report", sections);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <h1
              style={{
                fontFamily: FONTS.serif,
                fontSize: "28px",
                color: "#000",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Business Design Document (BDD)
            </h1>
            <div style={{ display: "flex", gap: "6px" }}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "12px",
                    height: "12px",
                    background: YELLOW_400,
                    borderRadius: "2px",
                  }}
                />
              ))}
            </div>
          </div>
          <p style={{ fontSize: "13px", color: SLATE_300, margin: 0, fontFamily: FONTS.primary }}>
            Structured design across processes, controls, and solution capabilities
          </p>
        </div>
        <button
          onClick={handleDownloadBDD}
          style={{
            background: YELLOW_400,
            color: "#000",
            fontWeight: 700,
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: FONTS.primary,
          }}
        >
          ⬇ Download BDD
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {/* Left Section */}
        <div>
          {/* Executive Summary */}
          <div
            style={{
              ...CARD_STYLES,
              padding: "24px",
              marginBottom: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#000",
                marginBottom: "16px",
                fontFamily: FONTS.primary,
              }}
            >
              Executive Summary
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: SLATE_300,
                marginBottom: "20px",
                lineHeight: "1.6",
                fontFamily: FONTS.primary,
              }}
            >
              The BDD consolidates stakeholder objectives, key controls, and process design for the ETRM platform. It aligns business outcomes with system capabilities and establishes traceability to requirements captured in RTM.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {executiveSummary.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "16px",
                    background: "#fafafc",
                    borderRadius: "8px",
                    border: `1px solid ${SLATE_300}`,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#000",
                      fontWeight: 600,
                      margin: "0 0 8px 0",
                      fontFamily: FONTS.primary,
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: SLATE_300,
                      margin: 0,
                      fontFamily: FONTS.primary,
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Business Requirements */}
          <div
            style={{
              ...CARD_STYLES,
              padding: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#000",
                marginBottom: "20px",
                fontFamily: FONTS.primary,
              }}
            >
              Key Business Requirements
            </h2>
            <div style={{ maxHeight: "400px", overflowY: "auto" }}>
              {businessRequirements.map((req, i) => (
                <div key={i} style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#fff",
                        fontFamily: FONTS.primary,
                      }}
                    >
                      {req.title}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: YELLOW_400,
                        fontWeight: 600,
                        fontFamily: FONTS.primary,
                      }}
                    >
                      {req.covered}% covered
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      background: SLATE_300,
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${req.covered}%`,
                        background: YELLOW_400,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Upload RTM */}
          <div
            style={{
              ...CARD_STYLES,
              padding: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#000",
                marginBottom: "16px",
                fontFamily: FONTS.primary,
              }}
            >
              Upload RTM
            </h2>
            <label
              style={{
                display: "inline-block",
                padding: "12px 20px",
                background: BLUE_900,
                color: "#fff",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "13px",
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
            <span style={{ marginLeft: "16px", fontSize: "13px", color: SLATE_300, fontFamily: FONTS.primary }}>
              {selectedFile ? selectedFile.name : "No file chosen"}
            </span>
            <p
              style={{
                fontSize: "12px",
                color: SLATE_300,
                marginTop: "12px",
                fontFamily: FONTS.primary,
              }}
            >
              Upload the Requirement Traceability Matrix (RTM) to align the BDD with captured requirements.
            </p>
          </div>

          {/* Gaps & Risks */}
          <div
            style={{
              ...CARD_STYLES,
              padding: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#000",
                marginBottom: "16px",
                fontFamily: FONTS.primary,
              }}
            >
              Gaps & Risks
            </h2>
            <p style={{ fontSize: "13px", color: SLATE_300, margin: 0, fontFamily: FONTS.primary }}>
              No unmapped requirements detected.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
        <button
          style={{
            padding: "12px 28px",
            background: "transparent",
            color: YELLOW_400,
            border: `1.5px solid ${YELLOW_400}`,
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: FONTS.primary,
          }}
        >
          Back
        </button>
        <button
          style={{
            padding: "12px 28px",
            background: YELLOW_400,
            color: "#000",
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
