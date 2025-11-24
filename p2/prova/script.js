// ============================================
// ÁREA DE CÓDIGO PARA OS ALUNOS PREENCHEREM
// Todos os TODOs devem ser implementados neste arquivo
// ============================================

// ========== EXERCÍCIO 1: Adicionar Elemento via Input (1,5 pontos) ==========
// TODO 1: Implemente a funcionalidade completa para adicionar itens à lista
//         - Selecione o input (id: "textoItem"), o botão (id: "adicionarItem") e a lista (id: "lista")
//         - Adicione um event listener de 'click' ao botão
//         - Quando clicado, crie um novo elemento <li>, defina seu texto com o valor do input,
//           adicione à lista usando appendChild e limpe o campo de input
let input = document.getElementById('textoItem')
let botao = document.getElementById('adicionarItem')
let lista = document.getElementById('listaItens')

botao.addEventListener('click', () => {
  let valor=input.value.trim()
  if(valor){
      let item = document.createElement('li')
  let botao_remover=document.createElement('button')
  botao_remover.innerText='Remover Item'
  item.innerText = input.value
  lista.append(item,botao_remover)
  input.value = ''
  botao_remover.addEventListener('click',()=>{
    item.remove()
    botao_remover.remove()
    })
  }

  })





// ========== EXERCÍCIO 2: Manipular CSS pelo DOM (1,5 pontos) ==========
// TODO 2: Implemente a funcionalidade para alterar o estilo do quadrado
//         - Selecione o elemento quadrado (id: "quadrado") e o botão (id: "mudarEstilo")
//         - Adicione um event listener de 'click' ao botão
//         - Quando clicado pela primeira vez, altere: backgroundColor para "red", width para "200px",
//           height para "200px" e borderRadius para "10px"
//         - Quando clicado novamente, o quadrado deve voltar ao estado original:
//           backgroundColor para "#ff6b6b", width para "100px", height para "100px" e borderRadius para "0px"
//         - Dica: use uma variável para controlar o estado (alternar entre original e modificado)

let quadrado = document.getElementById('quadrado')
let bota_quadrado = document.getElementById('mudarEstilo')
let mudado = false
bota_quadrado.addEventListener('click', () => {
  if (mudado === false) {
    quadrado.style.backgroundColor = 'red'
    quadrado.style.width = '200px'
    quadrado.style.height = '200px'
    quadrado.style.borderRadius = '10px'
    mudado = true
  } else {
    quadrado.style.backgroundColor = '#ff6b6b'
    quadrado.style.width = '100px'
    quadrado.style.height = '100px'
    quadrado.style.borderRadius = '00px'
    mudado = false
  }
})

// ========== EXERCÍCIO 3: Event Listeners de Teclado (2 pontos) ==========
// TODO 3: Implemente as funções e event listeners de teclado unificados
//         - Crie funções para keydown, keypress e keyup que atualizem o elemento id "resultadoTeclado"
//         - Cada função deve exibir: a tecla pressionada (event.key) e qual evento está sendo executado
//         - Exemplo de formato: "Keydown: Tecla 'a' pressionada" ou "Keypress: Tecla 'a' pressionada" ou "Keyup: Tecla 'a' pressionada"
//         - Adicione event listeners 'keydown', 'keypress' e 'keyup' ao document, cada um chamando sua respectiva função
//         - Todas as informações devem ser exibidas na mesma área de resultado (id: "resultadoTeclado")
let teclado = document.getElementById('resultadoTeclado')
function Pressionar(event) {
  teclado.innerHTML = `Keydown:${event.key} pressionada`
  return teclado
}
function Pressionado(event) {
  teclado.innerHTML = `Keypress:${event.key} pressionada`
  return teclado
}
function Soltar(event) {
  teclado.innerHTML = `Keyup:${event.key} pressionada`
  return teclado
}



document.addEventListener('keydown', Pressionar)
document.addEventListener('keypress', Pressionado)
document.addEventListener('keyup', Soltar)

// ========== EXERCÍCIO 4: Classes - Construtor e Métodos com Formulário (3 pontos) ==========
// TODO 4: Implemente a classe Pessoa e a função testarPessoa
//         - Crie uma classe "Pessoa" com construtor que recebe "nome", "idade" e "bairro"
//         - No construtor, defina this.nome = nome, this.idade = idade e this.bairro = bairro
//         - Crie um método "apresentar" que retorna: "Prazer, meu nome é " + this.nome + ", tenho " + this.idade + " anos e moro em " + this.bairro + " - RJ."
//         - Na função testarPessoa(), obtenha os valores dos inputs (id: "nomePessoa", "idadePessoa", "bairroPessoa")
//         - Crie uma instância da classe Pessoa com os valores obtidos do formulário
//         - Chame o método apresentar() e exiba o resultado no elemento com id "resultadoPessoa"

// ========== FUNÇÕES DE TESTE ==========
// As funções abaixo são chamadas pelos botões do HTML
// Você deve implementar o código dentro delas conforme os TODOs acima


class Pessoa {
  constructor(nome, idade, bairro) {
    this.nome = nome
    this.idade = idade
    this.bairro = bairro

  }
  Apresentar() {
    return "Prazer, meu nome é " + this.nome + ", tenho " + this.idade + " anos e moro em " + this.bairro + " - RJ."
  }

}
let nome_pessoa = document.getElementById('nomePessoa')
let idade_pessoa = document.getElementById('idadePessoa')
let bairro_pessoa = document.getElementById('bairroPessoa')




function testarPessoa() {
  // Implemente conforme TODO 4
  nome_valor=nome_pessoa.value
  idade_valor=idade_pessoa.value
  bairro_valor=bairro_pessoa.value

  let pessoa = new Pessoa(nome_valor, idade_valor, bairro_valor)
  let valores=pessoa.Apresentar()
  let resultado = document.getElementById('resultadoPessoa')
  resultado.innerText = valores
}

testarPessoa()

// Pontos Extras:
// 0,5 pontos extras:
// -> Adicione um botão para remover o item, ao lado do item adicionado no exercício 1.
