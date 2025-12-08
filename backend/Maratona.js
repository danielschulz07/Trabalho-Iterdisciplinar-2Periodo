import { Competicao } from "./Competicao.js";

export class Maratona extends Competicao{
    #qtdPontoApoio;
    

    constructor(nome, distancia, data, limiteCorredores, altimetria, qtdPontoApoio){
        super(data, limiteCorredores, nome, distancia, altimetria);
        
        this.#qtdPontoApoio = qtdPontoApoio;
    }

    
    toString() {
        return (super.toString() +
            "\nPontos Apoio: " + this.#qtdPontoApoio);
    }
}