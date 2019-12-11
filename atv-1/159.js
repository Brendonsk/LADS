let n1 = Number(prompt("Insira n1:"));
let n2 = Number(prompt("Insira n2:"));

let soma_intervalo = function(N1,N2){
    if(N1>N2){
        N2 = [N1, N1 = N2][0];
    }
    
    soma = 0;

    for (let index = N1; index <= N2; index++) {
        soma+=index;
    }

    return soma;
}

alert(soma_intervalo(n1,n2))