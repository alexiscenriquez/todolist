let add=document.querySelector("#add");
let del=document.querySelector("#delete")
let input=document.querySelector("#item")
let list=document.querySelector("#items")
add.addEventListener("click",()=>{
list.innerHTML+=`<li> ${input.value} <input type="checkbox"></li>`
})

