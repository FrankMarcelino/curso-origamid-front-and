

function livro(nome, ano, autor) {
    const nomeMaiusculo = nome.toUpperCase();
    const totalAnos = 2050 - ano;
    const frase = nome + ' por ' + autor;

    const livroObjeto = {
        nome: nomeMaiusculo,
        totalAnos,
        frase,
    };

    return livroObjeto;
}

const livroRetorno = livro('O senhor dos aneis', 1954, 'J.R.R. Tolkin');
console.log(livroRetorno.frase);