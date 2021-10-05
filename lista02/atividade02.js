/*2)      Criar uma função anônima que calcula a tabuada de 3.
a)       Chamar a função e exibir no console o resultado.
 */

var tabuada = function(){
    let result = [];
    for(let i = 0; i <=10;i++){
        result.push(i*3);
    }

    return result.join(" - ");
}

console.log(tabuada());