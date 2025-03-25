let searchIcon = document.querySelector(".header-right i")
let clickBar = document.querySelector(".click-bar")

searchIcon.addEventListener("click",()=>{
    searchIcon.style.display="none"
    clickBar.style.display="block"
})

/*  for password  */

let iconElement = document.querySelector(".input-container i")
let inputElement = document.querySelector(".input-container input")

iconElement.addEventListener("click",(event)=>{
    alert("hello")
    inputElement.type = "text"

    if(inputElement.value=="") {
        alert("hello")
    }

    event.preventDefault();
})