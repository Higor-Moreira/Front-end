// Usanso quando há multiplas verificações de possibilidades. 

const imprimeResultado = function (nota) {
    switch (nota) { // Switch usa um valor Number
        case 10:
        case 9:
            console.log('Aprovado(a) com honra')
            break
        case 8:
        case 7:
            console.log('Aprovado(a)')
            break
        case 6:
        case 5:
        case 4:                           // por padrão não é colocado em bloco de código
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado(a)')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimeResultado(10)
imprimeResultado(7)
imprimeResultado(5)
imprimeResultado(3)
imprimeResultado(50)

/* 
    Em JS o Switch por padrão irá checar todos os casos, mesmo já tendo encontrado
    um caso onde a nota é equivalente. Por este motivo,  necessario colocar um break 
    ao fim bloco. Caso contrário, todos consoles abaixo do que for equivalente, serão
    executados e exibidos. 
*/
