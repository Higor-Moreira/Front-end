// Controle de fluxo if - else

function avaliador(nota) {
    if(nota >= 7) {
        console.log('Aprovado', nota)
    } else {
        console.log('Reprovado', nota)
    }
}

avaliador(7.5)
avaliador(6)
avaliador(3)


/* 
    Estruturas de controle de fluxo tomam decisões com base em 
    resultados booleanos, true e false. Ou seja, qualquer valor 
    avaliado como verdadeiro ou falso é aceito na condição. 
*/


// Else if 

function avaliador_2(nota) {
    if(nota >= 7) {
        console.log('Aprovado', nota)
    } else if(nota < 7 && nota >= 5) {
        console.log('Recuperação', nota)
    } else {
        console.log('Reprovado', nota)
    }
}

avaliador_2(5.5)


/* 
    Caso tenha mais de 3 possibilidades, talvez seja mais interessante 
    usar o Switch para realizar o controle de fluxo.
*/

