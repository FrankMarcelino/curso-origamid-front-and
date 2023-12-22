// // Crie uma função construtora de Pessoas
// // Deve conter nome, sobrenome e idade
// // Crie um método no protótipo que retorne
// // o nome completo da pessoa

// function Pessoas(nome, sobrenome, idade) {
//     this.nome = nome,
//     this.sobrenome = sobrenome,
//     this.idade = idade


// }

// const frank = new Pessoas('Frank ', 'Silva', 31)

// Pessoas.prototype.nomeCompleto = function() {
//     const nomeCompleto = this.nome + this.sobrenome     
//     return  console.log(nomeCompleto)
// }   

// frank.nomeCompleto()
// // Liste os métodos acessados por 
// // dados criados com; 

// // NodeList

// const listaMetodosNodeList = Object.getOwnPropertyNames(NodeList.prototype)

// console.log(listaMetodosNodeList)

// // HTMLCollection

// const listaMetodosHTMLCollection = Object.getOwnPropertyNames(HTMLAllCollection.prototype)

// console.log(listaMetodosHTMLCollection)


// //Document

// const listaMetodosDocument = Object.getOwnPropertyNames(Document.prototype)

// console.log(listaMetodosDocument)



// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;  //HTMLLIElement
let nomeElementoContrutor = li.constructor.name
console.log(nomeElementoContrutor)

li.click; //Function
nomeElementoContrutor = li.click.constructor.name
console.log(nomeElementoContrutor)

li.innerText; //string
nomeElementoContrutor = li.innerText.constructor.name
console.log(nomeElementoContrutor)

li.value; //number
nomeElementoContrutor = li.value.constructor.name
console.log(nomeElementoContrutor)

li.hidden; //boolean
nomeElementoContrutor = li.hidden.constructor.name
console.log(nomeElementoContrutor)

li.offsetLeft; //number
nomeElementoContrutor = li.offsetLeft.constructor.name
console.log(nomeElementoContrutor)

li.click(); //underfined
// nomeElementoContrutor = li.click().constructor.name
// console.log(nomeElementoContrutor)


// Qual o construtor do dado abaixo:
li.hidden.constructor.name //string CUIDADO COM AS PEGADINHAS