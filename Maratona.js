import { Corrida } from "./Corrida.js";

export class Maratona extends Corrida{
    #altimetria;

    constructor(nomeCorrida, distancia, dataCorrida, limiteCorredores, altimetria){
        super(dataCorrida, limiteCorredores, nomeCorrida, distancia);
        
        this.#altimetria = altimetria;
    }

}