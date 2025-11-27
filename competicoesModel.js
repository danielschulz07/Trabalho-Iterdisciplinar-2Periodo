import { Pessoa } from "./Pessoa.js";
import { Corrida } from "./Corrida.js";
import { TrailRunning } from "./TrailRunning.js";
import { Maratona } from "./Maratona.js";


var teste = new Pessoa(1213,3123,123,1231,23);
var teste2 = new Pessoa("zxc","zxcz","zxc","zxc","zxc");


var vetTeste = [teste, teste2];

var cor = new Corrida(123,123,123,123);
var cor2 = new Corrida("zxc","zxc","zxc","zxc");
var mar1 = new Maratona(123,123,123,123,123,123);
var trail = new TrailRunning("zxc","zxc","zxc","zxc","zxc","zxc","zxc")

vetTeste.forEach((pessoa) => cor.historico(pessoa));
vetTeste.forEach((pessoa) => cor2.historico(pessoa));
console.log(vetTeste);
console.log(mar1.toString());
console.log(cor2.toString());
console.log(trail.toString());