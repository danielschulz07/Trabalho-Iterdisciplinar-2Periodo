import * as vetAtletas from "./atletaModel.js";

export function adicionar(nome, idade, cpf, nacionalidade, modalidade) {
    if (vetAtletas.inserirAtleta(nome, idade, cpf, nacionalidade, modalidade) == true) {
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

export function modificar(nome) {
    let atletaEncontrado = vetAtletas.procurarAtleta(nome)
    return atletaEncontrado;
}

export function alterar(id, nome, idade, cpf, nacionalidade, modalidade){
        let atletaEncontrado = vetAtletas.alterarAtleta(id, nome, idade, cpf, nacionalidade, modalidade);
    return atletaEncontrado;

}
