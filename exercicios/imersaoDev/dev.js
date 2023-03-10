// const myName = 'Rebeca'
// const age = '15'

// // imprimir dados...
// function printDate() { //declaraçao
//     console.log('Nome:' + myName)
//     console.log('Idade:' + age)
// }

// printDate() //execuçao

const idadeRebeca = 15
const idadePedro = 17
const idadeDudu = 10
const idadeDuda = 16
const n1 = 10 
console.log('Fora:' + n1)

function suma(n1, n2) { //chamando os numeros: n1 = 2, n2 = 4. Eles só existem dentro da funçao
    const result = n1 + n2
    const retorno = printInt()
    return result //retorna o valor:26, 32. Nao a variavel
   // console.log('===========')
   // console.log(idadePedro + idadeRebeca)
   // console.log(n1+n2)
}
// 17, 15
const sumaPeR = suma(idadePedro, idadeRebeca) 
console.log('Pedro e Rebeca:' + sumaPeR)
// 16, 16
const sumaDeD = suma(idadeDuda, idadeDudu)
console.log('Dudu e Duda:' + sumaDeD)
// console.log(suma(2, 4))..

function printInt() {
    console.log('Init')
    console.log('Show')
    return 'Receba'
}