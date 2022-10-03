


let username = prompt("kullanici Adini Giriniz: ")
// kullanici bilgisi var ise ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)}

if(username.length) // if kismi her zaman true ise  calisir
{
    console.log(`kullanici bilginiz: ${username}`)
}else 
{console.log("Bilgi yok") }
