let email = "Eneskeskin@gmail.com"
let firsName= "Enes"
let lastName = "keskin"


//String karakter sayisi -> lenght
console.log(email.length)

//Ilk karakteri bulmak ->[0]
console.log(firsName[0])
console.log("charAt:" +firsName.charAt(0))

//Buyuk harf / kucuk harf
firsName = firsName.toUpperCase()
console.log(firsName)

firsName = firsName.toLowerCase()
console.log(firsName)

//string icinde Istedigimiz Bilgiyi Aramak ve Yerini bulmak -> search 
console.log(email.search("@"))
console.log(email[10])

//belli bir yere kadar -> slice (domain bilgisi)
let DOMAIN = email.slice(email.search("@") +1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.'))) // sadece gmail kismini aldik

//bilgiyi degistir -> replace
email = email.replace('gmail.com','gmail.com.tr')
console.log(email)

//istedigim biligi var mi -> includes
console.log(email.includes('@')) //ture

//istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endWidth
console.log(email.endsWith('com.tr')) // true

//Ilk harfleri buyuk yapmak
firsName = "FIRST"
lastName = "LAST"
let fullName =`${firsName[0].toUpperCase()}${firsName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`  
console.log(fullName)