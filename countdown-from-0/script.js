let secondsLeft = 10
const timeElement = document.querySelector('#number')

setTimeout(tick, 1000)

function tick() {
    if (secondsLeft > -1) {
        timeElement.innerText = `${secondsLeft} sekunder`
        setTimeout(tick, 1000)
        secondsLeft--
    } else if (secondsLeft == 1) {
        timeElement.innerText = `${secondsLeft} sekund`
        secondsLeft--
    } else {
        document.body.style.background = "red"
        timeElement.innerText = "Hej på dig"
        timeElement.style.color = "white"
    }
}