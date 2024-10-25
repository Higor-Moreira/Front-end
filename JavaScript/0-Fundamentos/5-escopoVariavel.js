/*
    VAR possui escopo global, ou seja, mesmo sendo declarada dentro de um bloco
    de código. Esta acessivel fora dele. 

*/

if(true){

    var X = 10
}

console.log(X)

// VAR permite reatribuição de valores
X = X + 5

console.log(X)


// ________________________________________________________________________________

if(true) {

    let Y = 20
}

// Resulta em erro, pois a variavel Y só existe dentro do bloco acima. 
// console.log(Y)


var Z = 30

if(true) {

    Z = Z + 10
    console.log(Z)
}

console.log(Z)