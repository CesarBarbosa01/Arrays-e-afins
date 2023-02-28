/*
Exercício Array

- Faça um array com 3 valores de média, tire a média desses três
valores e guarde em uma variável, no final mostre a variável com a
média.

OBS: "Faça um array com 3 valores de média". isso não fez mt sentido pra mim, era pra tirar a média de um conjunto de números antes e colocar os resultados em cada array? de qualquer forma, considerei números inteiros, o restante eu segui normalmente.

OBS²: Lembrando que não fui na última aula, então posso ter interpretado errado ou feito algo errado. :p
*/

let numeros = [2, 58, 6]
let v1 = numeros[0]
let v2 = numeros[1]
let v3 = numeros[2]
let Soma = v1 + v2 + v3
let Media = Soma / numeros.length
console.log(Media)