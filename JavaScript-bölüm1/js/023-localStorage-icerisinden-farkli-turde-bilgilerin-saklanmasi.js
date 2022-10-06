let user = {userName : "Enes", isActive : true}
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user))


let userInfo = localStorage.getItem('userInfo') //bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)

let items = [1,2,3, user]
localStorage.setItem('newItems',JSON.stringify(items))
localStorage.getItem('newItems')
JSON.parse(localStorage.getItem('newItem'))