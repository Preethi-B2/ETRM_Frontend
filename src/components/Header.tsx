import { COLORS, FONTS } from "../styles/theme";
import { STEPS, STEP_SUBS } from "../data/content";

interface HeaderProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function Header({ currentStep, onStepClick }: HeaderProps) {
  if (currentStep === -1) {
    return null;
  }

  const pageTitle = ["Selection Agent", "Solution Analysis", "Implementation", "Summary"][currentStep] || "ETRM Selection Agent";
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "32px",
      }}
    >
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
              fontSize: "24px",
              color: COLORS.primary,
              fontWeight: 700,
            }}
          >
            {pageTitle}
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
        <p style={{ fontSize: "13px", color: COLORS.textMuted }}>
          {STEPS[currentStep]} &nbsp;|&nbsp; {STEP_SUBS[currentStep]}
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {STEPS.map((s, i) => (
          <div
            key={s}
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div
                onClick={() => i <= currentStep && onStepClick(i)}
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background:
                    i === currentStep
                      ? COLORS.primary
                      : i < currentStep
                        ? COLORS.success
                        : COLORS.borderLight,
                  color: i <= currentStep ? "#fff" : COLORS.textMuted,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  cursor: i <= currentStep ? "pointer" : "default",
                  transition: "all 0.2s",
                }}
              >
                {i < currentStep ? "✓" : i + 1}
              </div>
              <div
                style={{
                  fontSize: "9px",
                  color: i === currentStep ? COLORS.primary : "#bbb",
                  fontWeight: i === currentStep ? 700 : 400,
                  textAlign: "center" as const,
                  maxWidth: "65px",
                  lineHeight: 1.3,
                  fontFamily: FONTS.primary,
                }}
              >
                {s}
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  background:
                    i < currentStep ? COLORS.success : COLORS.borderLight,
                  marginBottom: "18px",
                  transition: "background 0.3s",
                }}
              />
            )}
          </div>
        ))}
        <div
          style={{
            marginLeft: "12px",
            fontSize: "12px",
            color: COLORS.textMuted,
            fontWeight: 500,
            fontFamily: FONTS.primary,
          }}
        >
          Step {currentStep + 1} of 4
        </div>
      </div>
    </div>
  );
}
