import { Corrida } from "./Corrida.js";

export class TrailRunning extends Corrida{
    #qtdCheckpoints;
    #modalidade;
    #nivelDificuldade;

    constructor(nomeCorrida, distancia, dataCorrida,limiteCorredores,qtdCheckpoints, modalidade, nivelDificuldade){
        super(dataCorrida, limiteCorredores, nomeCorrida, distancia);

        this.#qtdCheckpoints = qtdCheckpoints;
        this.#modalidade = modalidade;
        this.#nivelDificuldade = nivelDificuldade;
    }

    toString() {
        return (super.toString() +
            "\nCheckpoints: " + this.#qtdCheckpoints +
            "\nModalidade: " + this.#modalidade +
            "\nDificuldade: " + this.#nivelDificuldade);
    }
}