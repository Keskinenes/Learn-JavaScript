//Template Literals Kullanimi

let username = "Enes"
const DOMAIN = "Kodluyoruz.org"

let email = username + "@" + DOMAIN
console.log("Merhaba: ", username, "sitemize hosgeldiniz", "mail adresin", email)


let info = `Merhaba ${username} sitemize hosgeldin..  mail adresin ${email}
kısa isminiz: ${username[0]}.
mail adersiniz uzunlugu ${email.length}
günün saat bilgisi : ${new Date().getHours()}` //backtick

console.log(info)