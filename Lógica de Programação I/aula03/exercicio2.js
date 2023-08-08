// EXERCICIO
// Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
// que contém nome, nota1 e nota2. Use o for para percorer esse array
// e calcular a média das duas notas de cada aluno
// Ao fonal, imprimir o nome do aluno e a sua média

const listaDeAlunos = [
    { nome: 'João', notas: [8, 7] },
    { nome: 'Maria', notas: [9, 8] },
    { nome: 'Carlos', notas: [6, 5] },
    { nome: 'Ana', notas: [7, 6] },
    { nome: 'Pedro', notas: [10, 9] },
    { nome: 'Lúcia', notas: [8, 7] },
    { nome: 'Fernando', notas: [7, 6] },
    { nome: 'Camila', notas: [9, 8] },
    { nome: 'Rafael', notas: [6, 5] },
    { nome: 'Juliana', notas: [10, 9] }
]

let notas, media

for (let aluno of listaDeAlunos) {
    notas = aluno.notas
    media = 0
    for (var i=0; i < notas.length; i++) {
        media += notas[i]
    }
    media /= notas.length
    console.log(`Nome: ${aluno.nome} - Nota: ${(media.toFixed(2))}`)
}

