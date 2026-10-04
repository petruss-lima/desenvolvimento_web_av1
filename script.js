const filme1 = "The Batman";
let preco1 = 14.99;

function alugarFilme1() {
    alert(filme1 + " Está Disponível para Aluguel por R$ " + preco1);
}

const filme2 = "Interestelar";
let preco2 = 7.99;

function alugarFilme2(){
    alert(filme2 + " Está Disponível para Aluguel por R$" + preco2);
}

const filme3 = "Piratas do Caribe: A Maldição do Pérola Negra";
let preco3 = 5.99;

function alugarFilme3(){
    alert(filme3 + " Está Disponível para Aluguel por R$" + preco3);
}

const filme4 = "O Podereoso Chefão";
let preco4 = 3.99;

function alugarFilme4(){
    alert(filme4 + " Está Disponível para Aluguel por R$" + preco4);
}

const filme5 = "Vingadores: Ultimato";
let preco5 = 12.99;

function alugarFilme5(){
    alert(filme5 + " Está Disponível para Aluguel por R$" + preco5);
}

const filme6 = "Toy Story 3";
let preco6 = 2.99;

function alugarFilme6(){
    alert(filme6 + " Está Disponível para Aluguel por R$" + preco6);
}

const filme7 = "Midsommar: O Mal Não Espera a Noite";
let preco7 = 8.99;

function alugarFilme7(){
    alert(filme7 + " Está Disponível para Aluguel por R$" + preco7);
}

const filme8 = "De Volta Para o Futuro";
let preco8 = 1.99;

function alugarFilme8(){
    alert(filme8 + " Está Disponível para Aluguel por R$" + preco8);
}

const filme9 = "Invocação do Mal";
let preco9 = 6.99;

function alugarFilme9(){
    alert(filme9 + " Está Disponível para Aluguel por R$" + preco9);
}

const filme10 = "Carros";
let preco10 = 3.99;

function alugarFilme10(){
    alert(filme10 + " Está Disponível para Aluguel por R$" + preco10);
}

const filme11 = "Deadpool";
let preco11 = 6.99;

function alugarFilme11(){
    alert(filme11 + " Está Disponível para Aluguel por R$" + preco11);
}

const filme12 = "Harry Potter e a Pedra Filosogal";
let preco12 = 4.99;

function alugarFilme12(){
    alert(filme12 + " Está Disponível para Aluguel por R$" + preco12);
}

const filmes = ["The Batman", "Interestelar", "Piratas do Caribe", "O Poderoso Chefão", 
    "Vingadores: Ultimato", "Toy Story 3", "Midsommar: O Mal Não Espera a Noite", "De Volta Para o Futuro",
    "Invocação do Mal", "Carros", "Deadpool", "Harry Potter e a Pedra Filosofal"
];

if (filmes.length > 0) {
console.log("Existem filmes disponíveis para aluguel.");
console.log("Quantidade de filmes: " + filmes.length);
} else {
console.log("Não existem filmes disponíveis.");
}
