// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const linksInterno = document.querySelectorAll('a[href^="#"]')
// const link = document.querySelector("a")
// linksInterno.forEach((link) => {
//     if(link === link) {
//         function clicouNoLink(event)  {
//             linksInterno.forEach((link) => link.classList.remove("ativo"));
//             event.preventDefault();
//             console.log(event)
//             link.classList.add("ativo")
//             console.log(link)
//         }


//     }else {
//         console.log("esse não é um link interno")
//     }

//     link.addEventListener('click', clicouNoLink)
// })

// =============================================================================================================

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// ==================================================================================================================
// const selecaoBody = document.querySelector('body')

// selecaoBody.addEventListener('click', clicouEm)

// function clicouEm(click) {
//     console.log(click.srcElement)

// }


// function deleElemento(event) {

//   let target = event.srcElement; // onde o clique ocorreu




//   let removeElemento = document.querySelector(target)

//   console.log(removeElemento);


//   removeElemento.classList.add('.remove')

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// =======================================================================
// const selecaoBody = document.querySelector('body');

// function executarCallback(event) {

//     const target = event.target

//     // let removeElemento = document.querySelector(target);

 
//     target.classList.add('remover')

//     const removeElemento = target           

//     console.log(removeElemento)

// }

// selecaoBody.addEventListener('click', executarCallback)

// SOLUÇÃO DO PROFESSOR

// const todosElementos = document.querySelectorAll('body *')

// function removerElementoClicado(event) {
//     event.currentTarget.remove()
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener('click', removerElementoClicado)
// })



// }
// selecaoBody.addEventListener('click', deleElemento);





// const selecaoBody = document.querySelector('body')

// selecaoBody.addEventListener('click', clicouEm)

// function clicouEm(click) {
//     let elemento = click.scrElement
//     elemento.
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


function handleKeyboard(event) {
    if(event.key === 't') {
      document.documentElement.classList.toggle('aumentar-texto');
      console.log(document)
    }
      
    
  }
  
  window.addEventListener('keydown', handleKeyboard);