// EXERCÍCIO
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares

let a = [1,2,3,4,5,6,7,8,9]
let pares = []
let impares = []

pares = a.filter((x) => x % 2 === 0)
impares = a.filter((x) => x % 2 !== 0)

// for (let i=0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//         pares.push(a[i])
//     } else {
//         impares.push(a[i])
//     }
// }

console.log(`Lista original: ${a}`)
console.log(`Pares: ${pares}`)
console.log(`Ímpares: ${impares}`)
