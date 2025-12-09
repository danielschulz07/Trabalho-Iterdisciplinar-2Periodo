export class Competicao {
    static #idStatic = 0;
    #id;
    #nome;
    #altimetria;
    #distancia;
    #data;
    #limiteCorredores;
    #modalidade;
    #listaCorredores = [];//relatorio precisa do num de valores aq, faz calculo com .lenght


    constructor(nome, distancia, data, limiteCorredores, modalidade, altimetria){
        this.#nome = nome;
        this.#distancia = distancia;
        this.#data = data;
        this.#limiteCorredores = limiteCorredores;
        this.#modalidade = modalidade;
        this.#altimetria = altimetria;
        this.#id = Competicao.#idStatic;
        Competicao.#idStatic++;
    }

    get id(){
        return this.#id;
    }

    get nome(){
        return this.#nome;
    }

    get distancia(){
        return this.#distancia;
    }

    get data(){
        return this.#data;
    }

    get limiteCorredores(){
        return this.#limiteCorredores;
    }

    get modalidade(){
        return this.#modalidade;
    }

    historico(atleta){
        atleta.historico(atleta.id,this.#nome);
    }

    toString() {
        return ("\nid: " + this.id +
            "\nlista: "  + this.#listaCorredores);
    } 

    adicionarCorredor(pessoa) {
        this.#listaCorredores.push(pessoa);
    }
}