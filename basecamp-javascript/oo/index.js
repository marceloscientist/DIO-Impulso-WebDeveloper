class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia,
        this.numero = numero,
        this.tipo = tipo,
        this._saldo = 0;
    }
    // SALDO
    get saldo () {
        return this._saldo
    }
    set saldo (val) {
        this._saldo = val  
    } 

    sacar(val) {
        if(val > this.saldo) {
            return "Operação inválida"
        }
        this._saldo -= val
        return this._saldo;
    }

    depositar(val) {
        this._saldo += val;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito () {
      return this._cartaoCredito;  
    } 
    set cartaoCredito (val) {
        this._cartaoCredito = val
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }   
    sacar(val) {
        if(val > 500) {
            return "Operação Inválida"
        }
        this._saldo -= val;
    }
}
