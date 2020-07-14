//var nome = "Hitalo Dantas";
//var idade = 28;
//var frase = "Japão melhor time do mundo";

//alert(nome + " tem " + idade);
//alert("Primeiro JS");

//console.log(frase);

//replace troca a palavra especificada 
//console.log(frase.replace("Japão", "Brasil"));

//toUpperCase() DEIXA A FRASE EM MAIÚSCULO
//console.log(frase.toUpperCase());

//toLowerCase() DEIXA A FRASE EM MINÚSCULO 
//console.log(frase.toLowerCase());

//ARRAY//
//var lista = ["banana","maçã", "pêra"];

//DICIONÁRIO//
//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//alert(frutas[1].nome);

//push ADICIONA NA LISTA
//lista.push("uva");

//pop RETIRA O ÚLTIMO ELEMENTO
//lista.pop();

//length QUANTIDADE DE ELEMENTOS NA LISTA
//console.log(lista.length);

//reverse() REVERTE A ORDEM DA LISTA
//console.log(lista.reverse());

//ToString() TRANSFORMA EM STRING
//console.log(lista.toString());

//Joim ADICIONA ESPAÇAMENTO OU RETIRA
//console.log(lista.join(" - "));

//DICIONÁRIO//
//console.log(frutas[1].nome);
//alert(frutas.cor);

//CONDICIONAIS//

//PROMPT
/*var idade = prompt("Qual sua idade? ");
if (idade < 18){
    alert("você é de menor");
}else{
    alert("você é de maior");
};*/

//REPETIÇÃO
/*var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count++;
};*/


/*var count;
for (count=0; count <= 5; count++){
    alert(count);
};*/


//DATE
/*var d = new Date();
//alert(d); // DIA, HORA, MES, ANO ETC.
alert(d.getMonth()); // MÊS
alert(d.getSeconds()); // SEGUNDOS*/


//FUNÇÕES

/*function soma(n1, n2, n3){
    return n1 + n2 +n3;
};

alert(soma(10, 10, 30));*/

/*function validaIdade(idade){
    var validar;

    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));*/


//ONCLICK

/*function botao(){
    alert("Obrigado por clicar")
};*/


//ADICIONANDO HTML
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

//REDIRECIONANDO PARA OUTRA ABA(SITE)
function redirecionar(){
    window.open("https://globallabs.academy/");
    //ABRE NA MESMA ABA
    window.location.href = "https://globallabs.academy/"
}

function trocar(){
    alert("trocar texto")
}












