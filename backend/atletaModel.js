import { Atleta } from "./Atleta.js";

const vetAtletas = [];


export function pesquisarAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);
    return (indAtleta == -1) ? null : vetAtletas[indAtleta];
}

export function inserirAtleta(nome, dtNascPessoa, idade, cpf, opcao){
    let atletaEncontrado = pesquisarAtleta(nome);

    if(atletaEncontrado == null){
        let atleta = new Atleta(nome, dtNascPessoa, idade, cpf, opcao);
        vetAtletas.push(atleta);
        console.log(vetAtletas);
        return true;
    }
    return false;
}

export function excluirAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);

    if (indAtleta >= 0) {
        vetAtletas.splice(indAtleta, 1);
        return true;
    }
    return false;
}

export function alterarAtleta(nome){
    let atletaEncontrado = pesquisarAtleta(nome);

    if(atletaEncontrado != null){
        
        return atletaEncontrado;
       //atletaEncontrado.dtNascPessoa = novosDados.dtNascPessoa;
      //  atletaEncontrado.idade = novosDados.idade;
        //atletaEncontrado.cpf = novosDados.cpf;
       // atletaEncontrado.opcao = novosDados.opcao;        
    }
    return false;
}




/*

let atleta = AtletaControl.pesquisar(nome);

if (atleta != null) {
    // Aqui atleta é um OBJETO
    outSaida.style.color = "green";
    outSaida.textContent = "Atleta encontrado!";

    // Se quiser exibir os dados na tela:
    outSaida.innerHTML =
        "Nome: " + atleta.nome + "<br>" +
        "Nascimento: " + atleta.dtNascPessoa + "<br>" +
        "Idade: " + atleta.idade + "<br>" +
        "CPF: " + atleta.cpf + "<br>" +
        "Opção: " + atleta.opcao;



*/