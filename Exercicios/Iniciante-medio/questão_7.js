function arrBidimen(arr) {
  let newArr = [];
  let contador;

  // transforma a matriz em um array unidimensional
  for (let i = 0; i < arr.length; i++) {
    contador = arr[i];
    for (let j = 0; j < contador.length; j++) {
      newArr.push(contador[j]);
    }
  }

  // ordena o array usando bubble sort
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  return console.log(newArr);
}

arrBidimen([[1, 4, 3], [2, 5, 7], [4, 8, 10, 32, 0], []]);
arrBidimen([[], [], []]);
arrBidimen([[7, 4, 2, 1], [2, 5, 7, 9, 4], [3], [4, 8]]);
arrBidimen([[100, 200, 600], [10, 1, 2, 3], [6], [9, 8, 5]]);
