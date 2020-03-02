/**
 * Função que recebe um número inteiro inserido pelo usuário e retorna verdadeiro caso ele seja par, e falso caso ele seja ímpar
 */

 let paridade = function() {
    
    par = document.getElementById("formulario").par.value;
    if(par)
    {
        par=parseInt(par);
        document.getElementById("caixa_colorida_saida").setAttribute("class","saida");
        if (par%2==0) {
            document.getElementById("caixa_colorida_saida").innerHTML = "Par";
            document.getElementById("caixa_colorida_saida").setAttribute("style","background-color:green");
        } else {
            document.getElementById("caixa_colorida_saida").innerHTML = "Ímpar";
            document.getElementById("caixa_colorida_saida").setAttribute("style","background-color:rgb(214, 65, 65)");
        }
    }
    else{
        alert("O campo não pode estar vazio!")
    }
};

//alert(paridade());//execução da função paridade
//alert("x") = exibe uma caixa de diálogo para o usuário com a string "x" dentro dela