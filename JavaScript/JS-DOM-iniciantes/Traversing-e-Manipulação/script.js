// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const novoMenu = menu;
const cloneMenu = menu.cloneNode(true);
const footer = document.querySelector('.copy');
footer.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq

let primeiroDT = document.querySelector('dl')

let primeiroFilho = primeiroDT.children[0]

let texto = primeiroFilho.outerText

console.log(texto)
// Selecione o DD referente ao primeiro DT
    
const dt = document.querySelector('dl')
const dd = dt.children[1]

const primeiroDD = dd.outerText

console.log(primeiroDD)
// Substitua o conteúdo html de .faq pelo de .animais
const pai = document.querySelector('body')
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

pai.replaceChild(faq,animais)
