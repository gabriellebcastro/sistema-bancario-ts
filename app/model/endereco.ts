export class Endereco{

    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _complemento: string;
    private _cidade: string;
    private _uf: string;

    constructor(
        cep: string,
        logradouro: string,
        numero: string,
        complemento: string,
        cidade: string,
        uf: string
    ) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }

    public get cep(): string {
        return this._cep;
    }

    public set cep(cep: string) {
        this._cep = cep;
    }
    
    public get logradouro() : string {
        return this._logradouro;
    }
    
    public set logradouro(logradouro : string) {
        this._logradouro = logradouro;
    }
    
    public get numero() : string {
        return this._numero;
    }
    
    public set numero(numero : string) {
        this._numero = numero;
    }
       
    public get complemento() : string {
        return this._complemento;
    }
    
    public set complemento(complemento : string) {
        this._complemento = complemento;
    }
    
    public get cidade() : string {
        return this._cidade;
    }
    
    public set cidade(v : string) {
        this._cidade = v;
    }
    
    public get uf() : string {
        return this._uf;
    }
    
    public set uf(uf : string) {
        this._uf = uf;
    }   
}