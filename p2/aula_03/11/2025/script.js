class Person{

     passos=0
     _idade=0
    constructor(FirstName,LastName){
        this.firstnome=FirstName
        this.lastnome=LastName
        
    }

    get fullName(){
        return `${this.firstnome} ${this.lastnome}`
    }

    get idade(){
        return this._idade
    }

    set idade(newage){
        if(typeof newage ==='number'){
            this._idade=newage
        }else{
            console.log('IDADE INVÀLIDA')
        }
    }

    takeStep(){
        this.passos++
    }
}

let pessoa6=new Person('João')
pessoa6.idade=30
pessoa6.takeStep()
pessoa6.takeStep()
pessoa6.takeStep()
pessoa6.takeStep()


console.log(`Personagem 1: ${pessoa6.nome} tem ${pessoa6.idade} de idade`)
console.log(`e deu ${pessoa6.passos} passos`)
