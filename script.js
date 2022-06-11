//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 19;
let humana = true;
let aniversario = 'dezembro';
let jan = 'janeiro';
let dez = 'dezembro';
let primeiraLetra = 'R';
let quantidadeLetrasSobrenome = 10;

if(idade>18){
    console.log('sua idade é maior que 18');
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

if(idade>18 && humana==true){
    console.log('você é humana e é maior de idade!')
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

if(aniversario == jan || aniversario == dez){
    console.log('você faz aniversário em'+ ' '+aniversario);
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

if(primeiraLetra == 'R'){
    console.log(primeiraLetra);
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

if(quantidadeLetrasSobrenome > 6 || primeiraLetra === E){
    console.log('mensagem');
}

