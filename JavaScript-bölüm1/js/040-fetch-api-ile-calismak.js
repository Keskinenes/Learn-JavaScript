

// JSON dosyadan veri çekmek:
fetch("data/settings.json").then(
    reponse => reponse.json()
).then(responseJson =>{
    console.log(responseJson)
    console.log(responseJson.userName)
})

let userListDOM = document.querySelector("#userList")
//API uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    })
})

/* *fetch(), bu yöntem bir kaynak almak için kullanılır.

*Headers, response/request başlıklarını temsil ederek bunları sorgulamanıza ve sonuçlara bağlı olarak farklı eylemler gerçekleştirmenize olanak tanır.

*Request , bir kaynak talebini temsil eder.

*Response, bir isteğe verilen yanıtı temsil eder. */

