import * as vetAtletas from "./atletaModel.js";

export function adicionar(nome, dtNascPessoa, idade, cpf, opcao) {
    if (vetAtletas.inserirAtleta(nome, dtNascPessoa, idade, cpf, opcao) == true) {
        return "Atleta inserido com sucesso!"
    }
    return "Erro! O Atleta " + nome + " já estava cadastrado!"
}

export function excluir(nome) {
    if (vetAtletas.excluirAtleta(nome, vetAtletas) == true) {
        return "Atleta excluido com sucesso!";
    }
    return "O Atleta não existe para excluir!";
}

export function modificar(nome){
    let dados = vetAtletas.alterarAtleta(nome)
        return dados;

    //return "Não existe este Atleta Buscado!";
}



/*

export function modificar(nomeOriginal, dadosAtleta) {

    let ok = Model.alterarAtleta(nomeOriginal, dadosAtleta);

    if (!ok) {
        return { erro: "Atleta não encontrado!" };
    }

    return { sucesso: dadosAtleta };
}

*/