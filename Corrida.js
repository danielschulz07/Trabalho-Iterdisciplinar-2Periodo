import { Pessoa } from "./Pessoa.js";
export class Corrida {
    static #idCorridaStatic = 0;
    #idCorrida;
    #nomeCorrida;
    #distancia;
    #dataCorrida;
    #limiteCorredores;
    #listaCorredores = [];


    constructor(nomeCorrida, distancia, dataCorrida, limiteCorredores,listaCorredores = []){
        this.#nomeCorrida = nomeCorrida;
        this.#distancia = distancia;
        this.#dataCorrida = dataCorrida;
        this.#limiteCorredores = limiteCorredores;


        this.#idCorrida = Corrida.#idCorridaStatic;
        Corrida.#idCorridaStatic++;
    }

    get idCorrida(){
        return this.#idCorrida;
    }

    historico(pessoa){
        pessoa.historico(pessoa.id,this.#nomeCorrida);
    }

    toString() {
        return ("\nid: " + this.idCorrida +
            "\nlista: "  + this.#listaCorredores);
    } 

    adicionarCorredor(pessoa) {
        this.#listaCorredores.push(pessoa);
    }
}