import { useState } from "react"; 

 

type SelectionMap = Record<string, string[]>; 

 

const STEPS = ["Requirements Gathering", "Solution Analysis", "Competitor Benchmarking", "Recommendation Report"]; 

const STEP_SUBS = [ 

  "Capture company requirements, processes, and risk needs", 

  "Score shortlist alignment and review rationale", 

  "Benchmark shortlist against market peers and analyze competitor landscape", 

  "Generate report with recommendations and rationale", 

]; 

 

const INDUSTRY_SEGMENTS = ["Upstream", "Midstream", "Downstream", "Fully Integrated", "Independent Operator", "NOC"]; 

const TRADABLE_PRODUCTS = ["Crude Oil", "Refined Products", "Natural Gas", "LNG", "LPG", "NGL", "Specialty", "Petrochemicals", "Renewables", "Power", "Carbon Credits"]; 

const REGIONS = ["North America", "South America", "Europe", "Middle East", "Africa", "Asia Pacific"]; 

const TRADE_TYPES_PHYSICAL = ["Spot", "Term", "Evergreen", "Term Evergreen"]; 

const TRADE_TYPES_FINANCIAL = ["Futures", "Options", "Swaps", "Swaptions"]; 

const PRICING_MODELS = ["Formula (Index) Pricing", "Formula (Index) Complex Pricing", "Fixed Pricing", "Prepayment Pricing", "Provisional Pricing"]; 

const CETRM_PRODUCTS = ["Endur", "RightAngle", "Allegro", "Aspect", "TriplePoint", "SAP Commodity Management", "Eka", "Enuit", "Home Grown In-House Solution"]; 

const ERP_SYSTEMS = ["SAP S/4HANA", "ORACLE ERP Cloud/ ORACLE NetSuite", "Microsoft Dynamics 365", "Infor Cloud Suite", "IFS Cloud", "Sage X3/Sage ERP", "Odoo ERP"]; 

const DEPLOYMENTS = ["Cloud", "On Prem", "Hybrid"]; 

 

const SOLUTIONS = [ 

  { 

    name: "RightAngle", 

    scores: [ 

      { label: "Tradable Products scale", value: 75, desc: "Strong for refined products and liquids; covers core physical commodities" }, 

      { label: "Instruments scale", value: 60, desc: "Optimized for physical deals, nominations, and logistics; limited complex derivatives" }, 

      { label: "ERP Integration scale", value: 88, desc: "Proven SAP and terminal integrations with REST APIs streamline settlement and invoicing" }, 

      { label: "Size and Scalability scale", value: 72, desc: "Suited for marketers and downstream operations; scales to mid-large footprints" }, 

    ], 

    pros: ["Strong nominations and physical movement scheduling", "Deep logistics, terminal and pipeline integrations", "Robust tax, fees, and regulatory handling"], 

    cons: ["Limited advanced market risk analytics and quantitative modeling", "Less suited for complex derivatives and financial instruments", "Enterprise-wide risk reporting often requires customization"], 

  }, 

  { 

    name: "Endur", 

    scores: [ 

      { label: "Tradable Products scale", value: 92, desc: "Broad multi-commodity coverage across power, gas, oil, and metals" }, 

      { label: "Instruments scale", value: 95, desc: "Comprehensive financial and physical instruments with advanced risk analytics" }, 

      { label: "ERP Integration scale", value: 90, desc: "Enterprise connectors (SAP, Oracle, REST) and mature integration patterns" }, 

      { label: "Size and Scalability scale", value: 93, desc: "Enterprise-grade architecture scaling to global portfolios and complex operations" }, 

    ], 

    pros: ["Comprehensive front-to-back coverage across commodities", "Advanced risk analytics (VaR, stress testing, scenario analysis)", "Real-time P&L, curve management, and hedge accounting"], 

    cons: ["Longer implementation timelines and higher cost of ownership", "Setup complexity and steep learning curve", "Heavy footprint requiring strong internal IT support"], 

  }, 

  { 

    name: "Allegro", 

    scores: [ 

      { label: "Tradable Products scale", value: 78, desc: "Good coverage across power, gas, and liquids with cloud-first flexibility" }, 

      { label: "Instruments scale", value: 70, desc: "Solid physical and basic financial instruments; less depth in complex derivatives" }, 

      { label: "ERP Integration scale", value: 82, desc: "Prebuilt ERP connectors and REST APIs enable rapid integration" }, 

      { label: "Size and Scalability scale", value: 80, desc: "Modern SaaS deployment scaling well for mid-tier environments" }, 

    ], 

    pros: ["Cloud-first with rapid time-to-value", "Usable UI and configurable workflows", "Strong physical logistics and nominations for liquids and gas"], 

    cons: ["Limited advanced risk analytics depth compared to enterprise platforms", "Gaps in complex derivatives and quantitative modeling", "Compliance and hedge accounting capabilities may be basic"], 

  }, 

]; 

 

const BAR_COLORS = ["#f5c842", "#4ade80", "#818cf8", "#fb923c"]; 

 

const COMPETITORS = [ 

  { name: "Chevron Corporation", etrm: "RightAngle", strengths: ["Global coverage", "Strong risk practice"], pain: ["Setup complexity"], duration: "9-12 months", cost: "$500k–$900k" }, 

  { name: "Shell PLC", etrm: "Endur", strengths: ["Global coverage", "Fast trade operations", "Physical scheduling strength"], pain: ["Limited advanced analytics"], duration: "6-9 months", cost: "$300k–$500k" }, 

  { name: "BP", etrm: "Endur, RightAngle", strengths: ["Global coverage", "Strong risk practice"], pain: ["Learning curve", "Integration effort"], duration: "8-10 months", cost: "$400k–$700k" }, 

]; 

 

const WHY_SHORTLIST = [ 

  { name: "Allegro", points: ["Beats Endur on ease-of-use and time-to-value for mid-tier teams", "Comparable to peer multi-commodity coverage with faster cloud-first deployment", "Outperforms ops focus of RightAngle with broader front-office and credit modules"] }, 

  { name: "Endur", points: ["Beats Allegro on risk analytics depth and quantitative reporting", "Comparable to peer global coverage with configurable workflows easing enterprise rollout", "Outperforms ops focus of RightAngle with comprehensive front-to-back modules"] }, 

  { name: "RightAngle", points: ["Beats Allegro on physical logistics depth (nominations, movements, ticketing)", "Comparable to peer downstream coverage with easier deployment via SAP/terminal integrations", "Outperforms pure ops-focused peers with broader tax, fees, and settlement features"] }, 

]; 

 

const REPORT = [ 

  { 

    name: "RightAngle", vendor: "ION", 

    about: "RightAngle is a downstream supply chain and refined products trading solution focused on physical operations for liquids and fuels. It supports deal capture, inventory, logistics, tax, and settlement with deep terminal and pipeline integrations.", 

    rationale: ["Best fit for refined products marketers and downstream operations with high logistics complexity", "Strong nominations, movement scheduling, and ticketing capabilities reduce operational risk", "Proven integrations to SAP and terminal systems streamline settlement and invoicing", "Robust tax, fees, and regulatory handling for North American and global markets"], 

    features: ["Deal capture for refined products and liquids", "Rack pricing, fees, and tax calculation", "Nominations and pipeline/terminal scheduling", "Inventory and tank management", "Ticketing and bill of lading management", "Credit exposure, limits, and controls", "Contract management and settlement", "ERP and terminal system integrations (SAP, REST)", "Reporting and audit trails"], 

  }, 

  { 

    name: "Endur", vendor: "ION", 

    about: "Endur is an enterprise-grade front-to-back ETRM covering power, gas, oil, and metals, with comprehensive risk analytics, trade lifecycle, and scheduling across global markets.", 

    rationale: ["Suitable for integrated energy companies and utilities needing advanced risk depth", "Comprehensive module coverage from Front, Risk, Credit, to Back Office", "Market data, curve management, and real-time P&L support complex portfolios", "Deployment and integration options align with large-scale IT environments"], 

    features: ["Multi-commodity trade capture and lifecycle management", "Risk analytics including VaR, stress testing, and scenario analysis", "Real-time P&L and mark-to-market", "Power and gas scheduling with nominations", "Curve and market data management", "Credit risk and limit reporting", "Hedge accounting and regulatory reporting", "Configurable workflows and deal templates", "Native connectors and APIs (SAP, Oracle, REST)"], 

  }, 

  { 

    name: "Allegro", vendor: "ION", 

    about: "Allegro is a modern, cloud-first CTRM/ETRM designed for fast implementation, usability, and flexibility across power, gas, liquids, and other commodities.", 

    rationale: ["Ideal for mid-tier traders seeking rapid time-to-value and ease of use", "Flexible architecture and configurable workflows support evolving needs", "Strong logistics and operations features for physical commodities", "Good integration patterns and cloud deployment minimize IT overhead"], 

    features: ["Fast trade entry and portfolio management", "Configurable workflows and extensibility", "Risk exposure tracking and basic analytics", "Logistics and nominations for liquid and gas", "Invoice and settlement processing", "Credit management and controls", "Prebuilt ERP connectors and REST APIs", "Cloud deployment with dashboards and reporting"], 

  }, 

]; 

 

// ── shared helpers ───────────────────────────────────────────────────────── 

 

const inp: React.CSSProperties = { padding: "11px 16px", border: "1.5px solid #d0d0d8", borderRadius: "9px", fontSize: "14px", color: "#333", background: "#fafafa", fontFamily: "'DM Sans', sans-serif" }; 

const cardStyle: React.CSSProperties = { background: "#fff", border: "1.5px solid #e8e8ef", borderRadius: "14px", padding: "22px 24px", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }; 

function SLabel({ t }: { t: string }) { return <div style={{ fontSize: "11px", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>{t}</div>; } 

 

function TagButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) { 

  return <button onClick={onClick} style={{ padding: "6px 14px", borderRadius: "999px", border: selected ? "2px solid #1a1a2e" : "1.5px solid #d0d0d8", background: selected ? "#1a1a2e" : "#fff", color: selected ? "#fff" : "#333", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", fontWeight: selected ? 600 : 400, cursor: "pointer", transition: "all 0.18s", boxShadow: selected ? "0 2px 8px rgba(26,26,46,0.13)" : "none" }}>{label}</button>; 

} 

 

function TagGroup({ options, field, selections, toggle, otherKey, others, setOthers }: { options: string[]; field: string; selections: SelectionMap; toggle: (f: string, v: string) => void; otherKey: string; others: Record<string, string>; setOthers: React.Dispatch<React.SetStateAction<Record<string, string>>> }) { 

  return <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}> 

    {options.map(opt => <TagButton key={opt} label={opt} selected={(selections[field] || []).includes(opt)} onClick={() => toggle(field, opt)} />)} 

    <input placeholder="Other" value={others[otherKey] || ""} onChange={e => setOthers(p => ({ ...p, [otherKey]: e.target.value }))} style={{ padding: "6px 14px", borderRadius: "999px", border: "1.5px solid #d0d0d8", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", color: "#333", outline: "none", width: "120px", background: "#fafafa" }} /> 

  </div>; 

} 

 

function ScoreBar({ v, color }: { v: number; color: string }) { 

  return <div style={{ height: "7px", background: "#f0f0f5", borderRadius: "4px", overflow: "hidden", margin: "4px 0 2px" }}><div style={{ height: "100%", width: `${v}%`, background: color, borderRadius: "4px" }} /></div>; 

} 

 

function FooterBar({ onReset, onBack, onNext, hint, showBack, nextLabel }: { onReset: () => void; onBack?: () => void; onNext?: () => void; hint?: string; showBack?: boolean; nextLabel?: string }) { 

  const btn = (label: string, onClick: () => void, primary?: boolean) => <button onClick={onClick} style={{ padding: "10px 24px", borderRadius: "9px", border: primary ? "none" : "1.5px solid #d0d0d8", background: primary ? "#1a1a2e" : "#fff", color: primary ? "#fff" : "#555", fontSize: "14px", fontWeight: primary ? 600 : 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", boxShadow: primary ? "0 3px 12px rgba(26,26,46,0.18)" : "none" }}>{label}</button>; 

  return <div style={{ ...cardStyle, display: "flex", alignItems: "center", justifyContent: "space-between" }}> 

    {btn("Reset", onReset)} 

    {hint && <p style={{ fontSize: "13px", color: "#888" }}>{hint}</p>} 

    <div style={{ display: "flex", gap: "10px" }}> 

      {showBack && onBack && btn("← Back", onBack)} 

      {onNext && btn(nextLabel || "Next →", onNext, true)} 

    </div> 

  </div>; 

} 

 

// ── Step 1 ───────────────────────────────────────────────────────────────── 

 

function Step1({ selections, toggle, others, setOthers, companyName, setCompanyName, startDate, setStartDate, uf, setUf, ut, setUt, onReset, onNext }: any) { 

  return <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}> 

    <div style={cardStyle}><SLabel t="Company Name" /><input value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="e.g., NorthShore Energy" style={{ ...inp, width: "100%" }} /></div> 

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}> 

      <div style={cardStyle}><SLabel t="Project Start Date" /><input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} style={inp} /></div> 

      <div style={cardStyle}><SLabel t="User Base" /><div style={{ display: "flex", alignItems: "center", gap: "10px" }}><input value={uf} onChange={e => setUf(e.target.value)} placeholder="from" style={{ ...inp, width: "100px" }} /><span style={{ color: "#aaa" }}>to</span><input value={ut} onChange={e => setUt(e.target.value)} placeholder="to" style={{ ...inp, width: "100px" }} /></div></div> 

    </div> 

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}> 

      <div style={cardStyle}><SLabel t="Industry Segment" /><TagGroup options={INDUSTRY_SEGMENTS} field="industry" selections={selections} toggle={toggle} otherKey="industry" others={others} setOthers={setOthers} /></div> 

      <div style={cardStyle}><SLabel t="Tradable Product(s)" /><TagGroup options={TRADABLE_PRODUCTS} field="products" selections={selections} toggle={toggle} otherKey="products" others={others} setOthers={setOthers} /></div> 

      <div style={cardStyle}><SLabel t="Region" /><TagGroup options={REGIONS} field="region" selections={selections} toggle={toggle} otherKey="region" others={others} setOthers={setOthers} /></div> 

    </div> 

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}> 

      <div style={cardStyle}><SLabel t="Trade Type" /><div style={{ fontSize: "11px", color: "#aaa", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "8px" }}>Physical</div><TagGroup options={TRADE_TYPES_PHYSICAL} field="trade_p" selections={selections} toggle={toggle} otherKey="trade_p" others={others} setOthers={setOthers} /><div style={{ fontSize: "11px", color: "#aaa", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, margin: "14px 0 8px" }}>Financial</div><TagGroup options={TRADE_TYPES_FINANCIAL} field="trade_f" selections={selections} toggle={toggle} otherKey="trade_f" others={others} setOthers={setOthers} /></div> 

      <div style={cardStyle}><SLabel t="Pricing Model" /><TagGroup options={PRICING_MODELS} field="pricing" selections={selections} toggle={toggle} otherKey="pricing" others={others} setOthers={setOthers} /></div> 

      <div style={cardStyle}><SLabel t="Current C/ETRM Product(s)" /><TagGroup options={CETRM_PRODUCTS} field="cetrm" selections={selections} toggle={toggle} otherKey="cetrm" others={others} setOthers={setOthers} /></div> 

    </div> 

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}> 

      <div style={cardStyle}><SLabel t="ERP System" /><TagGroup options={ERP_SYSTEMS} field="erp" selections={selections} toggle={toggle} otherKey="erp" others={others} setOthers={setOthers} /></div> 

      <div style={cardStyle}><SLabel t="Deployment" /><TagGroup options={DEPLOYMENTS} field="deployment" selections={selections} toggle={toggle} otherKey="deployment" others={others} setOthers={setOthers} /></div> 

    </div> 

    <FooterBar onReset={onReset} onNext={onNext} hint="Next: Solution analysis will score marketplace alignment based on your inputs." nextLabel="Next →" /> 

  </div>; 

} 

 

// ── Step 2 ───────────────────────────────────────────────────────────────── 

 

function Step2({ onReset, onNext, onBack }: any) { 

  return <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}> 

    <div style={cardStyle}> 

      <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px", fontFamily: "'Playfair Display', serif" }}>Solution Analysis</div> 

      <p style={{ fontSize: "13px", color: "#888" }}>We compare the top ETRM systems against your needs and show simple, easy-to-read scores.</p> 

    </div> 

    <div style={cardStyle}> 

      <SLabel t="Comparison at a glance" /> 

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "18px" }}> 

        {SOLUTIONS.map(sol => ( 

          <div key={sol.name} style={{ border: "1.5px solid #e8e8ef", borderRadius: "12px", overflow: "hidden" }}> 

            <div style={{ background: "#1a1a2e", padding: "14px 18px" }}> 

              <div style={{ color: "#f5c842", fontWeight: 700, fontSize: "15px", fontFamily: "'Playfair Display', serif" }}>{sol.name}</div> 

            </div> 

            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "12px" }}> 

              {sol.scores.map((sc, i) => <div key={sc.label}> 

                <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: "12px", color: "#555", fontWeight: 500 }}>{sc.label}</span><span style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a2e" }}>{sc.value}%</span></div> 

                <ScoreBar v={sc.value} color={BAR_COLORS[i]} /> 

                <div style={{ fontSize: "11px", color: "#999", marginTop: "2px" }}>{sc.desc}</div> 

              </div>)} 

            </div> 

            <div style={{ background: "#f8f8fb", padding: "16px 18px", borderTop: "1.5px solid #e8e8ef" }}> 

              <div style={{ fontSize: "11px", fontWeight: 700, color: "#555", letterSpacing: "0.07em", textTransform: "uppercase" as const, marginBottom: "10px" }}>Key details</div> 

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}> 

                <div> 

                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#22c55e", marginBottom: "6px" }}>Pros</div> 

                  {sol.pros.map(p => <div key={p} style={{ display: "flex", gap: "5px", marginBottom: "4px" }}><span style={{ color: "#22c55e", fontSize: "10px", marginTop: "2px" }}>●</span><span style={{ fontSize: "11px", color: "#444" }}>{p}</span></div>)} 

                </div> 

                <div> 

                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#f87171", marginBottom: "6px" }}>Cons</div> 

                  {sol.cons.map(c => <div key={c} style={{ display: "flex", gap: "5px", marginBottom: "4px" }}><span style={{ color: "#f87171", fontSize: "10px", marginTop: "2px" }}>●</span><span style={{ fontSize: "11px", color: "#444" }}>{c}</span></div>)} 

                </div> 

              </div> 

            </div> 

          </div> 

        ))} 

      </div> 

    </div> 

    <FooterBar onReset={onReset} onBack={onBack} onNext={onNext} showBack nextLabel="Next →" /> 

  </div>; 

} 

 

// ── Step 3 ───────────────────────────────────────────────────────────────── 

 

function Step3({ onReset, onNext, onBack }: any) { 

  return <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}> 

    <div style={cardStyle}> 

      <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px", fontFamily: "'Playfair Display', serif" }}>Competitor Benchmarking</div> 

      <p style={{ fontSize: "13px", color: "#888" }}>Each row compares a peer across ETRM product, notable strengths, pain points, expected duration, and estimated cost, aligning with the shortlist context.</p> 

    </div> 

    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}> 

      <div style={cardStyle}> 

        <SLabel t="Competitor Comparison Table" /> 

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}> 

          <thead><tr style={{ background: "#f4f4f8" }}> 

            {["Competitor", "ETRM", "Notable Strengths", "Pain Points", "Duration", "Cost"].map(h => <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: "11px", fontWeight: 700, color: "#888", letterSpacing: "0.07em", textTransform: "uppercase" as const, borderBottom: "1.5px solid #e8e8ef" }}>{h}</th>)} 

          </tr></thead> 

          <tbody> 

            {COMPETITORS.map((c, i) => <tr key={c.name} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: "1px solid #f0f0f5" }}> 

              <td style={{ padding: "12px 14px", fontWeight: 600, color: "#1a1a2e" }}>{c.name}</td> 

              <td style={{ padding: "12px 14px", color: "#555" }}>{c.etrm}</td> 

              <td style={{ padding: "12px 14px" }}>{c.strengths.map(s => <div key={s} style={{ display: "flex", gap: "5px", marginBottom: "3px" }}><span style={{ color: "#22c55e", fontSize: "10px", marginTop: "2px" }}>●</span><span style={{ color: "#444", fontSize: "12px" }}>{s}</span></div>)}</td> 

              <td style={{ padding: "12px 14px" }}>{c.pain.map(p => <div key={p} style={{ display: "flex", gap: "5px", marginBottom: "3px" }}><span style={{ color: "#f87171", fontSize: "10px", marginTop: "2px" }}>●</span><span style={{ color: "#444", fontSize: "12px" }}>{p}</span></div>)}</td> 

              <td style={{ padding: "12px 14px", color: "#555", whiteSpace: "nowrap" }}>{c.duration}</td> 

              <td style={{ padding: "12px 14px", fontWeight: 600, color: "#f5a623", whiteSpace: "nowrap" }}>{c.cost}</td> 

            </tr>)} 

          </tbody> 

        </table> 

      </div> 

      <div style={cardStyle}> 

        <SLabel t="Why Shortlist Wins" /> 

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}> 

          {WHY_SHORTLIST.map(ws => <div key={ws.name} style={{ background: "#f8f8fb", border: "1.5px solid #e8e8ef", borderRadius: "10px", padding: "14px 16px" }}> 

            <div style={{ fontWeight: 700, fontSize: "13px", color: "#1a1a2e", marginBottom: "8px" }}>{ws.name}</div> 

            {ws.points.map(p => <div key={p} style={{ display: "flex", gap: "6px", marginBottom: "5px" }}><span style={{ color: "#22c55e", fontSize: "10px", marginTop: "2px" }}>●</span><span style={{ fontSize: "12px", color: "#555" }}>{p}</span></div>)} 

          </div>)} 

        </div> 

      </div> 

    </div> 

    <FooterBar onReset={onReset} onBack={onBack} onNext={onNext} showBack nextLabel="Next →" /> 

  </div>; 

} 

 

// ── Step 4 ───────────────────────────────────────────────────────────────── 

 

function Step4({ onReset, onBack }: any) { 

  const [downloaded, setDownloaded] = useState(false); 

  return <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}> 

    <div style={cardStyle}> 

      <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a2e", marginBottom: "6px", fontFamily: "'Playfair Display', serif" }}>Recommendation Report</div> 

      <p style={{ fontSize: "13px", color: "#888" }}>Executive-ready summary tailored to your requirements.</p> 

    </div> 

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}> 

      {REPORT.map(r => <div key={r.name} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}> 

        <div style={{ padding: "16px 20px", borderBottom: "1.5px solid #e8e8ef" }}> 

          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "16px", color: "#1a1a2e" }}>{r.name}</span> 

          <span style={{ fontSize: "12px", color: "#888", marginLeft: "8px" }}>(Vendor: {r.vendor})</span> 

        </div> 

        <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "16px" }}> 

          {[{ label: "About", content: <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.6 }}>{r.about}</p> }, { label: "Rationale", content: r.rationale.map(i => <div key={i} style={{ display: "flex", gap: "6px", marginBottom: "5px" }}><span style={{ color: "#1a1a2e", fontSize: "10px", marginTop: "3px" }}>•</span><span style={{ fontSize: "12px", color: "#444", lineHeight: 1.5 }}>{i}</span></div>) }, { label: "Key Features", content: r.features.map(f => <div key={f} style={{ display: "flex", gap: "6px", marginBottom: "4px" }}><span style={{ color: "#1a1a2e", fontSize: "10px", marginTop: "3px" }}>•</span><span style={{ fontSize: "12px", color: "#444" }}>{f}</span></div>) }].map(sec => <div key={sec.label}><div style={{ fontSize: "11px", fontWeight: 700, color: "#f5a623", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "8px" }}>{sec.label}</div>{sec.content}</div>)} 

        </div> 

      </div>)} 

    </div> 

    <div style={{ ...cardStyle, display: "flex", alignItems: "center", justifyContent: "space-between" }}> 

      <button onClick={onReset} style={{ padding: "10px 24px", borderRadius: "9px", border: "1.5px solid #d0d0d8", background: "#fff", color: "#555", fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Reset</button> 

      <div style={{ display: "flex", gap: "10px" }}> 

        <button onClick={onBack} style={{ padding: "10px 24px", borderRadius: "9px", border: "1.5px solid #d0d0d8", background: "#fff", color: "#555", fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>← Back</button> 

        <button onClick={() => setDownloaded(true)} style={{ padding: "10px 28px", borderRadius: "9px", border: "none", background: "#1a1a2e", color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 3px 12px rgba(26,26,46,0.18)" }}>Download PowerPoint (.pptx)</button> 

      </div> 

    </div> 

    {downloaded && <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#f0fdf4", border: "1.5px solid #86efac", borderRadius: "10px", padding: "14px 20px" }}> 

      <span style={{ color: "#22c55e", fontSize: "18px" }}>✓</span> 

      <span style={{ fontSize: "13px", fontWeight: 600, color: "#15803d" }}>PowerPoint has been downloaded successfully</span> 

    </div>} 

  </div>; 

} 

 

// ── Root ─────────────────────────────────────────────────────────────────── 

 

export default function App() { 

  const [step, setStep] = useState(0); 

  const [companyName, setCompanyName] = useState(""); 

  const [startDate, setStartDate] = useState(""); 

  const [uf, setUf] = useState(""); 

  const [ut, setUt] = useState(""); 

  const [selections, setSelections] = useState<SelectionMap>({}); 

  const [others, setOthers] = useState<Record<string, string>>({}); 

 

  const toggle = (field: string, val: string) => setSelections(prev => { 

    const curr = prev[field] || []; 

    return { ...prev, [field]: curr.includes(val) ? curr.filter(v => v !== val) : [...curr, val] }; 

  }); 

 

  const handleReset = () => { setStep(0); setCompanyName(""); setStartDate(""); setUf(""); setUt(""); setSelections({}); setOthers({}); }; 

 

  return <> 

    <style>{` 

      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap'); 

      * { box-sizing: border-box; margin: 0; padding: 0; } 

      body { background: #f4f4f8; } 

      input:focus { outline: 2px solid #1a1a2e !important; } 

      ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #f0f0f4; } ::-webkit-scrollbar-thumb { background: #c0c0cc; border-radius: 3px; } 

    `}</style> 

    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", background: "#f4f4f8" }}> 

      {/* Sidebar */} 

      <div style={{ width: "220px", minHeight: "100vh", background: "#fff", borderRight: "1.5px solid #e8e8ef", display: "flex", flexDirection: "column", padding: "32px 0", position: "fixed", top: 0, left: 0, zIndex: 10, boxShadow: "2px 0 12px rgba(0,0,0,0.04)" }}> 

        <div style={{ padding: "0 24px 36px", borderBottom: "1.5px solid #e8e8ef", marginBottom: "24px" }}> 

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}> 

            <div style={{ background: "#1a1a2e", color: "#f5c842", fontWeight: 800, fontSize: "16px", padding: "4px 9px", borderRadius: "7px", letterSpacing: "0.05em" }}>EY</div> 

            <span style={{ color: "#1a1a2e", fontWeight: 700, fontSize: "15px" }}>EY.ai</span> 

          </div> 

        </div> 

        {["Dashboard", "Selection Agent", "Help & Support", "Settings"].map((item, i) => ( 

          <div key={item} style={{ padding: "11px 24px", color: i === 1 ? "#1a1a2e" : "#888", fontWeight: i === 1 ? 600 : 400, fontSize: "14px", cursor: "pointer", background: i === 1 ? "#f0f0f7" : "transparent", borderLeft: i === 1 ? "3px solid #1a1a2e" : "3px solid transparent" }}>{item}</div> 

        ))} 

      </div> 

 

      {/* Main */} 

      <div style={{ marginLeft: "220px", flex: 1, padding: "36px 40px 60px" }}> 

        {/* Header */} 

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px" }}> 

          <div> 

            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#1a1a2e", fontWeight: 700, marginBottom: "4px" }}>ETRM Selection Agent</h1> 

            <p style={{ fontSize: "13px", color: "#888" }}>{STEPS[step]} &nbsp;|&nbsp; {STEP_SUBS[step]}</p> 

          </div> 

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}> 

            {STEPS.map((s, i) => ( 

              <div key={s} style={{ display: "flex", alignItems: "center", gap: "4px" }}> 

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}> 

                  <div onClick={() => i <= step && setStep(i)} style={{ width: "26px", height: "26px", borderRadius: "50%", background: i === step ? "#1a1a2e" : i < step ? "#22c55e" : "#e8e8ef", color: i <= step ? "#fff" : "#aaa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, cursor: i <= step ? "pointer" : "default", transition: "all 0.2s" }}>{i < step ? "✓" : i + 1}</div> 

                  <div style={{ fontSize: "9px", color: i === step ? "#1a1a2e" : "#bbb", fontWeight: i === step ? 700 : 400, textAlign: "center", maxWidth: "65px", lineHeight: 1.3 }}>{s}</div> 

                </div> 

                {i < STEPS.length - 1 && <div style={{ width: "20px", height: "2px", background: i < step ? "#22c55e" : "#e8e8ef", marginBottom: "18px", transition: "background 0.3s" }} />} 

              </div> 

            ))} 

            <div style={{ marginLeft: "12px", fontSize: "12px", color: "#aaa", fontWeight: 500 }}>Step {step + 1} of 4</div> 

          </div> 

        </div> 

 

        {step === 0 && <Step1 selections={selections} toggle={toggle} others={others} setOthers={setOthers} companyName={companyName} setCompanyName={setCompanyName} startDate={startDate} setStartDate={setStartDate} uf={uf} setUf={setUf} ut={ut} setUt={setUt} onReset={handleReset} onNext={() => setStep(1)} />} 

        {step === 1 && <Step2 onReset={handleReset} onNext={() => setStep(2)} onBack={() => setStep(0)} />} 

        {step === 2 && <Step3 onReset={handleReset} onNext={() => setStep(3)} onBack={() => setStep(1)} />} 

        {step === 3 && <Step4 onReset={handleReset} onBack={() => setStep(2)} />} 

      </div> 

    </div> 

  </>; 

}