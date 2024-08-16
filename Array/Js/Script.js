let fruta = [
    {
        "nome" : "abacaxi" ,
        "indice" : 1
    },
    {
        "nome" : "maca" ,
        "indice" : 2
    },
    {
        "nome" : "banana" ,
        "indice" : 3
    },
    {
        "nome" : "laranja" ,
        "indice" : 4
    },
    {
        "nome" : "uva" ,
        "indice" : 5
    },
    {
        "nome" : "melancia" ,
        "indice" : 6
    },
    {
        "nome" : "pera" ,
        "indice" : 7
    },
    {
        "nome" : "manga" ,
        "indice" : 8
    },
    {
        "nome" : "kiwi" ,
        "indice" : 9
    }
];

console.log("------------------------------------------------------------------------------");

let novasFrutas2 = fruta.map((ItemDoArray) => {
    console.log("MINHAS FRUTAS : " , ItemDoArray);
    return ItemDoArray
});

console.log("------------------------------------------------------------------------------");

let ObjFrutas = fruta.map((fruta , ind , arr) => {
    return {
        "nome" : fruta ,
        "indice" : ind+1 ,
    }
});

console.log(ObjFrutas)

console.log("------------------------------------------------------------------------------");

let precos = [
    {"id" :1 , "preco" : 10 },   
    {"id" : 2 ,"preco" : 20 },
    {"id" : 3 ,"preco" : 30 },
    {"id" : 4 ,"preco" : 40 },
    {"id" : 5 ,"preco" : 50 },
    {"id" : 6 ,"preco" : 60 },
    {"id" : 7 ,"preco" : 70 },
    {"id" : 8 , "preco" : 80 },
    {"id" : 9 , "preco" : 90},
];

let frutamaisPreco = fruta.map((fruta) => {
    //Junte as duas arrays e retorne uma nova array com o nome e o valor de cada fruta
    let preco = precos.find((preco) => preco.id === fruta.indice);
    return {...fruta , preco : preco ? preco.preco : null};
});

console.log(frutamaisPreco)

console.log("------------------------------------------------------------------------------");

const numeros = [ 1 , 2 , 3 , 4 , 5];
console.log(numeros)
const TALVEZPASSAR = numeros.filter(item => item > 1);
console.log(TALVEZPASSAR);

const pares =numeros.filter(item => item % 2 === 0);
console.log(pares)

console.log("------------------------------------------------------------------------------");

let alunos = [
    {"nome" : "joao" , "Senha" : "123" },
    {"nome" : "maria" , "Senha" : "456" },
    {"nome" : "pedro" , "Senha" : "789" },
    {"nome" : "lucas" , "Senha" : "321" }
]

const logado = alunos.filter((aluno) => {
    return aluno.Senha === "123"
});

console.log("------------------------------------------------------------------------------");

let numero = [1 ,2,3,4,5,6,7,8,9,10];
numero.forEach((item) => {
    console.log(item)
});

console.log("------------------------------------------------------------------------------");

const soma = numero.reduce(function(total , item){
    return total + item;
} , 0);

console.log(soma)

console.log("------------------------------------------------------------------------------");

let novoArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
novoArray.forEach((item) => {
    console.log(item);
});

console.log("------------------------------------------------------------------------------");

const FRUTASABAIXO = frutamaisPreco.filter((fruta) => fruta.preco < 10);
console.log(FRUTASABAIXO);
