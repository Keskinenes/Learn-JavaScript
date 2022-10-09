// FORM SUBMIT:

let formDOM=document.querySelector('#userForm')
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() //default işlemi engelledik..
    console.log("işlem gerçekleşti")
    let scoreINputDOM=document.querySelector('#score')
    console.log(scoreINputDOM.value)
    localStorage.setItem('score', scoreINputDOM.value)
}