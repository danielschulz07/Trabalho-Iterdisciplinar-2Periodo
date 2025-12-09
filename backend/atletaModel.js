import { Atleta } from "./Atleta.js";

const ate = new Atleta("DADA", 20, "12345678910", "br", "OpcTrail")
const vetAtletas = [ate];
console.log(ate)


export function pesquisarAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);
    return (indAtleta == -1) ? null : vetAtletas[indAtleta];
}

//export function pesquisarAtletaID(nome){
//    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);
//    return (indAtleta == -1) ? null : indAtleta;
//}

export function inserirAtleta(nome, idade, cpf, nacionalidade, modadalidade){
    let atletaEncontrado = pesquisarAtleta(nome);

    if(atletaEncontrado == null){
        let atleta = new Atleta(nome, idade, cpf, nacionalidade, modadalidade);
        vetAtletas.push(atleta);
        console.log(vetAtletas);
        return true;
    }
    return false;
}

export function excluirAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);

    if (indAtleta >= 0) {
        vetAtletas.splice(indAtleta, 1);
        return true;
    }
    return false;
}

export function procurarAtleta(nome) {
    let atletaEncontrado = pesquisarAtleta(nome);

    if (atletaEncontrado != null) {
        return atletaEncontrado;
        //return atletaEncontrado.id;
    }
    return false;
}


export function alterarAtleta(id, nome, idade, cpf, nacionalidade, modalidade) {
    if (id != -1) {
        vetAtletas[id].nome = nome;
        vetAtletas[id].idade = idade;
        vetAtletas[id].cpf = cpf;
        vetAtletas[id].nacionalidade = nacionalidade;
        vetAtletas[id].modalidade = modalidade;
        }
    }

export function criarRelatorio(){
    //let tabela = document.createElement("tr");
    //tabela.innerHTML = "nigga";
    
    for (let i = 0; i < vetAtletas.length; i++) {
        //gerar tabela        TABELA  QUANTIDAD
        let trTabela = document.createElement("tr");
        
        //gerar células
        let tdNome = document.createElement("td");
        tdNome.textContent = vetAtletas[i].nome;//valor células
        
        let tdIdade = document.createElement("td");
        tdIdade.textContent = vetAtletas[i].idade;
        
        let tdCPF = document.createElement("td");
        tdCPF.textContent = vetAtletas[i].cpf;

        let tdNacionalidade = document.createElement("td");
        tdNacionalidade.textContent = vetAtletas[i].nacionalidade;

        let tdModalidade = document.createElement("td");
        tdModalidade.textContent = vetAtletas[i].modalidade;
        
        //adicionar celulas a tabela
        trTabela.appendChild(tdNome);
        trTabela.appendChild(tdIdade);
        trTabela.appendChild(tdCPF);
        trTabela.appendChild(tdNacionalidade);
        trTabela.appendChild(tdModalidade);

    //trTabela.appendChild(tabelaCompetidores);
    
   //relatorioTitulosPorGenero.appendChild(thTabelaQuant);
   tabelaCompetidores.appendChild(trTabela);
};
}