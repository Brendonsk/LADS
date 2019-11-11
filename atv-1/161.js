/**Função que recebe uma entrada do usuário e valida a mesma, caso seja um número
 *inteiro maior do que o limite inferior e menor ou igual ao limite superior
 * 
 * @param {*} n1 1º limite do intervalo de entrada aceito pela função
 * @param {*} n2 2º limite do intervalo de entrada aceito pela função
 */
let LeNumero = function(n1,n2)
{
    if (n1>n2) {[n1,n2] = [n2,n1]}
    invalido = false;

    msg = `Insira um número inteiro entre ${n1} e ${n2}:`
    msgInvalid = `Número inválido. Digite novamente!`

    while (true) {
        if (invalido) {
            x = prompt(`${msgInvalid}\n${msg}`);
        } else {
            x = prompt(msg);
        }
        if (x == null) { //Comparação para verificar se o usuario cancelou a entrada de dados
            return       //Finaliza a função
        } else {
            x = parseInt(x)
            if (n1 < x && x <= n2) {
                break;
            } else {
                invalido = true;
            }
        }
    }
    return x;
};

/**Função que calcula e exibe para o usuário a tabuada de um dado número inteiro
 * 
 * @param {*} n Número inteiro do qual será calculada a tabuada
 */
let Tabuada = function(n)
{
    if (n == null) {    //Comparação para verificar se o usuario cancelou a entrada de dados
        return
    } else {
        tabuada=``;     //String na qual será salva a tabuada do número n

        for (let i = 0; i <= 10; i++) {
            tabuada += `${n} x ${i} = ${n*i}\n`;        
        }
        alert(tabuada);
    }
}

Tabuada(LeNumero(1,10))