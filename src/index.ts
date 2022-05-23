let nroDeseadoArreglo: number[] = new Array(5);
let nro: number;
for (let indice = 0; indice < 5; indice++) {
  nro = Number(
    prompt("Indique el número que desea incorporar en la posición ${indice}: ")
  );
  nroDeseadoArreglo[indice] = nro;
}

for (let indice = 0; indice < 5; indice++) {
  console.log(
    "El número en la posición ",
    indice,
    " es ",
    nroDeseadoArreglo[indice]
  );
}
