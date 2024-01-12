export class Pessoa {

    static total_pessoas = 0

    constructor(nome, idade, peso, altura){
        // Em outras liguagem utilizamos as palavras reservadas public, private and protected
        // aqui no JavaScript usamos o # ou _ para dizer que um atributo é privado. Mas no caso do _, ele é só uma indicação
        this._nome = nome 
        this._idade = idade
        this._peso = peso 
        this._altura = altura
        Pessoa.total_pessoas += 1 // contador
    }

    get nome (){
        return this._nome
    }
    set nome (novo_nome){
        if(typeof novo_nome === 'string'){
            this._nome = novo_nome
        }
    }

    get total_pessoas() {
        return Pessoa.total_pessoas
    }

    calcula_imc(){
        return Number((this._peso / (this._altura**2)).toFixed(2))
    }

    classifica_imc(){
        let imc = (this.calcula_imc()).toFixed(2)
        /*
        Se ultilizassemos this.imc = (this.calcula_imc()).toFixed(2) 
        (sem o let no inicio pois não estariamos criando uma variável), 
        o imc passaria a ser um atributo da classe e portanto poderiamos 
        ter acesso a ele com test.imc
        */
        let classifica_imc = ''

        if (imc <= 18.5) {
            classifica_imc = 'Abaixo do peso'
        }
        else if (imc <= 24.9) {
            classifica_imc = 'Peso normal'
        }
        else if (imc <= 29.9) {
            classifica_imc = 'Sobrepeso'
        }
        else if (imc <= 34.9) {
            classifica_imc = 'Obesidade gral 1'
        }
        else if (imc <= 39.9) {
            classifica_imc = 'Obesidade gral 2'
        }
        else {
            classifica_imc = 'Obesidade gral 3 ou mórbidade'
        }
        return classifica_imc
    }
}
