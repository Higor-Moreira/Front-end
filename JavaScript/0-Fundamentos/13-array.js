/*
     Estrutura de dados array ou lista, dados agrupados de forma linear, 
     onde os elementos são indexados e casa um tem seu identificador. 

     1 - o elemento esta na posição zero 
     2 - não tem tamanho fixo, pode aumentar conforme necessidade
     3 - É definido por colchetes 
     4 - dentro do array, os valores são separados por virgula. 
     5 - Pode misturar os tipos de dados. Porem, não é recomendado. 

*/

const valores = [7, 8.5, 10, 9.7] // array possui 4 elementos 

// Como consultar por indicce
console.log(valores[0], valores[2])

// O que acontece se consultar um indice inexistente? 
console.log(valores[4])

/*
    Diferente de outras linguagens, em JS consultar um indice inexistente 
    não resulta em erro. A linguagem irá informar que o valor é Undefined.
*/

// Adicionando valores em uma posição especifica 
valores[4] = 5 
console.log(valores)

// consultando o tamanho do array
console.log(valores.length)

// Adicionando valores ao fim do array
valores.push('igor')
console.log(valores)

// Deletando o ulitmo elemento 
valores.pop()
console.log(valores)

// Deletando elementos com indice especifico 
delete valores[0]
console.log(valores)

