// Exercício: reduce()
// 1. Temos a lista de alunos com suas notas:
// const alunos = [
// { nome: 'Ana', notas: [7, 8, 9] },
// { nome: 'Pedro', notas: [5, 6, 7] },
// { nome: 'Maria', notas: [9, 8, 10] },
// { nome: 'João', notas: [6, 7, 8] },
// { nome: 'Lucas', notas: [8, 9, 7] },
// { nome: 'Julia', notas: [10, 8, 9] }
// ]
// 1. Utilize o método "map" para criar um novo objeto com o nome e a média de cada aluno.
// 2. A média deve ser calculada utilizando o método "reduce" para somar as notas e dividi-las pelo número de notas.
// 3. Verifique se você conseguiu utilizar o método "reduce" corretamente.

const alunos = [
    { nome: 'Ana', notas: [7, 8, 9] },
    { nome: 'Pedro', notas: [5, 6, 7] },
    { nome: 'Maria', notas: [9, 8, 10] },
    { nome: 'João', notas: [6, 7, 8] },
    { nome: 'Lucas', notas: [8, 9, 7] },
    { nome: 'Julia', notas: [10, 8, 9] }
]

let media

const array = alunos.map(aluno => {
    media = aluno.notas.reduce((acc, cur) => acc + cur, 0) / aluno.notas.length
    return ({
        nome: aluno.nome,
        media: media
    })
})
console.log(array)
