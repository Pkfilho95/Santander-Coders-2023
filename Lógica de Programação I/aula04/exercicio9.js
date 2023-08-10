// Exercício: forEach()
// 1. Temos uma lista de sabores de pizza e seus valores:
// const pizzas = [
// { sabor: 'Mussarela', valor: 20 },
// { sabor: 'Calabresa', valor: 25 },
// { sabor: 'Marguerita', valor: 28 },
// { sabor: 'Frango com Catupiry', valor: 32 },
// { sabor: 'Portuguesa', valor: 30 }
// ]
// 1. Utilize o método "forEach" para percorrer a lista de pizzas e imprimir no console o nome do sabor da pizza e seu valor.
// 2. Verifique se você conseguiu utilizar o método "forEach" corretamente.

const pizzas = [
    { sabor: 'Mussarela', valor: 20 },
    { sabor: 'Calabresa', valor: 25 },
    { sabor: 'Marguerita', valor: 28 },
    { sabor: 'Frango com Catupiry', valor: 32 },
    { sabor: 'Portuguesa', valor: 30 }
]

pizzas.forEach(pizza =>
    console.log(`Sabor da pizza: ${pizza.sabor} - Valor: ${pizza.valor}`)
)
