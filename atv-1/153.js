tempF = Number(prompt("Insira a temperatura em graus Fahrenheit: ")); //janela de prompt que requisita ao usuário que insira um número

/**Função que calcula e retorna uma temperatura em graus Celsius dado uma temperatura em graus Fahrenheit
 * 
 * @param {*} F Temperatura em graus Fahrenheit
 */
let C = function(F){
    return ((F-32)/9)*5;
}

alert("Temperatura em graus Celsius: " + C(tempF).toFixed(1));
//.toFixed(a) = função que retorna o valor numérico com precisão de "a" casas decimais
//alert("x") = exibe uma caixa de diálogo para o usuário com a string "x" dentro dela