let h = Number(prompt ("Insira sua altura, em metros:")); //janela de prompt que requisita ao usuário que insira um número
let s = Number(prompt ("Insira seu sexo:\n1 - feminino\n2 - masculino")); //janela de prompt que requisita ao usuário que insira um número

/**Função que calcula e retorna o peso ideal do usuário, de acordo com seu sexo e altura. A fórmula para este cálculo difere de masculino para feminino
 * @param {*} S Sexo do usuário (1 - Masculino; 2 - Feminino)
 * @param {*} H Altura do usuário, em metros
 */
let pesoideal = function(S,H){
    if(S==2){
        return ((72.7*H)-58).toFixed(2);
    }else if(S==1){
        return ((62.1*H)-44.7).toFixed(2);
    }
};

alert("Peso ideal = "+pesoideal(s,h));