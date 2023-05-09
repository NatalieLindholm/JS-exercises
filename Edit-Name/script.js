let modal = document.querySelector("#myModal")
let edit = document.querySelector("#edit")

let display = document.querySelector("#display")

const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const age = document.querySelector("#age")

const bonk = JSON.parse(localStorage.getItem('person'))

display.innerHTML = `${bonk.firstName} ${bonk.lastName}, ${bonk.age}`

edit.onclick = function () {
    modal.style.display = "block";
}

function save() {
    const person = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
    }

    const a = JSON.stringify(person)
    localStorage.setItem('person', a)
    const b = JSON.parse(a)
    localStorage.getItem('person')

    console.log(a);
    console.log(b);

    display.innerHTML = `${b.firstName} ${b.lastName}, ${b.age}`

    modal.style.display = "none";
}


