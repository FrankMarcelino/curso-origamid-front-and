// =============== navegação por tabs ========================
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

// ====================== Accordion List =============================
function initAccordionList() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const ativoClass  = 'ativo'
    if (accordionList.length) {
        accordionList[0].classList.add(ativoClass)
        accordionList[0].nextElementSibling.classList.add(ativoClass)
        function activeAccordion() {
            this.classList.toggle(ativoClass)
            this.nextElementSibling.classList.toggle(ativoClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}

initAccordionList()
