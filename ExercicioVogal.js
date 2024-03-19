//Desafio da contagem de Vogais com métodos

let word = 'Consoante'; //Declaro uma palavra;
let vowels = ['a', 'e', 'i', 'o', 'u']; //Crio um array/uma lista com as vogais;
let separate = word.split(""); //Crio uma variável que vai dividir a palavra declarada na variável word;

let numOfWords = separate.filter((w) => vowels.includes(w)); //Crio uma variável que vai guardar 
//as condições seguintes que são: filtrar a variável word separada pelo split e verificar se na
//word tem elementos inclusos no vowels;

console.log('Palavra: ' + word) //Exibo qual é a palavra 
console.log('Quantidade de vogais: ' + numOfWords.length); //Exibo a quantidade de vogais usando a 
//variável que guardou todas as condições e o .length para mostrar o comprimento/quantas vogais foram
//inclusas;
console.log('Vogais encontradas: ' + numOfWords); //Exibo as vogais encontradas/filtradas na variável
//numOfWords;

//Desafio da contagem de Vogais do Professor

let vogais = ['a', 'e', 'i', 'o', 'u'];
let texto = 'O rato roeu a roupa do rei de Roma';

texto = texto.toLowerCase();

let arrayLetras = texto.split('');
let arrayVogais = [];

for(let i = 0; i < arrayLetras.length; i++) {
    if(vogais.includes(arrayLetras[i])) {
        arrayVogais.push(arrayLetras[i]);
    }
}

console.log('Texto: ' + texto);
console.log('Vogais encontradas: ' + arrayVogais.toString());
console.log('Total de vogais: ' + arrayVogais.length);