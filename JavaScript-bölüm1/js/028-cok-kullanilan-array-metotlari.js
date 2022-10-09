let items = [1, 2, 3, 4, 5]

// Array icende Array
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length)
console.log(items[0].length)
console.log(items[0][0])


//Array icerisinden oge ayirmak -> splice(pop, item?)
let newItems = items.splice(2, 4)
console.log("Items :", items)
console.log("newItems :", newItems)

//Array icerisindeki ogenin bilgisini bulmak ->indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

//Array kopyalamak -> slice , [...ES6]
let copyItems = items
console.log(items)

copyItems.pop()
console.log("copyItems:",copyItems)
console.log("Items: ",items)

copyItems = items.slice() // kopyalama yapti
copyItems.pop()
console.log("copyItems:",copyItems)
console.log("Items: ",items)

let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)
// Iki Array bilgisini birlestirmek -> [...ES6, ...ES6]

let allUsers = [...femaleUsers, ...maleUsers]//es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

//Array icerisindeki bilgiyi String'e cevirmek ->toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

//Istedigimiz index bilgisine oge eklemek ->splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melisa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)

// ek bilgiler
// includes Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.

// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});

// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz.