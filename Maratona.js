import { Corrida } from "./Corrida.js";

export class Maratona extends Corrida{
    #idMaratona;
    #modalidade;
    #altimetria;

    constructor(modalidade, altimetria){
        this.#modalidade = modalidade;
        this.#altimetria = altimetria;
        this.#idMaratona = super.idCorrida;
    }

}