


// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)


// aktif kullaniciler ??
const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
]

/*  const ACTIVE_USERS = USERS.filter(user => user.isActive == true)*/
const ACTIVE_USERS = USERS.filter(user => user.isActive)
console.log(ACTIVE_USERS)


const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
]

const NEW_PERSON = person.filter(yas => yas.age > 30)
console.log(NEW_PERSON)

const JAVASCRIPT = person.filter((javascript, index) => javascript.languages[index] == "JavaScript")
console.log(JAVASCRIPT)
