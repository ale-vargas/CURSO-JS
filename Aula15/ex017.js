let num = [5, 8, 2, 9, 3]
num.push(1) //adiciona novo valor ao vetor.
console.log(`Nosso vetor é o ${num}.`)

//vetor começa contar em 0. 
//Ex.: vetor de 5 posiçõoes o indice é 0, 1, 2, 3 e 4.
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

console.log('')
console.log('Colcando vetor em ordem crescente:')
num.sort() //coloca vetor em ordem crescente.

console.log(`Nosso vetor é o ${num}.`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

console.log('')
console.log(num)
let  teste = num.indexOf(5) //alterar este valor para testes
if ( teste == -1) { //se não encontrar valor solicitado no vetor o js retorna valor -1
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${teste}`)
}
