import { INPUT_STYLES, CARD_STYLES, FONTS } from "../../styles/theme";
import { SLabel } from "../SLabel";
import { TagGroup } from "../TagGroup";
import { FooterBar } from "../FooterBar";
import {
  INDUSTRY_SEGMENTS,
  TRADABLE_PRODUCTS,
  REGIONS,
  TRADE_TYPES_PHYSICAL,
  TRADE_TYPES_FINANCIAL,
  PRICING_MODELS,
  CETRM_PRODUCTS,
  ERP_SYSTEMS,
  DEPLOYMENTS,
} from "../../data/content";

type SelectionMap = Record<string, string[]>;

interface Step1Props {
  selections: SelectionMap;
  toggle: (field: string, value: string) => void;
  others: Record<string, string>;
  setOthers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  companyName: string;
  setCompanyName: (value: string) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  uf: string;
  setUf: (value: string) => void;
  ut: string;
  setUt: (value: string) => void;
  onReset: () => void;
  onNext: () => void;
}

export function Step1({
  selections,
  toggle,
  others,
  setOthers,
  companyName,
  setCompanyName,
  startDate,
  setStartDate,
  uf,
  setUf,
  ut,
  setUt,
  onReset,
  onNext,
}: Step1Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={CARD_STYLES}>
        <SLabel t="Company Name" />
        <input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="e.g., NorthShore Energy"
          style={{ ...INPUT_STYLES, width: "100%", fontFamily: FONTS.primary }}
        />
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <div style={CARD_STYLES}>
          <SLabel t="Project Start Date" />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ ...INPUT_STYLES, fontFamily: FONTS.primary }}
          />
        </div>
        <div style={CARD_STYLES}>
          <SLabel t="User Base" />
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="number"
              min="0"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="from"
              style={{
                ...INPUT_STYLES,
                width: "100px",
                fontFamily: FONTS.primary,
              }}
            />
            <span style={{ color: "#aaa" }}>to</span>
            <input
              type="number"
              min="0"
              value={ut}
              onChange={(e) => setUt(e.target.value)}
              placeholder="to"
              style={{
                ...INPUT_STYLES,
                width: "100px",
                fontFamily: FONTS.primary,
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        <div style={CARD_STYLES}>
          <SLabel t="Industry Segment" />
          <TagGroup
            options={INDUSTRY_SEGMENTS}
            field="industry"
            selections={selections}
            toggle={toggle}
            otherKey="industry"
            others={others}
            setOthers={setOthers}
          />
        </div>
        <div style={CARD_STYLES}>
          <SLabel t="Tradable Product(s)" />
          <TagGroup
            options={TRADABLE_PRODUCTS}
            field="products"
            selections={selections}
            toggle={toggle}
            otherKey="products"
            others={others}
            setOthers={setOthers}
          />
        </div>
        <div style={CARD_STYLES}>
          <SLabel t="Region" />
          <TagGroup
            options={REGIONS}
            field="region"
            selections={selections}
            toggle={toggle}
            otherKey="region"
            others={others}
            setOthers={setOthers}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        <div style={CARD_STYLES}>
          <SLabel t="Trade Type" />
          <div
            style={{
              fontSize: "11px",
              color: "#aaa",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              marginBottom: "8px",
              fontFamily: FONTS.primary,
            }}
          >
            Physical
          </div>
          <TagGroup
            options={TRADE_TYPES_PHYSICAL}
            field="trade_p"
            selections={selections}
            toggle={toggle}
            otherKey="trade_p"
            others={others}
            setOthers={setOthers}
          />
          <div
            style={{
              fontSize: "11px",
              color: "#aaa",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              margin: "14px 0 8px",
              fontFamily: FONTS.primary,
            }}
          >
            Financial
          </div>
          <TagGroup
            options={TRADE_TYPES_FINANCIAL}
            field="trade_f"
            selections={selections}
            toggle={toggle}
            otherKey="trade_f"
            others={others}
            setOthers={setOthers}
          />
        </div>
        <div style={CARD_STYLES}>
          <SLabel t="Pricing Model" />
          <TagGroup
            options={PRICING_MODELS}
            field="pricing"
            selections={selections}
            toggle={toggle}
            otherKey="pricing"
            others={others}
            setOthers={setOthers}
          />
        </div>
        <div style={CARD_STYLES}>
          <SLabel t="Current C/ETRM Product(s)" />
          <TagGroup
            options={CETRM_PRODUCTS}
            field="cetrm"
            selections={selections}
            toggle={toggle}
            otherKey="cetrm"
            others={others}
            setOthers={setOthers}
          />
        </div>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <div style={CARD_STYLES}>
          <SLabel t="ERP System" />
          <TagGroup
            options={ERP_SYSTEMS}
            field="erp"
            selections={selections}
            toggle={toggle}
            otherKey="erp"
            others={others}
            setOthers={setOthers}
          />
        </div>
        <div style={CARD_STYLES}>
          <SLabel t="Deployment" />
          <TagGroup
            options={DEPLOYMENTS}
            field="deployment"
            selections={selections}
            toggle={toggle}
            otherKey="deployment"
            others={others}
            setOthers={setOthers}
          />
        </div>
      </div>

      <FooterBar
        onReset={onReset}
        onNext={onNext}
        hint="Next: Solution analysis will score marketplace alignment based on your inputs."
        nextLabel="Next →"
      />
    </div>
  );
}
