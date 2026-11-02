// Calculul mediei notelor unui elev
function calculeazaMedia(note) {
  if (note.length === 0) return 0;
  const suma = note.reduce((a, b) => a + b, 0);
  return (suma / note.length).toFixed(2);
}
