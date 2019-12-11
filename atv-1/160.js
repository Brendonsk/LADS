let avisoInvalido = "\nOpção inválida. Digite novamente";
let avisoMenu ="1. Adição\n \
  * 2. Subtração\n \
  * 3. Multiplicação\n \
  * 4. Divisão\n \
  * 5. Sair do programa\n \
  *********************************************************************";
console.log(avisoMenu);

let menu = function(){
  let invalido = false;
  let escolha = 0;

  while (escolha!=5) {
    if (invalido) {
      escolha = prompt(avisoMenu+avisoInvalido);
    } else {
      escolha = prompt(avisoMenu); 
    }
    switch (escolha) {
      case 1:
        operacao = "Operacao: a + b";
        a = Number(prompt(operacao+"\nInsira a:"));
        b = Number(prompt(operacao+"\nInsira b:"));
        alert(a + " + " + b + " = " + Number(a + b));
        break;

      case 2:
        operacao = "Operacao: a - b";
        a = Number(prompt(operacao+"\nInsira a:"));
        b = Number(prompt(operacao+"\nInsira b:"));
        alert(a + " - " + b + " = " + Number(a - b));
        break;

      case 3:
        operacao = "Operacao: a * b";
        a = Number(prompt(operacao+"\nInsira a:"));
        b = Number(prompt(operacao+"\nInsira b:"));
        alert(a + " * " + b + " = " + Number(a * b));
        break;

      case 4:
        operacao = "Operacao: a / b";
        a = Number(prompt(operacao+"\nInsira a:"));
        b = Number(prompt(operacao+"\nInsira b:"));
        alert(a + " / " + b + " = " + Number(a / b));
        break;
      default:
        invalido = true;
        continue;
    }
  }
};

menu();