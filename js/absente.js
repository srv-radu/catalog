// Evidenta absentelor elevilor
const absente = { 1: 2, 2: 5, 3: 0 };

function marcheazaAbsenta(idElev) {
  absente[idElev] = (absente[idElev] || 0) + 1;
}

function totalAbsente() {
  return Object.values(absente).reduce((a, b) => a + b, 0);
}
