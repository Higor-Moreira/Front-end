/*
    1 - O While é baseado em expressão booleana. 
    2 - Mais utilizado em casos onde não se sabe a qtd de loops será necessario. 
    3 - A condição é verificada no inicio. 

    O programa abaixo incrementa o contador em cada loop,
    fazendo a verificação da condição sempre no inicio do bloco. 
    Quando contador atinge o valor de 5, a condição se torna falsa 
    saindo da estrutura While. 
*/



let contador = 0

while (contador < 5) {

    console.log('loop', contador)

    contador++
}

console.log('Fim do loop.')



