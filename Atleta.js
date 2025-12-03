export class Atleta {
    static #idStatic = 0;
    #id;
    #nome;
    #cpf;
    #idade;
    #dtNascimento;
    #qtdCorridasPassadas = 0;//otimizar colocando um calculo de .lenght?
    #nomeCorridasPassadas = [];
    #tipoCorridasPassadas = [];

    constructor (nome, cpf, dtNasc, idade) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#idade = idade;
        this.#dtNascimento = dtNasc;

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

    set cpf(cpf){
        this.#cpf = cpf;
    }

    get dtNascimento(){
        return this.#dtNascimento;
    }

    set dtNascimento(dtNascimento){
        this.#dtNascimento = dtNascimento;
    }
    
    get qtdCorridasPassadas(){
        return this.#qtdCorridasPassadas;
    }

    get nomeCorridasPassadas(){
        return this.#nomeCorridasPassadas;
    }

    toString() {
        return ("\nNome: " + this.#nome +
        "\nCPF: " + this.#cpf +
        "\nNascimento: " + this.#dtNascimento);
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