//contendo uma Classe pessoa com (nome, idade, sexo, telefone, cpf)
let cadastro = function () {
    let form = document.getElementById("formulario")
    var data = {
        nome: form.nome.value,
        idade: form.idade.value,
        sexo: form.sexo.value,
        telefone: form.telefone.value,
        cpf: form.telefone.cpf
    }
    sessionStorage.setItem('pessoas',(sessionStorage.getItem('pessoas')).concat(data))
}

let alinhar = function(cadeia, largura)
{   
    saida = cadeia;
    for (let index = 0; index < (largura - cadeia.length); index++) {
        saida+="-"     
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

    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }

    get idade(){
        return this._idade;
    }
    set idade(idade){
        this._idade = idade;
    }

    get sexo(){
        return this._sexo;
    }
    set sexo(sexo){
        this._sexo = sexo;
    }

    get telefone(){
        return this._telefone;
    }
    set telefone(telefone){
        this._telefone = telefone;
    }

    get cpf(){
        return this._cpf;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
};

individuo = new pessoa("a","b","c","d","e");
console.log(individuo.nome)
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
            pessoas.push(new pessoa("bom","sintaxe","cu","d","e"));
            pessoas.push(new pessoa("dia","pau","do","d","e"));
            pessoas.push(new pessoa("porra","no","caralho","d","e"));
            break;
        case 2:
            
            break;
        case 3:
            
            break;
    
        case 4:
            for (individuo of pessoas){
                console.log(individuo.nome)
                lista += `${alinhar(individuo.nome,5)} `+
                         `${alinhar(individuo.idade,3)} `+
                         `${individuo.sexo} `+
                         `${individuo.telefone}`+
                         `${individuo.cpf}\n`
            }
            alert(lista)
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