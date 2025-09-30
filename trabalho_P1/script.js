let aluno = document.getElementById("NomeAluno")
let nota = document.getElementById("NotaAluno")
let lista = document.getElementById('lista')
let botao = document.getElementById('btn')
let avisado = document.getElementById('aviso')



let situacao
botao.addEventListener('click', () => {
    let aluno_tratado = aluno.value.trim()
    let nota_tratada = parseFloat(nota.value.trim())
    let aluno_visto = /\d/.test(aluno_tratado)
    if (aluno_visto) {
        let erro = document.createElement('h3')
        erro.innerHTML = 'INCORRETO'
        avisado.append(erro)
        aluno.value = ''
        nota.value = ''



    }else{
            if (nota_tratada > 0) {
        switch (true) {
            case nota_tratada >= 7:
                situacao = 'Aprovado'
                break
            case nota_tratada >= 4 && nota_tratada < 7:
                situacao = 'Recuperação'
                break
            case nota_tratada < 4:
                situacao = 'Reprovado'
                break
            default:
                situacao = 'Você não digitou um número'
                break


        }
        let item = document.createElement('li')
        item.innerHTML = `O aluno: <b>${aluno_tratado}</b> apresenta a situação: <b>${situacao}</b>`
        lista.appendChild(item)
        aluno.value = ''
        nota.value = ''

    }

    }



})
