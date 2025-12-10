import { Atleta } from "./Atleta.js";
import { Competicao } from "./Competicao.js";
import { TrailRunning } from "./TrailRunning.js";
import { Maratona } from "./Maratona.js";
import { Competidor } from "./Competidor.js";

const atleta01 = new Maratona("Milhas Garoto", 12, "02/03/2005", 12, "Maratona", 22, 33)
const vetCompeticoes = [atleta01];
const vetCompetidores = [];
console.log(atleta01)

export function pesquisarCompeticao(nomeCompeticao) {
    let indCompeticao = vetCompeticoes.findIndex(objProd => objProd.nomeCompeticao == nomeCompeticao);
    return (indCompeticao == -1) ? null : vetCompeticoes[indCompeticao];
}

export function adicionarCompeticao(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade) {
    let competicao = pesquisarCompeticao(nomeCompeticao);

    if (competicao == null) {
        if (opcaoModalidade == "Maratona") {
            competicao = new Maratona(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona);
            vetCompeticoes.push(competicao);
            console.log(vetCompeticoes);
            return true;
        } if (opcaoModalidade == "TrailRunning") {
            competicao = new TrailRunning(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade);
            vetCompeticoes.push(competicao);
            console.log(vetCompeticoes);
            return true;
        }
    }
    return false;
}

export function excluirCompeticao(nomeCompeticao) {
    let indCompeticao = vetCompeticoes.findIndex(objProd => objProd.nomeCompeticao == nomeCompeticao);

    if (indCompeticao >= 0) {
        vetCompeticoes.splice(indCompeticao, 1);
        return true;
    }
    return false;
}


export function procurarCompeticao(nomeCompeticao) {
    let competicaEncontrada = pesquisarCompeticao(nomeCompeticao);

    if (competicaEncontrada != null) {
        return competicaEncontrada;
    }
    return false;
}

export function alterarCompeticao(id, nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade) {
    if (id != -1) {
        vetCompeticoes[id].nomeCompeticao = nomeCompeticao;
        vetCompeticoes[id].distancia = distancia;
        vetCompeticoes[id].dataCompeticao = dataCompeticao;
        vetCompeticoes[id].qtdCompetidores = qtdCompetidores;
        vetCompeticoes[id].opcaoModalidade = opcaoModalidade;
        vetCompeticoes[id].ganhoElevacao = ganhoElevacao;
        vetCompeticoes[id].qtdCheckMaratona = qtdCheckMaratona;
        vetCompeticoes[id].qtdCheckTrail = qtdCheckTrail;
        vetCompeticoes[id].tipoTerreno = tipoTerreno;
        vetCompeticoes[id].opcaoModalidadeTrail = opcaoModalidadeTrail;
        vetCompeticoes[id].opcaoDificuldade = opcaoDificuldade;
    }
    return
}

export function vincularCompetidor(idAtleta, idCompeticao, identificador) {
    let competidor = new Competidor(idAtleta, idCompeticao, identificador);
    vetCompetidores.push(competidor);
}

export function checarVetCompetidor(idAtleta, idCompeticao) {
    let indCompetidor = vetCompetidores.findIndex(objProd => objProd.idAtleta == idAtleta && objProd.idCompeticao == idCompeticao);
    return (indCompetidor == -1) ? null : true;
}

export function colocacaoCompetidor(idAtleta, idCompeticao, colocacao) {
    let indCompetidor = Model.vetCompetidor.findIndex(objProd => objProd.idAtleta == idAtleta && objProd.idCompeticao == idCompeticao);
    Model.vetCompetidor[indCompetidor].colocacao = colocacao;
    console.log(Model.vetCompetidor[indCompetidor]);
}