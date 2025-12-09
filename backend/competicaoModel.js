import { Atleta } from "./Atleta.js";
import { Competicao } from "./Competicao.js";
import { TrailRunning } from "./TrailRunning.js";
import { Maratona } from "./Maratona.js";
import { Competidor } from "./Competidor.js";


var teste = new Atleta(1213,3123,123,123);
var teste2 = new Atleta("zxc","zxcz","zxc","zxc");


export var vetPessoa = [teste, teste2];

var cor = new Competicao("zxcF",123,123,123,123);
var cor2 = new Competicao("zxc","zxc","zxc","zxc","zxc");
var mar1 = new Maratona(123,123,123,123,123,123);
var trail = new TrailRunning("zxc","zxc","zxc","zxc","zxc","zxc","zxc");

export var vetCorrida = [cor,cor2];

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

        
        //adicionar celulas a tabela
        trTabela.appendChild(tdNome);
        trTabela.appendChild(tdDistancia);
        trTabela.appendChild(tdData);
        trTabela.appendChild(tdLimiteCorredores);
        
        //trTabela.appendChild(tabelaCompetidores);
        
        //relatorioTitulosPorGenero.appendChild(thTabelaQuant);
        tabelaCorridas.appendChild(trTabela);
}

export function filtrarCorrida(nomeCompeticao, distancia, data, qtdCompetidores, opcaoModalidade){
    tabelaCorridas.textContent = "";
    for (let i = 0; i < vetCorrida.length; i++) {
        if(
            (vetCorrida[i].nome.toUpperCase().includes(nomeCompeticao)) &&
             (vetCorrida[i].distancia <= distancia || distancia == 0) &&
              //(vetCorrida[i].data >= data || data == "") &&
               (vetCorrida[i].limiteCorredores <= qtdCompetidores || qtdCompetidores == 0) //&&
                //(vetCorrida[i].modalidade == modalidade || modalidade == "Qualquer modalidade")
        )
        
        
        
        criarRelatorio(i);
    }
}
//let tdAltimetria = document.createElement("td");
//tdAltimetria.textContent = vetCorrida[i].altimetria;
//trTabela.appendChild(tdAltimetria);