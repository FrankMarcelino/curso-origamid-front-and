// Verifique a distância da primeira imagem
// em relação ao topo da página

// const firstImg = document.querySelector('img')

// const distancia = firstImg.offsetTop
// console.log(distancia)
// // Retorne a soma da largura de todas as imagens
function somaImagens() {
    const todasImgs = document.querySelectorAll('img')
    let larguraTotal = 0
    todasImgs.forEach((imagem) => {
        larguraTotal += imagem.offsetWidth
    })

    console.log(larguraTotal)
}


window.onload = function() {
    somaImagens()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) => {


    let tamanho = link.getBoundingClientRect()



    if (tamanho.width > 38 && tamanho.height > 28) {
        console.log('o link tem o minimo recomendado')
    } else {
        console.log('Não tem o minimo recomendado')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menuMobile = document.querySelector('nav')
let telaBolie = window.matchMedia('(max-width: 720px)')

if (telaBolie.matches) {
    menuMobile.classList.toggle('ativo')
}