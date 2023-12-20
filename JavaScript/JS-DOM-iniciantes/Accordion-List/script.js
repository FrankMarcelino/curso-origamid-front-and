function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabConteudo = document.querySelectorAll('.js-tabcontent section')
    tabConteudo[0].classList.add('ativo')

    if (tabMenu.length && tabConteudo.length) {
        function activeTab(index) {
            tabConteudo.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabConteudo[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }

}

initTabNav()


const accordionList = document.querySelectorAll('.js-accordion dt')

function activeAccordion() {
    this.classList.add('ativo')
    this.nextElementSibling.classList.add('ativo')
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})    