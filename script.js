console.log("Hello, World") 

function verificarPar(numero) {
    if (numero % 2 === 1) {
    console.log("impar" + numero);
}   else   {
    console.log("par" + numero);
}
}

verificarPar(10);

//////////////////////////////

function calcular(num1, num2) {
    
    console.log(num1 + num2);
    console.log(num1 * num2);
    console.log(num1 - num2);


}

calcular(1,2);

//////////////////////////////

let contador = 10;
while (contador > 0) {
    console.log(contador);
    contador--;
}

//////////////////////////////

function calcular(num1, num2) {
    
    console.log(num1 + num2);
    console.log(num1 * num2);
    console.log(num1 - num2);


}

calcular(1,2);
//////////////////////////////

{
let original = "JavaScript";
let reversed = original.split("").reverse().join("");
console.log(reversed);

}

//////////////////////////////

var str = "guilherme";
var n = str.length;
console.log(n);


//////////////////////////////

let carro ={
modelo: "Fiat",
marca: "Argo",
ano: "2023"
    
}
console.log(carro.modelo);

//////////////////////////////

function mensagemPersonalizada (nome, mensagem = "Olá") {
    console.log (mensagem,nome);
}

mensagemPersonalizada ("Guilherme");
mensagemPersonalizada ("Guilherme", "Bom dia!");

//////////////////////////////

function media(n1, n2, n3){

    media = (Number(n1) + Number(n2) + Number(n3))/3 ;
    console.log(media);
    }
    media(prompt("N1"), prompt("N2: "), prompt("N3: "));

/////////////////////////////////


for(multiplo=1; multiplo<=20; multiplo++){
    if (multiplo % 3 == 0)
    {
       console.log(multiplo + " multiplo de 3");
    }else{
        console.log(multiplo + " não é multiplo de 3");
    }

}


//////////////////////////////


function verificarpalindromo(str){
    str2 = str.split(" ");
    str2 = str2.reverse();
    str2 = str2.join(" ");
    return console.log(str === str2);

}
verificarpalindromo(prompt("Digite algo"))

//////////////////////////////

function verificarSinal