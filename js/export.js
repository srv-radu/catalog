// Exportul catalogului in format CSV
function exportCSV() {
  let csv = "Elev,Clasa,Note\n";
  elevi.forEach(e => { csv += `${e.nume},${e.clasa},"${e.note.join(" ")}"\n`; });
  return csv;
}
