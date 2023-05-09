const result = document.querySelector("#result")
const ce = document.querySelector("#celsius")
const fa = document.querySelector("#fahrenheit")


function converter() {
    const inputValue = parseInt(document.querySelector("#value").value)

    if (ce.checked) {
        let faValue = inputValue * 9 / 5 + 32
        result.innerText = `${faValue} Fahrenheit`
    } else if (fa.checked) {
        let ceValue = (inputValue - 32) * 5 / 9
        result.innerText = `${ceValue} Celsius`
    }
}