// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

const taxa  = document.querySelector('.taxa')
const recebimento  = document.querySelector('.recebimento')
const total  = document.querySelector('.total')


let taxaTotal = 0
let recebimentoTotal = 0
let totalGeral = 0
transacoes.forEach((iten, n) => {
    let estracaoValor = iten.valor
    let numero = +estracaoValor.slice(3)
    
    totalGeral += numero
    total.innerText = `R$ ${totalGeral}`

    if(iten.descricao.slice(0,4) == 'Taxa') {
        
            taxaTotal += numero
        
        
        taxa.innerHTML = `R$ ${taxaTotal}`        
         
    }
    
    if (iten.descricao.slice(0,11) == 'Recebimento'){
    
        recebimentoTotal += numero
       
         recebimento.innerHTML = `R$ ${recebimentoTotal}`
        
    }    

 })



    

//  // Retorne uma array com a lista abaixo
//     const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
//     const arrayTransporte = transportes.split()

//     arrayTransporte.forEach((iten) => {
//         console.log(iten)
//     })
 
  
// //   // Substitua todos os span's por a's
//   const html = `<ul>
//                   <li><span>Sobre</span></li>
//                   <li><span>Produtos</span></li>
//                   <li><span>Contato</span></li>
//                 </ul>`;

//    const a = html.replace(/['span']+/g, 'a')
//    console.log(a)             
  
// //   // Retorne o último caracter da frase
//    const frase = 'Melhor do ano!';
//    const ultimoCaracter = frase.substring(frase.length -1)
//     console.log(ultimoCaracter)
// //   // Retorne o total de taxas
//   const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
//   transacoes.forEach((i,n) => {
//     i = i.toLowerCase()
//     i = i.trim()
   
//     if (i.slice(0,4) == 'taxa') {
//         n++
//         console.log(n)
//     }
//   })
  