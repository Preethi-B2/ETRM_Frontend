export type SelectionMap = Record<string, string[]>;

export interface Score {
  label: string;
  value: number;
  desc: string;
}

export interface Solution {
  name: string;
  scores: Score[];
  pros: string[];
  cons: string[];
}

export interface Competitor {
  name: string;
  etrm: string;
  strengths: string[];
  pain: string[];
  duration: string;
  cost: string;
}

export interface WhyShortlist {
  name: string;
  points: string[];
}

export interface Report {
  name: string;
  vendor: string;
  about: string;
  rationale: string[];
  features: string[];
}

export interface FormState {
  companyName: string;
  startDate: string;
  userBaseFrom: string;
  userBaseTo: string;
  selections: SelectionMap;
  others: Record<string, string>;
}
