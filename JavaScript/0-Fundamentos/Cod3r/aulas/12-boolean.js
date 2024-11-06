// mais informações sibre o tipo Boolean

let ligado = true
let desligado = false
console.log('PC esat ligado? ', ligado)
console.log('PC esat ligado? ', desligado)


// Outros valores também são aceitos como true ou false
let isAtivo = 1
console.log('Usuario esta logado? ', Boolean(isAtivo))


// Situações que o resultado será verdadeito
console.log(">>> Resultado Verdadeiro <<<")
console.log(Boolean(3)) // Numero positivos acima de zero
console.log(Boolean(-1)) // Numeros negativos 
console.log(Boolean(' ')) // String vazia
console.log(Boolean('teste')) // QUalquer texto
console.log(Boolean([])) // Array vazio
console.log(Boolean({})) // Objeto literal 
console.log(Boolean(Infinity)) // TIpo infinito
console.log(Boolean(presente = 1)) // Uma atribuição cujo valor seja avaliado como verdadeiro


// Situações que o resultado será falso
console.log(">>> Resultado Falso <<<")
console.log(Boolean(0)) // O numero zero é sempre avaliado como false
console.log(Boolean('')) // String vazia
console.log(Boolean(null)) // Tipo Nulo 
console.log(Boolean(NaN)) // Not a Number 
console.log(Boolean(undefined)) // Indefinido 
console.log(Boolean(isLogado = 0)) // Uma atribuição cujo valor seja avaliado como falso


// Comparações logicas de maior e menor, e teste verdade. 


// PRATICA! Site onde usuario não digitou nome. 
let nome = ''
console.log(`Olá ${nome || 'Desconhecido'}`)

/*
    Avalia se o usuario degitou um nome, caso não tenha digitado 
    é possivel definir um nome padrão para o usuario. 
*/

