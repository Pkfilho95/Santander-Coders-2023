// Exercício: concat()
// 1. Temos essa duas listas:
// const lista1 = ['banana', 'pera', 'melancia'];
// const lista2 = ['alface', 'tomate', 'rucula'];
// 1. Utilize o método "concat" para mesclar a lista1 e lista2 em um novo array.
// 2. Verifique o comprimento (length) do novo array para confirmar que os elementos foram mesclados corretamente.
// 3. Tente utilizar o método "concat" com mais algumas listas, mesclando todas em uma só.
// const lista3 = ['limao', 'laranja', 'acerola'];
// const lista4 = ['pimenta', 'pimentao', 'alho']

const lista1 = ['banana', 'pera', 'melancia']
const lista2 = ['alface', 'tomate', 'rucula']

const array1 = lista1.concat(lista2) 
console.log(`O length do novo array é ${array1.length}`)

const lista3 = ['limao', 'laranja', 'acerola']
const lista4 = ['pimenta', 'pimentao', 'alho']

const array2 = array1.concat(lista3,lista4) 
console.log(`O length do novo array é ${array2.length}`)