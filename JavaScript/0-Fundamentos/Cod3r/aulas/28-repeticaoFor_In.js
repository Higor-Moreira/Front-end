// Usando o in não é necessario controlar a variavel contadora

const notas = [5.5, 7, 8.2, 7.4, 6.9, 8.7, 10, 9.5]

for (i in notas) {
    console.log(i, ' - ', notas[i])
}

