// // Transforme o objeto abaixo em uma Constructor Function
// function Pessoa(nome, idade)  {
//     this.nome = nome,
//     this.idade = idade,

//     this.andou = function() {
//        console.log(this.nome + ' andou')
//     },

//    console.log(this)
// }

// const joao = new Pessoa('João', 20)
// joao.andou()

// // Crie 3 pessoas, João - 20 anos,
// // Maria - 25 anos, Bruno - 15 anos

// const maria = new Pessoa('Maria', 25)
// const bruno = new Pessoa('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function Dom() {
    this.seletor = 'li'
    const elements = document.querySelectorAll(this.seletor)

    console.log(elements)
    this.addClass = function() {
        elements.forEach((elemento) => {
            elemento.classList.add('ativo')
        })  
    }

    this.removeClass = function() {
        elements.forEach((elemento) => {
            elemento.classList.remove('ativo')
        })  
    }


}

const lista = new Dom();
lista.addClass();
lista.removeClass();

//   const lastLi = new Dom('li:last-child');
//   lastLi.ativo('ativo');