const numbers = document.querySelector("#number")
const value = document.querySelector("#value")



function numberBackground() {
    if (numbers.value > 0) {
        value.innerText = ("The value is positive")
        value.classList.add("positive")
    } else if (numbers.value < 0) {
        value.innerText = ("The value is negative")
        value.classList.add("negative")
    } else {
        value.innerText = ("The value is zero")
        value.classList.remove("positive", "negative")
        value.classList.add("zero")
    }
}