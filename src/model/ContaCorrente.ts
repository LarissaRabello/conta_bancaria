import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

    // Atributo
    private _limite: number

    // Método construtor - Tudo o que é da classe mãe + o atributo específico da classe filha
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number){
        super(numero, agencia, tipo, titular, saldo)
        this._limite = limite
    }

    // Metódos de acesso
    public get limite(){
        return this._limite
    }

    public set limite(limite: number){
        this._limite = limite
    }

    // Métodos específicos
    public sacar(valor: number): boolean{
        if((this.saldo + this._limite) < valor){
            console.log("\nSaldo insuficiente!")
            return false
        }
        this.saldo = this.saldo - valor
        return true
    }

    public visualizar(): void {
        super.visualizar() // Porque chamamos o visualizar com .visualizar() e não dentro de um parâmetro como na linha 10?
        console.log("Limite: " + this._limite.toFixed(2)) // Porque eu tenho que chamar o this aqui? Não consigo chamar o atributo apenas com _limite?
    }
}