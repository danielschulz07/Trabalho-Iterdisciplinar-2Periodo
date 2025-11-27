import { Pessoa } from "./Pessoa.js";
export class Corrida {
    static #idCorridaStatic = 0;
    #idCorrida;
    #dataCorrida;
    #limiteCorredores;
    #nomeCorrida;
    #distancia;


    constructor(dataCorrida, limiteCorredores, nomeCorrida, distancia){
        this.#dataCorrida = dataCorrida;
        this.#limiteCorredores = limiteCorredores;
        this.#nomeCorrida = nomeCorrida;
        this.#distancia = distancia;

        this.#idCorrida = Corrida.#idCorridaStatic;
        Corrida.#idCorridaStatic++;
    }

    get id(){
        return this.#idCorrida;
    }

    historico(pessoa){
        pessoa.historico(pessoa.id,this.#nomeCorrida);//essa função sera chamada no model recebendo o id dos corredores direto do vetor com foreach (n sei se vai funcionar)
    }

        toString() {
        return ("\nid: " + this.id);
    } 
}