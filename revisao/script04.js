let frutas=['banana','Maça','Uva','Manga','Abacate'] 
//metodos principais
// frutas.pop() // <- Remove o ultimo item

// for (let i = frutas.length - 1; i >= 0; i--) {
//   if (frutas[i] === 'Uva') {
//     frutas.splice(i, 1);
//   }
// }
// console.log(frutas)
// frutas.push('Abacaxi')//<- Adicione um novo item a lista
// frutas.shift()// <- remova o primeiro item da lista
// console.log(frutas.length)//<- Tamanho da lista
// console.log(frutas.join('-'))

// ESTA ERRADO 

// let numeros=[1,1000,250,3,9,28,55]
// numerosCrescente=numeros.sort()


// console.log(numerosCrescente) // Ordem os numeros em ordem crescente
// console.log(numeros.reverse()) // Ordem os numeros em ordem decrescente
let i=0;

// while(i<frutas.length){
//     console.log('while:',frutas[i])
//     i++
// }

for(let fruta of frutas){
    console.log('for ... of:',fruta);
}