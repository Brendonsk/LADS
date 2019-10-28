let n = Number(prompt("Insira o número de lados do polígono:")); //janela de prompt que requisita ao usuário que insira um número
let l = Number(prompt("Insira a medida do lado do polígono, em cm:")); //janela de prompt que requisita ao usuário que insira um número

/**Função que retorna, de acordo com o N e L, uma das três mensagens: TRIÂNGULO, seguido de seu perímetro, caso N==3; QUADRADO, seguido de sua área, caso N==4; PENTÁGONO, caso N==5
 * 
 * @param {*} N Número de lados do polígono
 * @param {*} L Medida do lado do polígono, em centímetros
 */
let poligono = function(N,L){
    if(N==3) {
        return "TRIÂGULO\nPerímetro = " + (3*L).toFixed(2) + " cm";
    } else if(N==4) {
        return "QUADRADO\nÁrea = " + (L*L).toFixed(2) + " cm";
    } else {
        return "PENTÁGONO";
    }
};

alert(poligono(n,l));