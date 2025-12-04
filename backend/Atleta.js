export class Atleta {
    static #idStatic = 0;
    #id;
    #nome;
    #dataNascimento;
    #idade;
    #cpf;
    #opcao
    #qtdCorridasPassadas = 0;
    #nomeCorridasPassadas = [];
    #tipoCorridasPassadas = [];

    constructor (nome, dataNascimento, idade, cpf, opcao) {
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
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
    
    get dataNascimento(){
        return this.#dataNascimento
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