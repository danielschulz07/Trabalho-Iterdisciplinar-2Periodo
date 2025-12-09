import * as AtletaControl from "./atletaControl.js";
//import { pesquisarAtleta } from "./atletaModel.js";
//import { pesquisarCompeticao } from "./competicaoControl.js";
import * as CompeticaoControl from "./competicaoControl.js";

const inNome = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const inNacionalidade = document.getElementById("inNacionalidade");
const idBuscar = document.getElementById("idBuscar");
const inNomeCorridaSelecionada = document.getElementById("inNomeCorridaSelecionada");
const btInscrever = document.getElementById("btInscrever");
const btAlterar = document.getElementById("btAlterar");
const outSaida = document.getElementById("outSaida");
const btExcluir = document.getElementById("btExcluir");
const inNomeCorrida = document.getElementById("inNomeCorrida");
const inDistancia = document.getElementById("inDistancia");
const dtCorrida = document.getElementById("dtCorrida");
const inQtdCompetidores = document.getElementById("inQtdCompetidores");
const inGanhoElevacao = document.getElementById("inGanhoElevacao");
const qtdCheckpointMaratona = document.getElementById("qtdCheckpointMaratona");
const qtdCheckpointTrail = document.getElementById("qtdCheckpointTrail");
const btCadastrarCorrida = document.getElementById("btCadastrarCorrida");
const btInscreverAtletaComp = document.getElementById("btInscreverAtletaComp");
const btBuscar = document.getElementById("btBuscar");
const btCancelar = document.getElementById("btCancelar");
const slcOpcaoCorrida = document.getElementById("slcOpcaoCorrida");
const slcOpcaoModalidade = document.getElementById("slcOpcaoModalidade");
const slcOpcaoModalidadeTrail = document.getElementById("slcOpcaoModalidadeTrail");
const slcOpcaoDificuldade = document.getElementById("slcOpcaoDificuldade");
const inIdentificador = document.getElementById("inIdentificador");
const labelColocacao = document.getElementById("labelColocacao");
const inColocacao = document.getElementById("inColocacao");

if (btInscrever) {
    btInscrever.addEventListener('click', function () {

        let nome = (inNome.value).toUpperCase();
        let idade = Number(inIdade.value);
        let cpf = inCpf.value;
        let nacionalidade = inNacionalidade.value;
        let modalidade = slcOpcaoCorrida.value;
        
        if (nome == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Nome deve ser preenchido!";
            inNome.focus();
        } else if (idade == "" || idade < 18) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma idade válida";
            inIdade.focus();
        } else if (cpf.length != 11) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma CPF válido";
            inCpf.focus();   
        } else if (nacionalidade == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma nacionalidade válida";
            inNacionalidade.focus();
        }else if (modalidade == "Selecione a corrida") {
            outSaida.style.color = "red";
            outSaida.textContent = "Selecione a modadalidade de Competição";
            slcOpcaoCorrida.focus();
        }else {
            outSaida.style.color = "black";
            outSaida.innerHTML = AtletaControl.adicionar(nome, idade, cpf, nacionalidade, modalidade);
            inNome.value = "";
            inIdade.value = "";
            inCpf.value = "";
            inNacionalidade.value = "";
            slcOpcaoCorrida.value = "Selecione a Modalidade da Competição";
        }
    })
}

if(btExcluir){
    btExcluir.addEventListener('click', function () {
    let nome = (inNome.value).toUpperCase();
    
    if(nome == ""){
        outSaida.style.color = "red";
        outSaida.textContent = "Erro! O campo nome deve ser preenchido";
        inNome.focus();
    } else{
        outSaida.style.color = "black";
        outSaida.innerHTML = AtletaControl.excluir(nome);
        inNome.value = "";
        inIdade.value = "";
        inCpf.value = "";
        inNacionalidade.value = "";
        slcOpcaoCorrida.value = "Selecione a Modalidade da Competição";
        btCancelar.style.display = "none";
    }
})
}


if(btBuscar){
btBuscar.addEventListener('click', function () {
    let nome = (inNome.value).toUpperCase();

    if (nome == "") {
        outSaida.style.color = "red";
        outSaida.textContent = "Erro! O campo nome deve ser preenchido";
        inNome.focus();
        return;
    } else {
        let atletaEncontrado = AtletaControl.modificar(nome, {
            nome: inNome.textContent,
            idade: Number(inIdade.textContent),
            cpf: inCpf.textContent,
            nacionalidade: inNacionalidade.textContent,
            modalidade: slcOpcaoCorrida.textContent
        }) 
        if (atletaEncontrado) {
            inNome.value = atletaEncontrado.nome;
            inIdade.value = atletaEncontrado.idade;
            inCpf.value = atletaEncontrado.cpf;
            inNacionalidade.value = atletaEncontrado.nacionalidade;
            slcOpcaoCorrida.value = atletaEncontrado.modalidade;
            btInscrever.style.display = "none"; 
            btAlterar.style.display = "block"; 
            btCancelar.style.display = "inline";
            idBuscar.value = atletaEncontrado.id;
        } else {
            outSaida.textContent = "Atleta não existe no sistema!";
        }
    }
})
}

if(btAlterar){
btAlterar.addEventListener('click', function () {
        let nome = (inNome.value).toUpperCase();
        let idade = Number(inIdade.value);
        let cpf = inCpf.value;
        let nacionalidade = inNacionalidade.value;
        let modalidade = slcOpcaoCorrida.value;
        let id = (idBuscar.value);
        
        if (nome == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Nome deve ser preenchido!";
            inNome.focus();
        } else if (idade == "" || idade < 18) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma idade válida";
            inIdade.focus();
        } else if (cpf.length != 11) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma CPF válido";
            inCpf.focus();   
        } else if (nacionalidade == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma nacionalidade válida";
            inNacionalidade.focus();
        }else if (modalidade == "Selecione a corrida") {
            outSaida.style.color = "red";
            outSaida.textContent = "Selecione a modadalidade de Competição";
            slcOpcaoCorrida.focus();
        }else {
            outSaida.style.color = "black";
            outSaida.innerHTML = AtletaControl.alterar(id,nome, idade, cpf, nacionalidade, modalidade);
            inNome.value = "";
            inIdade.value = "";
            inCpf.value = "";
            inNacionalidade.value = "";
            slcOpcaoCorrida.value = "Selecione a Modalidade da Competição";
            idBuscar.textContent = ""; 
        }
        btInscrever.style.display = "block"; 
        btAlterar.style.display = "none"; 
        btCancelar.style.display = "none";
})
}

if(btCancelar){
btCancelar.addEventListener("click", function () {
    inNome.value = "";
    inIdade.value = "";
    inCpf.value = "";
    inNacionalidade.value = "";
    slcOpcaoCorrida.value = "Selecione a Modalidade da Competição";
    idBuscar.textContent = ""; 
    
    btInscrever.style.display = "block"; 
    btAlterar.style.display = "none"; 
    btCancelar.style.display = "none";
})
}

if (btCadastrarCorrida) {
    btCadastrarCorrida.addEventListener('click', function () {
        
        let nomeCompeticao = (inNomeCorrida.value).toUpperCase();
        let distancia = Number(inDistancia.value);
        let dataCorrida = new Date(dtCorrida.value);
        let qtdCompetidores = Number(inQtdCompetidores.value);
        let ganhoElevacao = Number(inGanhoElevacao.value);
        let qtdCheckMaratona = Number(qtdCheckpointMaratona.value);
        let qtdCheckTrail = Number(qtdCheckpointTrail.value);
        let opcaoModalidade = slcOpcaoModalidade.value;
        let opcaoModalidadeTrail = slcOpcaoModalidadeTrail.value;
        let opcaoDificuldade = slcOpcaoDificuldade.value;

        if (nomeCompeticao == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Nome da Competição deve ser preenchido!";
            inNomeCorrida.focus();
        } else if (distancia <= 0) {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Distancia deve ser preenchido com um valor acima de 0!";
            inDistancia.focus();
        } else if (!dtCorrida.value || isNaN(dataCorrida.getTime())) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchida uma data válida!";
            dtCorrida.focus();
        } else if (qtdCompetidores <= 0) {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Quantidade de Competidores deve ser preenchido com um valor acima de 0!";
            inQtdCompetidores.focus();
        } else if (opcaoModalidade == "Selecione a modalidade") {
            outSaida.style.color = "red";
            outSaida.textContent = "Selecione uma modalidade!";
            slcOpcaoModalidade.focus();
        } else if (opcaoModalidade == "Maratona") {
            qtdCheckpointTrail.disabled = true;
            slcOpcaoModalidadeTrail.disabled = true;
            slcOpcaoDificuldade.disabled = true;
            inGanhoElevacao.disabled = false;
            qtdCheckpointMaratona.disabled = false;

            if (ganhoElevacao <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Ganho de elevação deve ser preenchido com um valor acima de 0!";
                inGanhoElevacao.focus();
            } else if (qtdCheckMaratona <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Quantidade de CheckPoint deve ser preenchido com um valor acima de 0!";
                qtdCheckpointMaratona.focus();
            } else {
                if (CompeticaoControl.adicionarCompeticao(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade) == true) {
                    outSaida.style.color = "blue";
                    outSaida.textContent = "O novo produto foi acrescentado com sucesso!";
                } else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "Erro! O Competidor " + nome + " já estava cadastrado!";
                    inNome.focus();
                }
            }
        } else if (opcaoModalidade == "TrailRunning") {
            inGanhoElevacao.disabled = true;
            qtdCheckpointMaratona.disabled = true;
            qtdCheckpointTrail.disabled = false;
            slcOpcaoModalidadeTrail.disabled = false;
            slcOpcaoDificuldade.disabled = false;

            if (qtdCheckTrail <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Quantidade de CheckPoint deve ser preenchido com um valor acima de 0!";
                qtdCheckpointTrail.focus();
            }
            else if (opcaoModalidadeTrail == "Selecione o tipo") {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo de Modalidade do Tril deve ser preenchido com um valor válido!";
                slcOpcaoModalidadeTrail.focus();
            }
            else if (opcaoDificuldade == "Selecione o tipo") {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo de Dificuldade deve ser preenchido com um valor válido!";
                slcOpcaoDificuldade.focus();
            } else {
                if (CompeticaoControl.adicionarCompeticao(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, opcaoModalidadeTrail, opcaoDificuldade) == true) {
                    outSaida.style.color = "blue";
                    outSaida.textContent = "O novo produto foi acrescentado com sucesso!";
                } else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "Erro! O Competidor " + nome + " já estava cadastrado!";
                    inNome.focus();
                }
            }
        }
    });
}

if(btInscreverAtletaComp){
    btInscreverAtletaComp.addEventListener('click', function(){
        let nome = (inNome.value).toUpperCase();
        let competicao = inNomeCorridaSelecionada.value;
        let identificador = inIdentificador.value;
        let colocacao = inColocacao.value;
        labelColocacao.style.display = "none";
        inColocacao.style.display = "none";
        //classificacao?
        //IF DEBAIXO PROCURAR NO VETOR COMPETIDOR
        if(CompeticaoControl.checarVetCompetidor(AtletaControl.modificar(nome).id, CompeticaoControl.pesquisarCompeticao(competicao).id) == true){
            labelColocacao.style.display = "block";
            inColocacao.style.display = "block";
            CompeticaoControl.colocacaoCompetidor(AtletaControl.modificar(nome).id, CompeticaoControl.pesquisarCompeticao(competicao).id, colocacao);
        }else if(AtletaControl.modificar(nome) != null && CompeticaoControl.pesquisarCompeticao(competicao) != null){
            let idAtleta = AtletaControl.modificar(nome);
            let idCompeticao = CompeticaoControl.pesquisarCompeticao(competicao);
            CompeticaoControl.vincularCompetidor(idAtleta.id,idCompeticao.id, identificador);//identificador e classificacao

        }
        


    })
}
const tabelaCompetidores = document.getElementById("tabelaCompetidores");
const tabelaCorridas = document.getElementById("tabelaCorridas");

//window.onload = CompeticaoControl.criarRelatorio();
//window.onload = AtletaControl.criarRelatorio();



const btPesquisarAtleta = document.getElementById("btPesquisarAtleta");
const btPesquisarCorrida = document.getElementById("btPesquisarCorrida");

btPesquisarAtleta.addEventListener("click", function(){
    let nome = (inNome.value).toUpperCase();
    let idade = Number(inIdade.value);
    let cpf = inCpf.value;
    let nacionalidade = inNacionalidade.value;
    let modalidade = slcOpcaoCorrida.value;

    AtletaControl.pesquisarAtleta(nome, idade, cpf, nacionalidade, modalidade);
})

btPesquisarCorrida.addEventListener("click", function(){
    let nomeCompeticao = (inNomeCorrida.value).toUpperCase();
    let distancia = Number(inDistancia.value);
    let dataCorrida = new Date(dtCorrida.value);
    let qtdCompetidores = Number(inQtdCompetidores.value);
    let opcaoModalidade = slcOpcaoModalidade.value;

    CompeticaoControl.pesquisarCorrida(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade);
})
/*
btInscreverAtletaComp.addEventListener('click', function () {
    let nome = (inNome.value).toUpperCase();
    let cpf = inCpf.value;
    let corridaSelecionada = (inNomeCorridaSelecionada.value).toUpperCase();

        if (nome == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Nome deve ser preenchido!";
            inNome.focus();
        } else if (cpf.length != 11) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma CPF válido";
            inCpf.focus();
        } else if(corridaSelecionada == ""){
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido a corrida que o Atleta ira Participar";
            inNomeCorridaSelecionada.focus();
        } else{
            if (AtletaControl.adicionarAtleta(nome, dtNascPessoa, idade, cpf, opcao) == true) {
                outSaida.style.color = "blue";
                outSaida.textContent = "O novo produto foi acrescentado com sucesso!";
            } else {
                outSaida.style.color = "red";
                outSaida.textContent = "Erro! O Competidor " + nome + " já estava cadastrado!";
                inNome.focus();
            }  



        }
    })
    */





