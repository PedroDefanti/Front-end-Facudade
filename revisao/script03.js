// funçao normal com return
function soma(a,b){
    return a+b
}

console.log(soma(10,10))

// função assincrona
async function buscarDados() {
    return 'Dados Recebidos'
}

buscarDados().then(console.log)

//Arrow Fuction
const dobro= (x)=> x*2
console.log(dobro(250))


function pegarDados(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve('Dados Recebidos !!Depois de 200ms'),1000);

    })
}
pegarDados().then((resposta) => console.log(resposta))