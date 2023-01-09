export default class Debito {
    public _valor: number;
    public _data: Date;

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