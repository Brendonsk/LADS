let n1 = Number(prompt("Insira sua primeira nota: "));//janela de prompt que requisita ao usuário que insira um número
let n2 = Number(prompt("Insira sua segunda nota: "));//janela de prompt que requisita ao usuário que insira um número

/**Função que calcula e retorna a média das duas notas passadas como parâmetros
 * 
 * @param {*} N1 Primeira nota
 * @param {*} N2 Segunda nota
 */
let media = function(N1,N2){
    let mensagem = "";
    sm = (N1+N2)/2;
    if(sm>=6){
        mensagem+="PARABÉNS! Você foi aprovado!\n";
    }
    mensagem+="Média semestral = " + sm;
    return mensagem;
};

alert(media(n1,n2))