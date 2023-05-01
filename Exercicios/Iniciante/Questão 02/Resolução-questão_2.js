function recursive(number) {
  if (number === 0) {
    return "";
  }

  if (number === 1) {
    return "pips";
  } else {
    return "pips-" + recursive(number - 1);
  }
}

console.log(recursive(4));
console.log(recursive(9));
console.log(recursive(5));
console.log(recursive(2));
