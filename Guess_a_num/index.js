"use strict";

let randValue = Math.floor(Math.random()*21)
console.log(randValue)
let score = 20
let highScore=0;

const calcScore =()=>{
     score -=1
     document.querySelector("#score").textContent = score
}
const msg = (message)=>{
     return document.querySelector("#msg").textContent = message 
}



document.querySelector("#check-btn").addEventListener("click",function(){
    
     const guess =  Number(document.querySelector("#user-input").value)
     let userValue = guess
     
      if(score>0){

               if(userValue>20 || userValue<1 ) {    
                    msg("❌ Enter a Number Between \"1 to 20\" ")
               }
               else if (userValue === randValue) {
                    msg("🎉 Congrats You win the match 🥳 "  )
                    document.querySelector("body").style.backgroundColor = "#60b347"
                    document.querySelector("#user-input").style.backgroundColor =  "#60b347"
                    document.querySelector("#randValue").textContent = randValue 
                    document.querySelector("#randValue").style.width = "250px"

                         if(score>highScore){
                              highScore = score
                              document.querySelector("#high-score").textContent = highScore
                         }
               }
               else {
                    (userValue > randValue)?msg( "📈 Number is too High ! " ):msg( "📉 Number is too  low !"  )
                     calcScore()
               }
          } else{
          msg(" 🤯 You lost the game " )
     }
 })   


document.querySelector("#again").addEventListener("click", function(){
     randValue = Math.floor(Math.random()*21)
     console.log(randValue)
     
     document.querySelector("#randValue").textContent = "?"
     score = 20
     msg("Start Guessing...")
     document.querySelector("#score").textContent = 20
     document.querySelector("body").style.backgroundColor = "#262626"
     document.querySelector("#randValue").style.width = "170px"
     document.querySelector("#user-input").style.backgroundColor=  "#262626"
     document.querySelector("#user-input").value = "" 
})