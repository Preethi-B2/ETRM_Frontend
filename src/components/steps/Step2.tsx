import { CARD_STYLES, COLORS, FONTS, BAR_COLORS } from "../../styles/theme";
import { SLabel } from "../SLabel";
import { ScoreBar } from "../ScoreBar";
import { FooterBar } from "../FooterBar";
import { SOLUTIONS } from "../../data/content";

interface Step2Props {
  onReset: () => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step2({ onReset, onNext, onBack }: Step2Props) {
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
          Solution Analysis
        </div>
        <p style={{ fontSize: "13px", color: COLORS.textMuted }}>
          We compare the top ETRM systems against your needs and show simple,
          easy-to-read scores.
        </p>
      </div>

      <div style={CARD_STYLES}>
        <SLabel t="Comparison at a glance" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "18px",
          }}
        >
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.name}
              style={{
                border: `1.5px solid ${COLORS.borderLight}`,
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: COLORS.primary,
                  padding: "14px 18px",
                }}
              >
                <div
                  style={{
                    color: COLORS.accent,
                    fontWeight: 700,
                    fontSize: "15px",
                    fontFamily: FONTS.serif,
                  }}
                >
                  {sol.name}
                </div>
              </div>

              <div
                style={{
                  padding: "16px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {sol.scores.map((sc, i) => (
                  <div key={sc.label}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: COLORS.textSecondary,
                          fontWeight: 500,
                          fontFamily: FONTS.primary,
                        }}
                      >
                        {sc.label}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: COLORS.primary,
                          fontFamily: FONTS.primary,
                        }}
                      >
                        {sc.value}%
                      </span>
                    </div>
                    <ScoreBar v={sc.value} color={BAR_COLORS[i]} />
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#999",
                        marginTop: "2px",
                        fontFamily: FONTS.primary,
                      }}
                    >
                      {sc.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: "#f8f8fb",
                  padding: "16px 18px",
                  borderTop: `1.5px solid ${COLORS.borderLight}`,
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: COLORS.textSecondary,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase" as const,
                    marginBottom: "10px",
                    fontFamily: FONTS.primary,
                  }}
                >
                  Key details
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: COLORS.success,
                        marginBottom: "6px",
                        fontFamily: FONTS.primary,
                      }}
                    >
                      Pros
                    </div>
                    {sol.pros.map((p) => (
                      <div
                        key={p}
                        style={{
                          display: "flex",
                          gap: "5px",
                          marginBottom: "4px",
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
                            fontSize: "11px",
                            color: "#444",
                            fontFamily: FONTS.primary,
                          }}
                        >
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: COLORS.danger,
                        marginBottom: "6px",
                        fontFamily: FONTS.primary,
                      }}
                    >
                      Cons
                    </div>
                    {sol.cons.map((c) => (
                      <div
                        key={c}
                        style={{
                          display: "flex",
                          gap: "5px",
                          marginBottom: "4px",
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
                            fontSize: "11px",
                            color: "#444",
                            fontFamily: FONTS.primary,
                          }}
                        >
                          {c}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
