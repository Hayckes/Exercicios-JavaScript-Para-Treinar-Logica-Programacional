# Explicação Questão 07

## Função para transformar e ordenar matriz em um array unidimensional em JavaScript

A função arrBidimen recebe como parâmetro uma matriz e tem como objetivo transformá-la em um array unidimensional e ordená-lo usando o método Bubble Sort. O resultado é retornado em um array unidimensional.

## Como usar

Para utilizar a função, basta passar como argumento uma matriz que contenha os elementos que deseja transformar e ordenar.

Exemplo:

- javascript

```
arrBidimen([[1, 4, 3], [2, 5, 7], [4, 8, 10, 32, 0], []]);
arrBidimen([[], [], []]);
arrBidimen([[7, 4, 2, 1], [2, 5, 7, 9, 4], [3], [4, 8]]);
arrBidimen([[100, 200, 600], [10, 1, 2, 3], [6], [, 9, 8, 5]]);

```

- O resultado será um array unidimensional ordenado:

- javascript

```
[0, 1, 2, 3, 4, 4, 5, 7, 8, 10, 32]
```

## Detalhes de implementação

A função arrBidimen utiliza um loop para transformar a matriz em um array unidimensional e depois aplica o método Bubble Sort para ordenar o array.

O método Bubble Sort é utilizado para comparar elementos adjacentes no array e, se estiverem na ordem errada, trocá-los de posição. Esse processo é repetido várias vezes até que todos os elementos estejam ordenados.

## Limitações

A função foi criada para manipular matrizes que possuem apenas números inteiros. Caso a matriz contenha elementos de outro tipo, como strings ou objetos, a função não irá funcionar corretamente.

## Conclusão

A função arrBidimen implementa o algoritmo de ordenação bubble sort para ordenar uma matriz bidimensional em JavaScript, sendo uma solução simples e eficiente para este propósito.
