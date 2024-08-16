//Manipulação de Arrays
//Declaração de array de frutas
let frutas = ["maçã", "banana", "laranja", "morango","jambo"];

//Imprime o array de frutas
console.log(frutas);
console.table(frutas);

//Ler um único item do array:
console.log(frutas[0]); //maçã

//Alterar um item do array:
frutas[0] = "abacaxi";
console.log(frutas[0]); //abacaxi

//Adicionar um item no final do array:
frutas.push("uva");
console.log(frutas[5]); //uva

//Adicionar um item no comeco do array:
frutas.unshift("manga");
console.log(frutas[0]); //manga

 //Lendo um array com loops for, for of e for in:
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for(let fruta of frutas){
    console.log(fruta);
}

for(let i in frutas){
    console.log(frutas[i]);
}

//Removendo um item do array:
frutas.pop();
console.log(frutas[frutas.length - 1]); //uva

frutas.shift();
console.log(frutas[0]); //manga