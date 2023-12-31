// // Utilizando o foreach na array abaixo,
// // some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//     {
//       descricao: 'Taxa do Pão',
//       valor: 'R$ 39',
//     },
//     {
//       descricao: 'Taxa do Mercado',
//       valor: 'R$ 129',
//     },
//     {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 99',
//     },
//     {
//       descricao: 'Taxa do Banco',
//       valor: 'R$ 129',
//     },
//     {
//       descricao: 'Recebimento de Cliente',
//       valor: 'R$ 49',
//     },
// ];

// const taxa  = document.querySelector('.taxa')
// const recebimento  = document.querySelector('.recebimento')
// const total  = document.querySelector('.total')

// transacoes.forEach((iten) => {
//     let estracaoValor = iten.valor
//     let somarTudo = +estracaoValor.slice(3) 
//     somarTudo += somarTudo

//     total.innerText = `R$ ${somarTudo}`

//     if(iten.descricao.slice(0,4) == 'Taxa') {
        
//         let somarTaxa = +estracaoValor.slice(3) + +estracaoValor.slice(3)
        
        
//         taxa.innerHTML = `R$ ${somarTaxa}`        
         
//     }
    
//     if (iten.descricao.slice(0,11) == 'Recebimento'){
    
//         let somarRecebimento = +estracaoValor.slice(2)
//         somarRecebimento += somarRecebimento
       
//         recebimento.innerHTML = `R$ ${somarRecebimento}`
        
//     }    

//  })



    

 // Retorne uma array com a lista abaixo
    const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
    const arrayTransporte = transportes.split()

    arrayTransporte.forEach((iten) => {
        console.log(iten)
    })
 
  
//   // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

   const a = html.replace(/['span']+/g, 'a')
   console.log(a)             
  
//   // Retorne o último caracter da frase
   const frase = 'Melhor do ano!';
   const ultimoCaracter = frase.substring(frase.length -1)
    console.log(ultimoCaracter)
//   // Retorne o total de taxas
  const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  
  