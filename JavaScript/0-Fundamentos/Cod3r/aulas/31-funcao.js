/*
    Cidadão de primeira classe. 

    First Class object / First Class Citizen

    High Order Function / Função de alta ordem

    São formas de dizer que a linguagem tratar funções como dados. Ou seja,
    funções podem ser passadas como parametros, funções podem ser armazenadas em
    variaveis, é possivel criar funções dentro de funções, etc. 
*/

// Criando funcao de forma literal sem retorno | o JS retorna undefined por padrão. 
function funcao_1 () {}


// Armazenando funcao em variavel | funcao anonima. 
const funcao_2 = function () {}


// Armazenar em um array | armazenar funcao já existente ou criar direto dentro do array 
const array = [function (a, b) {a + b}, funcao_1, funcao_2]
console.log(array[0] = (2, 5))


// armazenar dentro de um atribuito de objeto 
const obj = {}
obj.falar = function () {return 'Olá'}
console.log(obj.falar())


// uma fucao pode retornar ou conter outra funcao 
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

/*
    >>> Conclusão <<<

    Embora JS tenha muita flexibilidade no uso de funcao.
    A maioria não é muito usada por deixar o codigo complexo sem necessidade. 
*/


