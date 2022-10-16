


const LOREM_LIST = [
    'lorem','ipsum','amet','dolor','consectetur','enes','elit'
]

let counter = 0
/* for(;counter < 10;counter++){
    if(counter == 5){break} // 5 e kadar saydı 5 dahil değil
    console.log(counter)
} */

/* for(;counter < 10;counter++){
    if(counter == 5){continue} // 5 görünce atladı
    console.log(counter)
} */


const UL_DOM = document.querySelector('#userList')
/* 
let index = 0
for(;index < LOREM_LIST.length;index++){
    if(LOREM_LIST[index] == "dolor"){break} // buraya kadar
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index] 
    UL_DOM.append(LI_DOM)
}
 */
let index = 0
for(;index < LOREM_LIST.length;index++){
    if(LOREM_LIST[index] == "dolor"){continue} // burayı atla burayı geç
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index] 
    UL_DOM.append(LI_DOM)
}