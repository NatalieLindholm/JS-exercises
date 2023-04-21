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
        console.log("rock draw")
    } else if (aAnswer == 2 && pAnswer == "paper") {
        console.log("paper draw")
    } else if (aAnswer == 3 && pAnswer == "scissor") {
        console.log("scissor draw")
    }
}
// Player	vs	Ai
// pape		vs	rock = Player wins
// pape		vs	scissor = Ai wins
// Rock 	vs	paper = Ai wins
// Rock 	vs	scissor = Player wins
// Scissor 	vs	paper = Player wins
// Scissor 	vs	rock = Ai wins

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

