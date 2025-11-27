import { Pessoa } from "./Pessoa.js";
export class Corrida {
    static #idCorrida = 0;
    #dataCorrida;
    #limiteCorredores;
    #nomeCorrida;
    #distancia;


    constructor(dataCorrida, limiteCorredores, nomeCorrida, distancia){
        this.#dataCorrida = dataCorrida;
        this.#limiteCorredores = limiteCorredores;
        this.#nomeCorrida = nomeCorrida;
        this.#distancia = distancia;

        Corrida.#idCorrida++;
    }

    historico(pessoa){
        pessoa.historico(pessoa.id,this.#nomeCorrida);//essa função sera chamada no model recebendo o id dos corredores direto do vetor com foreach (n sei se vai funcionar)
    }
}