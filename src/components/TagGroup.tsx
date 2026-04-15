import { INPUT_STYLES, FONTS } from "../styles/theme";
import { TagButton } from "./TagButton";

type SelectionMap = Record<string, string[]>;

interface TagGroupProps {
  options: readonly string[];
  field: string;
  selections: SelectionMap;
  toggle: (field: string, value: string) => void;
  otherKey: string;
  others: Record<string, string>;
  setOthers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export function TagGroup({
  options,
  field,
  selections,
  toggle,
  otherKey,
  others,
  setOthers,
}: TagGroupProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {options.map((opt) => (
        <TagButton
          key={opt}
          label={opt}
          selected={(selections[field] || []).includes(opt)}
          onClick={() => toggle(field, opt)}
        />
      ))}
      <input
        placeholder="Other"
        value={others[otherKey] || ""}
        onChange={(e) =>
          setOthers((p) => ({ ...p, [otherKey]: e.target.value }))
        }
        style={{
          ...INPUT_STYLES,
          width: "120px",
          fontFamily: FONTS.primary,
        }}
      />
    </div>
  );
}
