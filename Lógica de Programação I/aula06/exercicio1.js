/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função calcula o valor com imposto sobre vendas e retorna o valor de custo e o novo valor.
*/

function somaImposto(taxaImposto, custo) {
    if (typeof taxaImposto === "string" && taxaImposto.includes("%")) {
        taxaImposto = Number(taxaImposto.replace("%", "")) / 100
    }

    let novo_custo = custo + custo * taxaImposto
    return {custo, novo_custo}
}

const custos = somaImposto("50%", 50)
console.log(`Custo antes do imposto: ${custos.custo}`)
console.log(`Custo depois do imposto: ${custos.novo_custo}`)
