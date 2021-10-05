/*2)      Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.
a)       Chamar a função e exibir o resultado no console. */

var maiorNumero = (v1, v2, v3) => {
    if ((v1 > v2) && (v1 > 3)) {
        return v1;
    } else if ((v2 > v1) && (v2 > v3)) {
        return v2;
    } else {
        return v3;
    }
}

console.log(maiorNumero(5, 8, 3));