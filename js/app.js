// Catalog electronic - logica aplicatiei
const elevi = [
  { id: 1, nume: "Popescu Ana", clasa: "IX-A", note: [9, 10, 8] },
  { id: 2, nume: "Rusu Ion",    clasa: "IX-A", note: [7, 8, 9] },
  { id: 3, nume: "Ceban Maria", clasa: "IX-A", note: [10, 9, 10] }
];

function afiseazaElevi() {
  const tabel = document.getElementById("tabel-elevi");
  elevi.forEach(e => {
    tabel.innerHTML += `<tr><td>${e.nume}</td><td>${e.clasa}</td><td>${e.note.join(", ")}</td></tr>`;
  });
}

document.addEventListener("DOMContentLoaded", afiseazaElevi);

// Adaugarea unei note noi pentru un elev
function adaugaNota(idElev, nota) {
  if (nota < 1 || nota > 10) { alert("Nota trebuie sa fie intre 1 si 10"); return; }
  const elev = elevi.find(e => e.id === idElev);
  if (elev) elev.note.push(nota);
}
