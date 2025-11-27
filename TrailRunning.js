import { Corrida } from "./Corrida.js";

export class TrailRunning extends Corrida{
    #qtdCheckpoints;
    #modalidade;
    #nivelDificuldade;

    constructor(dataCorrida,limiteCorredores,nomeCorrida,distancia,qtdCheckpoints, modalidade, nivelDificuldade){
        super(dataCorrida, limiteCorredores, nomeCorrida, distancia);

        this.#qtdCheckpoints = qtdCheckpoints;
        this.#modalidade = modalidade;
        this.#nivelDificuldade = nivelDificuldade;
    }
}