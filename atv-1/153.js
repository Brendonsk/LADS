/**Função que calcula e retorna uma temperatura em graus Celsius dado uma temperatura em graus Fahrenheit
 * 
 * @param {*} F Temperatura em graus Fahrenheit
 */
let C = function(F){
  return ((F-32)/9)*5;
}

let calculos = function(){
  document.getElementById("resultado").setAttribute("style","visibility:visible");
  fahrenheit = document.getElementById("formulario").fahrenheit.value;
  if (fahrenheit) {
    fahrenheit = parseFloat(fahrenheit);
    document.getElementById("celsius").innerHTML= fahrenheit.toFixed(1) + "°F = " + C(fahrenheit).toFixed(1) + "°C";
  }
  else{
    document.getElementById("celsius").innerHTML="";
  }
}
//.toFixed(a) = função que retorna o valor numérico com precisão de "a" casas decimais