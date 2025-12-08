import * as AtletaControl from "./atletaControl.js";

const inNome = document.getElementById("inNome");
const dtDataNasc = document.getElementById("dtDataNasc");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const inNomeCorridaSelecionada = document.getElementById("inNomeCorridaSelecionada");
const btInscrever = document.getElementById("btInscrever");
const outSaida = document.getElementById("outSaida");
const btnExcluir = document.getElementById("btnExcluir");
const inNomeCorrida = document.getElementById("inNomeCorrida");
const inDistancia = document.getElementById("inDistancia");
const dtCorrida = document.getElementById("dtCorrida");
const inQtdCompetidores = document.getElementById("inQtdCompetidores");
const inGanhoElevacao = document.getElementById("inGanhoElevacao");
const qtdCheckpointMaratona = document.getElementById("qtdCheckpointMaratona");
const qtdCheckpointTrail = document.getElementById("qtdCheckpointTrail");
const btCadastrarCorrida = document.getElementById("btCadastrarCorrida");
const btInscreverAtletaComp = document.getElementById("btInscreverAtletaComp");
const btnBuscar = document.getElementById("btnBuscar");
const slcOpcaoCorrida = document.getElementById("slcOpcaoCorrida");
const slcOpcaoModalidade = document.getElementById("slcOpcaoModalidade");
const slcOpcaoModalidadeTrail = document.getElementById("slcOpcaoModalidadeTrail");
const slcOpcaoDificuldade = document.getElementById("slcOpcaoDificuldade");




if (btInscrever) {
    btInscrever.addEventListener('click', function () {

        let nome = (inNome.value).toUpperCase();
        let opcao = slcOpcaoCorrida.value;
        let dtNascPessoa = new Date(dtDataNasc.value);
        let idade = Number(inIdade.value);
        let cpf = inCpf.value;
        
        if (nome == "") {
            outSaida.style.color = "red";
            outSaida.textContent = "O campo Nome deve ser preenchido!";
            inNome.focus();
        } else if (!dtDataNasc.value || isNaN(new Date(dtDataNasc.value).getTime())) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma data válida";
            dtDataNasc.focus();
        } else if (idade == "" || idade < 18) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma idade válida";
            inIdade.focus();
        } else if (cpf.length != 11) {
            outSaida.style.color = "red";
            outSaida.textContent = "Deve ser preenchido uma CPF válido";
            inCpf.focus();
        } else if (opcao == "Selecione a corrida") {
            outSaida.style.color = "red";
            outSaida.textContent = "Selecione a modadalidade de Competição";
            slcOpcaoCorrida.focus();
        } else {
            outSaida.style.color = "black";
            outSaida.innerHTML = AtletaControl.adicionar(nome, dtNascPessoa, idade, cpf, opcao);
            inNome.value = "";
            dtDataNasc.value = "";
            inIdade.value = "";
            inCpf.value = "";
            slcOpcaoCorrida.value = "";
        }
    })
}

btnExcluir.addEventListener('click', function () {
    let nome = (inNome.value).toUpperCase();

    if(nome == ""){
        outSaida.style.color = "red";
        outSaida.textContent = "Erro! O campo nome deve ser preenchido";
        inNome.focus();
    } else{
        outSaida.style.color = "black";
        outSaida.innerHTML = AtletaControl.excluir(nome);
    }
})

btnBuscar.addEventListener('click', function () {
    let nome = (inNome.value).toUpperCase();
    let opcao = slcOpcaoCorrida.value;
    let dtNascPessoa = new Date(dtDataNasc.value);
    let idade = Number(inIdade.value);
    let cpf = inCpf.value;

    if (nome == "") {
        outSaida.style.color = "red";
        outSaida.textContent = "Erro! O campo nome deve ser preenchido";
        inNome.focus();
        return;
    } else {

        let resposta = AtletaControl.modificar(nome, {
            nome: inNome.textContent,
            dtNascPessoa: dtDataNasc.textContent,
            idade: Number(inIdade.textContent),
            cpf: inCpf.textContent,
            opcao: slcOpcaoCorrida.textContent
        });

        if (resposta.erro) {
            outSaida.textContent = resposta.erro;
            inNome.textContent = nome;
            dtDataNasc.textContent = dtNascPessoa;
            inIdade.textContent = idade;
            inCpf.textContent = cpf;

        } else {
            outSaida.textContent = "Atleta atualizado com sucesso!";
        }
        //outSaida.style.color = "black";
        //outSaida.innerHTML = AtletaControl.modificar(nome, dtNascPessoa, idade, cpf, opcao);
        //inNome.textContent = 
    }


    
    
    
    
    //else{
    //    outSaida.style.color = "black";
     //   outSaida.innerHTML = AtletaControl.modificar(nome, dtNascPessoa, idade, cpf, opcao);
  //  }
 /*

                if (mes < 1 || mes > 12) {
                outResultado.style.color = "red";
                outResultado.textContent = "Ops, digite um mês de 1-12!";
                inMes.focus();
            } else {
                if (inQtd.value == "" || quantidade < 0) {
                    outResultado.style.color = "red";
                    outResultado.textContent = "Para alterar quantidade vendida, o campo Quantidade deve ser preenchido com valor >= 0 !";
                    inQtd.focus();
                } else {
                    let produto = ArmazemControlProduto.alterarProduto(descrProduto, mes, quantidade, cnpj);
                    if (produto != null) {
                        outResultado.style.color = "blue";
                        outResultado.textContent = "O produto " + produto.descricao + " foi alterado no mês " + mes + " tendo como quantidade vendida : " + produto.getQtdVendasMes(mes);
                    } else {
                        outResultado.style.color = "red";
                        outResultado.textContent = "O produto que deseja alterar não está cadastrado";
                    }
                }
            }


            break;
            */
})


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





