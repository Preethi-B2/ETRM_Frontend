export function downloadBlob(filename: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function generateWordFile(title: string, sections: Array<{ heading: string; rows: string[] }>) {
  const titleHtml = `<h1 style="font-family: 'Playfair Display', serif; color: #1a1a2e;">${title}</h1>`;
  const sectionHtml = sections
    .map(
      (section) =>
        `<h2 style="font-family: 'DM Sans', sans-serif; color: #1a1a2e; font-size: 18px;">${section.heading}</h2>` +
        section.rows
          .map((row) => `<p style="font-family: 'DM Sans', sans-serif; color: #333; font-size: 14px; margin: 4px 0;">${row}</p>`)
          .join("")
    )
    .join("");

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title></head><body>${titleHtml}${sectionHtml}</body></html>`;
  const blob = new Blob([html], { type: "application/msword" });
  downloadBlob(`${title.replace(/\s+/g, "_")}.doc`, blob);
}

function escapeCsvCell(value: string) {
  const escaped = value.replace(/"/g, '""');
  return `"${escaped}"`;
}

export function generateCsvFile(filename: string, rows: string[][]) {
  const csvContent = rows.map((row) => row.map(escapeCsvCell).join(",")).join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  downloadBlob(filename, blob);
}
