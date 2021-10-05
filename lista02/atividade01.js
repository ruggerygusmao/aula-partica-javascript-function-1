/*1)      Criar uma função anônima que recebe duas notas de um aluno do ensino médio:
a)       Calcular a média do aluno.
b)      Se a média for maior ou igual a 7, retornar "Aprovado!";
c)       Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";
d)      Se a média for menor que 5, retornar "Reprovado!".
e)      Chamar a função e exibir no console o resultado. */

var calculaMedia = function (n1, n2) {
    let media = (n1 + n2) / 2;
    if (media >= 7) {
        return "Aprovado!"
    } else if ((media >= 5) && (media < 7)) {
        return "Recuperação!"
    } else {
        return "Reprovado!"
    }
}

console.log(calculaMedia(3, 5));