document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('#start-fight-button')
    const selectElement = document.querySelector('#hero-select')
    const charArea = document.querySelector('#char')
    const monsterArea = document.querySelector('#monster')
    const logArea = document.querySelector(".log")

   
    charArea.style.display = 'none'
    monsterArea.style.display = 'none'
    logArea.style.display = 'none'

    startButton.addEventListener('click', () => {
        const selectedHero = selectElement.value

        let char
        if (selectedHero === 'knight') {
            char = new Knight('Aragorn')
        } else if (selectedHero === 'sorcerer') {
            char = new Sorcerer('Patolino') 
        } else {
            alert('Por favor, selecione um herói.')
            return
        }

        
        let monster = new LittleMonster() 
        let log = new Log(logArea)

        
        document.querySelector('.selection-area').style.display = 'none'
        charArea.style.display = 'block'
        monsterArea.style.display = 'block'
        logArea.style.display = 'block'
        
        // Inicia o Stage
        const stage = new Stage(
            char,
            monster,
            charArea,
            monsterArea,
            log)

        stage.log.addMessage(`**SISTEMA**: A batalha começou! **${char.name}** vs **${monster.name}**!`, 'system-msg')
        stage.start()
    })
})