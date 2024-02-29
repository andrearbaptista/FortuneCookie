
const cookie = document.querySelector("#cookie")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const again = document.querySelector("#again")

function askFortune(event){
  toggleScreen()
}

cookie.addEventListener('click', askFortune)
again.addEventListener('click', askFortune)

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")}