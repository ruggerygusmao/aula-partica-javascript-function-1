/*3)      Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.
a)       Chamar a função e exibir no console o resultado. */

var impar = (valor) => {
    if ((valor % 2) == 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(impar(10));