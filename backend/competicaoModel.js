import { Atleta } from "./Atleta.js";
import { Competicao } from "./Competicao.js";
import { TrailRunning } from "./TrailRunning.js";
import { Maratona } from "./Maratona.js";
import { Competidor } from "./Competidor.js";

const atleta01 = new Maratona("Milhas Garoto", 12, "02/03/2005", 12, "Maratona", 22, 33)
const vetCompeticoes = [atleta01];
const vetCompetidores = [];
console.log(atleta01)

export function pesquisarCompeticao(nomeCompeticao){
    let indCompeticao = vetCompeticoes.findIndex(objProd => objProd.nomeCompeticao == nomeCompeticao);
    return (indCompeticao == -1) ? null : vetCompeticoes[indCompeticao];
}

export function adicionarCompeticao(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade){
    let competicao = pesquisarCompeticao(nomeCompeticao);

    if(competicao == null){
        if(opcaoModalidade == "Maratona"){
        competicao = new Maratona(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona);
        vetCompeticoes.push(competicao);
        console.log(vetCompeticoes);
        return true;  
        } if(opcaoModalidade == "TrailRunning"){
            competicao = new TrailRunning(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade);
            vetCompeticoes.push(competicao);
            console.log(vetCompeticoes);
            return true;
        }
    }
    return false;
}

export function excluirCompeticao(nomeCompeticao){
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

/*
export function alterarCompeticao(id, nome, idade, cpf, nacionalidade, modalidade) {
    if (id != -1) {
        vetAtletas[id].nome = nome;
        vetAtletas[id].idade = idade;
        vetAtletas[id].cpf = cpf;
        vetAtletas[id].nacionalidade = nacionalidade;
        vetAtletas[id].modalidade = modalidade;
        }
        return
    }
*/








export function vincularCompetidor(idAtleta, idCompeticao, identificador){
    let competidor = new Competidor(idAtleta, idCompeticao, identificador);
    vetCompetidores.push(competidor);
    //return console.log(Model.vetCompetidor[0]);
}

export function checarVetCompetidor(idAtleta, idCompeticao){
        let indCompetidor = vetCompetidores.findIndex(objProd => objProd.idAtleta == idAtleta && objProd.idCompeticao == idCompeticao);
    return (indCompetidor == -1) ? null : true;
}

export function colocacaoCompetidor(idAtleta, idCompeticao, colocacao){
    let indCompetidor = Model.vetCompetidor.findIndex(objProd => objProd.idAtleta == idAtleta && objProd.idCompeticao == idCompeticao);
    Model.vetCompetidor[indCompetidor].colocacao = colocacao;
    console.log(Model.vetCompetidor[indCompetidor]);
}