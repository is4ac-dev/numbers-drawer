const form = document.getElementById("form-container")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const quantity = Number(document.getElementById("quantity").value)
  const min = Number(document.getElementById("min-range").value)
  const max = Number(document.getElementById("max-range").value)

  const checked = document.getElementById("toggle-switch").checked

  console.log(quantity, min, max, checked)
})
