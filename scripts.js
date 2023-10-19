var num1, num2;
var respuesta;
var indiceOpCorrecta;

txt_suma=document.getElementById("suma");
op1=document.getElementById("op1");
op2=document.getElementById("op2");
op3=document.getElementById("op3");
txt_msj=document.getElementById("msj");
txt_resultado=document.getElementById("resultado");

function comenzar(){
   txt_resultado.innerHTML ="?"; 
   txt_msj.innerHTML = "";   

   num1 = Math.round(Math.random()*9);
   num2 = Math.round(Math.random()*9);
   respuesta = num1 + num2;

   txt_suma.innerHTML = num1 + " + " + num2 + " = ";
}

comenzar();