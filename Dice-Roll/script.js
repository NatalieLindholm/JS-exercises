const imgElement = document.querySelector("#diceSide")

function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1

    if (random == 1) {
        console.log("1");
        imgElement.src = "./1.png"
    }

    if (random == 2) {
        console.log("2");
        imgElement.src = "./2.png"
    }

    if (random == 3) {
        console.log("3");
        imgElement.src = "./3.png"
    }

    if (random == 4) {
        console.log("4");
        imgElement.src = "./4.png"
    }

    if (random == 5) {
        console.log("5");
        imgElement.src = "./5.png"
    }

    if (random == 6) {
        console.log("6");
        imgElement.src = "./6.png"
    }
}