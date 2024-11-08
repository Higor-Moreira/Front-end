// 1° forma de definir um valor padrão para parametros  

function soma(a , b, c) {
    a = a || 1
    b = b || 1     // variavel recebe varial ou valor 1
    c = c || 1 
    return a + b + c
}

console.log(soma(5, 4, 3)) // Funciona normal 
console.log(soma(5, 2)) // o terceiro valor assumo o 1
console.log(soma()) // Todos valores serão 1 
console.log(soma(5, 0, 0)) // o zero será considerado falso e portanto será substituido pelo 1



// 2º, 3º e 4º forma  
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se a for undefined, então a recebe 1 
    b = 1 in arguments ? b : 1 
    c = isNaN(c) ? 1 : c
    return a + b + c
}


console.log(soma2(5, 5, 5))
console.log(soma2(0, 0, 0))


// Forma mais atual ecmascript 2015 | >>> usar esta <<< 
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(5, 3))

