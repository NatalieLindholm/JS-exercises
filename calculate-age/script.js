const displayAge = document.querySelector("#displayAge")

const date = document.querySelector("#date")
const month = document.querySelector("#month")
const year = document.querySelector("#year")

document.querySelector("#calculateAge").addEventListener("submit", (e) => {
    e.preventDefault()

    const nameIdk = year.value + "-" + (parseInt(month.value) - 1) + "-" + date.value

    let birthDate = new Date(nameIdk)
    let todaysDate = new Date()

    let msDiff = todaysDate.getTime() - birthDate.getTime()
    let years = Math.floor(msDiff / 1000 / 60 / 60 / 24 / 365)
    let days = Math.floor((msDiff / 1000 / 60 / 60 / 24 / 365 - years) * 365)


    displayAge.innerText = ("You are " + years + " years and " + days + " days old")
});