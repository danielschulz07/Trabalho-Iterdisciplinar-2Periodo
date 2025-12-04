//import * as CompeticoesModel from "./competicoesModel";
import { Atleta } from "./Atleta.js";

 const vetAtletas = [];

export function pesquisarAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);
    return (indAtleta == -1) ? null : vetAtletas[indAtleta];
}


export function adicionarAtleta(nome, dtNascPessoa, idade, cpf, opcao){
    let atleta = pesquisarAtleta(nome);

    if(atleta == null){
        atleta = new Atleta(nome, dtNascPessoa, idade, cpf, opcao)
        vetAtletas.push(atleta);
        console.log(vetAtletas);
        return true;
    }
    return false;
}
