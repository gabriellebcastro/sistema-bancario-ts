import Conta from "./conta.js";
import Cliente from "./cliente.js";

export default class ContaCorrente extends Conta {
    private _limite: number;

    constructor(numero: string, cliente: Cliente, limite: number){
        super(numero, cliente)
        this._limite = limite;
    }

    public getLimite(): number {
        return this._limite;
    }

    public setLimite(limite: number) {
        this._limite = limite;
    }

    public transferir(contaDestino: Conta, valor: number){
        if(valor <= this.debito._valor){
            this.sacar(valor)
            contaDestino.depositar(valor)
        }
        else console.log("Saldo insuficiente")
    }

    
    public calcularSaldo(){
        return this.debito._valor;
    }
}