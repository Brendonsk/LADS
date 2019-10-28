let r = Number(prompt("Insira o raio do círculo:")); //janela de prompt que requisita ao usuário que insira um número

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

alert(  "Área = " + area(r).toFixed(2) + "\n" +
        "Perímetro = " + perimetro(r).toFixed(2));
        //.toFixed(a) = função que retorna o valor numérico com precisão de "a" casas decimais
//alert("x") = exibe uma caixa de diálogo para o usuário com a string "x" dentro dela