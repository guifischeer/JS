console.log("Hello, World") 

function verificarPar(numero) {
    if (numero % 2 === 1) {
    console.log("impar" + numero);
}   else   {
    console.log("par" + numero);
}
}

verificarPar(10);

function calcular(num1, num2) {
    
    console.log(num1 + num2);
    console.log(num1 * num2);
    console.log(num1 - num2);


}

calcular(1,2);

let contador = 1;

while (contador <= 10) {

    console.log("Número:", contador);


}