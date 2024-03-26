let cuadroini = 0;
console.log("Tira el dado para conocer su resultado");
while (cuadroini < 25) {
  const min = 1, max = 6;
  let dado = Math.floor(Math.random() * (max - min + 1) + 1);
  cuadroini += dado;
  console.log("el resultado del dado es: ",dado ,"avanzas a la casilla ", cuadroini
  );
  console.log(dado);
}
  console.log("Felicidades, lo lograste! Fin del juego");