console.log("Connected")


let inputBox = document.querySelector(".app-inputs input")
let clearIcon = document.getElementById("close-circle")
let searchBtn = document.querySelector("button")

searchBtn.addEventListener("click", ()=>{
    if (inputBox.value!=="") {
        console.log("this")
    }
})

