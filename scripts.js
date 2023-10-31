var n1, n2;
var resp;
var indiceOpCorrecta;

txt_suma=document.querySelector("#suma");
op1=document.querySelector("#op1");
op2=document.querySelector("#op2");
op3=document.querySelector("#op3");
txt_msj=document.querySelector("#msj");
txt_resultado=document.querySelector("#resultado");

function comenzar(){
   txt_resultado.innerHTML ="?"; 
   txt_msj.innerHTML = "";   

   n1 = Math.round(Math.random()*9);
   n2 = Math.round(Math.random()*9);
   resp = num1 + num2;

   txt_suma.innerHTML = `${n1} + ${n2} =`;

   indiceOpCorrecta=Math.round(Math.random()*2);
   if(indiceOpCorrecta===0){
      op1.innerHTML = resp;
      op2.innerHTML = resp + 1;
      op3.innerHTML = resp - 1;    
   }
   if(indiceOpCorrecta===1){
    op2.innerHTML = resp;
    op1.innerHTML = resp + 2;
    op3.innerHTML = resp - 1;    
 }
 if(indiceOpCorrecta===2){
  op3.innerHTML = resp;
  op1.innerHTML = resp + 1;
  op2.innerHTML = resp - 1;    
}

}


function controlarRespuesta(opcionElegida) {
  txt_resultado.innerHTML=opcionElegida.innerHTML;
  
  if(resp == opcionElegida.innerHTML){
      txt_msj.innerHTML= "EXCELENTE!!";
      txt_msj.style.color="green";
      setTimeout(comenzar, 2000);    
  }else{
    txt_msj.innerHTML="INTENTA DE NUEVO!!";
    txt_msj.style.color="red";
    setTimeout(limpiar,2000);
  }
}

function limpiar(){
    txt_resultado.innerHTML="?";   
    txt_msj.innerHTML=""; 
}

comenzar();
