import { Atleta } from "./Atleta.js";

const vetAtletas = [];


export function pesquisarAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);
    return (indAtleta == -1) ? null : vetAtletas[indAtleta];
}

export function inserirAtleta(nome, dtNascPessoa, idade, cpf, opcao){
    let atletaEncontrado = pesquisarAtleta(nome);

    if(atletaEncontrado == null){
        let atleta = new Atleta(nome, dtNascPessoa, idade, cpf, opcao);
        vetAtletas.push(atleta);
        console.log(vetAtletas);
        return true;
    }
    return false;
}


/*
export function inserirVetor(vetor,elemento) {
    if (vetor.includes(elemento) == false) {
        vetor.push(elemento);
        return true;
    }
    return false; // elemento não incluído, pois já existe no vetor
}

*/