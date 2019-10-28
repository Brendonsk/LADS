let n1 = Number(prompt("Insira sua primeira nota: "));
let n2 = Number(prompt("Insira sua segunda nota: "));

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