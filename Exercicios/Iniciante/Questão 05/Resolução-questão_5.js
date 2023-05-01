let alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let concatenar = "";

function maiorLetra(string) {
  for (let i = 0; i < alfabeto.length; i++) {
    if (string.includes(alfabeto[i])) {
      concatenar = alfabeto[i];
    }
  }

  console.log(concatenar);
}
maiorLetra("Lorem ipsum dolore sec avanti");
maiorLetra("Hello");
maiorLetra("May the force be with you");
maiorLetra("Its over nine thousand");
