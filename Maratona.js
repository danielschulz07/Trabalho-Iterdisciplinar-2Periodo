import { Corrida } from "./Competicao.js";

export class Maratona extends Competicao{
    #altimetria;
    #qtdPontoApoio;

    constructor(nome, distancia, data, limiteCorredores, altimetria, qtdPontoApoio){
        super(data, limiteCorredores, nome, distancia);
        
        this.#altimetria = altimetria;
        this.#qtdPontoApoio = qtdPontoApoio;
    }

    toString() {
        return (super.toString() +
            "\nAltimetria: " + this.#altimetria +
            "\nPontos Apoio: " + this.#qtdPontoApoio);
    }
}