// Parametros e retornos, mesmo quando definidos, são opcionais. 

function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m2`)
    } else {
        return area 
    }
}


// JS não exibi erro caso seja passado paramtros a mais ou a menos
console.log(area(5, 2))
console.log(area(2))           // 1 parametro ao inves de 2
console.log(area())            // Nenhum parametro 
console.log(area(5, 3, 7, 4))  // Mais paramentros do que a funcao possui 
console.log(area(5, 5))

