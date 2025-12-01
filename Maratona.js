import { Corrida } from "./Corrida.js";

export class Maratona extends Corrida{
    #altimetria;
    #qtdPontoApoio;

    constructor(nomeCorrida, distancia, dataCorrida, limiteCorredores, altimetria, qtdPontoApoio){
        super(dataCorrida, limiteCorredores, nomeCorrida, distancia);
        
        this.#altimetria = altimetria;
        this.#qtdPontoApoio = qtdPontoApoio;
    }

    toString() {
        return (super.toString() +
            "\nAltimetria: " + this.#altimetria +
            "\nPontos Apoio: " + this.#qtdPontoApoio);
    }
}