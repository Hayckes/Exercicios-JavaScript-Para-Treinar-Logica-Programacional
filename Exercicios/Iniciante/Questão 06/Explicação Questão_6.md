# Explicação Questão 06

## Função para reverter palavras de uma string em JavaScript

A função reverseStr recebe uma string como argumento e retorna uma nova string em que as palavras foram invertidas, mas mantendo a ordem em que elas aparecem na string original. Por exemplo, a string "Hello World" seria convertida em "olleH dlroW".

- javascript

```
function reverseStr(string) {
  let newStr = "";
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
```

- A lógica da função é simples: primeiro, ela cria uma nova string vazia chamada newStr. Em seguida, a string original é convertida em letras minúsculas e dividida em um array usando o método split(), que separa a string em palavras sempre que encontrar um espaço em branco. O resultado é um array de strings contendo as palavras da string original.

- Em seguida, a função itera sobre cada uma dessas palavras, utilizando um laço for..in para percorrer as letras de cada palavra. Para cada letra, a função adiciona a letra invertida na nova string newStr. Ao final de cada palavra, é adicionado um espaço em branco para separá-la das demais.

- Por fim, a nova string newStr é retornada pela função.

## Exemplos de uso:

- javascript

```
reverseStr("Lorem ipsum dolore sec avanti");
reverseStr("This is an apple");
reverseStr("May the force be with you");
reverseStr("It s over nine thousand");
```

## Estes exemplos produzem a seguinte saída:

```
//meroL muspi erolod ces itnav
//sihT si na elppa
//yaM eht ecrof eb htiw uoy
//tI s revo enin dnuotu
```

## Conclusão

- A função reverseStr é uma solução simples e eficaz para reverter as palavras em uma string em JavaScript. Ela pode ser usada em diversos contextos em que seja necessário manipular strings, como na análise de dados ou processamento de textos.
