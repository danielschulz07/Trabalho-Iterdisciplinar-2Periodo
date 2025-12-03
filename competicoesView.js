import * as CompeticoesControl from "./competicoesControl.js";




const inNome = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const btInscrever = document.getElementById("btInscrever");
const inNomeCorridaSelecionada = document.getElementById("inNomeCorridaSelecionada");
const outSaida = document.getElementById("outSaida");

const inNomeCorrida = document.getElementById("inNomeCorrida");
const inDistancia = document.getElementById("inDistancia");
const dtCorrida = document.getElementById("dtCorrida");
const inQtdCompetidores = document.getElementById("inQtdCompetidores");
const inGanhoElevacao = document.getElementById("inGanhoElevacao");
const qtdCheckpointMaratona = document.getElementById("qtdCheckpointMaratona");
const qtdCheckpointTrail = document.getElementById("qtdCheckpointTrail");
const btCadastrarCorrida = document.getElementById("btCadastrarCorrida");

const slcOpcaoCorrida = document.getElementById("slcOpcaoCorrida");
const slcOpcaoModalidade = document.getElementById("slcOpcaoModalidade");
const slcOpcaoModalidadeTrail = document.getElementById("slcOpcaoModalidadeTrail");
const slcOpcaoDificuldade = document.getElementById("slcOpcaoDificuldade");


btInscrever.addEventListener('click', function (){
    
let nome = (inNome.value).toUpperCase();
let nomeCompeticaoSlc = (inNomeCorridaSelecionada.value).toUpperCase();
let opcao = slcOpcaoCorrida.value;
let idade = Number(inIdade.value);
let cpf = inCpf.value;

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
    } else if (opcao == "") {
        outSaida.style.color = "red";
        outSaida.textContent = "Selecione o tipo de Competição";
        slcOpcaoCorrida.focus();
    } else if (nomeCompeticaoSlc == "") {
        outSaida.style.color = "red";
        outSaida.textContent = "Deve ser preenchido a competição que deseja participar";
        nomeCompeticaoSlc.focus();
    } else {
        if (CompeticoesControl.adicionarCompetidor(nome, dtNascPessoa, idade, cpf, opcao, nomeCompeticaoSlc) == true) {
            outSaida.style.color = "blue";
            outSaida.textContent = "O novo produto foi acrescentado com sucesso!";
        } else {
            outSaida.style.color = "red";
            outSaida.textContent = "Erro! O produto " + nome + " já estava cadastrado ou o fornecedor não existe!";
            inNome.focus();
        }
    }





})