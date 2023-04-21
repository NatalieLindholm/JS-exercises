const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissor = document.querySelector("#scissor")

const showAiAnswer = document.querySelector("#showAiAnswer")
const showPlayerAnswer = document.querySelector("#showPlayerAnswer")

const result = document.querySelector("#result")

let pAnswer


function aiAnswers() {
    let aAnswer = Math.floor(Math.random() * 3) + 1
    if (aAnswer == 1) {
        showAiAnswer.innerText = "Rock"
    } else if (aAnswer == 2) {
        showAiAnswer.innerText = "Paper"
    } else {
        showAiAnswer.innerText = "Scissor"
    }


    if (aAnswer == 1 && pAnswer == "rock") {
        result.innerText = "Draw"
    } else if (aAnswer == 2 && pAnswer == "paper") {
        result.innerText = "Draw"
    } else if (aAnswer == 3 && pAnswer == "scissor") {
        result.innerText = "Draw"
    } else if (aAnswer == 1 && pAnswer == "paper") {
        result.innerText = "Player win"
    } else if (aAnswer == 3 && pAnswer == "paper") {
        result.innerText = "Ai win"
    } else if (aAnswer == 2 && pAnswer == "rock") {
        result.innerText = "Ai win"
    } else if (aAnswer == 3 && pAnswer == "rock") {
        result.innerText = "Player win"
    } else if (aAnswer == 2 && pAnswer == "scissor") {
        result.innerText = "Player win"
    } else if (aAnswer == 1 && pAnswer == "scissor") {
        result.innerText = "Ai win"
    }
}

rock.addEventListener('click', function () {
    pAnswer = "rock"
    showPlayerAnswer.innerText = "Rock"
    aiAnswers()
})

paper.addEventListener('click', function () {
    pAnswer = "paper"
    showPlayerAnswer.innerText = "Paper"
    aiAnswers()
})

scissor.addEventListener('click', function () {
    pAnswer = "scissor"
    showPlayerAnswer.innerText = "Scissor"
    aiAnswers()
})

