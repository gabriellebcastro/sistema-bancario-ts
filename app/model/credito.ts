export default class Credito {
  static credito: any;
    private _valor: number;
    private _data: Date;
  
    constructor(valor: number, data: Date) {
      this._valor = valor;
      this._data = data;
    }

    public getValor(): number {
      return this._valor;
    }

    public setValor(valor: number) {
      this._valor = valor;
    }

    public getData(): Date {
      return this._data;
    }

    public setData(data: Date) {
      this._data = data;
    } 
}