import Cliente from "./cliente.js";
import Credito from "./credito.js";
import Debito from "./debito.js";

export default abstract class Conta {
    private _numero: string;
    private _cliente: Cliente;
    private _debito: Debito[] = [];
    private _credito: Credito[] = [];

    constructor(numero: string, cliente: Cliente) {
        this._numero = numero;
        this._cliente = cliente;
    }

    public get numero() : string {
        return this._numero;
    }

    public getCliente(): Cliente {
        return this._cliente;
    }

    public setCliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    //MÉTODO DEPOSITAR

    //MÉTODO SACAR
}