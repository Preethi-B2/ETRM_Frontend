import { COLORS, FONTS, CARD_STYLES } from "../styles/theme";

export function RTMAgent() {
  const traceabilityData = [
    {
      source: "Meeting Notes",
      date: "2026-01-10",
      fileName: "pain_points.md",
      dealCapture: false,
      pricing: false,
      credit: false,
      risk: false,
      scheduling: false,
      inventory: false,
    },
    {
      source: "Meeting Notes",
      date: "2026-01-12",
      fileName: "meeting_01.txt",
      dealCapture: false,
      pricing: true,
      credit: true,
      risk: false,
      scheduling: false,
      inventory: false,
    },
    {
      source: "Requirements Document",
      date: "2026-01-14",
      fileName: "scheduler_persona.pdf",
      dealCapture: false,
      pricing: false,
      credit: false,
      risk: true,
      scheduling: true,
      inventory: false,
    },
    {
      source: "Requirements Document",
      date: "2026-01-15",
      fileName: "cloud_strategy.docx",
      dealCapture: false,
      pricing: false,
      credit: false,
      risk: false,
      scheduling: false,
      inventory: false,
    },
    {
      source: "Meeting Recording",
      date: "2026-01-16",
      fileName: "erp_integration.mp3",
      dealCapture: false,
      pricing: false,
      credit: false,
      risk: false,
      scheduling: false,
      inventory: false,
    },
  ];

  const coverageData = [
    { feature: "Deal Capture", count: 0 },
    { feature: "Pricing", count: 0 },
    { feature: "Credit", count: 1 },
    { feature: "Risk", count: 1 },
    { feature: "Scheduling", count: 1 },
    { feature: "Inventory", count: 1 },
    { feature: "Reporting", count: 2 },
    { feature: "Security Controls", count: 0 },
    { feature: "Accounting", count: 1 },
    { feature: "Tax", count: 1 },
    { feature: "Integration & Data", count: 3 },
    { feature: "Deployment & Scalability", count: 1 },
  ];

  const maxCount = Math.max(...coverageData.map((item) => item.count));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: "28px",
              color: "#000",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Requirement Traceability Matrix
          </h1>
          <div style={{ display: "flex", gap: "6px" }}>
            {[...Array(4)].map((_, i) => (
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
          ⬇ Download RTM
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {/* Traceability Matrix */}
        <div style={{ ...CARD_STYLES, padding: "24px" }}>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: COLORS.primary,
              marginBottom: "20px",
              fontFamily: FONTS.primary,
            }}
          >
            Traceability Matrix
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "13px",
                fontFamily: FONTS.primary,
              }}
            >
              <thead>
                <tr style={{ borderBottom: `1.5px solid ${COLORS.borderLight}` }}>
                  <th
                    style={{
                      padding: "12px 8px",
                      textAlign: "left",
                      fontWeight: 600,
                      color: COLORS.primary,
                    }}
                  >
                    Source
                  </th>
                  <th
                    style={{
                      padding: "12px 8px",
                      textAlign: "left",
                      fontWeight: 600,
                      color: COLORS.primary,
                    }}
                  >
                    Date
                  </th>
                  <th
                    style={{
                      padding: "12px 8px",
                      textAlign: "left",
                      fontWeight: 600,
                      color: COLORS.primary,
                    }}
                  >
                    File Name
                  </th>
                  <th
                    style={{
                      padding: "12px 8px",
                      textAlign: "center",
                      fontWeight: 600,
                      color: COLORS.primary,
                      fontSize: "12px",
                    }}
                  >
                    Deal
                  </th>
                  <th
                    style={{
                      padding: "12px 8px",
                      textAlign: "center",
                      fontWeight: 600,
                      color: COLORS.primary,
                      fontSize: "12px",
                    }}
                  >
                    Price
                  </th>
                  <th
                    style={{
                      padding: "12px 8px",
                      textAlign: "center",
                      fontWeight: 600,
                      color: COLORS.primary,
                      fontSize: "12px",
                    }}
                  >
                    Risk
                  </th>
                  <th
                    style={{
                      padding: "12px 8px",
                      textAlign: "center",
                      fontWeight: 600,
                      color: COLORS.primary,
                      fontSize: "12px",
                    }}
                  >
                    Sched
                  </th>
                </tr>
              </thead>
              <tbody>
                {traceabilityData.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: `1px solid ${COLORS.borderLight}`,
                      background: idx % 2 === 0 ? "#fff" : "#fafafc",
                    }}
                  >
                    <td style={{ padding: "12px 8px", color: COLORS.text }}>
                      {row.source}
                    </td>
                    <td style={{ padding: "12px 8px", color: COLORS.text }}>
                      {row.date}
                    </td>
                    <td style={{ padding: "12px 8px", color: COLORS.text }}>
                      {row.fileName}
                    </td>
                    <td style={{ padding: "12px 8px", textAlign: "center" }}>
                      {row.dealCapture && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            border: `2px solid ${COLORS.accent}`,
                            color: COLORS.accent,
                            fontSize: "14px",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "12px 8px", textAlign: "center" }}>
                      {row.pricing && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            border: `2px solid ${COLORS.accent}`,
                            color: COLORS.accent,
                            fontSize: "14px",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "12px 8px", textAlign: "center" }}>
                      {row.risk && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            border: `2px solid ${COLORS.accent}`,
                            color: COLORS.accent,
                            fontSize: "14px",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "12px 8px", textAlign: "center" }}>
                      {row.scheduling && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            border: `2px solid ${COLORS.accent}`,
                            color: COLORS.accent,
                            fontSize: "14px",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <button
              style={{
                width: "20px",
                height: "20px",
                padding: "0",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ◀
            </button>
            <div
              style={{
                flex: 1,
                height: "6px",
                background: COLORS.borderLight,
                borderRadius: "3px",
              }}
            />
            <button
              style={{
                width: "20px",
                height: "20px",
                padding: "0",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ▶
            </button>
          </div>
        </div>

        {/* Coverage Summary */}
        <div style={{ ...CARD_STYLES, padding: "24px" }}>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: COLORS.primary,
              marginBottom: "20px",
              fontFamily: FONTS.primary,
            }}
          >
            Coverage Summary
          </h2>

          {/* Summary Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            {[
              { label: "Total Requirements", value: "5" },
              { label: "Mapped", value: "5" },
              { label: "Unmapped", value: "0" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "16px",
                  background: "#fafafc",
                  borderRadius: "8px",
                  border: `1px solid ${COLORS.borderLight}`,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    color: COLORS.textMuted,
                    margin: "0 0 8px 0",
                    fontFamily: FONTS.primary,
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: COLORS.primary,
                    margin: 0,
                    fontFamily: FONTS.primary,
                  }}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Coverage */}
          <h3
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: COLORS.primary,
              marginBottom: "16px",
              fontFamily: FONTS.primary,
            }}
          >
            Feature Coverage
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {coverageData.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    color: COLORS.text,
                    minWidth: "140px",
                    fontFamily: FONTS.primary,
                  }}
                >
                  {item.feature}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "8px",
                    background: COLORS.borderLight,
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(item.count / maxCount) * 100}%`,
                      background: COLORS.accent,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    color: COLORS.primary,
                    fontWeight: 600,
                    minWidth: "24px",
                    textAlign: "right",
                    fontFamily: FONTS.primary,
                  }}
                >
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
