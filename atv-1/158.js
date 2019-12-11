/**
 * Função que pergunta ao usuário se deseja continuar executando o programa
 */
let continuar = function(){
    opcao = prompt("Deseja continuar? (S/N):").toUpperCase();
    while (opcao!='S' && opcao!= 'N') { //Caso o caractere inserido não seja uma opção válida, solicita ao usuário que o digite novamente
      opcao= prompt("Caractere inválido. Digite novamente:");
    }
    if (opcao=='S') {
      return true
    } else {
      return false
    }
};

do {
  let numero = Number(prompt("Digite um numero:"));
  alert(numero+"³ = "+Math.pow(numero,3));
} while (continuar());