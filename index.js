let add=document.querySelector("#add");
let del=document.querySelector("#delete")
let input=document.querySelector("#item")
let list=document.querySelector("#items")
let checkbox=document.forms[0];
let err=document.querySelector("#error")
let items=[]
add.addEventListener("click",()=>{

if(input.value.length==0){
err.style.visibility="visible"}
else{
    list.innerHTML+=`<li> <label for="check">${input.value}</label> <input type="checkbox" class="check" name="check"></li>`
items.push(input.value)
input.value=""
}
})
del.addEventListener("click",()=>{
    
    for(let i=0;i<checkbox.length;i++){
        if(checkbox[i].checked){
           items.splice(i,1)
          
        }
        if(checkbox.length===1&&checkbox[i].checked){
            items=[]
            list.innerHTML=""
        }
    }

    for(let i=0;i<items.length;i++){
       
        list.innerHTML=""
        list.innerHTML+=`<li> <label for="check">${items[i]}</label> <input type="checkbox" class="check" name="check"></li>`
        if(items.length<=1 &&checkbox[i].checked){
            list.innerHTML=""
        }
    }
})
