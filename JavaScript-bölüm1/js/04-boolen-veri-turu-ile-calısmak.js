// 0 ve 1'i anlamak

let isActive = false // 0
isActive = true // 1
console.log(isActive) //-> true


let userName;
let isUserName = Boolean(userName)
console.log(isUserName) // -> false


Boolean("11")   //true
Boolean("0")    //true
Boolean("")     //false

userName = "User"
console.log("User Name: " , Boolean(userName))  //true

// 0, -0, null, falsri NaN, underfined, ("") ->

Boolean(0)      //false
Boolean(-0)     //false
Boolean(-0.1)   //true
Boolean(0 == 0) //true