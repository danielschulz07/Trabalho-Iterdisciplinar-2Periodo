import { Competicao } from "./Competicao.js";

export class Maratona extends Competicao{
    #qtdPontoApoio;
    #altimetria
    
    constructor(nomeCompeticao, distancia, dataCompeticao, limiteCorredores, modalidade, altimetria, qtdPontoApoio){
        super(nomeCompeticao, distancia, dataCompeticao, limiteCorredores, modalidade);
        
        this.#qtdPontoApoio = qtdPontoApoio;
        this.#altimetria = altimetria;
    }

    get qtdPontoApoio(){
        return this.#qtdPontoApoio;
    }

    get altimetria(){
        return this.#altimetria;
    }

    
    toString() {
        return (super.toString() +
            "\nPontos Apoio: " + this.#qtdPontoApoio +
            "\n Altimetria> " + this.#altimetria);
    }
}