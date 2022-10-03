let price = "100"
let user = "enes"
// == esitse
console.log("==: ",price == 1)
console.log("==: ",price == 100)

// === hem degeri hem de türü esitse
console.log("===: ",price === 1)
console.log("===: ",price === 100)

//!= esit degilse
console.log(user != "quest")

// < küçükse 
console.log("price < 100) ",price < 100)

// <= küçük veya esitse
console.log("price <= 100) ",price <= 100)

// > büyükse
console.log("price > 100) ",price > 100)

// >= büyük ve esitse
console.log("price >= 100) ",price >= 100)

// && ve
price = 0
console.log(price > 0 && user != "quest")

// || veya 
console.log(price > 0  || user != "quest")

// ! değil (tersi)
user = "quest"
price = 1
console.log(price > 0 && !user == "quest")
