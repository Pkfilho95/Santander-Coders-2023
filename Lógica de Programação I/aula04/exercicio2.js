// Exercício: pop()
// 1. Temos a lista:
// const numeros = [1, 2, 3, 4];
// 1. Utilize o método "pop" para remover o último elemento do array.
// 2. Verifique o comprimento (length) do array para confirmar que o elemento foi removido corretamente.
// 3. Utilize o método "pop" novamente para remover outro elemento do array.
// 4. Verifique o comprimento (length) do array novamente para confirmar que o segundo elemento foi removido
// corretamente.

const array = [1,2,3,4]
console.log(`O length inicial do array é ${array.length}`)

array.pop()
console.log(`O length do array é ${array.length}`)

array.pop()
console.log(`O length do array é ${array.length}`)
