// Adicione a classe ativo a todos os itens do menu

// const menu = document.querySelectorAll('.menu li a')


// menu.forEach((a) => {
//   a.classList.add("ativo")
//   console.log(a)
// })

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// menu.forEach((a) => {
//   a.classList.remove("ativo")

// })

// const menu1 = document.querySelector(".menu li a")

// menu1.classList.add('ativo')

// console.log(menu)

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img")


imgs.forEach((img) =>  console.log(img.hasAttribute('alt')))

// Modifique o href do link externo no menu

const linkExterno = document.querySelector(".menu  a[href^=https]")

linkExterno.setAttribute('href', 'https://www.origamid.com/slide/javascript-completo-es6/#/2')
