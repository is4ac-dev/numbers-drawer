const form = document.getElementById("form-container")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const quantity = Number(document.getElementById("quantity").value)
  const min = Number(document.getElementById("min-range").value)
  const max = Number(document.getElementById("max-range").value)

  const checked = document.getElementById("toggle-switch").checked

  if(min > max){
    console.log("Erro de intervalo")
  }else if(checked && quantity > (max - min + 1)){
    console.log("Erro de quantidade")
  }else{
    console.log("sorteando números")
  }

})