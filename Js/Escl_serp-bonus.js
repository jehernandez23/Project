let cuadroini = 0;
let cuadromax = 25;
console.log("Tira el dado para conocer su resultado");
while (cuadroini < cuadromax) {
  const min = 1;
  const max = 6;
  let dado = Math.floor(Math.random() * (max - min + 1) + 1);
  cuadroini += dado;
  console.log(
    "el resultado del dado es: ",
    dado,
    "avanzas a la casilla",
    cuadroini
  );
  if (cuadroini == cuadromax) {
  } else {
    // Bonus
    switch (cuadroini) {
      case 10:
        cuadroini = 12;
        console.log(
          "Subes en la escalera de la casilla 10, avanzas a la casilla",
          cuadroini
        );
        break;

      case 6:
        cuadroini = 17;
        console.log(
          "Subes en la escalera de la casilla 6, avanzas a la casilla",
          cuadroini
        );
        break;

      case 3:
        cuadroini = 11;
        console.log(
          "Subes en la escalera de la casilla 3, avanzas a la casilla",
          cuadroini
        );
        break;

      case 12:
        cuadroini = 10;
        console.log(
          "Ups! bajas por la casilla 12, bajas a la casilla",
          cuadroini
        );
        break;

      case 8:
        cuadroini = 3;
        console.log(
          "Ups! bajas por la casilla 8, bajas a la casilla",
          cuadroini
        );
        break;
    }
  }
}

console.log("Genial! Fin del juego");