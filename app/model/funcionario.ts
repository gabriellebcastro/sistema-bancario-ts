import Cargo from "./cargo.js";
import IUsuario from "./IUsuario.js";
import Pessoa from "./Pessoa.js";

export default class Funcionario extends Pessoa implements IUsuario {
    private _cargo: Array<Cargo> = new Array<Cargo>()
    private _salario: number;
  
    constructor(
        nome: string,
        telefone: string, 
        cpf: string, 
        _salario: number
    )
    {
        super(nome,telefone,cpf)    
    }

    public getSalario(): number {
        return this._salario;
      }
      public setSalario(salario: number) {
        this._salario = salario;
      }

      public addCargo(cargo: Cargo){
        this._cargo.push(cargo);
    }
  
    public getCargo(): Cargo {
      return this._cargo;
    }
    public setCargo(cargo: Cargo) {
      this._cargo = cargo;
    }
  
    public autenticar(): boolean {
      return true;
    }
  }

