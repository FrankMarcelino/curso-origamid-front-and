// Crie uma função para verificar se um valor é Truthy


function verificaValor(valor) {
    var valor = !!valor
    if (valor === true) {
        return console.log("valor é verdadeiro")
    } else {
        return console.log("valor é falso")
    }
}

verificaValor(0)



// Crie uma função matemática que retorne o perímetro de um quadrado

// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroDoQuadrado(lado) {
    var perimetro = lado * 4
    return console.log(perimetro)
}

perimetroDoQuadrado(5)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome


function nomeCompleto(nome, sobrenome) {
    return `Seu nome completo é ${nome} ${sobrenome}`
}

console.log(nomeCompleto("Frank", "silva"))



// Crie uma função que verifica se um número é par

function verificaPar(numero) {
    var resto = numero % 2
    if (resto) {
        console.log("número é impa")
    } else {
        console.log("número é par")
    }
}

verificaPar(1)
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
    var tipo = typeof dado
    return console.log(`O tipo primitivo de ${dado} é ${tipo}`)
}

tipoDado("Frank")

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

var nome = "Frank silva"

addEventListener('scroll', function () {
    console.log(nome)
});



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));