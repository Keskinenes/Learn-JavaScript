

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decresaeDOM = document.querySelector('#decresae')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click",clickEvent)
decresaeDOM.addEventListener("click",clickEvent)

function clickEvent() {
    this.id == "increase" ? counter += 1 : counter += -1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter    
}