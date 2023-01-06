import Conta from "./conta.js";
import { Endereco } from "./endereco.js";
import IUsuario from "./IUsuario.js";
import Pessoa from "./pessoa.js";

export default class Cliente extends Pessoa implements IUsuario {
    private _vip: boolean 
    private _endereco: Array<Endereco> = []
    private _conta: Array<Conta> = []

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this._vip = vip;
    }

    public getVip(): boolean {
        return this._vip;
    }
      
    public setVip(vip: boolean) {
        this._vip = vip;
    }

    public getEndereco() : Array<Endereco> {
        return this._endereco;
    }
    
    public setEndereco(v : Array<Endereco>) {
        this._endereco = v;
    }

    public addEndereco(endereco: Endereco){
        this._endereco.push(endereco);
    }

    public listarEnderecos(): void {
        console.log(this.getNome());
        console.log(this.getCpf());
    
        for (const endereco of this._endereco) {
          console.log(JSON.stringify(endereco));
        }
    }

    public addConta(Conta: Conta){
        this._conta.push(Conta);
    }

    public autenticar(): boolean {
        return true;
    }
}