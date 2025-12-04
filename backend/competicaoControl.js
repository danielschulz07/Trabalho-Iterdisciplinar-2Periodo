import { Competicao } from "./Competicao.js";

 const vetCompeticoes = [];

export function pesquisarCompeticao(nomeCompeticao){
    let indCompeticao = vetCompeticoes.findIndex(objProd => objProd.nomeCompeticao == nomeCompeticao);
    return (indCompeticao == -1) ? null : vetCompeticoes[indCompeticao];
}


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