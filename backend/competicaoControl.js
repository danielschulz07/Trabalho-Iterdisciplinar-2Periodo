import { Competicao } from "./Competicao.js";
import { Competidor } from "./Competidor.js";
import * as CompeticoesModel from "./competicaoModel.js";

export function adicionar(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, altimetria, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade) {
    if (CompeticoesModel.adicionarCompeticao(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, altimetria, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade) == true) {
        return "Competição inserido com sucesso!"
    }
    return "Erro! A competição " + nome + " já estava cadastrado!"
}
