# Explicação Questão 04

# função para elevar ao quadrado e concatenar dígitos em JavaScript

- Este é um exemplo de uma função simples escrita em JavaScript que eleva ao quadrado cada dígito de um número e concatena os resultados em uma única string. A função viagen recebe um número como argumento e retorna um novo número que é formado pelos dígitos originais elevados ao quadrado e concatenados.

## Como usar

Basta chamar a função viagen e passar um número como argumento:

- javascript

```
viagen(3514);
// Output: 915116

viagen(94571);
// Output: 8114941251

viagen(24);
// Output: 416

viagen(745821698);
// Output: 694541416481364164
```

## Como funciona

- A função viagen utiliza um loop for..of para iterar sobre cada dígito do número original e eleva ao quadrado o valor de cada dígito. Em seguida, o resultado é concatenado em uma única string. A variável contador é inicializada como uma string vazia. A cada iteração do loop, o valor de i é elevado ao quadrado e convertido em uma string usando String(i\*i). Em seguida, a string resultante é adicionada à variável contador. Dessa forma, o novo número é formado pelos dígitos originais elevados ao quadrado e concatenados.

- Por exemplo, se o número 3514 é passado como argumento, a função viagen converte o número em uma string e cria a variável contador como uma string vazia. A primeira iteração do loop eleva o valor 3 ao quadrado e converte o resultado em uma string (9). A string resultante é adicionada à variável contador. A segunda iteração eleva o valor 5 ao quadrado e converte o resultado em uma string (25). A string resultante é adicionada à variável contador. E assim por diante, até que o loop termine e a variável contador esteja completa com os dígitos elevados ao quadrado e concatenados.

## Conclusão

- Esta é uma função simples para elevar ao quadrado cada dígito de um número e concatenar os resultados em uma única string em JavaScript, e pode ser útil em muitas situações diferentes. A função pode ser facilmente modificada para trabalhar com números de diferentes tamanhos e formatos.
