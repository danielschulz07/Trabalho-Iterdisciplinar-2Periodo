import { Competicao } from "./Competicao.js";

export class TrailRunning extends Competicao{
    #qtdCheckpoints;
    #modalidade;
    #tipoTerreno;
    #modalidadeTrail;
    #nivelDificuldade;


    constructor(nomeCompeticao, distancia, dataCompeticao, limiteCorredores, modalidade, qtdCheckpoints, tipoTerreno, modalidadeTrail, nivelDificuldade){
        super(nomeCompeticao, distancia, dataCompeticao, limiteCorredores, modalidade);

        this.#qtdCheckpoints = qtdCheckpoints;
        this.#tipoTerreno = tipoTerreno;
        this.#modalidadeTrail = modalidadeTrail;
        this.#nivelDificuldade = nivelDificuldade;

    }   

    get qtdCheckpoints(){
        return this.#qtdCheckpoints;
    }

    get tipoTerreno(){
        return this.#tipoTerreno;
    }

    get modalidadeTrail(){
        return this.#modalidadeTrail;
    }

    get nivelDificuldade(){
        return this.#nivelDificuldade;
    }




    toString() {
        return (super.toString() +
            "\nCheckpoints: " + this.#qtdCheckpoints +
            "\nTipoTerreno: " + this.#tipoTerreno +
            "\nModalidade: " + this.#modalidade +
            "\nDificuldade: " + this.#nivelDificuldade);
    }
}