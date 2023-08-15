/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/

function Fibonacci(n) {
    let f = [0, 1]

    for (let i=1; i < n; i++) {
        f.push(f[i] + f[i-1])
    }

    return f
}

console.log(Fibonacci(15))