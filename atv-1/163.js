let alinhar = function(cadeia)
{   
    saida = "";
    for (let index = 0; index < ((80-cadeia.length)/2); index++) {
        saida+=" "     
    }
    saida+=cadeia
    alert(saida)
}

c = prompt("Insira a cadeia de caracteres:");
c.length <= 60 ? alinhar(c) : alert("Tamanho da cadeia excedido");