// // let personagem={
// //     nome:'Elfo Arqueiro',
// //     idade:198,
// //     país:'Elven',
// //     olhos:['azul','vermelho','Negros'],
// //     caracteristicas:{
// //         estamina:300,
// //         forca:90,
// //         pdef:200,
// //         mdef:350,
// //         patack:1200,
// //         mana:450
// //     }
// // }
// // personagem.nome='Elfo Tanker'
// // personagem.caracteristicas.pdef=2000
// // personagem.caracteristicas.patack=300
// // personagem.olhos.push('verdes')

// // console.log(`o persnagem: ${personagem.nome} Possui ${personagem.idade} e ele tem olhos ${personagem.olhos[3]}
// //              Possui:
// //              ------------------------------------------------
// //              |Mana: ${personagem.caracteristicas.mana}
// //              |Força:${personagem.caracteristicas.forca}
// //              |Estamina:${personagem.caracteristicas.estamina}
// //              |Defesa:${personagem.caracteristicas.pdef}
// //              |Defesa Mágica:${personagem.caracteristicas.mdef}
// //              |Ataque:${personagem.caracteristicas.patack}
// //              -------------------------------------------------
// // `)

// // let pessoa={
// //     nome:'Pedro',
// //     Sobrenome:'Defanti',
// //     idade:19,
// //     NomeCompleto: function(){
// //         return `${this.nome} ${this.Sobrenome}`
// //     },
// //     carros:[
// //         {modelo:'Fiat',cor:'Cinza'},
// //         {modelo:'BMW',cor:'Branco'},
// //         {modelo:'BYD',cor:'Preto'}
// //     ]
// // }
// // console.log(pessoa.NomeCompleto())

// cores=[
//     {nome:'Azul',qt:10},
//     {nome:'Amarelo',qt:10},
//     {nome:'Vermelho',qt:10},
//     {nome:'Verde',qt:90000},
// ]
    
    
    
    

// // // for(let n =0; n< cores.length;n++){
// // //     console.log(`Contando: ${cores[n]}`)
// // // }

// // for (let cor of cores){
// //     console.log(`Da cor: ${cor.nome.toLowerCase()} eu tenho ${cor.qt} unidades`)
// // }

// let frutas=['Banana','Maça','Uva','Abacate','Abacaxi']

// // for(let fruta in frutas){
// //     console.log(`A fruta ${frutas[fruta]} está na posição ${fruta}`)
// // }
// // contador=1
// // while (contador<100){
// //     console.log(`${contador}`)
// //     contador++
// // }

// // console.log(frutas)
// // frutas.shift();
// // console.log(frutas)
// // frutas.shift();
// // console.log(frutas)

// //JEITO 1
// // for(let fruta in frutas){
// //     if (frutas[fruta]=='Abacate'){
// //         frutas[fruta]='Morango'
// //     }
// // }

// // console.log(frutas)
// // frutas.sort()
// // frutas.reverse()
// // console.log(frutas)

// let cars=[
//     {brand:'Fiat',years:2023},
//     {brand:'BMW',years:2018},
//     {brand:'Ferrari',years:2020}
// ]
// // cars.sort((a,b)=>{
// //     if (a.years> b.years){
// //         return 1;
// //     }else if (a.years<b.years){
// //         return -1
// //     }else{
// //         return 0
// //     }
// // })
// cars.sort((a,b)=> a.years-b.years)
// console.log(cars)
// function clicou(){
//     const teste=document.querySelector('#teste')
//     console.log(teste.children[0].children)
// }

function clicou(){
    const teste=document.querySelector('#teste')
    const ul = teste.querySelector('ul')
    let newLi= document.createElement('li')
    newLi.innerText='ITEM ADICIONADO'
    ul.appendChild(newLi)

    // ul.innerHTML+='<li> Novo item </li>'
}

let Botao=document.querySelector('.botao')
Botao.addEventListener('click',clicou)