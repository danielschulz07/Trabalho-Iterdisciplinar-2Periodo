import { Competicao } from "./Competicao.js";

export class Maratona extends Competicao{
    #qtdPontoApoio;
    #altimetria;
    

    constructor(nome, distancia, data, limiteCorredores, qtdPontoApoio, altimetria){
        super(data, limiteCorredores, nome, distancia);
        
        this.#qtdPontoApoio = qtdPontoApoio;
        this.#altimetria = altimetria;
    }

    
    toString() {
        return (super.toString() +
            "\nPontos Apoio: " + this.#qtdPontoApoio);
    }
}