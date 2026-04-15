import { CARD_STYLES, COLORS, FONTS } from "../../styles/theme";
import { SLabel } from "../SLabel";
import { FooterBar } from "../FooterBar";
import { COMPETITORS, WHY_SHORTLIST } from "../../data/content";

interface Step3Props {
  onReset: () => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step3({ onReset, onNext, onBack }: Step3Props) {
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
          Competitor Benchmarking
        </div>
        <p style={{ fontSize: "13px", color: COLORS.textMuted }}>
          Each row compares a peer across ETRM product, notable strengths, pain
          points, expected duration, and estimated cost, aligning with the
          shortlist context.
        </p>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}
      >
        <div style={CARD_STYLES}>
          <SLabel t="Competitor Comparison Table" />
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "13px",
            }}
          >
            <thead>
              <tr style={{ background: "#f4f4f8" }}>
                {[
                  "Competitor",
                  "ETRM",
                  "Notable Strengths",
                  "Pain Points",
                  "Duration",
                  "Cost",
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "10px 14px",
                      textAlign: "left",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: COLORS.textMuted,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase" as const,
                      borderBottom: `1.5px solid ${COLORS.borderLight}`,
                      fontFamily: FONTS.primary,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPETITORS.map((c, i) => (
                <tr
                  key={c.name}
                  style={{
                    background: i % 2 === 0 ? "#fff" : "#fafafa",
                    borderBottom: "1px solid #f0f0f5",
                  }}
                >
                  <td
                    style={{
                      padding: "12px 14px",
                      fontWeight: 600,
                      color: COLORS.primary,
                      fontFamily: FONTS.primary,
                    }}
                  >
                    {c.name}
                  </td>
                  <td
                    style={{
                      padding: "12px 14px",
                      color: COLORS.textSecondary,
                      fontFamily: FONTS.primary,
                    }}
                  >
                    {c.etrm}
                  </td>
                  <td style={{ padding: "12px 14px" }}>
                    {c.strengths.map((s) => (
                      <div
                        key={s}
                        style={{
                          display: "flex",
                          gap: "5px",
                          marginBottom: "3px",
                        }}
                      >
                        <span
                          style={{
                            color: COLORS.success,
                            fontSize: "10px",
                            marginTop: "2px",
                          }}
                        >
                          ●
                        </span>
                        <span
                          style={{
                            color: "#444",
                            fontSize: "12px",
                            fontFamily: FONTS.primary,
                          }}
                        >
                          {s}
                        </span>
                      </div>
                    ))}
                  </td>
                  <td style={{ padding: "12px 14px" }}>
                    {c.pain.map((p) => (
                      <div
                        key={p}
                        style={{
                          display: "flex",
                          gap: "5px",
                          marginBottom: "3px",
                        }}
                      >
                        <span
                          style={{
                            color: COLORS.danger,
                            fontSize: "10px",
                            marginTop: "2px",
                          }}
                        >
                          ●
                        </span>
                        <span
                          style={{
                            color: "#444",
                            fontSize: "12px",
                            fontFamily: FONTS.primary,
                          }}
                        >
                          {p}
                        </span>
                      </div>
                    ))}
                  </td>
                  <td
                    style={{
                      padding: "12px 14px",
                      color: COLORS.textSecondary,
                      whiteSpace: "nowrap",
                      fontFamily: FONTS.primary,
                    }}
                  >
                    {c.duration}
                  </td>
                  <td
                    style={{
                      padding: "12px 14px",
                      fontWeight: 600,
                      color: COLORS.warning,
                      whiteSpace: "nowrap",
                      fontFamily: FONTS.primary,
                    }}
                  >
                    {c.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={CARD_STYLES}>
          <SLabel t="Why Shortlist Wins" />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {WHY_SHORTLIST.map((ws) => (
              <div
                key={ws.name}
                style={{
                  background: "#f8f8fb",
                  border: `1.5px solid ${COLORS.borderLight}`,
                  borderRadius: "10px",
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "13px",
                    color: COLORS.primary,
                    marginBottom: "8px",
                    fontFamily: FONTS.primary,
                  }}
                >
                  {ws.name}
                </div>
                {ws.points.map((p) => (
                  <div
                    key={p}
                    style={{ display: "flex", gap: "6px", marginBottom: "5px" }}
                  >
                    <span
                      style={{
                        color: COLORS.success,
                        fontSize: "10px",
                        marginTop: "2px",
                      }}
                    >
                      ●
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: COLORS.textSecondary,
                        fontFamily: FONTS.primary,
                      }}
                    >
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterBar
        onReset={onReset}
        onBack={onBack}
        onNext={onNext}
        showBack
        nextLabel="Next →"
      />
    </div>
  );
}
