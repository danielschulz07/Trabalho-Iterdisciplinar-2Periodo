export class Competicao {
    static #idStatic = 0;
    #id;
    #nomeCompeticao;
    #distancia;
    #dataCompeticao;
    #qtdCompetidores;
    #modalidade;
    #listaCorredores = [];//relatorio precisa do num de valores aq, faz calculo com .lenght


    constructor(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, modalidade){
        this.#nomeCompeticao = nomeCompeticao;
        this.#distancia = distancia;
        this.#dataCompeticao = dataCompeticao;
        this.#qtdCompetidores = qtdCompetidores;
        this.#modalidade = modalidade;
        this.#id = Competicao.#idStatic;
        Competicao.#idStatic++;
    }

    get id(){
        return this.#id;
    }

    get nomeCompeticao(){
        return this.#nomeCompeticao;
    }

    get distancia(){
        return this.#distancia;
    }

    get dataCompeticao(){
        return this.#dataCompeticao;
    }

    get qtdCompetidores(){
        return this.#qtdCompetidores;
    }

    get modalidade(){
        return this.#modalidade;
    }

    historico(atleta){
        atleta.historico(atleta.id, this.#nomeCompeticao);
    }

    toString() {
        return ("\nid: " + this.id +
            "\nlista: "  + this.#listaCorredores);
    } 

    adicionarCorredor(pessoa) {
        this.#listaCorredores.push(pessoa);
    }
}