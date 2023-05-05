const result = document.querySelector("#result")
const ce = document.querySelector("#celsius")
const fa = document.querySelector("#fahrenheit")


function converter() {
    const inputValue = parseInt(document.querySelector("#value").value)

    if (ce.checked) {
        let ceValue = inputValue * 9 / 5 + 32
        result.innerText = `${ceValue} Fahrenheit`
    } else if (fa.checked) {
        let faValue = (inputValue - 32) * 5 / 9
        result.innerText = `${faValue} Celsius`
    }
}