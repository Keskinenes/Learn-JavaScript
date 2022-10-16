



const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Sever", "Mouse", "Keyboard"]

/* PRODUCTS.forEach((product, index, array) => array[index] = product + "111") */
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}` )

console.log(PRODUCTS)


/******* 
const UL_DOM = document.querySelector('#userList')
let index = 0
for(;index < LOREM_LIST.length;index++){
    if(LOREM_LIST[index] == "dolor"){continue} // burayı atla burayı geç
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index] 
    UL_DOM.append(LI_DOM)
}
*/

const userListDOM = document.querySelector('#userList')

PRODUCTS.forEach(item =>  {
    let LiDOM = document.createElement('li')
    LiDOM.innerHTML = item
    userListDOM.append(LiDOM)
})
// array içerisinde kullanilir