const age = document.querySelector("#enterAge")
const display = document.querySelector("#displayAge")

function tellAge() {
    if (age.value < 0) {
        display.innerText = ("State a valid age")

    } else if (age.value > 0 && age.value < 13) {
        display.innerText = ("You are a child")

    } else if (age.value > 12 && age.value < 20) {
        display.innerText = ("You are a teenager")

    } else if (age.value > 19 && age.value < 65) {
        display.innerText = ("You are an adult")

    } else if (age.value) {
        display.innerText = ("You are a senior")
    }
}