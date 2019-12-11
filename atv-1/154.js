

/**Função que calcula e retorna a média das duas notas passadas como parâmetros
 */
let media = function(){
  nota1 = document.getElementById("formulario").nota1.value;
  nota2 = document.getElementById("formulario").nota2.value;

  if (!(nota1==null ||nota1=="" || nota2==null ||nota2=="")){
    nota1=Number(nota1);
    nota2=Number(nota2);
    sm = (nota1+nota2)/2;
    if(sm>=6){
      document.getElementById("mensagem").hidden=false;
      
    }else{
      document.getElementById("mensagem").hidden=true;
    }
      valor.innerHTML = "Média semestral: "+sm.toFixed(1);
  }else{
    document.getElementById("mensagem").hidden=true
    document.getElementById("valor").innerHTML="";
  }
};

alert(media(nota1,nota2))

