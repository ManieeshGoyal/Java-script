"use strict";

const  keyNum = document.querySelectorAll(".btn")
const inputBox = document.querySelector("#input-box")
const getResult = document.querySelector(".result")
const reset = document.querySelector(".reset")
let addedValue = ""

const keyboardValue =()=>{
    for(let i=0; i<16; i++)
        keyNum[i].addEventListener("click",()=>{
            if(keyNum[i] == keyNum[1] ) addedValue += "/"
            else if (keyNum[i] == keyNum[5] ) addedValue += "+" 
            else if (keyNum[i] == keyNum[9] ) addedValue += "-" 
            else if (keyNum[i] == keyNum[13] ) addedValue += "*" 
            else if (keyNum[i] == keyNum[0] ) addedValue += "%" 
            else {
                addedValue +=  keyNum[i].textContent
            
            }
            inputBox.value = addedValue

        })   
          
}

getResult.addEventListener("click", ()=>{
    let getValue = inputBox.value
    getValue = eval(getValue)
    inputBox.value = getValue

})

reset.addEventListener("click",()=>{ inputBox.value = ""
addedValue = ""
})



keyboardValue()