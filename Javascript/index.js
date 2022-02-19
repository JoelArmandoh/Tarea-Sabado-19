function IMC(){

let nombre= document.getElementById("name").value;
let numero1= document.getElementById("num1").value /100;
let numero2= document.getElementById("num2").value;

res="";

let imc = numero1 / numero2 ** 2;

    if (imc < 18.5) {
      res="Esta en su peso magro"
    } else if (imc < 24.9) {
      res=" Esta en su peso normal"
    } else if (imc < 29.9) {
      res="Esta está com sobrepeso"
    } else if (imc < 39.9) {
      res="Esta con obesidad"
    } else if (imc > 39.9) {
      res="Esta con muuucha obesidad "
    }
    document.getElementById("resultados").innerText=  nombre +" " + res ; 
  }
