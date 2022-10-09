//Array olusturmak
let domain = "Kodluyoruz"
let isActive = false
let items = [15,25,35,isActive,domain]
console.log(items)


let emptyArray = [] // bos list


//Array icerisindeki eleman sayisini ogrenmek
console.log(
items.length 
)

//document.querySelector('#info').innerHTML = items.length

//Array icerisindeki ilk eleman cagirilmasi
console.log(items[0])

//Array icindeki son elemanin cagrilamsi
console.log( items[items.length - 1] )

//Array icindeki ortadaki elemanin cagrilamsi
console.log(
    "ortadaki : ",
    items[Math.floor(items.length / 2)]
)

//degisken icindeki bilginin Array olup olmadigini kontrol edilmesi
console.log(
    typeof(items) // object olarak cıktı veriyor
)

console.log(
    Array.isArray(items)
)

// hangileri isArray => true verir ?

console.log("[] : ", Array.isArray( [] ) )
console.log("1 : ", Array.isArray(1) )
console.log("true : ", Array.isArray( true ) )

