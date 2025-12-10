import { Atleta } from "./Atleta.js";
import { Competicao } from "./Competicao.js";
import { TrailRunning } from "./TrailRunning.js";
import { Maratona } from "./Maratona.js";
import { Competidor } from "./Competidor.js";

const atleta01 = new Maratona("Milhas Garoto", 12, "02/03/2005", 12, "Maratona", 22, 33)
const trail = new TrailRunning("zxc",123,"12/01/2000",40,"TrailRunning",20,"bro","bro","bro","bro");
const vetCompeticoes = [atleta01,trail];
const vetCompetidores = [];
console.log(atleta01)

export function pesquisarCompeticao(nomeCompeticao) {
    let indCompeticao = vetCompeticoes.findIndex(objProd => objProd.nomeCompeticao == nomeCompeticao);
    return (indCompeticao == -1) ? null : vetCompeticoes[indCompeticao];
}

export function adicionarCompeticao(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade,local) {
    let competicao = pesquisarCompeticao(nomeCompeticao);

    if (competicao == null) {
        if (opcaoModalidade == "Maratona") {
            competicao = new Maratona(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade,local, ganhoElevacao, qtdCheckMaratona);
            vetCompeticoes.push(competicao);
            console.log(vetCompeticoes);
            return true;
        } if (opcaoModalidade == "TrailRunning") {
            competicao = new TrailRunning(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, local, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade);
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

export function alterarCompeticao(id, nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade,local, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade) {
    if (id != -1) {
        vetCompeticoes[id].nomeCompeticao = nomeCompeticao;
        vetCompeticoes[id].distancia = distancia;
        vetCompeticoes[id].dataCompeticao = dataCompeticao;
        vetCompeticoes[id].qtdCompetidores = qtdCompetidores;
        vetCompeticoes[id].modalidade = opcaoModalidade;
        vetCompeticoes[id].local = local;
        vetCompeticoes[id].altimetria = ganhoElevacao;
        vetCompeticoes[id].qtdPontoApoio = qtdCheckMaratona;
        vetCompeticoes[id].qtdCheckpoints = qtdCheckTrail;
        vetCompeticoes[id].tipoTerreno = tipoTerreno;
        vetCompeticoes[id].modalidadeTrail = opcaoModalidadeTrail;
        vetCompeticoes[id].nivelDificuldade = opcaoDificuldade;
    }
}

var comp = new Competidor(1,2,1,1);
var comp1 = new Competidor(0,2,2,3);
var comp2 = new Competidor(2,3,50,100);

export var vetCompetidor = [comp, comp1, comp2];

export function criarRelatorio(i, qtdInscritos){
        //gerar tabela        TABELA  QUANTIDAD
        let trTabela = document.createElement("tr");
        
        //gerar células
        let tdNome = document.createElement("td");
        tdNome.textContent = vetCompeticoes[i].nomeCompeticao;//valor células
        
        let tdDistancia = document.createElement("td");
        tdDistancia.textContent = vetCompeticoes[i].distancia;
        
        let tdData = document.createElement("td");
        tdData.textContent = vetCompeticoes[i].dataCompeticao;

        let tdLimiteCorredores = document.createElement("td");
        tdLimiteCorredores.textContent = vetCompeticoes[i].qtdCompetidores;

        let tdTipoCorrida = document.createElement("td");
        if(vetCompeticoes[i] instanceof Maratona){
            tdTipoCorrida.textContent = "Maratona";
        }else if(vetCompeticoes[i] instanceof TrailRunning){
            tdTipoCorrida.textContent = "Trail Running";
        }

        let tdLocal = document.createElement("td");
        tdLocal.textContent = vetCompeticoes[i].local;
        
        
        //adicionar celulas a tabela
        trTabela.appendChild(tdNome);
        trTabela.appendChild(tdDistancia);
        trTabela.appendChild(tdData);
        trTabela.appendChild(tdLimiteCorredores);
        trTabela.appendChild(tdTipoCorrida);
        trTabela.appendChild(tdLocal);
        

        if(qtdInscritos != 0){
            let tdQtdInscritos = document.createElement("td");
            tdQtdInscritos.textContent = qtdInscritos;
            trTabela.appendChild(tdQtdInscritos);
        }

        
        //trTabela.appendChild(tabelaCompetidores);
        
        //relatorioTitulosPorGenero.appendChild(thTabelaQuant);
        tabelaCorridas.appendChild(trTabela);
}

export function filtrarCorrida(nomeCompeticao, distancia, data, qtdCompetidores, opcaoModalidade, local, inscritos){
    tabelaCorridas.textContent = "";
        for (let i = 0; i < vetCompeticoes.length; i++) {
            let qtdInscritos = 0;
            for(let j = 0; j<vetCompetidor.length; j++){
                if(vetCompetidor[j].idCompeticao == vetCompeticoes[i].id){
                qtdInscritos++;
            }
        }
        let vetDDMMAAAA = vetCompeticoes[i].dataCompeticao.split('/');
        let MMDDAAAA = vetDDMMAAAA[1] + '-' + vetDDMMAAAA[0] + '-' + vetDDMMAAAA[2];
        let datavetCompeticoes = new Date(MMDDAAAA);



        switch(opcaoModalidade){
            case "Qualquer modalidade":
            if(
            (vetCompeticoes[i].nomeCompeticao.toUpperCase().includes(nomeCompeticao)) &&
             (vetCompeticoes[i].distancia <= distancia || distancia == 0) &&
              (datavetCompeticoes <= data || data == "") &&
               (vetCompeticoes[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) &&
                (vetCompeticoes[i].local == local || local == "") && 
               (qtdInscritos <= inscritos && inscritos != null|| inscritos == null)
            )
            criarRelatorio(i,qtdInscritos);
            break;
            case "Maratona":
            if(
            (vetCompeticoes[i].nome.toUpperCase().includes(nomeCompeticao)) &&
             (vetCompeticoes[i].distancia <= distancia || distancia == 0) &&
              (datavetCompeticoes <= data || data == "") &&
               (vetCompeticoes[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) &&
                (vetCompeticoes[i] instanceof Maratona == true) && (vetCompeticoes[i].local == local || local == "") && 
               (qtdInscritos <= inscritos && inscritos != null|| inscritos == null)
            )
            criarRelatorio(i,qtdInscritos);
            break;
            case "TrailRunning":
            if(
            (vetCompeticoes[i].nome.toUpperCase().includes(nomeCompeticao)) &&
             (vetCompeticoes[i].distancia <= distancia || distancia == 0) &&
              (datavetCompeticoes <= data || data == "") &&
               (vetCompeticoes[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) &&
                (vetCompeticoes[i] instanceof TrailRunning == true) && (vetCompeticoes[i].local == local || local == "") && 
               (qtdInscritos <= inscritos && inscritos != null|| inscritos == null)
            )
            criarRelatorio(i,qtdInscritos);
            break;
        }
    }
    }



     //   if(opcaoModalidade == "Maratona"){
      //      opcaoModalidade == Maratona;
   //     }
        //console.log(opcaoModalidade);
        //alert(data);
        //alert(MMDDAAAA);
        //alert(dataVet);
        //if(mar1 instanceof Maratona == true){
        //}
        //console.log(mar1,Maratona);
        //alert(opcaoModalidade);
        //   if(
    //        (vetCompeticoes[i].nome.toUpperCase().includes(nomeCompeticao)) &&
    //         (vetCompeticoes[i].distancia <= distancia || distancia == 0) &&
    //          (datavetCompeticoes <= data || data == "") &&
  //             (vetCompeticoes[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) &&
    //                (vetCompeticoes[i] instanceof Maratona == true || opcaoModalidade == "Qualquer modalidade")
//        )
        
        
        
    //    criarRelatorio(i);
//let tdAltimetria = document.createElement("td");
//tdAltimetria.textContent = vetCompeticoes[i].altimetria;
//trTabela.appendChild(tdAltimetria);


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