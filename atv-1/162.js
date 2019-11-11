let Max = function(x,y)
{
    if (x>y) {
        return x;
    } else {
        return y;
    }
}

saida = "";
for (let index = 0; index < 4; index++) {
    a = prompt(`Série ${index+1}:\n\nInsira a:`)

    b = parseInt(prompt(`Série ${index+1}: a = ${a}\n\nInsira b:`))    

    c = parseInt(prompt(`Série ${index+1}: a = ${a}; b = ${b}\n\nInsira c:`))

    d = parseInt(prompt(`Série ${index+1}: a = ${a}; b = ${b}; c = ${c}\n\nInsira d:`))

    alert(`Série ${index+1}: a = ${a}; b = ${b}; c = ${c}; d = ${d}\nPressione OK para continuar`)
    saida+=`Série ${index+1}: Max(${a}, ${b}, ${c}, ${d}) = ${Max(Max(a,b),Max(c,d))}\n`
}
alert(saida)
