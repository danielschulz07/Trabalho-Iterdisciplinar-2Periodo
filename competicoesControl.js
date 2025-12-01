import * as model from "./competicoesModel.js";


model.vetPessoa.forEach((pessoa) => model.vetCorrida[0].historico(pessoa));
model.vetPessoa.forEach((pessoa) => model.vetCorrida[1].historico(pessoa));
console.log(model.vetPessoa);
console.log(model.vetCorrida[1].toString());
console.log(model.vetCorrida[2].toString());
console.log(model.vetCorrida[3].toString());

console.log(model.vetPessoa[1].relatorio());