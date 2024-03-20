//Exercicio Consoante e Vogais usando 3 fors

let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j',
    'k', 'l', 'm', 'n', 'p', 'q', 'r',
    's', 't', 'v', 'x', 'y', 'w', 'z'
];

let texto = 'Faltam meia hora para ir embora';

texto = texto.toLowerCase();

let arrayLetras = texto.split('');
let arrayConsoantes = [];
let arrayVogais = [];
let arrayEspaços = [];

for (let i = 0; i < arrayLetras.length; i++) {
    if (vogais.includes(arrayLetras[i])) {
        arrayVogais.push(arrayLetras[i])
    }
}

for (let j = 0; j < arrayLetras.length; j++) {
    if (consoantes.includes(arrayLetras[j])) {
        arrayConsoantes.push(arrayLetras[j])
    }
}

for (let k = 0; k < arrayLetras.length; k++) {
    arrayEspaços.push(arrayLetras[k])
}

console.log('Texto: ' + texto);
console.log('Vogais encontradas: ' + arrayVogais.toString());
console.log('Total de vogais: ' + arrayVogais.length);

console.log('Texto: ' + texto);
console.log('Vogais encontradas: ' + arrayConsoantes.toString());
console.log('Total de consoantes: ' + arrayConsoantes.length);

console.log('Total de espaços: ' + arrayEspaços.length);

//Exercicio de Consoantes e Vogais usnado 1 for

let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j',
    'k', 'l', 'm', 'n', 'p', 'q', 'r',
    's', 't', 'v', 'x', 'y', 'w', 'z'
];

let text = 'Preciso dormir';

text = text.toLowerCase();

let arrayLetters = text.split('');

let arrayVowels = [];
let arrayConsonants = [];
let Spaces = 0;

for (let i = 0; i < arrayLetters.length; i++) {
    if (vowels.includes(arrayLetters[i])) {
        arrayVowels.push(arrayLetters[i]);
    } else if (consonants.includes(arrayLetters[i])) {
        arrayConsonants.push(arrayLetters[i]);
    } else {
        Spaces++;
    }
}

console.log('Texto: ' + text);
console.log('Vogais encontradas: ' + arrayVowels);
console.log('Total de vogais: ' + arrayVowels.length);

console.log('Texto: ' + text);
console.log('Consoantes encontradas: ' + arrayConsonants);
console.log('Total de consoantes: ' + arrayConsonants.length);
console.log('Total de espaços: ' + Spaces);