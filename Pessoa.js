export class Pessoa {
    static #idPessoaStatic = 0;
    #idPessoa;
    #nome;
    #idade;
    #cpf;
    #email;
    #dtNascimento;
    #qtdCorridasPassadas = 0;
    #nomeCorridasPassadas = [];

    constructor (nome, cpf, dtNasc, idade, email) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
        this.#email = email;
        this.#dtNascimento = dtNasc;

        this.#idPessoa = Pessoa.#idPessoaStatic;
        Pessoa.#idPessoaStatic++;
    }


    static get idPessoa(){
        return this.idPessoa;
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

    historico(pessoa, nomeCorrida) {
        if(pessoa == this.idPessoa){
            this.#qtdCorridasPassadas++;
            this.#nomeCorridasPassadas.push(nomeCorrida);
        }
    }
}