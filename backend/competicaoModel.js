import { Atleta } from "./Atleta.js";
import { Competicao } from "./Competicao.js";
import { TrailRunning } from "./TrailRunning.js";
import { Maratona } from "./Maratona.js";
import { Competidor } from "./Competidor.js";


var teste = new Atleta(1213,3123,123,123);
var teste2 = new Atleta("zxc","zxcz","zxc","zxc");


export var vetPessoa = [teste, teste2];

var cor = new Competicao("zxcF",123,"12/10/2010",123,123);
var cor2 = new Competicao("zxc","zxc","01/02/2004","zxc","zxc");
var mar1 = new Maratona("mara",123,"11/11/1111",123,123,123,123);
var trail = new TrailRunning("trail","zxc","22/12/2222",123,123,"zxc","zxc", "zxc","zxc");

export var vetCorrida = [cor,cor2,mar1,trail];

export var vetCompetidor = [];

export function criarRelatorio(i){
        //gerar tabela        TABELA  QUANTIDAD
        let trTabela = document.createElement("tr");
        
        //gerar células
        let tdNome = document.createElement("td");
        tdNome.textContent = vetCorrida[i].nome;//valor células
        
        let tdDistancia = document.createElement("td");
        tdDistancia.textContent = vetCorrida[i].distancia;
        
        let tdData = document.createElement("td");
        tdData.textContent = vetCorrida[i].data;

        let tdLimiteCorredores = document.createElement("td");
        tdLimiteCorredores.textContent = vetCorrida[i].limiteCorredores;

        let tdTipoCorrida = document.createElement("td");
        if(vetCorrida[i] instanceof Maratona){
            tdTipoCorrida.textContent = "Maratona";
        }else if(vetCorrida[i] instanceof TrailRunning){
            tdTipoCorrida.textContent = "Trail Running";
        }

        let tdLocal = document.createElement("td");
        tdLocal.textContent = vetCorrida[i].local;

        
        //adicionar celulas a tabela
        trTabela.appendChild(tdNome);
        trTabela.appendChild(tdDistancia);
        trTabela.appendChild(tdData);
        trTabela.appendChild(tdLimiteCorredores);
        trTabela.appendChild(tdTipoCorrida);
        trTabela.appendChild(tdLocal);
        
        //trTabela.appendChild(tabelaCompetidores);
        
        //relatorioTitulosPorGenero.appendChild(thTabelaQuant);
        tabelaCorridas.appendChild(trTabela);
}

export function filtrarCorrida(nomeCompeticao, distancia, data, qtdCompetidores, opcaoModalidade, local){
    tabelaCorridas.textContent = "";
    for (let i = 0; i < vetCorrida.length; i++) {
        let vetDDMMAAAA = vetCorrida[i].data.split('/');
        let MMDDAAAA = vetDDMMAAAA[1] + '-' + vetDDMMAAAA[0] + '-' + vetDDMMAAAA[2];
        let dataVetCorrida = new Date(MMDDAAAA);


        switch(opcaoModalidade){
            case "Qualquer modalidade":
            if(
            (vetCorrida[i].nome.toUpperCase().includes(nomeCompeticao)) &&
             (vetCorrida[i].distancia <= distancia || distancia == 0) &&
              (dataVetCorrida <= data || data == "") &&
               (vetCorrida[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) && (vetCorrida[i].local == local || local == "")
            )
            criarRelatorio(i);
            break;
            case "Maratona":
            if(
            (vetCorrida[i].nome.toUpperCase().includes(nomeCompeticao)) &&
             (vetCorrida[i].distancia <= distancia || distancia == 0) &&
              (dataVetCorrida <= data || data == "") &&
               (vetCorrida[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) &&
                (vetCorrida[i] instanceof Maratona == true) && (vetCorrida[i].local == local || local == "")
            )
            criarRelatorio(i);
            break;
            case "TrailRunning":
            if(
            (vetCorrida[i].nome.toUpperCase().includes(nomeCompeticao)) &&
             (vetCorrida[i].distancia <= distancia || distancia == 0) &&
              (dataVetCorrida <= data || data == "") &&
               (vetCorrida[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) &&
                (vetCorrida[i] instanceof TrailRunning == true) && (vetCorrida[i].local == local || local == "")
            )
            criarRelatorio(i);
            break;
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
    //        (vetCorrida[i].nome.toUpperCase().includes(nomeCompeticao)) &&
    //         (vetCorrida[i].distancia <= distancia || distancia == 0) &&
    //          (dataVetCorrida <= data || data == "") &&
  //             (vetCorrida[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) &&
//                (vetCorrida[i] instanceof Maratona == true || opcaoModalidade == "Qualquer modalidade")
//        )
        
        
        
    //    criarRelatorio(i);
    }
}
//let tdAltimetria = document.createElement("td");
//tdAltimetria.textContent = vetCorrida[i].altimetria;
//trTabela.appendChild(tdAltimetria);