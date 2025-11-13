class Character {
    _life = 1
    maxlife = 1
    attack = 0
    defense = 0
    type = ''
    

    constructor(name) {
        this.name = name
    }

    get life() {
        return this._life // Retorna o número diretamente
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
    
    // Método auxiliar para exibir a vida formatada
    get lifeFormatted() {
        return this._life.toFixed(2)
    }
}

class Knight extends Character {
    constructor(name) {
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxlife = this.life
        this.type = 'Hero'
        this.image = 'heroi.png'
    }
}
class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.life = 80
        this.attack = 25
        this.defense = 5
        this.maxlife = this.life
        this.type = 'Hero'
        this.image = 'heroi.png'
    }
}


class LittleMonster extends Character {
    constructor() {
        super('Little Monster')
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxlife = this.life
        this.type = 'Monster'
        this.image = 'monstro.jpg'
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster')
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxlife = this.life
        this.type = 'Monster'
        this.image = 'monstro.png' 
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1EL, fighter2EL, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1EL = fighter1EL
        this.fighter2EL = fighter2EL
        this.log = logObject
        this.turn = fighter1
    }
    
    start() {
        this.update() 
        
        this.fighter1EL.querySelector('.attackbutton').addEventListener("click", () => {
            this.doAttack(this.fighter1, this.fighter2)
        })
        this.fighter2EL.querySelector('.attackbutton').addEventListener("click", () => {
            this.doAttack(this.fighter2, this.fighter1)
        })
    }
    
    doAttack(attacking, attacked) {
        if (attacking !== this.turn) {
            this.log.addMessage(`**SISTEMA**: Não é o turno de **${attacking.name}**!`, 'system-msg')
            return
        }

        if (attacking.life <= 0) {
            this.log.addMessage(`**SISTEMA**: **${attacking.name}** está morto e não pode atacar.`, 'system-msg')
            this.turn = attacked 
            this.update()
            return
        }

        if (attacked.life <= 0) {
            this.log.addMessage(`**SISTEMA**: **${attacking.name}** está atacando um cachorro morto (**${attacked.name}**).`, 'system-msg')
            this.turn = attacking 
            this.update()
            return
        }

        let attackFactor = Math.random() * 2 
        let defenseFactor = Math.random() * 2 

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor 

        let msgClass = attacking.type === 'Hero' ? 'hero-msg' : 'monster-msg'
        let nextTurn = attacked

        if (actualAttack > actualDefense) {
            let damage = actualAttack - actualDefense
            attacked.life -= damage
            this.log.addMessage(`**${attacking.name}** causou **${damage.toFixed(2)}** de dano em **${attacked.name}**.`, msgClass)

            if (actualAttack < 1) {
                this.log.addMessage(`**SISTEMA**: Ataque fraco (${actualAttack.toFixed(2)}). **${attacking.name}** ganhou um turno extra!`, 'system-msg')
                nextTurn = attacking
            } else {
                nextTurn = attacked
            }

        } else {
            let recoveredLife = 1 + (Math.random() * 2) 
            attacked.life += recoveredLife > (attacked.maxlife - attacked.life) ? (attacked.maxlife - attacked.life) : recoveredLife
            
            this.log.addMessage(`**${attacked.name}** conseguiu defender o ataque de **${attacking.name}**!`, 'system-msg')
            this.log.addMessage(`**SISTEMA**: **${attacked.name}** recuperou **${recoveredLife.toFixed(2)}** de vida por ter defendido.`, 'system-msg')
            
            nextTurn = attacked
        }
        
        this.turn = nextTurn
        this.update()

        if (attacked.life <= 0) {
            this.log.addMessage(`**SISTEMA**: **${attacked.name}** foi derrotado! **${attacking.name}** VENCEU!`, 'system-msg')
            // Mantém o turno no vencedor para permitir "atacar o cachorro morto"
            this.turn = attacking
            this.update()
        }
    }
        
    update() {
        // Fighter 1
        this.fighter1EL.querySelector(".name").innerHTML = `
            ${this.fighter1.name} - ${this.fighter1.lifeFormatted} HP (A: ${this.fighter1.attack} | D: ${this.fighter1.defense})` 

        let f1pct = (this.fighter1.life / this.fighter1.maxlife) * 100
        this.fighter1EL.querySelector(".bar").style.width = `${f1pct}%`
        this.fighter1EL.querySelector(".char-img").src = this.fighter1.image
        
        this.fighter1EL.querySelector(".attackbutton").disabled = (this.turn !== this.fighter1) || (this.fighter1.life <= 0)

        // Fighter 2
        this.fighter2EL.querySelector(".name").innerHTML = `
            ${this.fighter2.name} - ${this.fighter2.lifeFormatted} HP (A: ${this.fighter2.attack} | D: ${this.fighter2.defense})` 

        let f2pct = (this.fighter2.life / this.fighter2.maxlife) * 100
        this.fighter2EL.querySelector(".bar").style.width = `${f2pct}%`
        this.fighter2EL.querySelector(".char-img").src = this.fighter2.image
        
        this.fighter2EL.querySelector(".attackbutton").disabled = (this.turn !== this.fighter2) || (this.fighter2.life <= 0)
    }
}

class Log {
    list = []
    constructor(listEL) {
        this.listEL = listEL
    }
    addMessage(msg, className='') {
        if (this.list.length >= 20) {
            this.list.shift()
        }
        this.list.push({ msg, className }) 
        this.render()
    }
    render() {
        this.listEL.innerHTML = ""

        for(let item of this.list) {
            this.listEL.innerHTML += `<li class="${item.className}"> ${item.msg} </li>`
        }
        this.listEL.scrollTop = this.listEL.scrollHeight 
    }
}