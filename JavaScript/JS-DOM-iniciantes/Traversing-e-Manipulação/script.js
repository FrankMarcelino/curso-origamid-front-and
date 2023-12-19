// // Duplique o menu e adicione ele em copy

// const menu = document.querySelector('.menu');
// const novoMenu = menu;
// const cloneMenu = menu.cloneNode(true);
// const footer = document.querySelector('.copy');
// footer.appendChild(cloneMenu);
// // Selecione o primeiro DT da dl de Faq

// let primeiroDT = document.querySelector('dl')

// let primeiroFilho = primeiroDT.children[0]

// let texto = primeiroFilho.outerText

// console.log(texto)
// // Selecione o DD referente ao primeiro DT
    
// const dt = document.querySelector('dl')
// const dd = dt.children[1]

// const primeiroDD = dd.outerText

// console.log(primeiroDD)
// // Substitua o conteúdo html de .faq pelo de .animais
// const pai = document.querySelector('body')
// const faq = document.querySelector('.faq')
// const animais = document.querySelector('.animais')

// pai.replaceChild(faq,animais)
// ============================================================================

//  CORREÇÃO DO PROFESSOR 

// DUPLIQUE O MENU E ADICIONE ELE EM COPY 

const menu  = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)

// SELECIONE O PRIMEIRO DT DA DL DE FAQ

const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

// SELECONE O DD REFERENTE AO PRIMEIRO DT
const proximoDD = primeiroDt.nextElementSibling

console.log(proximoDD)

// SUBSTITUA O CONTEÚDO HTML DE .FAQ PELO DE .ANIMAIS
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML
