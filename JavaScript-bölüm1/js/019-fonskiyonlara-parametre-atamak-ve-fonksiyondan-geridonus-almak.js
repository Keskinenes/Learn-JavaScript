

// Temel kural
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse fonskiyonun Bagimliliklarini Azaltmak Gerekir


 let firstName = "Enes"

function greetings(firstName = "", lastName = ""){ // default parametre alıyor..
    //console.log( `Merhaba ${firstName ? firstName : ""} `)
    console.log(`Merhaba ${firstName} ${lastName}`)
}

greetings()
console.log(firstName)
greetings("Parametre","Enes")