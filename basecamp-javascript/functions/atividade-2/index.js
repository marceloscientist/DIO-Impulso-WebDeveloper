const  mar = { nome: "Marcelo", idade: 15 }

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(mar, 5))
console.log(calculaIdade.apply(mar, [5]))
