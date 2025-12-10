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
const btAlterarCompeticao = document.getElementById("btAlterarCompeticao");
const outSaida = document.getElementById("outSaida");
const inNomeCompeticao = document.getElementById("inNomeCompeticao");
const inDistancia = document.getElementById("inDistancia");
const dtCorrida = document.getElementById("dtCorrida");
const inQtdCompetidores = document.getElementById("inQtdCompetidores");
const inTerreno = document.getElementById("inTerreno");
const inGanhoElevacao = document.getElementById("inGanhoElevacao");
const qtdCheckpointMaratona = document.getElementById("qtdCheckpointMaratona");
const qtdCheckpointTrail = document.getElementById("qtdCheckpointTrail");
const btCadastrarCorrida = document.getElementById("btCadastrarCorrida");
const btInscreverAtletaComp = document.getElementById("btInscreverAtletaComp");
const btBuscar = document.getElementById("btBuscar");
const btBuscarCompeticao = document.getElementById("btBuscarCompeticao");
const btCancelar = document.getElementById("btCancelar");
const btCancelarCompeticao = document.getElementById("btCancelarCompeticao");
const btExcluir = document.getElementById("btExcluir");
const btExcluirCompeticao = document.getElementById("btExcluirCompeticao");
const slcOpcaoCorrida = document.getElementById("slcOpcaoCorrida");
const slcOpcaoModalidade = document.getElementById("slcOpcaoModalidade");
const slcOpcaoModalidadeTrail = document.getElementById("slcOpcaoModalidadeTrail");
const slcOpcaoDificuldade = document.getElementById("slcOpcaoDificuldade");
const inIdentificador = document.getElementById("inIdentificador");
const labelColocacao = document.getElementById("labelColocacao");
const inColocacao = document.getElementById("inColocacao");
const inLocal = document.getElementById("inLocal");
const inQtdInscritos = document.getElementById("inQtdInscritos");
const slcOpcaoCorridaFiltro = document.getElementById("slcOpcaoCorridaFiltro");
const inNomeCorridaFiltro = document.getElementById("inNomeCorridaFiltro");
const inDistanciaFiltro = document.getElementById("inDistanciaFiltro");
const dtCorridaFiltro = document.getElementById("dtCorridaFiltro");
const inQtdCompetidoresFiltro = document.getElementById("inQtdCompetidoresFiltro");
const inLocalFiltro = document.getElementById("inLocalFiltro");
const slcOpcaoModalidadeFiltro = document.getElementById("slcOpcaoModalidadeFiltro");
const inNomeFiltro = document.getElementById("inNomeFiltro");
const inIdadeFiltro = document.getElementById("inIdadeFiltro");
const inCpfFiltro = document.getElementById("inCpfFiltro");
const inNacionalidadeFiltro = document.getElementById("inNacionalidadeFiltro");


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
        } else if (modalidade == "Selecione a corrida") {
            outSaida.style.color = "red";
            outSaida.textContent = "Selecione a modadalidade de Competição";
            slcOpcaoCorrida.focus();
        } else {
            outSaida.style.color = "black";
            outSaida.innerHTML = AtletaControl.adicionar(nome, idade, cpf, nacionalidade, modalidade);
            inNome.value = "";
            inIdade.value = "";
            inCpf.value = "";
            inNacionalidade.value = "";
            slcOpcaoCorrida.value = "Selecione a Modalidade da Competição";
        }
        AtletaControl.pesquisarAtleta("", 0, "", "", "Qualquer modalidade");

    })
}

if (btExcluir) {
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
    AtletaControl.pesquisarAtleta("", 0, "", "", "Qualquer modalidade");
})
}


if (btBuscar) {
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

if (btAlterar) {
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
        } else if (modalidade == "Selecione a corrida") {
            outSaida.style.color = "red";
            outSaida.textContent = "Selecione a modadalidade de Competição";
            slcOpcaoCorrida.focus();
        } else {
            outSaida.style.color = "black";
            outSaida.innerHTML = AtletaControl.alterar(id, nome, idade, cpf, nacionalidade, modalidade);
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
        AtletaControl.pesquisarAtleta("", 0, "", "", "Qualquer modalidade");
})
}

if (btCancelar) {
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

if (slcOpcaoModalidade) {
    slcOpcaoModalidade.addEventListener("change", function () {
        let opcaoModalidade = slcOpcaoModalidade.value;

        if (opcaoModalidade == "Maratona") {
            qtdCheckpointTrail.disabled = true;
            inTerreno.disabled = true;
            slcOpcaoModalidadeTrail.disabled = true;
            slcOpcaoDificuldade.disabled = true;
            inGanhoElevacao.disabled = false;
            qtdCheckpointMaratona.disabled = false;
        } if (opcaoModalidade == "TrailRunning") {
            inGanhoElevacao.disabled = true;
            qtdCheckpointMaratona.disabled = true;
            qtdCheckpointTrail.disabled = false;
            inTerreno.disabled = false;
            slcOpcaoModalidadeTrail.disabled = false;
            slcOpcaoDificuldade.disabled = false;
        }
    })
}

if (btCadastrarCorrida) {
    btCadastrarCorrida.addEventListener('click', function () {

        let nomeCompeticao = (inNomeCompeticao.value).toUpperCase();
        let distancia = Number(inDistancia.value);
        let dataCompeticao = new Date(dtCorrida.value);
        let qtdCompetidores = Number(inQtdCompetidores.value);
        let tipoTerreno = inTerreno.value;
        let ganhoElevacao = Number(inGanhoElevacao.value);
        let qtdCheckMaratona = Number(qtdCheckpointMaratona.value);
        let qtdCheckTrail = Number(qtdCheckpointTrail.value);
        let opcaoModalidade = slcOpcaoModalidade.value;
        let local = inLocal.value;
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
        } else if (!dtCorrida.value || isNaN(dataCompeticao.getTime())) {
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
            if (ganhoElevacao <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Ganho de elevação deve ser preenchido com um valor acima de 0!";
                inGanhoElevacao.focus();
            } else if (qtdCheckMaratona <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Quantidade de CheckPoint deve ser preenchido com um valor acima de 0!";
                qtdCheckpointMaratona.focus();
            } else {
                outSaida.style.color = "black";
                outSaida.innerHTML = CompeticaoControl.adicionar(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade,local);
                inNomeCompeticao.value = "";
                inDistancia.value = "";
                dtCorrida.value = "";
                inQtdCompetidores.value = "";
                slcOpcaoModalidade.value = "Selecione a modalidade";
                inGanhoElevacao.value = "";
                qtdCheckpointMaratona.value = "";
                inLocal.value = "";
            }
        } else if (opcaoModalidade == "TrailRunning") {
            if (qtdCheckTrail <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Quantidade de CheckPoint deve ser preenchido com um valor acima de 0!";
                qtdCheckpointTrail.focus();
            } else if (tipoTerreno == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Preencha o campo de Tipo de Terreno";
                inTerreno.focus();
            } else if (opcaoModalidadeTrail == "Selecione o tipo") {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo de Modalidade do Tril deve ser preenchido com um valor válido!";
                slcOpcaoModalidadeTrail.focus();
            } else if (opcaoDificuldade == "Selecione o tipo") {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo de Dificuldade deve ser preenchido com um valor válido!";
                slcOpcaoDificuldade.focus();
            } else {
                outSaida.style.color = "black";
                outSaida.innerHTML = CompeticaoControl.adicionar(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade,local);
                inNomeCompeticao.value = "";
                inDistancia.value = "";
                dtCorrida.value = "";
                inQtdCompetidores.value = "";
                slcOpcaoModalidade.value = "Selecione a modalidade";
                qtdCheckpointTrail.value = "";
                inTerreno.value = "";
                slcOpcaoModalidadeTrail.value = "Selecione o tipo de Modadalidade";
                slcOpcaoDificuldade.value = "Selecione o tipo de Dificuldade";
            }
        }
        nomeCompeticao = "";
        distancia = 0;
        dataCompeticao = "";
        qtdCompetidores = 0;
        opcaoModalidade = "Qualquer modalidade";
        local = "";
        CompeticaoControl.pesquisarCorrida(nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, local);
    });
}

if (btExcluirCompeticao) {
    btExcluirCompeticao.addEventListener('click', function () {

        let nomeCompeticao = (inNomeCompeticao.value).toUpperCase();

        if (nomeCompeticao == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "Erro! O campo nome da Competição deve ser preenchido";
            inNomeCompeticao.focus();
        } else {
            outSaida.style.color = "black";
            outSaida.innerHTML = "";
            outSaida.innerHTML = CompeticaoControl.excluir(nomeCompeticao);
            inNomeCompeticao.value = "";
            btCancelarCompeticao.style.display = "none";
        }
    })
}

if (btBuscarCompeticao) {
    btBuscarCompeticao.addEventListener('click', function () {
        let nomeCompeticao = (inNomeCompeticao.value).toUpperCase();

        if (nomeCompeticao == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "Erro! O campo nome da Competição deve ser preenchido";
            inNomeCompeticao.focus();
            return;
        } else {
            let competicaEncontrada = CompeticaoControl.procurar(nomeCompeticao, {
                nomeCompeticao: inNomeCompeticao.textContent,
                distancia: Number(inDistancia.textContent),
                dataCompeticao: dtCorrida.value,
                qtdCompetidores: inQtdCompetidores.textContent,
                local: inLocal.value,
                modalidade: slcOpcaoModalidade.textContent,
                ganhoElevacao: inGanhoElevacao.textContent,
                qtdCheckMaratona: qtdCheckpointMaratona.textContent,
                qtdCheckpoints: qtdCheckpointTrail.textContent,
                tipoTerreno: inTerreno.textContent,
                modalidadeTrail: slcOpcaoModalidadeTrail.textContent,
                nivelDificuldade: slcOpcaoDificuldade.textContent
            })
            if (competicaEncontrada) {
                inNomeCompeticao.value = competicaEncontrada.nomeCompeticao;
                inDistancia.value = competicaEncontrada.distancia;
                dtCorrida.value = new Date(competicaEncontrada.dataCompeticao).toISOString().split('T')[0];
                inQtdCompetidores.value = competicaEncontrada.qtdCompetidores;
                inLocal.value = competicaEncontrada.local;
                slcOpcaoModalidade.value = competicaEncontrada.modalidade;
                if (competicaEncontrada.modalidade == "Maratona") {
                    inGanhoElevacao.value = competicaEncontrada.altimetria;
                    qtdCheckpointMaratona.value = competicaEncontrada.qtdPontoApoio;
                    qtdCheckpointTrail.value = "";
                    inTerreno.value = "";
                    slcOpcaoModalidadeTrail.value = "";
                    slcOpcaoDificuldade.value = "";
                }
                if (competicaEncontrada.modalidade == "TrailRunning") {
                    qtdCheckpointTrail.value = competicaEncontrada.qtdCheckpoints;
                    inTerreno.value = competicaEncontrada.tipoTerreno;
                    slcOpcaoModalidadeTrail.value = competicaEncontrada.modalidadeTrail;
                    slcOpcaoDificuldade.value = competicaEncontrada.nivelDificuldade;
                    inGanhoElevacao.value = "";
                    qtdCheckpointMaratona.value = "";
                }
                btCadastrarCorrida.style.display = "none";
                btAlterarCompeticao.style.display = "block";
                btCancelarCompeticao.style.display = "inline";
                idBuscar.value = competicaEncontrada.id;
            } else {
                outSaida.textContent = "Atleta não existe no sistema!";
            }
        }
    })
}

if (btAlterarCompeticao) {
    btAlterarCompeticao.addEventListener('click', function () {

        let nomeCompeticao = (inNomeCompeticao.value).toUpperCase();
        let distancia = Number(inDistancia.value);
        let dataCompeticao = new Date(dtCorrida.value);
        let qtdCompetidores = Number(inQtdCompetidores.value);
        let tipoTerreno = inTerreno.value;
        let ganhoElevacao = Number(inGanhoElevacao.value);
        let qtdCheckMaratona = Number(qtdCheckpointMaratona.value);
        let qtdCheckTrail = Number(qtdCheckpointTrail.value);
        let opcaoModalidade = slcOpcaoModalidade.value;
        let local = inLocal.value;
        let opcaoModalidadeTrail = slcOpcaoModalidadeTrail.value;
        let opcaoDificuldade = slcOpcaoDificuldade.value;
        let id = (idBuscar.value);

        if (nomeCompeticao == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Nome da Competição deve ser preenchido!";
            inNomeCorrida.focus();
        } else if (distancia <= 0) {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Distancia deve ser preenchido com um valor acima de 0!";
            inDistancia.focus();
        } else if (!dtCorrida.value || isNaN(dataCompeticao.getTime())) {
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
            if (ganhoElevacao <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Ganho de elevação deve ser preenchido com um valor acima de 0!";
                inGanhoElevacao.focus();
            } else if (qtdCheckMaratona <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Quantidade de CheckPoint deve ser preenchido com um valor acima de 0!";
                qtdCheckpointMaratona.focus();
            } else {
                outSaida.style.color = "black";
                outSaida.innerHTML = CompeticaoControl.alterar(id, nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade,local, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade);
                inNomeCompeticao.value = "";
                inDistancia.value = "";
                dtCorrida.value = "";
                inQtdCompetidores.value = "";
                inLocal.value = "";
                slcOpcaoModalidade.value = "Selecione a modalidade";
                inGanhoElevacao.value = "";
                qtdCheckpointMaratona.value = "";
            }
        } else if (opcaoModalidade == "TrailRunning") {
            if (qtdCheckTrail <= 0) {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo Quantidade de CheckPoint deve ser preenchido com um valor acima de 0!";
                qtdCheckpointTrail.focus();
            } else if (tipoTerreno == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Preencha o campo de Tipo de Terreno";
                inTerreno.focus();
            } else if (opcaoModalidadeTrail == "Selecione o tipo") {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo de Modalidade do Tril deve ser preenchido com um valor válido!";
                slcOpcaoModalidadeTrail.focus();
            } else if (opcaoDificuldade == "Selecione o tipo") {
                outSaida.style.color = "red";
                outSaida.textContent = "O campo de Dificuldade deve ser preenchido com um valor válido!";
                slcOpcaoDificuldade.focus();
            } else {
                outSaida.style.color = "black";
                outSaida.innerHTML = CompeticaoControl.alterar(id, nomeCompeticao, distancia, dataCompeticao, qtdCompetidores, opcaoModalidade, local, ganhoElevacao, qtdCheckMaratona, qtdCheckTrail, tipoTerreno, opcaoModalidadeTrail, opcaoDificuldade);
                inNomeCompeticao.value = "";
                inDistancia.value = "";
                dtCorrida.value = "";
                inQtdCompetidores.value = "";
                slcOpcaoModalidade.value = "Selecione a modalidade";
                inLocal.value = "";
                qtdCheckpointTrail.value = "";
                inTerreno.value = "";
                slcOpcaoModalidadeTrail.value = "Selecione o tipo de Modadalidade";
                slcOpcaoDificuldade.value = "Selecione o tipo de Dificuldade";
            }
        }
        btCadastrarCorrida.style.display = "block";
        btAlterarCompeticao.style.display = "none";
        btCancelarCompeticao.style.display = "none";
    })
}

if (btCancelarCompeticao) {
    btCancelarCompeticao.addEventListener("click", function () {
        inNomeCompeticao.value = "";
        inDistancia.value = "";
        dtCorrida.value = "";
        inQtdCompetidores.value = "";
        slcOpcaoModalidade.value = "Selecione a modalidade";
        qtdCheckpointTrail.value = "";
        inTerreno.value = "";
        slcOpcaoModalidadeTrail.value = "Selecione o tipo de Modadalidade";
        slcOpcaoDificuldade.value = "Selecione o tipo de Dificuldade";
        inGanhoElevacao.value = "";
        qtdCheckpointMaratona.value = "";
        inLocal.value = "";

        btCadastrarCorrida.style.display = "block";
        btAlterarCompeticao.style.display = "none";
        btCancelarCompeticao.style.display = "none";
    })
}

if (btInscreverAtletaComp) {
    btInscreverAtletaComp.addEventListener('click', function () {
        let nome = (inNome.value).toUpperCase();
        let competicao = inNomeCorridaSelecionada.value;
        let identificador = inIdentificador.value;
        let colocacao = inColocacao.value;
        labelColocacao.style.display = "none";
        inColocacao.style.display = "none";

        if (CompeticaoControl.checarVetCompetidor(AtletaControl.modificar(nome).id, CompeticaoControl.pesquisarCompeticao(competicao).id) == true) {
            labelColocacao.style.display = "block";
            inColocacao.style.display = "block";
            CompeticaoControl.colocacaoCompetidor(AtletaControl.modificar(nome).id, CompeticaoControl.pesquisarCompeticao(competicao).id, colocacao);
        } else if (AtletaControl.modificar(nome) != null && CompeticaoControl.pesquisarCompeticao(competicao) != null) {
            let idAtleta = AtletaControl.modificar(nome);
            let idCompeticao = CompeticaoControl.pesquisarCompeticao(competicao);
            CompeticaoControl.vincularCompetidor(idAtleta.id,idCompeticao.id, identificador);//identificador e classificacao
        }
    })
}


window.onload = function(){
        if(inNome){
        let nome = (inNome.value).toUpperCase();
        let idade = Number(inIdade.value);
        let cpf = inCpf.value;
        let nacionalidade = inNacionalidade.value;
        let modalidade = slcOpcaoCorridaFiltro.value;
    
        AtletaControl.pesquisarAtleta(nome, idade, cpf, nacionalidade, modalidade);
    
    
    }
        if(inNomeCorridaFiltro){
        let nomeCompeticao = (inNomeCorridaFiltro.value).toUpperCase();
        let distancia = Number(inDistanciaFiltro.value);
        let dataCorrida = "";
        if(dtCorrida.value == ""){
            dataCorrida = "";
        }else{
            
            dataCorrida = new Date(dtCorridaFiltro.value + "T00:00:00");//Escolher horario?
        }
        let qtdCompetidores = Number(inQtdCompetidoresFiltro.value);
        let opcaoModalidade = slcOpcaoCorridaFiltro.value;
        let local = inLocalFiltro.value;
        
        CompeticaoControl.pesquisarCorrida(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, local);
        
    }
    if(inQtdInscritos){
        let nomeCompeticao = (inNomeCorridaFiltro.value).toUpperCase();
        let distancia = Number(inDistanciaFiltro.value);
        let dataCorrida = "";
        if(dtCorrida.value == ""){
            dataCorrida = "";
        }else{
    
            dataCorrida = new Date(dtCorridaFiltro.value + "T00:00:00");//Escolher horario?
        }
        let qtdCompetidores = Number(inQtdCompetidoresFiltro.value);
        let opcaoModalidade = slcOpcaoCorridaFiltro.value;
        let local = inLocalFiltro.value;
        let inscritos = null;
        if(inQtdInscritos.value == ""){
            inscritos = null;
        } else {
            inscritos = Number(inQtdInscritos.value);
        }

        CompeticaoControl.pesquisarCorrida(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, local, inscritos);
    }
}



const btPesquisarAtleta = document.getElementById("btPesquisarAtleta");
const btPesquisarCorrida = document.getElementById("btPesquisarCorrida");

if(btPesquisarAtleta){

    btPesquisarAtleta.addEventListener("click", function(){
        let nome = (inNomeFiltro.value).toUpperCase();
        let idade = Number(inIdadeFiltro.value);
        let cpf = inCpfFiltro.value;
        let nacionalidade = inNacionalidadeFiltro.value;
        let modalidade = slcOpcaoCorridaFiltro.value;

        AtletaControl.pesquisarAtleta(nome, idade, cpf, nacionalidade, modalidade);
    })
}

if(btPesquisarCorrida){

    btPesquisarCorrida.addEventListener("click", function(){
        let nomeCompeticao = (inNomeCorridaFiltro.value).toUpperCase();
        let distancia = Number(inDistanciaFiltro.value);
        let dataCorrida = "";
        if(dtCorrida.value == ""){
            dataCorrida = "";
        }else{
    
             dataCorrida = new Date(dtCorridaFiltro.value + "T00:00:00");//Escolher horario?
        }
        let qtdCompetidores = Number(inQtdCompetidoresFiltro.value);
        let opcaoModalidade = slcOpcaoCorridaFiltro.value;
        let local = inLocalFiltro.value;
        let inscritos = null;
        if(inQtdInscritos.value == ""){
            inscritos = null;
        } else {
            inscritos = Number(inQtdInscritos.value);
        }
        CompeticaoControl.pesquisarCorrida(nomeCompeticao, distancia, dataCorrida, qtdCompetidores, opcaoModalidade, local, inscritos);
    })
}