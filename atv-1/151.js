/**
 * Função que recebe um número inteiro inserido pelo usuário e retorna verdadeiro caso ele seja par, e falso caso ele seja ímpar
 */
let paridade = function() {
    n = prompt("Insira um numero inteiro: ")//janela de prompt que requisita ao usuário que insira um número
    if (n%2==0) {//operador de resto(%) utilizado para verificar se o resto da divisão do número inserido é par, caso seja 0, e ímpar, caso seja 1
        return(true);
    } else {
        return(false);
    }
};

paridade();//execução da função paridade