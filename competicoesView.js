//import * as competicoesControl from "./competicoesControl.js";

alert("alo");


const inNome = document.getElementById("inNome");
const dtDataNasc = document.getElementById("dtDataNasc");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const btInscrever = document.getElementById("btInscrever");

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
    
const nome = (inNome.value).toUpperCase();
const dtNascPessoa = new Date(dtDataNasc.value + "T00:00:00");
const idade = Number(inIdade.value);
const cpf = inCpf.value;



if(nome == ""){
    alert("campo de nome vazio");
} else if(dtNascPessoa.value == ""){
    alert("datavazia")
} else if(idade == "" || idade <= 0){
    alert("idade torta")
} else if(cpf.length != 11){
    alert("cpf torto")
} else if(slcOpcaoCorrida.value == ""){
    alert("campo vazio")
} else {
    alert("alooooo")
}


               // if (ArmazemControlProduto.cadastrarProduto(descrProduto, preco, quantidade, cnpj) == true) {
             //       outResultado.style.color = "blue";
             //       outResultado.textContent = "O novo produto foi acrescentado com sucesso!";
              //  } else {
                //    outResultado.style.color = "red";
                 //   outResultado.textContent = "Erro! O produto " + descrProduto + " já estava cadastrado ou o fornecedor não existe!";
                 //   inProduto.focus();
             //   }

     
        
})



    

