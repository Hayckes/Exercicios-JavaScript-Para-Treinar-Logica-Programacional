# Explicação Questão 03

## Função para inverter um array em JavaScript

- Este é um exemplo de uma função simples escrita em JavaScript que inverte um array. A função reverse recebe um array como argumento e retorna o array invertido.

## Como usar

Basta chamar a função reverse e passar um array como argumento:

- javascript

```
reverse([0, 9, 6, 8, 9, 1, 5, 7]);
// Output: [7, 5, 1, 9, 8, 6, 9, 0]

reverse(["Hi", "Oi", "Hello"]);
// Output: ["Hello", "Oi", "Hi"]

reverse([false, true, false, false]);
// Output: [false, false, true, false]

reverse(["sim", "não", false, 1]);
// Output: [1, false, "não", "sim"]
```

## Como funciona

- A função reverse utiliza um loop for para percorrer o array original e preencher um novo array com os elementos na ordem inversa. A variável arrReverse é inicializada como um array vazio. A cada iteração do loop, o valor de arr[arr.length - 1 - i] é adicionado ao arrReverse. Dessa forma, o último elemento do array original é o primeiro elemento do array invertido, o penúltimo elemento é o segundo elemento do array invertido, e assim por diante.

- Por exemplo, se o array [0, 9, 6, 8, 9, 1, 5, 7] é passado como argumento, a função reverse cria um novo array arrReverse e itera sobre o array original. A primeira iteração adiciona o último elemento do array original (7) ao novo array arrReverse. A segunda iteração adiciona o penúltimo elemento do array original (5) ao novo array arrReverse, e assim por diante, até que o loop termine e o novo array arrReverse esteja completo com os elementos invertidos.

## Conclusão

- Esta é uma função simples para inverter um array em JavaScript, e pode ser útil em muitas situações diferentes. A função pode ser facilmente modificada para trabalhar com arrays de diferentes tipos e tamanhos.
