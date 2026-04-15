interface ScoreBarProps {
  v: number;
  color: string;
}

export function ScoreBar({ v, color }: ScoreBarProps) {
  return (
    <div
      style={{
        height: "7px",
        background: "#f0f0f5",
        borderRadius: "4px",
        overflow: "hidden",
        margin: "4px 0 2px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${v}%`,
          background: color,
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
