"use strict";

// starting to create variables
const score_0 = document.querySelector("#score--0");
const score_1 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const current_0 = document.querySelector("#current--0");
const current_1 = document.querySelector("#current--1");
const hold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");
const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");

let currentScore,activePlayer,playing,scores;

//starting conditions
const init = function(){
    scores = [0,0]
    currentScore = 0
    activePlayer = 0
    playing = true

    score_0.textContent = 0
    score_1.textContent = 0 
    current_0.textContent = 0
    current_1.textContent = 0 

    dice.classList.add("hidden")
    player_0.classList.remove("player--winner")
    player_1.classList.remove("player--winner")
    player_1.classList.remove("player--active")
    player_0.classList.add("player--active")

}

init();

const switchUser =()=>{ 
    currentScore = 0
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    activePlayer = (activePlayer===1)? 0 : 1
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active")
}


// rolling dice functionality 
roll.addEventListener("click",function(){
 if(playing){
    // 1. Genrating a random dice roll
    const randomNo = Math.floor(Math.random()*6) + 1;

    // 2. show dice no. on display
    dice.classList.remove("hidden")
    dice.src = `dice-${randomNo}.png`

    // 3. chek dice no. is 1 
    if(randomNo === 1){
        // switch the player
        switchUser()
    }else{
        currentScore += randomNo
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    }
}
})

hold.addEventListener("click",function(){
    if (playing){
    // add currentScore value in score array
    scores[activePlayer]+=currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
    if(scores[activePlayer]>=100){
        playing = false
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    }
    else{
        switchUser()
    }
   
}

})

newGame.addEventListener("click",init );