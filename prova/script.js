 let mostraHTML = document.getElementById("mostraHTML");

let time1;
let time2;
let time3;
let time4;

let nome1;
let nome2;
let nome3;

let idade_1;
let idade_2;
let idade_3;


function cadastro(){



    time1 = (window.prompt("digite o nome do 1 time: ")).toUpperCase();
    mostraHTML.innerHTML += `<p> O time <b> ${time1} </b> e seus integrantes sao: </p> `
    

    nome1 = (window.prompt("digite o nome do jogador 1: "));
   

    nome2 = (window.prompt("digite o nome do jogador 2: "));
  
    
    nome3 = (window.prompt("digite o nome do jogador 3: "));
   

    idade_1 = Number(window.prompt("digite sua 1 idade: "));
    mostraHTML.innerHTML += `<p>  <b> ${nome1} </b> tem a idade de  <b>${idade_1}: </b> </p> `

    idade_2 = Number(window.prompt("digite sua 2 idade: "));
    mostraHTML.innerHTML += `<p>  <b> ${nome2} </b> tem a idade de  <b>${idade_2}: </b> </p> `
 
    idade_3 = Number(window.prompt("digite sua 3 idade: "));
    mostraHTML.innerHTML += `<p>  <b> ${nome3} </b> tem a idade de  <b>${idade_3}:  </b></p> `


     media_idade = parseInt(idade_1 + idade_2 + idade_3)/3;
     mostraHTML.innerHTML += `<p> a media  de idade é:  <b>${media_idade}  </b></p>`
     if(media_idade <= 15){
      alert("o time 1 pode jogar o interclasse")
      }else {
        alert("o time 1 nao podera jogar o interclasse")
      }
      mostraHTML.innerHTML += `<p> / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</p> `


      time2 = (window.prompt("digite o nome do 2 time: ")).toUpperCase();
    mostraHTML.innerHTML += `<p> O time <b> ${time2} </b> e seus integrantes sao: </p> `
    

    nome1 = (window.prompt("digite o nome do jogador 1: "));
   

    nome2 = (window.prompt("digite o nome do jogador 2: "));
  
    
    nome3 = (window.prompt("digite o nome do jogador 3: "));
   

    idade_1 = Number(window.prompt("digite sua 1 idade: "));
    mostraHTML.innerHTML += `<p>  <b>${nome1} </b> tem a idade de  <b>${idade_1}: </b> </p> `

    idade_2 = Number(window.prompt("digite sua 2 idade: "));
    mostraHTML.innerHTML += `<p>  <b>${nome2} </b> tem a idade de  <b>${idade_2}:  </b></p> `
 
    idade_3 = Number(window.prompt("digite sua 3 idade: "));
    mostraHTML.innerHTML += `<p>  <b>${nome3} </b> tem a idade de  <b>${idade_3}:  </b></p> `


     media_idade = parseInt(idade_1 + idade_2 + idade_3)/3;
     mostraHTML.innerHTML += `<p> a media  de idade é:  <b>${media_idade}  </b></p>`
     if(media_idade <= 15){
      alert("o time 2 pode jogar o interclasse")
      }else {
        alert("o time 2 nao podera jogar o interclasse")
      }
      mostraHTML.innerHTML += `<p> / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</p> `

       time3 = (window.prompt("digite o nome do 3 time: ")).toUpperCase();
    mostraHTML.innerHTML += `<p> O time <b> ${time3} </b> e seus integrantes sao: </p> `
    

    nome1 = (window.prompt("digite o nome do jogador 1: "));
   

    nome2 = (window.prompt("digite o nome do jogador 2: "));
  
    
    nome3 = (window.prompt("digite o nome do jogador 3: "));
   

    idade_1 = Number(window.prompt("digite sua 1 idade: "));
    mostraHTML.innerHTML += `<p> ${nome1} tem a idade de ${idade_1}: </p> `

    idade_2 = Number(window.prompt("digite sua 2 idade: "));
    mostraHTML.innerHTML += `<p> ${nome2} tem a idade de ${idade_2}: </p> `
 
    idade_3 = Number(window.prompt("digite sua 3 idade: "));
    mostraHTML.innerHTML += `<p> ${nome3} tem a idade de ${idade_3}: </p> `


     media_idade = parseInt(idade_1 + idade_2 + idade_3)/3;
     mostraHTML.innerHTML += `<p> a media  de idade é:  <b>${media_idade}  </b></p>`
     if(media_idade <= 15){
      alert("o time 3 pode jogar o interclasse")
      }else {
        alert("o time 3 nao podera jogar o interclasse")
      }
      mostraHTML.innerHTML += `<p> / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</p> `
      

      time4 = (window.prompt("digite o nome do 4 time: ")).toUpperCase();
    mostraHTML.innerHTML += `<p> O time <b> ${time4} </b> e seus integrantes sao: </p> `
    

    nome1 = (window.prompt("digite o nome do jogador 1: "));
   

    nome2 = (window.prompt("digite o nome do jogador 2: "));
  
    
    nome3 = (window.prompt("digite o nome do jogador 3: "));
   

    idade_1 = Number(window.prompt("digite sua 1 idade: "));
    mostraHTML.innerHTML += `<p> ${nome1} tem a idade de ${idade_1}: </p> `

    idade_2 = Number(window.prompt("digite sua 2 idade: "));
    mostraHTML.innerHTML += `<p> ${nome2} tem a idade de ${idade_2}: </p> `
 
    idade_3 = Number(window.prompt("digite sua 3 idade: "));
    mostraHTML.innerHTML += `<p> ${nome3} tem a idade de ${idade_3}: </p> `


     media_idade = parseInt(idade_1 + idade_2 + idade_3)/3;
     mostraHTML.innerHTML += `<p> a media  de idade é:  <b>${media_idade}  </b></p>`
     if(media_idade <= 15){
      alert("o time 4 pode jogar o interclasse")
      }else {
        alert("o time 4 nao podera jogar o interclasse")
      }
      mostraHTML.innerHTML += `<p> / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</p> `



}
