//number veri turu tanimlamak
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log("Fiyat: "+ price, "KDV Orani: "+ tax, "KDV tutari: " +priceTax, "Fiyat: " + total);


let stringNumber = "11"
console.log("StringNumber " +stringNumber)
let newNumber =  Number(stringNumber)
console.log(newNumber)

//arttirma ve azaltma islemleri
let counter = 320
counter ++;
console.log(counter)

counter--;
console.log(counter)

counter *= 10
console.log(counter)

//mod(kalan) alma
//sayi tek mi çift mi
console.log(3 % 2) // 0 ise çift 1 ise tek

//us alma
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)

//asagi yuvarlama islemi -> Math.floor
console.log("Asagi Yuvarlama: "+ Math.floor(1.7) )

//yukari yuvarlama islemi -> Math.ceil
console.log("Yukarı Yuvarlama: "+ Math.ceil(1.4))


//yakina yuvarlama islemi -> math.round

console.log("Yakına Yuvarlama: "+ Math.round(1.5))

