import * as atletaModel from "./atletaModel.js";

export function adicionar(nome, idade, cpf, nacionalidade, modalidade) {
    if (atletaModel.inserirAtleta(nome, idade, cpf, nacionalidade, modalidade) == true) {
        return "Atleta inserido com sucesso!"
    }
    return "Erro! O Atleta " + nome + " já estava cadastrado!"
}

export function excluir(nome) {
    if (atletaModel.excluirAtleta(nome, atletaModel) == true) {
        return "Atleta excluido com sucesso!";
    }
    return "O Atleta não existe para excluir!";
}

export function modificar(nome) {
    let atletaEncontrado = atletaModel.procurarAtleta(nome)
    return atletaEncontrado;
}

export function alterar(id, nome, idade, cpf, nacionalidade, modalidade){
        atletaModel.alterarAtleta(id, nome, idade, cpf, nacionalidade, modalidade);
    return "Atleta alterado com sucesso";
}

export function criarRelatorio(){
    vetAtletas.criarRelatorio();
}

export function pesquisarAtleta(nome, idade, cpf, nacionalidade, modalidade){
    atletaModel.filtrarAtleta(nome, idade, cpf, nacionalidade, modalidade);
}