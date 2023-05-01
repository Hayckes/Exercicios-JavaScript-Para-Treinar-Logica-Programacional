# Explicação Questão 03

## Função Recursiva em JavaScript

- Este é um exemplo de uma função recursiva escrita em JavaScript que gera uma string de "pips-pips-..." com um número de pipss igual ao argumento passado para a função.

# Como usar

Basta chamar a função recursive e passar um número como argumento:

- javascript

```
console.log(recursive(4));
// Output: "pips-pips-pips-pips"

console.log(recursive(9));
// Output: "pips-pips-pips-pips-pips-pips-pips-pips-pips"

console.log(recursive(5));
// Output: "pips-pips-pips-pips-pips"

console.log(recursive(2));
// Output: "pips-pips"
```

# Como funciona

- A função recursive é escrita de forma recursiva, utilizando dois if statements para tratar os casos base da recursão. Se o argumento for 0, a função retorna uma string vazia. Se o argumento for 1, a função retorna a string "pips". Caso contrário, a função chama a si mesma com um argumento de number - 1 e concatena a string resultante com a string "pips-".

- Por exemplo, se a função é chamada com um argumento de 4, a chamada inicial da função chamará a si mesma com um argumento de 3, e assim por diante, até que a chamada mais interna tenha um argumento de 1, que é o caso base da recursão. A função então retorna "pips" para a chamada anterior, que concatena "pips-" com "pips" para retornar "pips-pips". A chamada anterior concatena "pips-" com "pips-pips" para retornar "pips-pips-pips", e assim por diante, até que a chamada inicial retorne a string completa "pips-pips-pips-pips".

## Conclusão

- Esta é uma simples função recursiva em JavaScript que ilustra o conceito de recursão. A função pode ser facilmente modificada para gerar diferentes tipos de strings recursivamente.
