const form = document.getElementById("form-container")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  let quantity = Number(document.getElementById("quantity").value)
  let min = Number(document.getElementById("min-range").value)
  let max = Number(document.getElementById("max-range").value)

  console.log(quantity, min, max)
})