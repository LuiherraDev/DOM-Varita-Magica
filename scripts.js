// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const bodyPage = document.querySelector(".home-template")
  bodyPage.addEventListener("click", function(e){
    e.preventDefault()
    })

