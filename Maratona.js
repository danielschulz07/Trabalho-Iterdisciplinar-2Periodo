import { Corrida } from "./Corrida.js";

export class Maratona extends Corrida{
    #modalidade;
    #altimetria;

    constructor(dataCorrida,limiteCorredores,nomeCorrida,distancia,modalidade, altimetria){
        super(dataCorrida, limiteCorredores, nomeCorrida, distancia);
        
        this.#modalidade = modalidade;
        this.#altimetria = altimetria;
        //this.#idMaratona = super.idCorrida;
    }

}