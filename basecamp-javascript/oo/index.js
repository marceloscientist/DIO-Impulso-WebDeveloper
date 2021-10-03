
/* 
Atividade: Conta Bancária

Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia,
        this.numero = numero,
        this.tipo = tipo,
        this.saldo = saldo
    }
    // SALDO
    get = () => this._saldo
    set = (val) => this._saldo = val

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

const marcelo = new ContaBancaria(123, 28532, 'cc', 124.05)

console.log(marcelo.saldo)
