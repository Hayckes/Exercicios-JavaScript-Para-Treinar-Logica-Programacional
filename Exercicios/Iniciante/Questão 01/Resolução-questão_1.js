function somarMedia(...num) {
  let res = 0;
  for (let i = 0; i != num.length; i++) {
    res += num[i];
  }
  res /= num.length;

  console.log(res);
}

somarMedia(10, 9, 6, 8, 9, 1, 5, 7);
somarMedia(2, 5, 7, 1, -2);
somarMedia(10, 10, 10, 10, 9);
somarMedia(25, 75);
