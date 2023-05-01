function reverse(arr) {
  let arrReverse = [];

  for (let i in arr) {
    arrReverse[i] = arr[arr.length - 1 - i];
  }

  return console.log(arrReverse);
}

reverse([0, 9, 6, 8, 9, 1, 5, 7]);
reverse(["Hi", "Oi", "Hello"]);
reverse([false, true, false, false]);
reverse(["sim", "não", false, 1]);
