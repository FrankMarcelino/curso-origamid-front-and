
// ---- Minha Solução ----

// const adicionar = document.querySelector('.adicionar')
// const elemento = document.querySelector('button')
// var res = window.document.querySelector('div#res')
// var s = 0

// if (Boolean(elemento)) {
//     function somar() {
//         if(s < 10) {
//         s = s + 1
//         res.innerHTML = s
//     }else {
//         console.log("Não é possivel add mais")
//     }
//     }
// }


// // A função passada é chamada de callback
// adicionar.addEventListener('click', somar)


// ==== solução do professosr================

const botao =  document.querySelector("button")

function somar() {
    const div = document.querySelector("div")
    const total = Number(div.innerText) + 1
    if (total < 10) {
        div.innerText = total
    }else {
        console.log("Não é possivel adicionar mais")
    }
}

if (botao) {
    botao.addEventListener("click", somar)
}