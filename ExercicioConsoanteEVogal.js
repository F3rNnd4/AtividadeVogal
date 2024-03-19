//Exercicio Consoante e Vogais com 3 fors

let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's','t','v', 'x', 'y', 'w', 'z'];
let texto = 'Faltam meia hora para ir embora';

texto = texto.toLowerCase();

let arrayLetras = texto.split('');
let arrayConsoantes = [];
let arrayVogais = [];
let arrayEspaços = [];

for(let i = 0; i < arrayLetras.length; i++) {
    if(vogais.includes(arrayLetras[i])) {
        arrayVogais.push(arrayLetras[i])
    }
}

for(let j = 0; j < arrayLetras.length; j++) {
    if(consoantes.includes(arrayLetras[j])) {
        arrayConsoantes.push(arrayLetras[j])
    }
}

for(let k = 0; k < arrayLetras.length; k++) {
    arrayEspaços.push(arrayLetras[k])
}

console.log('Texto: ' + texto);
console.log('Vogais encontradas: ' + arrayVogais.toString());
console.log('Total de vogais: ' + arrayVogais.length);

console.log('Texto: ' + texto);
console.log('Vogais encontradas: ' + arrayConsoantes.toString());
console.log('Total de consoantes: ' + arrayConsoantes.length);

console.log('Total de espaços: ' + arrayEspaços.length);