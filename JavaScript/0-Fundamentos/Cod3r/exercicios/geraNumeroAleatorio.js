// função que gera numero aleatorio num intervalo determinado pelo ususario

function valorAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
}

console.log(valorAleatorio(0, 10))

/*

1 - Math.random(): Gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo).
2 - Multiplicação: Multiplicamos pelo intervalo (max - min + 1) para escalar o número aleatório ao tamanho desejado.
3 - Math.floor(): Arredonda para baixo, garantindo que o número gerado esteja dentro do intervalo desejado.
4 - Adição de min: Para garantir que o número resultante esteja dentro do intervalo especificado.

*/

