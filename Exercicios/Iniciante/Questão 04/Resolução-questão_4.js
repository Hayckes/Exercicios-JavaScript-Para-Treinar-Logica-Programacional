function viagen(number) {
  let contador = "";
  number = String(number);
  for (let i of number) {
    i *= i;

    contador += String(i);
  }

  return parseInt(contador);
}

console.log(viagen(3514));
console.log(viagen(94571));
console.log(viagen(24));
console.log(viagen(745821698));
