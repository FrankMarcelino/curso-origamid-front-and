// Verifique se a sua idade é maior do que a de algum parente

var minhaIdade = 31
var idadeParente = 26
var resultado = minhaIdade - idadeParente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (resultado > 0) {
    console.log("é maior")
}else if  (resultado === 0) {
    console.log("é igual")
}else {
    console.log("é menor")
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// R:3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
var direfenca = china - brasil

console.log(direfenca)

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// R: apareceu falso porque 'Gato' não extamente igual a 'gato'
// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// R: apareceu Cão porque porque o operador logico || só precisa de um valor true, no caso 5 é maior que 2. No console aparece apenas cão porque o operador logioco && encontrou todos valores como true, neste caso ele considera o ultimo valor