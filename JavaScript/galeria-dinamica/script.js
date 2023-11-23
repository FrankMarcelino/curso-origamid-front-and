const images = document.querySelectorAll('#galeria li img')


function trocarImagem(event) {
    const principal = document.querySelector("#imagem-principal");
    const clicada = event.currentTarget;
    principal.setAttribute('src',clicada.getAttribute('src'));
    principal.setAttribute('alt',clicada.getAttribute('alt'));
    
}

function galeriaClique(imagem) {
    imagem.addEventListener('click', trocarImagem)
}

images.forEach(galeriaClique)