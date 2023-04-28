const inputElement = document.querySelector('input');
const divElement = document.querySelector('#displayAge');

inputElement.addEventListener('change', () => {
    const result = computeAge(inputElement.value);
    divElement.innerHTML = `
    You are ${result.years} years and ${result.days} days old
  `;
});

/**
 * @param {string} dateOfBirth 
 * @returns {{years: number, days: number}}
 */
function computeAge(dateOfBirth) {
    const todaysDate = new Date();
    const birtdate = new Date(dateOfBirth);

    if ((todaysDate.getMonth() > birtdate.getMonth()) || (todaysDate.getMonth() === birtdate.getMonth() && todaysDate.getDate() >= birtdate.getDate())) {
        const thisYearBirtDate = new Date(`${todaysDate.getFullYear()}-${birtdate.getMonth() + 1}-${birtdate.getDate()}`);

        return {
            years: todaysDate.getFullYear() - birtdate.getFullYear(),
            days: Math.floor((todaysDate.getTime() - thisYearBirtDate.getTime()) / (1000 * 60 * 60 * 24))
        };
    }
    else {
        const lastYearBirtDate = new Date(`${todaysDate.getFullYear() - 1}-${birtdate.getMonth() + 1}-${birtdate.getDate()}`);

        return {
            years: todaysDate.getFullYear() - birtdate.getFullYear() - 1,
            days: Math.floor((todaysDate.getTime() - lastYearBirtDate.getTime()) / (1000 * 60 * 60 * 24))
        }
    }
}