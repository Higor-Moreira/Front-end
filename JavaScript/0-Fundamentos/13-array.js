/*
     A estrutura array consiste em dados agrupados de forma linear, 
     onde os elementos são indexados e cada um tem seu identificador. 

     1 - Inicia em zero 
     2 - Não tem tamanho fixo, pode aumentar conforme necessidade
     3 - É definido por colchetes 
     4 - Os valores armazenados são separados por virgula. 
     5 - É possivel misturar os tipos de dados. Porem, não é recomendado. 
     6 - Em JS o array é do tipo Object. 

*/

const valores = [7, 8.5, 10, 9.7] // array possui 4 elementos 

// Como consultar por indice
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

