import Cliente from "./cliente.js";
import Credito from "./credito.js";
import Debito from "./debito.js";

export default abstract class Conta {
    private _numero: string;
    private _cliente: Cliente;
    private _debito: Debito[] = [];
    private _credito: Credito[] = [];
    debito: Debito = new Debito()

    constructor(numero: string, cliente: Cliente) {
        this._numero = numero;
        this._cliente = cliente;
    }

    public getNumero() : string {
        return this._numero;
    }

    public getCliente(): Cliente {
        return this._cliente;
    }

    public setCliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    public depositar(valor: number) : Date {
        const dataDeposito = this.debito._data;
        this.debito._valor += valor;
        return dataDeposito;
    }

    public sacar(valor: number) : Date {
        const dataSaque = this.debito._data;

        if(valor <= this.debito._valor)
            this.debito._valor -= valor;
        else console.log("Saldo insuficiente");   
        return dataSaque;
    }
}