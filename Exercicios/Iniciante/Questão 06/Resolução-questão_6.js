function reverseStr(string) {
  let newStr = "";
  if (string == 0) {
  }
  string = string.toLowerCase().split(" ");
  for (let i in string) {
    let indexStr = string[i];
    for (let i in indexStr) {
      newStr += indexStr[indexStr.length - i - 1];
    }
    newStr += " ";
  }
  console.log(newStr);
}

reverseStr("Lorem ipsum dolore sec avanti");
reverseStr("This is an apple");
reverseStr("May the force be with you");
reverseStr("It s over nine thousand");
