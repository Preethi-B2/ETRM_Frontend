import { LABEL_STYLES } from "../styles/theme";

export function SLabel({ t }: { t: string }) {
  return <div style={LABEL_STYLES}>{t}</div>;
}
