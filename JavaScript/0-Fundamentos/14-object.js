// um objeto em JS é uma coleção de chave&valor

const produto = {} // o objeto é denifido por chaves
console.log(typeof produto)

// 1º forma de cirar - adicinoando dinamicamente chave&valor
produto.nome = 'Smartphone Galaxy S25'
produto.preco = 799.90
produto['Black Friday'] = 0.4 // Adicionando variavel nome composto 

console.log(produto)


// 2º forma de criar - declar no momento da criação. 
const produto_2 = {
    nome: 'Camisa Polo', // Usar virgulas para separar os elementos.
    preco: 79.90,
    cor: 'Branco',
    blackFriday: 0.5
}

console.log(produto_2)

