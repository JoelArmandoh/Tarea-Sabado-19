function IMC(){

nombre= document.getElementById("name").value;
numero1= document.getElementById("num1").value;
numero2= document.getElementById("num2").value;
res="";

res= (Math.pow(numero1,2)) (numero1/numero2);
Resultado= document.getElementById("btn").innerHTML=res;
alert("Tu nombre es" + numero1 + res);



}