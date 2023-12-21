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


function Dom(seletor) {
    const elements = document.querySelectorAll(seletor)
    
    
    this.addClass = function(classe) {
        elements.forEach((elemento) => {
            elemento.classList.add(classe)
        })  
    }

    this.removeClass = function(classe) {
        elements.forEach((elemento) => {
            elemento.classList.remove(classe)
        })  
    }


}

const lista = new Dom('li');
lista.addClass('ativo');
// lista.removeClass();

//   const lastLi = new Dom('li:last-child');
//   lastLi.ativo('ativo');