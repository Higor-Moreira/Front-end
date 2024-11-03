/*
    Ao atribuir um valor, a variavel que o armazena recebe um endereço 
    de onde o valor esta armazenado. Desta forma, caso este valor seja
    alterado por outra variavel, a variavel inicial também sofrerá alteração. 
*/

const a = {nome: 'teste'}
const b = a
console.log(a, b)

// Alterando o valor apartir da const b, irá mudar na const a também. 
b.nome = 'novo'
console.log(a, b)

/*

    O nome disso é atribuição por referência, e não funciona com
    dados primitivos. 

*/


let valor // variavel criada e não inicializada, gera o resultado Undefined
valor = null // variavel iniciada. Porem, sem valor. Esta vazia. 

/*
    >>> Para zerar o valor de uma variavel, usa-se sempre o Null ou Zero. <<<

    Tentar acessar valorse de uma variavel que 
    esta com valor null irá gerar um erro. 
*/
