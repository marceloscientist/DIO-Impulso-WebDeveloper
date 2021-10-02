// data 
let mar = { nome: 'Marcelo', nota: 60.0 }
let angel = { nome: 'Angélica', nota: 95.0 }
let gu = { nome: 'Gustavo', nota: 80.0 }
let alunos = [mar, angel, gu]

// function return alunos aprovados 
const alunosAprovados = (alunos, mediaFinal) => alunos.filter(aluno => aluno.nota >= mediaFinal)

// processamento pra recuperar apenas alunos aprovados 
let aprovados = alunosAprovados(alunos, 70.0)

// console apenas dos alunos aprovados 
aprovados.map(aluno => console.log(aluno.nome))

