import * as vetAtletas from "./atletaModel.js";


export function adicionar(nome){
    if(vetAtletas.inserirAtleta(vetAtletas, nome) == true){
        return "Atleta inserido com sucesso!"
    }
    return "Erro! O Atleta " + nome + " já estava cadastrado!"
}




/*
export function inserir(elemento) {
    if (Vetor.inserirVetor(vetor, elemento) == true) {
        return "Elemento inserido com sucesso";
    }
    return "Elemento já existe"; // elemnento não incluído, pois já existe no vetor
}
*/











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