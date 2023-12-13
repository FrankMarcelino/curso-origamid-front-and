// Retorne no console todas as imagens do site
    const imagensDoSite = document.querySelectorAll('img')

    console.log(imagensDoSite)

// Retorne no console apenas as imagens que começaram com a palavra imagem
    const apenasImgPalavraIamgem = document.querySelectorAll('[src^="img/imagem"]')

    console.log(apenasImgPalavraIamgem)
// Selecione todos os links internos (onde o href começa com #)
    const linksInternos = document.querySelectorAll('[href^="#"]')
    console.log(linksInternos)
// Selecione o primeiro h2 dentro de .animais-descricao
    const primeiroTitulo = document.querySelector('.animais-descricao h2')
    console.log(primeiroTitulo)
// Selecione o último p do site

    // const ultimoParagrafoSite = document.querySelector('footer p:last-child')
    // console.log(ultimoParagrafoSite)

    const paragrafos = document.querySelectorAll('p')
    console.log(paragrafos[--paragrafos.length])