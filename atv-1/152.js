/**Função que calcula e retorna a área duma circunferência
 * 
 * @param {*} raio Raio da circunferência
 */
let area = function(raio){
  //Math.pow(a,b) = função da biblioteca Math que calcula a base "a" elevada ao expoente "b"
  //Math.PI = constante da biblioteca Math equivalente ao número irracional "pi"
  return Math.PI*Math.pow(raio,2);
};

/**Função que calcula e retorna o perímetro duma circunferência
 * 
 * @param {*} raio raio da circunferência
 */
let perimetro = function(raio){
  return Math.PI*2*raio;
};

let calculos = function(){
  raio = document.getElementById("formulario").raio.value;
  if(raio){
    raio = parseFloat(raio);
    document.getElementById("area").innerHTML = "Área = "+area(raio).toFixed(2);
    document.getElementById("perimetro").innerHTML = "Perímetro = "+perimetro(raio).toFixed(2);
  }
}
//.toFixed(a) = função que retorna o valor numérico com precisão de "a" casas decimais
//alert("x") = exibe uma caixa de diálogo para o usuário com a string "x" dentro dela