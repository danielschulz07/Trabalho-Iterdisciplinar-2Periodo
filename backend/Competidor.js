export class Competidor {
    #atleta;
    #identificador;
    #classificacao;

    constructor(atleta,identificador,classificacao){
        this.#atleta = atleta;
        this.#identificador = identificador;
        this.#classificacao = classificacao;
    }
}