export const STEPS = [
  "Requirements Gathering",
  "Solution Analysis",
  "Competitor Benchmarking",
  "Recommendation Report",
] as const;

export const STEP_SUBS = [
  "Capture company requirements, processes, and risk needs",
  "Score shortlist alignment and review rationale",
  "Benchmark shortlist against market peers and analyze competitor landscape",
  "Generate report with recommendations and rationale",
] as const;

export const INDUSTRY_SEGMENTS = [
  "Upstream",
  "Midstream",
  "Downstream",
  "Fully Integrated",
  "Independent Operator",
  "NOC",
] as const;

export const TRADABLE_PRODUCTS = [
  "Crude Oil",
  "Refined Products",
  "Natural Gas",
  "LNG",
  "LPG",
  "NGL",
  "Specialty",
  "Petrochemicals",
  "Renewables",
  "Power",
  "Carbon Credits",
] as const;

export const REGIONS = [
  "North America",
  "South America",
  "Europe",
  "Middle East",
  "Africa",
  "Asia Pacific",
] as const;

export const TRADE_TYPES_PHYSICAL = [
  "Spot",
  "Term",
  "Evergreen",
  "Term Evergreen",
] as const;

export const TRADE_TYPES_FINANCIAL = [
  "Futures",
  "Options",
  "Swaps",
  "Swaptions",
] as const;

export const PRICING_MODELS = [
  "Formula (Index) Pricing",
  "Formula (Index) Complex Pricing",
  "Fixed Pricing",
  "Prepayment Pricing",
  "Provisional Pricing",
] as const;

export const CETRM_PRODUCTS = [
  "Endur",
  "RightAngle",
  "Allegro",
  "Aspect",
  "TriplePoint",
  "SAP Commodity Management",
  "Eka",
  "Enuit",
  "Home Grown In-House Solution",
] as const;

export const ERP_SYSTEMS = [
  "SAP S/4HANA",
  "ORACLE ERP Cloud/ ORACLE NetSuite",
  "Microsoft Dynamics 365",
  "Infor Cloud Suite",
  "IFS Cloud",
  "Sage X3/Sage ERP",
  "Odoo ERP",
] as const;

export const DEPLOYMENTS = ["Cloud", "On Prem", "Hybrid"] as const;

export interface SolutionScore {
  label: string;
  value: number;
  desc: string;
}

export interface Solution {
  name: string;
  scores: SolutionScore[];
  pros: string[];
  cons: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    name: "RightAngle",
    scores: [
      {
        label: "Tradable Products scale",
        value: 75,
        desc: "Strong for refined products and liquids; covers core physical commodities",
      },
      {
        label: "Instruments scale",
        value: 60,
        desc: "Optimized for physical deals, nominations, and logistics; limited complex derivatives",
      },
      {
        label: "ERP Integration scale",
        value: 88,
        desc: "Proven SAP and terminal integrations with REST APIs streamline settlement and invoicing",
      },
      {
        label: "Size and Scalability scale",
        value: 72,
        desc: "Suited for marketers and downstream operations; scales to mid-large footprints",
      },
    ],
    pros: [
      "Strong nominations and physical movement scheduling",
      "Deep logistics, terminal and pipeline integrations",
      "Robust tax, fees, and regulatory handling",
    ],
    cons: [
      "Limited advanced market risk analytics and quantitative modeling",
      "Less suited for complex derivatives and financial instruments",
      "Enterprise-wide risk reporting often requires customization",
    ],
  },
  {
    name: "Endur",
    scores: [
      {
        label: "Tradable Products scale",
        value: 92,
        desc: "Broad multi-commodity coverage across power, gas, oil, and metals",
      },
      {
        label: "Instruments scale",
        value: 95,
        desc: "Comprehensive financial and physical instruments with advanced risk analytics",
      },
      {
        label: "ERP Integration scale",
        value: 90,
        desc: "Enterprise connectors (SAP, Oracle, REST) and mature integration patterns",
      },
      {
        label: "Size and Scalability scale",
        value: 93,
        desc: "Enterprise-grade architecture scaling to global portfolios and complex operations",
      },
    ],
    pros: [
      "Comprehensive front-to-back coverage across commodities",
      "Advanced risk analytics (VaR, stress testing, scenario analysis)",
      "Real-time P&L, curve management, and hedge accounting",
    ],
    cons: [
      "Longer implementation timelines and higher cost of ownership",
      "Setup complexity and steep learning curve",
      "Heavy footprint requiring strong internal IT support",
    ],
  },
  {
    name: "Allegro",
    scores: [
      {
        label: "Tradable Products scale",
        value: 78,
        desc: "Good coverage across power, gas, and liquids with cloud-first flexibility",
      },
      {
        label: "Instruments scale",
        value: 70,
        desc: "Solid physical and basic financial instruments; less depth in complex derivatives",
      },
      {
        label: "ERP Integration scale",
        value: 82,
        desc: "Prebuilt ERP connectors and REST APIs enable rapid integration",
      },
      {
        label: "Size and Scalability scale",
        value: 80,
        desc: "Modern SaaS deployment scaling well for mid-tier environments",
      },
    ],
    pros: [
      "Cloud-first with rapid time-to-value",
      "Usable UI and configurable workflows",
      "Strong physical logistics and nominations for liquids and gas",
    ],
    cons: [
      "Limited advanced risk analytics depth compared to enterprise platforms",
      "Gaps in complex derivatives and quantitative modeling",
      "Compliance and hedge accounting capabilities may be basic",
    ],
  },
];

export interface Competitor {
  name: string;
  etrm: string;
  strengths: string[];
  pain: string[];
  duration: string;
  cost: string;
}

export const COMPETITORS: Competitor[] = [
  {
    name: "Chevron Corporation",
    etrm: "RightAngle",
    strengths: ["Global coverage", "Strong risk practice"],
    pain: ["Setup complexity"],
    duration: "9-12 months",
    cost: "$500k–$900k",
  },
  {
    name: "Shell PLC",
    etrm: "Endur",
    strengths: [
      "Global coverage",
      "Fast trade operations",
      "Physical scheduling strength",
    ],
    pain: ["Limited advanced analytics"],
    duration: "6-9 months",
    cost: "$300k–$500k",
  },
  {
    name: "BP",
    etrm: "Endur, RightAngle",
    strengths: ["Global coverage", "Strong risk practice"],
    pain: ["Learning curve", "Integration effort"],
    duration: "8-10 months",
    cost: "$400k–$700k",
  },
];

export interface WhyShortlist {
  name: string;
  points: string[];
}

export const WHY_SHORTLIST: WhyShortlist[] = [
  {
    name: "Allegro",
    points: [
      "Beats Endur on ease-of-use and time-to-value for mid-tier teams",
      "Comparable to peer multi-commodity coverage with faster cloud-first deployment",
      "Outperforms ops focus of RightAngle with broader front-office and credit modules",
    ],
  },
  {
    name: "Endur",
    points: [
      "Beats Allegro on risk analytics depth and quantitative reporting",
      "Comparable to peer global coverage with configurable workflows easing enterprise rollout",
      "Outperforms ops focus of RightAngle with comprehensive front-to-back modules",
    ],
  },
  {
    name: "RightAngle",
    points: [
      "Beats Allegro on physical logistics depth (nominations, movements, ticketing)",
      "Comparable to peer downstream coverage with easier deployment via SAP/terminal integrations",
      "Outperforms pure ops-focused peers with broader tax, fees, and settlement features",
    ],
  },
];

export interface ReportItem {
  name: string;
  vendor: string;
  about: string;
  rationale: string[];
  features: string[];
}

export const REPORT: ReportItem[] = [
  {
    name: "RightAngle",
    vendor: "ION",
    about:
      "RightAngle is a downstream supply chain and refined products trading solution focused on physical operations for liquids and fuels. It supports deal capture, inventory, logistics, tax, and settlement with deep terminal and pipeline integrations.",
    rationale: [
      "Best fit for refined products marketers and downstream operations with high logistics complexity",
      "Strong nominations, movement scheduling, and ticketing capabilities reduce operational risk",
      "Proven integrations to SAP and terminal systems streamline settlement and invoicing",
      "Robust tax, fees, and regulatory handling for North American and global markets",
    ],
    features: [
      "Deal capture for refined products and liquids",
      "Rack pricing, fees, and tax calculation",
      "Nominations and pipeline/terminal scheduling",
      "Inventory and tank management",
      "Ticketing and bill of lading management",
      "Credit exposure, limits, and controls",
      "Contract management and settlement",
      "ERP and terminal system integrations (SAP, REST)",
      "Reporting and audit trails",
    ],
  },
  {
    name: "Endur",
    vendor: "ION",
    about:
      "Endur is an enterprise-grade front-to-back ETRM covering power, gas, oil, and metals, with comprehensive risk analytics, trade lifecycle, and scheduling across global markets.",
    rationale: [
      "Suitable for integrated energy companies and utilities needing advanced risk depth",
      "Comprehensive module coverage from Front, Risk, Credit, to Back Office",
      "Market data, curve management, and real-time P&L support complex portfolios",
      "Deployment and integration options align with large-scale IT environments",
    ],
    features: [
      "Multi-commodity trade capture and lifecycle management",
      "Risk analytics including VaR, stress testing, and scenario analysis",
      "Real-time P&L and mark-to-market",
      "Power and gas scheduling with nominations",
      "Curve and market data management",
      "Credit risk and limit reporting",
      "Hedge accounting and regulatory reporting",
      "Configurable workflows and deal templates",
      "Native connectors and APIs (SAP, Oracle, REST)",
    ],
  },
  {
    name: "Allegro",
    vendor: "ION",
    about:
      "Allegro is a modern, cloud-first CTRM/ETRM designed for fast implementation, usability, and flexibility across power, gas, liquids, and other commodities.",
    rationale: [
      "Ideal for mid-tier traders seeking rapid time-to-value and ease of use",
      "Flexible architecture and configurable workflows support evolving needs",
      "Strong logistics and operations features for physical commodities",
      "Good integration patterns and cloud deployment minimize IT overhead",
    ],
    features: [
      "Fast trade entry and portfolio management",
      "Configurable workflows and extensibility",
      "Risk exposure tracking and basic analytics",
      "Logistics and nominations for liquid and gas",
      "Invoice and settlement processing",
      "Credit management and controls",
      "Prebuilt ERP connectors and REST APIs",
      "Cloud deployment with dashboards and reporting",
    ],
  },
];
