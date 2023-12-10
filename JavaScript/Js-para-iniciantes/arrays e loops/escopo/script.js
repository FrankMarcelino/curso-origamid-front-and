// Por qual motivo o código abaixo retorna com erros?
// {
//     var cor = 'preto';
//     const marca = 'Fiat';
//     let portas = 4;
// }
//   console.log(var, marca, portas);
//   R.porque o console.log está fora do bloco e variaveis declaradas como const e let só podem ser acessadas dentro do bloco
  
  // Como corrigir o erro abaixo?
//   const dois = 2;
//   function somarDois(x) {
   
//     return console.log(x + dois)
//   }
//   function dividirDois(x) {
//     return console.log( x / dois)
//   }
//   somarDois(4);
//   dividirDois(6);
  
  // O que fazer para total retornar 500?
  let numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);