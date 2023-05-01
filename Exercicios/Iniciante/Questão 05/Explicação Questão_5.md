# Explicação Questão 05

# Função para encontrar a maior letra do alfabeto em uma string em JavaScript

- Essa função em JavaScript tem como objetivo encontrar a maior letra do alfabeto presente em uma string.

## Como utilizar

- Para utilizar a função "maiorLetra", basta copiar o código e colar em seu arquivo JavaScript. Em seguida, basta chamar a função e passar uma string como parâmetro.

##Exemplo de uso:

- javascript

```
maiorLetra("Lorem ipsum dolore sec avanti");

//Resultado: v
```

## Como funciona

- A função percorre o array "alfabeto" contendo todas as letras do alfabeto. Em seguida, ela verifica se cada letra está presente na string passada como parâmetro. Caso esteja presente, a letra é adicionada à variável "concatenar". Ao final do laço, a função retorna a última letra presente na variável "concatenar", que será a maior letra do alfabeto presente na string.

## Exemplos

- javascript

```
maiorLetra("Lorem ipsum dolore sec avanti");

Resultado:
v

maiorLetra("Hello");

Resultado:
o

maiorLetra("May the force be with you");

Resultado:
y

maiorLetra("Its over nine thousand");

Resultado:
v
```
