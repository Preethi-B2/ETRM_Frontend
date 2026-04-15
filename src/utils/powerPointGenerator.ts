import PptxGenJS from "pptxgenjs";

interface PowerPointData {
  companyName: string;
  startDate: string;
  userBase: { from: string; to: string };
  selections: Record<string, string[]>;
  others: Record<string, string>;
}

export function generatePowerPoint(data: PowerPointData) {
  const prs = new PptxGenJS();

  // Set presentation properties
  prs.defineLayout({ name: "LAYOUT1", width: 10, height: 5.625 });
  prs.defineLayout({ name: "LAYOUT2", width: 10, height: 5.625 });

  // Color scheme
  const colors = {
    primary: "1a1a2e",
    accent: "f5c842",
    success: "22c55e",
    danger: "f87171",
    text: "1a1a2e",
    bg: "f4f4f8",
  };

  // Slide 1: Title Slide
  let slide = prs.addSlide();
  slide.background = { color: colors.primary };

  slide.addText("ETRM Selection Report", {
    x: 0.5,
    y: 1.5,
    w: 9,
    h: 1,
    fontSize: 44,
    bold: true,
    color: colors.accent,
    fontFace: "Playfair Display",
  });

  slide.addText(data.companyName || "Your Company", {
    x: 0.5,
    y: 2.8,
    w: 9,
    h: 0.6,
    fontSize: 24,
    color: "ffffff",
  });

  slide.addText(`Project Start Date: ${data.startDate || "N/A"}`, {
    x: 0.5,
    y: 3.6,
    w: 9,
    h: 0.4,
    fontSize: 12,
    color: "cccccc",
  });

  // Slide 2: Executive Summary
  slide = prs.addSlide();
  slide.background = { color: "ffffff" };

  slide.addText("Executive Summary", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 32,
    bold: true,
    color: colors.primary,
    fontFace: "Playfair Display",
  });

  const summaryContent = [
    `Company: ${data.companyName || "N/A"}`,
    `Start Date: ${data.startDate || "N/A"}`,
    `User Base: ${data.userBase.from || "N/A"} to ${data.userBase.to || "N/A"} users`,
    "",
    "Selection Criteria:",
    `• Industry Segment: ${data.selections.industry?.join(", ") || "N/A"}`,
    `• Tradable Products: ${data.selections.products?.join(", ") || "N/A"}`,
    `• Regions: ${data.selections.region?.join(", ") || "N/A"}`,
    `• ERP System: ${data.selections.erp?.join(", ") || "N/A"}`,
    `• Deployment: ${data.selections.deployment?.join(", ") || "N/A"}`,
  ];

  slide.addText(summaryContent.join("\n"), {
    x: 0.5,
    y: 1.0,
    w: 9,
    h: 4,
    fontSize: 11,
    color: colors.text,
  });

  // Slide 3: Requirements Analysis
  slide = prs.addSlide();
  slide.background = { color: "ffffff" };

  slide.addText("Requirements Analysis", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 32,
    bold: true,
    color: colors.primary,
    fontFace: "Playfair Display",
  });

  const reqContent = [
    "Trade Type Requirements:",
    `• Physical: ${data.selections.trade_p?.join(", ") || "N/A"}`,
    `• Financial: ${data.selections.trade_f?.join(", ") || "N/A"}`,
    "",
    "Current Systems:",
    `• C/ETRM Products: ${data.selections.cetrm?.join(", ") || "N/A"}`,
    `• Pricing Models: ${data.selections.pricing?.join(", ") || "N/A"}`,
  ];

  slide.addText(reqContent.join("\n"), {
    x: 0.5,
    y: 1.0,
    w: 9,
    h: 4,
    fontSize: 12,
    color: colors.text,
  });

  // Slide 4: Solution Comparison
  slide = prs.addSlide();
  slide.background = { color: "ffffff" };

  slide.addText("Solution Comparison", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 32,
    bold: true,
    color: colors.primary,
    fontFace: "Playfair Display",
  });

  slide.addText(
    "Three leading solutions evaluated: RightAngle, Endur, and Allegro\n\n" +
      "RightAngle: Best for refined products and physical operations\n" +
      "Endur: Comprehensive enterprise-grade solution\n" +
      "Allegro: Modern cloud-first solution for rapid deployment",
    {
      x: 0.5,
      y: 1.2,
      w: 9,
      h: 3.8,
      fontSize: 11,
      color: colors.text,
    },
  );

  // Slide 5: Next Steps
  slide = prs.addSlide();
  slide.background = { color: "ffffff" };

  slide.addText("Next Steps", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.5,
    fontSize: 32,
    bold: true,
    color: colors.primary,
    fontFace: "Playfair Display",
  });

  slide.addText(
    "1. Review recommendations with your team\n" +
      "2. Schedule vendor demos\n" +
      "3. Conduct detailed cost-benefit analysis\n" +
      "4. Define implementation timeline\n" +
      "5. Plan change management strategy",
    {
      x: 0.5,
      y: 1.2,
      w: 9,
      h: 3.8,
      fontSize: 12,
      color: colors.text,
    },
  );

  // Save the presentation
  prs.writeFile({
    fileName: `ETRM_Selection_${data.companyName || "Report"}.pptx`,
  });
}
