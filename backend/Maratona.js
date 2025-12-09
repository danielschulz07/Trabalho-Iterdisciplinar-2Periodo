import { Competicao } from "./Competicao.js";

export class Maratona extends Competicao{
    #qtdPontoApoio;
    #altimetria;
    

    constructor(nome, distancia, data, limiteCorredores, local, qtdPontoApoio, altimetria){
        super(nome, distancia,data, limiteCorredores,local);
        
        this.#qtdPontoApoio = qtdPontoApoio;
        this.#altimetria = altimetria;
    }

    
    toString() {
        return (super.toString() +
            "\nPontos Apoio: " + this.#qtdPontoApoio);
    }
}