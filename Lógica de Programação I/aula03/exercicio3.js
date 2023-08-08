// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

let dezena
let i = 1
while (i <= 6) {
    dezena = Math.round((Math.random() * 59) + 1)
    console.log(`Dezena ${i}: ${dezena}`)
    i++
}
