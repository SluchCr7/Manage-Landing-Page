let ButtonData = document.getElementById("ButtonData")
let inputData = document.getElementById("inputData")
let sent_Data = document.querySelector(".sent_Data")
ButtonData.addEventListener("click", () => {
    if (inputData.value == "") {
        inputData.style.borderColor = "red"
    } else {
        sent_Data.classList.remove("none")
        inputData.value = ""
        setInterval(() => {
            sent_Data.classList.add("none")
        } , 1000)
    }
})
let Menu = document.querySelector(".Menu")
let Bars = document.querySelector(".fa-bars")

Bars.addEventListener("click", () => {
    Menu.classList.toggle("none")
    Bars.classList.toggle("fa-x")
})