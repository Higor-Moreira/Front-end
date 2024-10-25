// trocar o valor de 2 variaveis, onde ao fim, uma terá o valor da outra 

let a = 7
let b = 94

console.log('a =', a)
console.log('b =', b)

let c = a
a = b
b = c

console.log('a =', a)
console.log('b =', b)


// Outra forma, mais pratica

var d = 7
var e = 94

console.log('d =', d)
console.log('e =', e)

[d, e] = [e, d]

console.log('d =', d)
console.log('e =', e)