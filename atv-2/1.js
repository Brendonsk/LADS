//contendo uma Classe pessoa com (nome, idade, sexo, telefone, cpf)

let alinhar = function(cadeia, largura)
{   
    saida = cadeia;
    for (let index = 0; index < (largura-cadeia.length); index++) {
        saida+=" "     
    }
    return(saida)
}

pessoas = []
class pessoa{
    constructor(nome, idade, sexo, telefone, cpf){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.telefone = telefone;
        this.cpf = cpf;
    }
};
parar = false
while (!parar) {
    op = parseInt(prompt
    (
`#####################
        menu
#####################
1 - Cadastrar pessoa
2 - Listagem por sexo
3 - Listagem por idade
4 - Listar todas pessoas
5 - Busca por cpf
6 - Buscar por parte do nome
7 - Sair`
    ))
    lista = "";
    switch (op) {
        case 1:
            
            break;
        case 2:
            
            break;
        case 3:
            
            break;
    
        case 4:
            for (individuo in pessoas){
                lista += `${alinhar(individuo.nome,50)} `+
                         `${alinhar(individuo.idade,3)} `+
                         `${individuo.sexo} `+
                         `${alinhar(individuo.telefone,11)}`+
                         `${cpf}`
            }
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        case 7:
            parar = true;
            break;
        default:
            continue;
    }
}

pessoas.push(new pessoa("a","b","c","d","e"))
console.log(pessoas[0].idade)