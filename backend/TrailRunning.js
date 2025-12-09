import { Competicao } from "./Competicao.js";

export class TrailRunning extends Competicao{
    #qtdCheckpoints;
    #modalidade;
    #nivelDificuldade;
    #tipoTerreno;
    constructor(nome, distancia, data, limiteCorredores, qtdCheckpoints, modalidade, nivelDificuldade, tipoTerreno){
        super(nome, distancia, data, limiteCorredores);

        this.#qtdCheckpoints = qtdCheckpoints;
        this.#modalidade = modalidade;
        this.#nivelDificuldade = nivelDificuldade;
        this.#tipoTerreno = tipoTerreno;
    }   

    toString() {
        return (super.toString() +
            "\nCheckpoints: " + this.#qtdCheckpoints +
            "\nModalidade: " + this.#modalidade +
            "\nDificuldade: " + this.#nivelDificuldade +
            "\nTipoTerreno: " + this.#tipoTerreno);
    }
}