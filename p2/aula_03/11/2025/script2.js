class Persona {
    idade = 0; // Definiu como 'age'
    
    constructor(nome) {
        this.nome = nome
    }
   sayHI(){
       console.log(`${this.nome} está dando OI`)
   }
}

class Student extends Persona {
    constructor(nome, id) {
        super(nome)
        this.id = id
    }
}

function NewPerson(nome,idade){
    let p1=new Persona(nome);
    p1.idade=idade
    return p1
}

pessoa6=NewPerson('Joaquim',25)

console.log(`O personagem: ${pessoa6.nome} tem ${pessoa6.idade} anos de idade`)
//                             Aqui você usa 'age' para exibir