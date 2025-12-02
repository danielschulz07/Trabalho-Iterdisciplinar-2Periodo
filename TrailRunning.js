import { Competicao } from "./Competicao.js";

export class TrailRunning extends Competicao{
    #qtdCheckpoints;
    #modalidade;
    #nivelDificuldade;

    constructor(nome, distancia, data,limiteCorredores,qtdCheckpoints, modalidade, nivelDificuldade){
        super(data, limiteCorredores, nome, distancia);

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