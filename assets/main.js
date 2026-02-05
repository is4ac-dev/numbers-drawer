const form = document.getElementById("form-container")
const aside = document.getElementById("aside-container")

const button = document.getElementById("btn-again")

const list = document.getElementById("results-list")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const quantity = Number(document.getElementById("quantity").value)
  const min = Number(document.getElementById("min-range").value)
  const max = Number(document.getElementById("max-range").value)

  const checked = document.getElementById("toggle-switch").checked

  if(min > max){
    alert("O número 'Até' deve ser maior que o 'De'.")
  }else if(checked && quantity > (max - min + 1)){
    alert("Não existem números suficientes neste intervalo para não repetir.")
  }else{
    let numbers = getRandomNumber(quantity, min, max, checked)
    
    showResults(numbers)
  }
})

button.addEventListener("click", (event) => {
  event.preventDefault()

  form.classList.remove("container-hidden")

  aside.classList.add("container-hidden")
})

function getRandomNumber(quantity, min, max, noRepeat){
  const numbers = []
  if(noRepeat){
    let index = 0
    while(index < quantity){
      const number = Math.floor(Math.random() * (max - min + 1)) + min
      if(!numbers.includes(number)){
        numbers.push(number)
        index ++
      }
    }
  }else{
    for(let index = 0; index < quantity; index++){
      const number = Math.floor(Math.random() * (max - min + 1)) + min
      numbers.push(number)
    }
  }

  return numbers
}

function showResults(array){
  form.classList.add("container-hidden")

  aside.classList.remove("container-hidden")

  list.innerHTML = ""

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    const listItem = document.createElement("li")

    listItem.textContent = element
    listItem.classList.add("result-item")

    list.append(listItem)
  }
}