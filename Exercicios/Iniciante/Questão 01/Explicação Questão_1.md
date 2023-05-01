# Explicação exercicio 01

A função somarMedia recebe um número variável de argumentos utilizando o operador "rest" (...num), permitindo que a função receba uma lista de números de tamanho variável.

javascript
Copy code

```
function somarMedia(...num) {
    let res = 0;
    for (let i = 0; i != num.length; i++){
      res += num[i];
    }
    res /= num.length;
    console.log(res);
}
```

##

- Aqui é declarada uma variável res e inicializada com o valor 0. Essa variável será usada para armazenar a soma dos números da lista.

- Nesse trecho de código é utilizado um loop for para percorrer todos os elementos da lista num, que contém os argumentos da função. A cada iteração do loop, é somado o valor do elemento atual na variável res.

- Aqui é feita a média aritmética dos números da lista, dividindo a variável res pelo número de elementos na lista num e armazenando o resultado novamente na variável res.

- Por fim, o resultado da média aritmética é exibido no console utilizando a função console.log.

Essa função pode ser chamada quantas vezes desejar, passando como argumentos as listas de números que deseja calcular a média aritmética.

## Exemplo de uso

javascript

```
somarMedia(10, 9, 6, 8, 9, 1, 5, 7); // Exibe no console: 6.875
somarMedia(2, 5, 7, 1, -2); // Exibe no console: 2.6
somarMedia(10, 10, 10, 10, 9); // Exibe no console: 9.8
somarMedia(25, 75); // Exibe no console: 50
```

Neste exemplo, a função somarMedia é chamada com diferentes listas de números como argumentos e exibe a média aritmética no console.
