const form = document.getElementById("form-container")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log("Formulário enviado")
})