import { Pessoa } from "./Pessoa.js";
export class Competicao {
    static #idStatic = 0;
    #id;
    #nome;
    #distancia;
    #data;
    #limiteCorredores;
    #listaCorredores = [];


    constructor(nome, distancia, data, limiteCorredores){
        this.#nome = nome;
        this.#distancia = distancia;
        this.#data = data;
        this.#limiteCorredores = limiteCorredores;


        this.#id = Competicao.#idStatic;
        Competicao.#idStatic++;
    }

    get id(){
        return this.#id;
    }

    historico(pessoa){
        pessoa.historico(pessoa.id,this.#nome);
    }

    toString() {
        return ("\nid: " + this.id +
            "\nlista: "  + this.#listaCorredores);
    } 

    adicionarCorredor(pessoa) {
        this.#listaCorredores.push(pessoa);
    }
}