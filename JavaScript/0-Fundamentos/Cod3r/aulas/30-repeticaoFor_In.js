// Percorrendo atribuitos de um objeto com For IN 

const pessoa = {
    nome: 'Julia',
    sobrenome: 'Carvalho',
    idade: 25,
    peso: 50,
}

for (let atribuito in pessoa) {
    console.log(`${atribuito} = ${pessoa[atribuito]}`)
}


/*
    Definir a variavel atributo com let faz com que ao sair do loop
    a variavel não esteja mais acessivel para o restante do código. 

*/



