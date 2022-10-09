
let items = [10,20,30,40]
console.log("items- ilk hali: ", items)

//Array: sona oge/eleman eklemek -> push
items.push(50)
console.log(items)

//Array: basa oge eklemek ->unshift
items.unshift(5)
console.log(items)

//Array: sondaki ogeyi cikarmak -> pop
let lastItem = items.pop() // son elemanı lastItem icerisine ekledik
console.log("lastItem: ", lastItem, "items: ", items)

//Array: bastaki ogeyi cikarmak -> shift
let firstItem = items.shift() // ilk elemanı firstItem icerisine ekledik
console.log("firstItem: ", firstItem, "items: ", items)

//Arrat icerinindeki bir ogenin bilgisinin degistirilmesi

//ilk elemanin degistirilmesi
items[0] = 100
console.log(items)

// sonuncu ogenin degistirilmesi
items[items.length -1] = 5
console.log(items)