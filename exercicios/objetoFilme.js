/* 

Exercício Objeto

- Faça um objeto que contenha um nome de um filme, a nota que
você dá pra ele 0-10, gênero do filme, ao final faça um console
personalizado, mostrando o filme, a nota, e o gênero do filme.

*/

let filme = {
    nome: "O homem que copiava",
    genero: "Romance/Drama",
    nota: "9,9"
}

console.log(`O filme "${filme.nome}" é um ${filme.genero}. Um marco do cinema brasileiro com nota de ${filme.nota}.`)