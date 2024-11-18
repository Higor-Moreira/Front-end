// Tudo é funcao! 

console.log(typeof Object) // Objetos são funções 

class produto {}
console.log(typeof produto) // Classes também são funções. 


// Função sem retorno 
function imprimiSoma(a, b) {
    console.log(a + b)
}

/*

    Apesar da função ter os parametros a e b, é possivel
    chama-lá com somente 1 parametro neste caso o segundo
    será definido pelo JS automaticamente como Undefined e 
    o resultado será um NaN

*/

imprimiSoma(2, 5) // resultado 5
imprimiSoma(2) // resultado NaN
imprimiSoma(5, 10, 2, 4, 8,) // resultado 15, irá ignorar os demais numeros.
imprimiSoma() // resultado NaN

// JS é flexivel!


// Função com retorno - define valor padrao para b caso não seja informado
function imprimiSomaComRetorno(a, b = 0) {
    return a + b
}

console.log(imprimiSomaComRetorno(2, 5))
console.log(imprimiSomaComRetorno(2)) 



// Armazenando uma função dentro de uma variavel / constante
const imprimiSoma_2 = function(a,b) {
    console.log(a + b)
} 


// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(40, 2))


// Forma reduzida função arrow 
const subtracao = (a, b) => a - b
console.log(subtracao(15, 2))


// Se tiver somente um parametro, pode tirar os parentese
const imprimirTexto = a => console.log(a)
imprimirTexto('Programação é Show!!!')
