"use strict";

const modal = (value)=>{
    document.querySelector(value).style.display = "block"
    document.querySelector(".overlay").style.display = "block"
    }

for (let i=0; i<3; i++)
    document.querySelectorAll(".fa-xmark")[i].addEventListener("click",function(){
        document.querySelectorAll(".modal")[i].style.display = "none"
        document.querySelector(".container").style.filter = "none"
    })

  

 document.querySelector("#button-1").addEventListener("click",function(){
    modal("#modal-1")   
})


 document.querySelector("#button-2").addEventListener("click",function(){
    modal("#modal-2")   
})

document.querySelector("#button-3").addEventListener("click",function(){
    modal("#modal-3")
})

