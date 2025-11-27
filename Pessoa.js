export class Pessoa {
    static #idPessoa = 0;
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

        Pessoa.#idPessoa++;
    }
    /*... as implementações dos métodos get e set seguem
    os códigos mostrados anteriormente para a classe Cliente
    */

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

    historico(pessoa, nomeCorrida) {
        if(pessoa == this.idPessoa){
            this.#qtdCorridasPassadas++;
            this.#nomeCorridasPassadas.push(nomeCorrida);
        }
    }
}