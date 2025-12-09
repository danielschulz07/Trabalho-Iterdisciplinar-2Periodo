import * as CompeticoesModel from "./competicaoModel.js";

export function adicionar(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade) {
    if (CompeticoesModel.adicionarCompeticao(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade) == true) {
        return "Competição inserido com sucesso!"
    }
    return "Erro! A competição " + nomeCompeticao + " já estava cadastrado!"
}

export function excluir(nomeCompeticao){
    if(CompeticoesModel.excluirCompeticao(nomeCompeticao, CompeticoesModel) == true){
        return "Competição Ecluida com sucesso!"
    }
    return "Erro! A Competição " + nomeCompeticao + " Não Existe!"
}

export function procurar(nomeCompeticao) {
    let atletaEncontrado = CompeticoesModel.procurarCompeticao(nomeCompeticao)
    return atletaEncontrado;
}

//export function alterar(id, nome, idade, cpf, nacionalidade, modalidade){
 //       let competicaEncontrada = CompeticoesModel.alterarCompeticao(id, nome, idade, cpf, nacionalidade, modalidade);
   // return competicaEncontrada;
//}