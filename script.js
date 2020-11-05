function creatDaysOfWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const weekDayElement = document.createElement('li');

        weekDayElement.innerText = weekDays[index];
        weekDaysList.appendChild(weekDayElement);
    }
}
creatDaysOfWeek()


