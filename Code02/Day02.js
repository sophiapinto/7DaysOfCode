//#7DaysOfCode
//Lógica JS 2/7: 👩🏽‍💻 Variáveis

/*
O alert() é usado para mostrar uma mensagem simples ao usuário.

Exemplo:

alert("Olá, pessoal!");

O prompt() precisa que o usuário insira algum valor, que você poderá manipular.

Exemplo:

const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);

*/

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const mensagem = "Olá, " + nome + " você tem " + idade + " anos e já está aprendendo " + linguagem +" !";

alert(mensagem);