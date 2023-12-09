
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
    nome: "Frank",
    sobrenome: "Silva",
    altura: 1.78,
    peso: 75,

    nomeCompleto (){
        var nomeCompleto = this.nome +" "+this.sobrenome
        return nomeCompleto 
    }
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: "labrador",
    cor: "Preto",
    idade: "10anos",

    verHome: false,
    late(){

        if(this.verHome) {
            console.log("Cachoro lati")
        }else{
            console.log("Cahorro esta queto")
        }
    }
}

cachorro.verHome = false


  