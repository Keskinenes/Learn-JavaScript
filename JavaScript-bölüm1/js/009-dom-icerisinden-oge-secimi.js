
//let h2 = document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML = "degisen bilgi"
console.log(title.innerHTML)

//bir tane seçer
let link = document.querySelector("#kodluyoruz")
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add("btn")
