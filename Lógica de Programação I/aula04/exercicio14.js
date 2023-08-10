// Exercício: sort()
// 1. Temos uma lista de atletas com seus respectivos nomes, alturas e pesos:
// const atletas = [
// { nome: 'João', altura: 1.75, peso: 80 },
// { nome: 'Maria', altura: 1.68, peso: 60 },
// { nome: 'Pedro', altura: 1.80, peso: 70 },
// { nome: 'Ana', altura: 1.65, peso: 55 },
// { nome: 'Carlos', altura: 1.90, peso: 100 }
// ]
// 1. Utilize o método "sort" para ordenar a lista de atletas em ordem crescente de peso.
// 2. Utilize o método "sort" novamente para ordenar a lista de atletas em ordem decrescente de altura.
// 3. Utilize o método "sort" mais uma vez para ordenar a lista de atletas em ordem alfabética de nome.
// 4. Verifique se você conseguiu utilizar o método "sort" corretamente.

const atletas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
]

const sort1 = atletas.sort((a, b) => a.peso - b.peso)
console.log(sort1)

const sort2 = atletas.sort((a, b) => b.altura - a.altura)
console.log(sort2)

const sort3 = atletas.sort((a, b) => a.nome.localeCompare(b.nome))
console.log(sort3)
