let input = document.getElementById('validar');
let botao = document.getElementById('btn');
let lista_item = document.getElementById('lista')

function valida(){
    let novo_input = input.value.trim()
    if (novo_input === '') {
        return

    } else {
        let item = document.createElement('li')
        item.innerHTML = novo_input
        lista_item.appendChild(item)
        input.value = ''
    }

}

botao.addEventListener('click', valida)