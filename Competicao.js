export class Competicao {
    static #idStatic = 0;
    #id;
    #nome;
    #altimetria;
    #distancia;
    #data;
    #limiteCorredores;
    #listaCorredores = [];


    constructor(nome, distancia, data, limiteCorredores, altimetria){
        this.#nome = nome;
        this.#distancia = distancia;
        this.#data = data;
        this.#limiteCorredores = limiteCorredores;
        this.#altimetria = altimetria;
        this.#id = Competicao.#idStatic;
        Competicao.#idStatic++;
    }

    get id(){
        return this.#id;
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