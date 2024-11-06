// Estrutura de repetição for, sem o uso do in. 

for(let contador = 1; contador < 11; contador++) {
    console.log(`Contador = ${contador}`)
}


// acessando um array com o for 

const listaNotas = [3, 5, 4, 7, 6, 8, 4, 10]
const listaAlunos = ['Pedro', 'Ana', 'Julia', 'Marcos', 'Henrique', 'Jose', 'Douglas', 'Beatriz']
for (let nota = 0; nota <listaNotas.length; nota++){
    console.log(`Aluno: ${listaAlunos[nota]} | Nota = ${listaNotas[nota]}`)
}


/*
    Resumo For

    1º - variavel de iteração 
    2º - condição booleana
    3º - incremento ou decremento da variavel.

    ( variavel = algume valor ; condição booleana ; incremento ou decremento da variavel )
*/


