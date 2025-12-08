export class Atleta {
    static #idStatic = 0;
    #id;
    #nome;
    #idade;
    #cpf;
    #nacionalidade;
    #modalidade;


    constructor (nome, idade, cpf, nacionalidade, modalidade) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
        this.#nacionalidade = nacionalidade;
        this.#modalidade = modalidade;

        this.#id = Atleta.#idStatic;
        Atleta.#idStatic++;
    }


    get id(){
        return this.#id;
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

    set idade(idade){
        if(idade >= 18){
        this.#idade = idade;
        }
    }


    get cpf(){
        return this.#cpf;
    }

    set cpf(cpf){
        this.#cpf = cpf;
    }

    get nacionalidade(){
        return this.#nacionalidade;
    }

    set nacionalidade(nacionalidade){
        this.#nacionalidade = nacionalidade;
    }
    
    get modalidade(){
        return this.#modalidade;
    }

    set modalidade(modalidade){
        this.#modalidade = modalidade;
    }

    toString() {
        return ("\nNome: " + this.#nome +
        "\nIdade: " + this.#idade +
        "\nCPF: " + this.#cpf +
        "\nNacionalidade: " + this.#nacionalidade +
        "\nOpção Corrida: " + this.#modalidade);
    } 
}