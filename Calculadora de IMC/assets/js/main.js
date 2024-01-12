import { Pessoa } from './Pessoa.js'

const test1 = new Pessoa("Eduardo", 26, 80, 1.73, 12)
const test2 = new Pessoa("Allison", 26, 80, 1.73, 12)
const test3 = new Pessoa("Sousa", 26, 80, 1.73, 12)
console.log(test1.calcula_imc())
test1.nome = 123
console.log(test1.nome)
console.log(test2.nome)
console.log(Pessoa.total_pessoas)
console.log(test1.classifica_imc())
console.log(test1.imc)