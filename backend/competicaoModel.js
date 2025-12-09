import { Atleta } from "./Atleta.js";
import { Competicao } from "./Competicao.js";
import { TrailRunning } from "./TrailRunning.js";
import { Maratona } from "./Maratona.js";
import { Competidor } from "./Competidor.js";

const vetCompeticoes = [];

export function pesquisarCompeticao(nomeCompeticao){
    let indCompeticao = vetCompeticoes.findIndex(objProd => objProd.nome == nomeCompeticao);
    return (indCompeticao == -1) ? null : vetCompeticoes[indCompeticao];
}

export function adicionarCompeticao(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, altimetria, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade){
    let competicao = pesquisarCompeticao(nomeCompeticao);

    if(competicao == null){
        // fazer uma verificação, quando for maratona ele da new Maratona e quando for trailrunning ele da um new TrailRunnig
        competicao = new Maratona(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, altimetria, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade)
        vetCompeticoes.push(competicao);
        console.log(vetCompeticoes);
        return true;
    }
    return false;
}

export function vincularCompetidor(idAtleta, idCompeticao, identificador){
    let competidor = new Competidor(idAtleta, idCompeticao, identificador);
    Model.vetCompetidor.push(competidor);
    //return console.log(Model.vetCompetidor[0]);
}

export function checarVetCompetidor(idAtleta, idCompeticao){
        let indCompetidor = Model.vetCompetidor.findIndex(objProd => objProd.idAtleta == idAtleta && objProd.idCompeticao == idCompeticao);
    return (indCompetidor == -1) ? null : true;
}

export function colocacaoCompetidor(idAtleta, idCompeticao, colocacao){
    let indCompetidor = Model.vetCompetidor.findIndex(objProd => objProd.idAtleta == idAtleta && objProd.idCompeticao == idCompeticao);
    Model.vetCompetidor[indCompetidor].colocacao = colocacao;
    console.log(Model.vetCompetidor[indCompetidor]);
}