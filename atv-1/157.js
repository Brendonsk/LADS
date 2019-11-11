let n = parseInt(prompt("Insira um número inteiro:")); //Recebe uma string contendo um numero inteiro e converte-a para inteiro
/**Função que recebe um número inteiro e retorna o fatorial deste número
 * 
 * @param {int} N 
 */
let fatorial = function(N)
{
    if (N>1) {
        return (N * fatorial(N-1));
    } else {
        return 1;
    }
};

alert(`${n}! = ${fatorial(n)}`)