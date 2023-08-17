/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/

function fat(n) {
    if (n === 0) return 1
    if (n < 2) return n
    return n * fat(n-1)
}

console.log(fat(5))