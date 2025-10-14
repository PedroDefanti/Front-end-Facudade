const intemForm=document.querySelector("#itemForm");
const itemInput=document.querySelector("#itemInput");
const itemList=document.querySelector("#itemList");
intemForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const item=itemInput.value;// pegar valor no input
    const li=document.createElement('li')
    li.textContent=item;// adiciona o texto digitando no input ao li
    
    const removerItem=document.createElement('button')
    removerItem.textContent='REMOVER'
    li.appendChild(removerItem)
    removerItem.addEventListener('click',()=>{
        li.remove();
    })

    itemList.append(li);
    itemInput.value=''
})