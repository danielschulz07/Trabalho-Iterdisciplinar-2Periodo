export class Atleta {
    static #idStatic = 0;
    #id;
    #nome;
    #cpf;
    #idade;
    #qtdCorridasPassadas = 0;
    #nomeCorridasPassadas = [];
    #tipoCorridasPassadas = [];

    constructor (nome, cpf, idade) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#idade = idade;

        this.#id = Atleta.#idStatic;
        Atleta.#idStatic++;
    }


    static get id(){
        return this.id;
    }


    get nome(){
        return this.#nome;
    }

    set nome(nome){
        if (nome.length != 0){
            this.#nome = nome;
        }
    }

    get cpf(){
        return this.#cpf;
    }
    
    get qtdCorridasPassadas(){
        return this.#qtdCorridasPassadas;
    }

    get nomeCorridasPassadas(){
        return this.#nomeCorridasPassadas;
    }

    toString() {
        return ("\nNome: " + this.#nome +
        "\nCPF: " + this.#cpf);
    } 

    relatorio() {
        return ("\nNome: " + this.#nome +
            "\nNumero de corridas: " + this.#qtdCorridasPassadas +
            "\nNome das corridas: " + this.nomeCorridasPassadas);
    }

    historico(atleta, nomeCorrida, tipoCorrida) {
        if(atleta == this.id){
            this.#qtdCorridasPassadas++;
            this.#nomeCorridasPassadas.push(nomeCorrida);
            this.#tipoCorridasPassadas.push(tipoCorrida);
        }
    }
}