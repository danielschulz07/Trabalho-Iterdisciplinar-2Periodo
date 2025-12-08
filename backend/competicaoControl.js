import * as vetCompeticoes from "./competicaoModel.js";

export function adicionar(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade) {
    if (vetCompeticoes.inserirCompeticao(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade) == true) {
        return "Atleta inserido com sucesso!"
    }
    return "Erro! O Atleta " + nome + " já estava cadastrado!"
}
/*

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

*/