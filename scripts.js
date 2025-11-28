// 1 Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
// Solucion 1 usando la clase del body!!!
// const bodyPage = document.querySelector(".home-template")
// console.log("opcion1 es : ",bodyPage)
// bodyPage.addEventListener("click", function(e){
// console.log("he clickado un a")
//   e.preventDefault()
//   })
          

// Solucion 2 usando los tags de "a"!!!
const aElements = document.querySelectorAll('a')
console.log("opcion2 es :",typeof aElements,aElements)
// querySelectorAll devuelve un nodelist no un solo elemento!!!! hay que iterar para poder usar el listener!!!
aElements.forEach(aElement => {
  aElement.addEventListener('click', function(e) {
    console.log("he clickado un a")
  e.preventDefault()
  })
})


// 2 Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
// Solucion 1 usando querySelectorAll!!!
const imagesToChange = document.querySelectorAll("img")
imagesToChange.forEach(image => {
  image.addEventListener("click", () => {
    console.log("he clickado una imagen")
    // image.src = "assets/magic-2.gif"
    image.src = `assets/${getRandom(gifToChange)}.gif`
  })
})

// Solucion 2 usando getElementsByTagName!!!
// const imagesToChange = document.getElementsByTagName("img")

// for (let image of imagesToChange) {
//   image.addEventListener('click', function() {
//     console.log("he clickado una imagen")
//     image.src = "assets/magic-2.gif"
//   })
// }




// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const pTexts = document.querySelectorAll("p")
console.log("Todod los p: ",pTexts)
pTexts.forEach(par => {
  par.addEventListener("click", () => {
    console.log("he clickado un parrafo")
    par.style.color = "violet"
    par.style.backgroundColor = "pink"
  })
})

// 2.3 Bloques de article o section: Cambia el color de fondo.
const articlesAndSections = document.querySelectorAll("article","section")
console.log("Todod los articles y section: ",articlesAndSections)
articlesAndSections.forEach(articleAndSection => {
  articleAndSection.addEventListener("click", () => {
    console.log("he clickado un articleAndSection")
    articleAndSection.style.backgroundColor = "grey"
  })
})

// 3 Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
const imagesOverMouse = document.querySelectorAll("img")
imagesOverMouse.forEach(image => {
  image.addEventListener("mouseover", () => {
    // image.src = "assets/abracadabra.gif"
    image.src = `assets/${getRandom(gifToChange)}.gif`
  })
})


// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const pTextsOverMouse = document.querySelectorAll("p")
pTextsOverMouse.forEach(par => {
  par.addEventListener("mouseover", () => {
    par.style.color = "red"
    par.style.backgroundColor = "yellow"
  })
})


// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
const articlesAndSectionsOverMouse = document.querySelectorAll("article","section")
articlesAndSectionsOverMouse.forEach(articleAndSection => {
  articleAndSection.addEventListener("mouseover", () => {
    articleAndSection.style.backgroundColor = "#f66484"
  })
})


// 4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
//     ```javascript
//     const colors = ['red', 'blue', 'green']

//     const getRandom = (array) => {
//         /* código misterioso */
//     }

//     console.log(getRandom(colors))
//     // imprime 'red', 'blue' o 'green'
//     ```
const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
  const option = Math.floor((Math.random())*array.length)
  return array[option]
}
console.log(getRandom(colors))


// 5. Utiliza la función creada `getRandom` para utilizar colores aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores.

// 6. Utiliza la función creada `getRandom` para utilizar _gifs_ aleatorios  en los apartados anteriores.
const gifToChange = ["abracadabra","magic-1","magic-2","magic-3","magic-4","magic-5","magic-6"]

