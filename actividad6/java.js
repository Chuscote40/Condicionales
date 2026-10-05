let Peso = 80;
let Altura = 1.70;

let imc = 80/(Altura * Altura);
console.log(imc)

if (imc <18.5) {
    console.log("Tienes un imc bajo");
}

else if (imc >=18.5 && imc <=24.9) {
    console.log("Tiene un imc normal");
}

else if (imc >25) {
    console.log("Tienes un imc alto");
}




