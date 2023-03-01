/* 
Faça um loop FOR que encontre todos os números PARES, e todos os
números ÍMPARES, e armazene respectivamente os dois em um array
denominado PAR e outro ÍMPAR
dica ( Para sabermos se um número é PAR o seu resto da divisão por 2,
deve ser igual a 0,
Para sabermos se um número é ÍMPAR, seu resto da divisão por 2 deve
ser diferente de 0. exemplo
1 % 2 == 1 - Impar
2 % 2 == 0 - Par
*/


for (var n1 = 1; n1 <= 10; n1++) {
    if (n1 % 2 == 0) {
        console.log(`O número é ${n1} e ele é Par.`)
    } else {
        console.log(`O número é ${n1} e ele é Ímpar.`)
    }
}