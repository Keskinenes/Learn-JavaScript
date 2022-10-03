

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son elemani degisti.."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk elemani degisti.."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "kendi olusturdugumuz oge"

//ulDOM.append(liDOM) // en sona ekleme
ulDOM.prepend(liDOM)

