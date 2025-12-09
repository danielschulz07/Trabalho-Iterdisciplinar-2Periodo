export class Competicao {
    static #idStatic = 0;
    #id;
    #nome;
    //#altimetria;
    #distancia;
    #data;
    #limiteCorredores;
    #local


    constructor(nome, distancia, data, limiteCorredores, local){
        this.#nome = nome;
        this.#distancia = distancia;
        this.#data = data;
        this.#limiteCorredores = limiteCorredores;
        this.#local = local;
        //this.#altimetria = altimetria;
        this.#id = Competicao.#idStatic;
        Competicao.#idStatic++;
    }

    get id(){
        return this.#id;
    }

    get nome(){
        return this.#nome;
    }

    //get altimetria(){
    //   return this.#altimetria;
    //}

    get distancia(){
        return this.#distancia;
    }
    
    get data(){
        return this.#data;
    }

    get limiteCorredores(){
        return this.#limiteCorredores;
    }

    get local(){
        return this.#local;
    }

    historico(atleta){
        atleta.historico(atleta.id,this.#nome);
    }

    toString() {
        return ("\nid: " + this.id +
            "\nlista: "  + this.#nome);
    } 
}