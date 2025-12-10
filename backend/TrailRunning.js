import { Competicao } from "./Competicao.js";

export class TrailRunning extends Competicao{
    #qtdCheckpoints;
    #tipoTerreno;
    #modalidadeTrail;
    #nivelDificuldade;


    constructor(nomeCompeticao, distancia, dataCompeticao, limiteCorredores, modalidade,local, qtdCheckpoints, tipoTerreno, modalidadeTrail, nivelDificuldade){
        super(nomeCompeticao, distancia, dataCompeticao, limiteCorredores, modalidade,local );

        this.#qtdCheckpoints = qtdCheckpoints;
        this.#tipoTerreno = tipoTerreno;
        this.#modalidadeTrail = modalidadeTrail;
        this.#nivelDificuldade = nivelDificuldade;

    }   

    get qtdCheckpoints(){
        return this.#qtdCheckpoints;
    }

    set qtdCheckpoints(qtdCheckpoints){
        this.#qtdCheckpoints = qtdCheckpoints;
    }

    get tipoTerreno(){
        return this.#tipoTerreno;
    }

    set tipoTerreno(tipoTerreno){
        this.#tipoTerreno = tipoTerreno;
    }

    get modalidadeTrail(){
        return this.#modalidadeTrail;
    }

    set modalidadeTrail(modalidadeTrail){
        this.#modalidadeTrail = modalidadeTrail;
    }

    get nivelDificuldade(){
        return this.#nivelDificuldade;
    }

    set nivelDificuldade(nivelDificuldade){
        this.#nivelDificuldade = nivelDificuldade;
    }


    toString() {
        return (super.toString() +
            "\nCheckpoints: " + this.#qtdCheckpoints +
            "\nTipoTerreno: " + this.#tipoTerreno +
            //"\nModalidade: " + this.#modalidade +
            "\nDificuldade: " + this.#nivelDificuldade);
    }
}