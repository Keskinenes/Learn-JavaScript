
let kullaniciName = prompt("Kullanici Adini Giriniz: ")
let Name = document.querySelector("#name")
Name.innerHTML = `Merhaba, ${kullaniciName}! Hoş geldin! `

/* let hour = document.querySelector("#hour")
let date = Date().toUTCString('tr-TR')
hour.innerHTML = date
 */
window.onload = startTime;
function startTime()
{
    let today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    let d;
    let day = today.getDay();
    switch (day) {
        case 0:    d = "Pazartesi";
            break;
        case 1:    d ="Sali";
            break;
        case 2:    d ="Carsamba";
            break;
        case 3:    d ="Persembe";
            break;
        case 4:    d = "Cuma";
            break;
        case 5:    d ="Cumartesi";
            break;
        case 6:    d = "Pazar";
        default:
            break;
    }

    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('hour').innerHTML=h+":"+m+":"+s+" "+d;
    t=setTimeout('startTime()',1000);

    function checkTime(i)
    {
    if (i<10)
    {
    i="0" + i;
    }
    return i;
    }
}