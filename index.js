let add = document.querySelector("#add");
let del = document.querySelector("#delete");
let input = document.querySelector("#item");
let list = document.querySelector("#items");
let checkbox = document.forms[0];
let err = document.querySelector("#error");
let items = [];
let newItems = [];
add.addEventListener("click", () => {
    if (input.value.length == 0) {
        err.style.visibility = "visible";
    } else {
        list.innerHTML += `<li> <label for="check">${input.value}</label> <input type="checkbox" class="check" name="check" value=${input.value}></li>`;
        items.push(input.value);
        input.value = "";
    }
});


del.addEventListener("click", () => {
    for (let i = checkbox.length-1; i >=0; i--) {
      if (checkbox[i].checked) {
        items.splice(i,1);
      }
    }
    list.innerHTML = "";
    for (let i = 0; i <items.length; i++) {
   list.innerHTML += `<li><label for="check">${items[i]}</label> <input type="checkbox" class="check" name="check"></li>`;
    }
  });
