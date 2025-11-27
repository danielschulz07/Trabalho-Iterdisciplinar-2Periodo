import { Corrida } from "./Corrida.js";

export class TrailRunning extends Corrida{
    #idTrailRunning;
    #qtdCheckpoints;
    #modalidade;
    #nivelDificuldade;

    constructor(qtdCheckpoints, modalidade, nivelDificuldade){
        this.#qtdCheckpoints = qtdCheckpoints;
        this.#modalidade = modalidade;
        this.#nivelDificuldade = nivelDificuldade;

        this.#idTrailRunning = super.idCorrida;
    }
}