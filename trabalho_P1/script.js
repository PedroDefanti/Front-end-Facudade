let aluno=document.getElementById('nomeAluno')
let nota=document.getElementById('notaAluno')
let lista_alunos=document.getElementById('listaAlunos')
let botao=document.getElementById('btnAdicionar')
let atencao=document.createElement('h3')
let erro=document.getElementById('negativo')
botao.addEventListener('click',function(){
    const tratado_aluno=aluno.value.trim()
    const tratado_notas=parseFloat(nota.value.trim())

    let situacao;

    switch (true){

        case tratado_notas>=7:
            situacao='está aprovado'
            break
        case tratado_notas<=7 && tratado_notas>=4:
            situacao='está em recuperação'
            break
        case tratado_notas<=4:
            situacao='está reprovado'
            break
    }
    atencao.textContent='Números negativos não podem ser colocados'
    if (tratado_aluno !=='' && tratado_notas>=0){
        let lista=document.createElement('li')

        lista.textContent=`O aluno ${tratado_aluno}  ${situacao}`
        lista_alunos.appendChild(lista)
        aluno.value=''
        nota.value=''
        erro.value=''
    }else{
        erro.appendChild(atencao)
    }
})
