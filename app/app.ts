import Cargo from "./model/cargo.js"
import Funcionario  from "./model/funcionario.js"
import Cliente  from "./model/cliente.js"
import ContaCorrente from "./model/conta-corrente.js"
import ContaPoupanca from "./model/conta-poupanca.js"
import { Endereco } from "./model/endereco.js"

//Aplicação 1
let Gerente = new Funcionario("Luís Pires", "93 0 0000-0000","000.000.000-00", 8000);
let Atendente = new Funcionario("Joao Santos", "93 0 1111-1111","111.111.111-11", 3500);
let cargoGerente = new Cargo("Gerente");
let cargoAtendente = new Cargo("Atendente");

Gerente.addCargo(cargoGerente);
Atendente.addCargo(cargoAtendente);

console.log(Atendente);
console.log(Gerente);

console.log("==========================================================================");

//Aplicação 2
let cliente1 = new Cliente("Júlia Castro", "93991388285","58825592272", true);
let endereco1 = new Endereco("11445567", "Travessa Paraná", "23", "Aeroporto Velho", "Santarém", "Pará");
let endereco2 = new Endereco("11445588", "Av. Sérgio Henn", "891", "Bloco 21", "Santarém", "Pará");
let endereco3 = new Endereco("11445577", "Av. Rui Barbosa", "2707", "Apto 301", "Santarém", "Pará");

cliente1.addEndereco(endereco1);
cliente1.addEndereco(endereco2);
cliente1.addEndereco(endereco3);
cliente1.listarEnderecos();

console.log("==========================================================================");

//Aplicação 3
const cliente2 = new Cliente("036.336.032-80", "Gabrielle Castro", "93992256295", true);
const conta1 = new ContaCorrente("001", cliente1, 1500);

conta1.depositar(100);
conta1.depositar(100);
conta1.depositar(100);
conta1.sacar(50);

console.log(`Saldo: ${conta1.calcularSaldo()}`);

//Aplicação 4

//Aplicação 5