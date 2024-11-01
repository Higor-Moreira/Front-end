// realizam operações logicas onde o resultado é, SEMPRE, true ou false. 


// OU - operador ||
console.log(5 > 0 || 2 == 2) // 5 maior que 0 OU 2 igual a 2 

/*
    No exemplo acima, o JS irá avaliar o primeiro elemento e 
    ao constatar que é verdadeiro, não irá analisar o segundo. 
    Pois no operador logico OU, basta que um seja verdadeiro. 
*/




// E - &&
console.log(1 === 1 && 2 === 0)



// OU exclusivo bitwise xor - ^ 
console.log(1 ^ 1) 
console.log(0 ^ 0) 
console.log(0 ^ 1) 
console.log(1 ^ 0) 

/*
    Retorna zero se os dois numeros forem igauis ou 
    o numero 1 se os dois numeros forem diferentes. 
*/



// NÃO negativa - !
let souRico = false
console.log(!souRico) // nega o valor da variavel 
