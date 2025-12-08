export class Atleta {
    static #idStatic = 0;
    #id;
    #nome;
    #idade;
    #cpf;
    #opcao

    constructor (nome, idade, cpf, opcao) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
        this.#opcao = opcao;

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

    get idade(){
        return this.#idade;
    }


    get cpf(){
        return this.#cpf;
    }
    
    get opcao(){
        return this.#opcao;
    }

    toString() {
        return ("\nNome: " + this.#nome +
        "\nCPF: " + this.#cpf +
        "\nIdade: " + this.#idade +
        "\nOpção Corrida: " + this.#opcao);
    } 

    relatorio() {
        return ("\nNome: " + this.#nome +
            "\nNome das corridas: " + this.nomeCorridasPassadas);
    }

}