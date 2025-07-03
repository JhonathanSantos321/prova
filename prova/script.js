 let mostraHTML = document.getElementById("mostraHTML");

let time1;
let time2;
let time3;

let nome1;
let nome2;
let nome3;

let idade_1;
let idade_2;
let idade_3;


function cadastro(){


    time1 = (window.prompt("digite o nome do time: ")).toUpperCase();
    mostraHTML.innerHTML += `<p> ${time1} e seus integrantes sao: </p> `
    

    nome1 = (window.prompt("digite o nome do jogador 1: "));
   

    nome2 = (window.prompt("digite o nome do jogador 2: "));
  
    
    nome3 = (window.prompt("digite o nome do jogador 3: "));
   

    var idade_1 = Number(window.prompt("digite sua 1 nota: "));

   var idade_2 = Number(window.prompt("digite sua 2 nota: "));
 
   var idade_3 = Number(window.prompt("digite sua 3 nota: "));
     
    

     media_idade = (idade_1 + idade_2 + idade_3)/3;
     mostraHTML.innerHTML += `<p> a media e de: ${media_idade} </p>`
     console.log(media_idade)

     


   
var nota1 = Number(window.prompt("digite sua nota: "));
var nota2 = Number(window.prompt("digite sua 2 nota: "));
var nota3 = Number(window.prompt("digite sua 3 nota: "));
    
    
   
mostraHTML.innerHTML += `<p> ${nome3} tem ${idade_3} anos  </p>`
    

}