/*
- Faça um programa que tenha um ARRAY, contendo 3 elementos dentro, e
utilizando o método SLICE, pegue a primeira letra de cada elemento.

*/

let elementos = ["Banana", "Macã", "Laranja"];
let primeiraLetra = elementos[0].slice(0, 1);
let segundaLetra = elementos[1].slice(0, 1);
let terceiraLetra = elementos[2].slice(0, 1);
console.log(`A primeira letra de "${elementos[0]}" é "${primeiraLetra}".`)
console.log(`A primeira letra de "${elementos[1]}" é "${segundaLetra}".`)
console.log(`A primeira letra de "${elementos[2]}" é "${terceiraLetra}".`)