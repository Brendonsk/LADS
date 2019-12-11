/**
 * Função que recebe um número inteiro inserido pelo usuário e retorna verdadeiro caso ele seja par, e falso caso ele seja ímpar
 */

// document.getElementById("par").setCustomValidity("O número precisa ser natural (numero ≥ 0)")

let paridade = function() {
    
    par = document.getElementById("formulario").par.value;
    if(par)
    {
        par=parseInt(par);
        document.getElementById("display").setAttribute("class","saida");
        if (par%2==0) {
            document.getElementById("display").innerHTML = "Par";
            document.getElementById("display").setAttribute("style","background-color:green");
        } else {
            document.getElementById("display").innerHTML = "Ímpar";
            document.getElementById("display").setAttribute("style","background-color:rgb(214, 65, 65)");
        }
    }
    else{
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").setAttribute("style","background-color:white");
    }
};

//alert(paridade());//execução da função paridade
//alert("x") = exibe uma caixa de diálogo para o usuário com a string "x" dentro dela