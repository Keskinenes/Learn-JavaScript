let greeting = document.querySelector("#greeting")
greeting.addEventListener("click",domClick)

function domClick() {
    console.log("Etkinlik denetlendi")
    this.style.color == "red" ?  this.style.color = "black" :  this.style.color = "red"
}

/* let info = document.querySelector("#info")
info.addEventListener("click",color)

function color() {
    console.log("tıklandı")
    this.style.color = "red"
} */

