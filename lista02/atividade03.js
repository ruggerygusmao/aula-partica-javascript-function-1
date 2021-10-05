/*3)      Criar uma função de seta (arrow function) que recebe o ano de nascimento de uma pessoa e retorne se ela é maior de idade ou menor.
a)       Chamar a função e exibir no console o resultado. */

var maiorIdade = (idade) => {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(maiorIdade(16));