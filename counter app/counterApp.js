let count = 0;
let countEl = document.querySelector("#count-el")
let saveEl = document.getElementById("save-el")


function increment() {
  count += 1
  countEl.textContent = count
  //document.querySelector("#count-el").textContent = count
}

function increment1() {
  count += 10
  countEl.textContent = count
  //document.querySelector("#count-el").textContent = count
}

//function expression
let decrement = function () {
  count -= 1
  document.querySelector("#count-el").innerHTML = count
}

//Arrow function
let save = () => {
  let storeSave =  count + " - ";
  const zero = count = 0
  saveEl.textContent += storeSave 
  countEl.textContent = zero
}


