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

export function excluirAtleta(nome){
    let indAtleta = vetAtletas.findIndex(objProd => objProd.nome == nome);

    if (indAtleta >= 0) {
        vetAtletas.splice(indAtleta, 1);
        return true;
    }
    return false;
}


/*
export function alterarProduto(descrProduto, mes, quantidade, cnpj) {
    let produto = pesquisarProdVet(descrProduto);

    if (produto != null) { //indica que produto existe no vetor
        produto.setQtdVendasMes(quantidade, mes);
        console.log("Quantidade do mês alterada para o produto indicado!");

        let fornecedor = consultarFornecedor(cnpj);
        if(fornecedor != null){
            produto.fornecedor = fornecedor;
            console.log("Fornecedor alterado para o produto indicado.");
        } else {
            console.log("Fornecedor indicado não existe e não foi alterado no produto.")
        }
    }
    return produto;
}

*/