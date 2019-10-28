let r = prompt("Insira o raio do círculo:"); //janela de prompt que requisita ao usuário que insira um número

let area = function(raio){ //função que a área duma circunferência
    //Math.pow(a,b) = função da biblioteca Math que calcula a base "a" elevada ao expoente "b"
    //Math.PI = constante da biblioteca Math equivalente ao número irracional "pi"
    return Math.PI*Math.pow(raio,2);
};

let perimetro = function(raio){//função que calcula o perímetro duma circunferência
    return Math.PI*2*raio;
};

alert(  "Área = " + area(r).toFixed(2) + "\n" +
        "Perímetro = " + perimetro(r).toFixed(2));
        //.toFixed(a) = função que retorna o valor numérico com precisão de "a" casas decimais