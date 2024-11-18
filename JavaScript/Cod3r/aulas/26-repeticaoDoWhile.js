/* 
    1 - É baseado em valor booleano 
    2 - Diferente do While, em que a verificação é feito no inicio, o Do While
    faz a verificação no final, desta forma é garantido que ocorrerá pelo menos 1 loop.

    O código abaixo só verifica se numero é menor que zero após ter feito a 
    primeira iteração. Quando chega no While sai do bloco devido a condição ser false. 
*/ 

let numero = 0

do {
    console.log('loop', numero)
    numero++

} while (numero < 5)

console.log('Fim do loop.')
