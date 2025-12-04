export class Organizador {
    static #idStatic = 0;
    #id
    #nome;

    constructor (nome){
        this.#nome = nome;

        this.#id = Organizador.#idStatic;
        Organizador.#idStatic++;
    }

}