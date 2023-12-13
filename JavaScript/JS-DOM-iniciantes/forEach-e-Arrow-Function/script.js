// Mostre no console cada parágrado do site
// const paragrafosSite = document.querySelectorAll('p')

// paragrafosSite.forEach((paragrafo) => console.log(paragrafo))


// Mostre o texto dos parágrafos no console

// const paragrafosSite = document.getElementsByTagName('p')

// const paragrafoArray = Array.from(paragrafosSite);

// paragrafoArray.forEach((a) => {
//     let paragrafo = a.in 
//     console.log(paragrafo)
// })



// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);