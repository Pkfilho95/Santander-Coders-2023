// Exercício: find()
// 1. Temos a lista de lugares:
// const lugares = [
// { nome: 'Sala de Reuniões', capacidade: 8 },
// { nome: 'Auditório', capacidade: 50 },
// { nome: 'Sala de Treinamento', capacidade: 20 },
// { nome: 'Sala de Conferências', capacidade: 30 },
// { nome: 'Sala de Estudos', capacidade: 12 }
// ]
// 1. Utilize o método "find" para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 10 pessoas.
// 2. Utilize o método "find" novamente para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 25 pessoas.
// 3. Utilize o método "find" mais uma vez para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 40 pessoas.
// 4. Verifique se você conseguiu utilizar o método "find" corretamente.

const lugares = [
    { nome: 'Sala de Reuniões', capacidade: 8 },
    { nome: 'Auditório', capacidade: 50 },
    { nome: 'Sala de Treinamento', capacidade: 20 },
    { nome: 'Sala de Conferências', capacidade: 30 },
    { nome: 'Sala de Estudos', capacidade: 12 }
]

const find1 = lugares.find(lugar => lugar.capacidade <= 10)
console.log(find1)

const find2 = lugares.find(lugar => lugar.capacidade <= 25)
console.log(find2)

const find3 = lugares.find(lugar => lugar.capacidade <= 40)
console.log(find3)
