import { Competicao } from "./Competicao.js";
import { Competidor } from "./Competidor.js";
import * as Model from "./competicaoModel.js";

let comp = new Competicao("zxc","zxc","zxc","zxc","zxc");
const vetCompeticoes = [comp];

export function pesquisarCompeticao(nomeCompeticao){
    let indCompeticao = vetCompeticoes.findIndex(objProd => objProd.nome == nomeCompeticao);
    return (indCompeticao == -1) ? null : vetCompeticoes[indCompeticao];
}

//export function pesquisarCompeticaoID(nomeCompeticao){
//   let indCompeticao = vetCompeticoes.findIndex(objProd => objProd.nomeCompeticao == nomeCompeticao);
//    return (indCompeticao == -1) ? null : indCompeticao;
//}


export function adicionarCompeticao(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade){
    let competicao = pesquisarCompeticao(nomeCompeticao);

    if(competicao == null){
        competicao = new Competicao(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade)
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

export function criarRelatorio(){
    Model.criarRelatorio();
    //return tabelaCompetidores;
}

export function pesquisarCorrida(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade){
    Model.filtrarCorrida(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade);
    alert("nigger");
}