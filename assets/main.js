const form = document.getElementById("form-container")
const aside = document.getElementById("aside-container")

const button = document.getElementById("btn-button")

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
    let numbers = getRandomNumber(quantity, min, max, checked)
    
    showResults(numbers)
  }
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
}