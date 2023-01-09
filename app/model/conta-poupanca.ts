import Conta from "./Conta";
import Cliente from "./cliente.js";

export default class ContaPoupanca extends Conta {
    private _rentabilidadeMensal: number;


    constructor(numero: string, cliente: Cliente) {
        super(numero, cliente);
    }

    public getRentabilidadeMensal(): number {
        return this._rentabilidadeMensal;
    }

    public setRentabilidadeMensal(rentabilidadeMensal: number) {
        this._rentabilidadeMensal = rentabilidadeMensal;
    }

    public calcularRendimento(): number {
        const rendimento = ContaPoupanca._rentabilidadeMensal * this.debito._valor;
        return rendimento;
    }

    public calcularSaldo(): number {
        return this.calcularRendimento() + this.debito._valor;
    }
}