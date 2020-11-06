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

// Requisito 1
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const day = document.createElement('li');
        const dayMonth = dezDaysList[index];

        day.innerText = dayMonth;

        if (dayMonth === 24 || dayMonth === 31) {
            day.className = "day holiday";
        } else if (dayMonth === 4 || dayMonth === 11 || dayMonth === 18) {
            day.className = "day friday";
        } else if (dayMonth === 25) {
            day.className = "day holiday friday";
        } else {
            day.className = "day";
        }

        days.appendChild(day);
    }
}
createDaysOfTheMonth();

// Requisito 2
function createButton(nome, id) {
    const buttonContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');


    button.innerText = nome;
    button.id = id;

    buttonContainer.appendChild(button);
}
createButton("Feriados", "btn-holiday");

// Requisito 3
function changeColorOfHolidays() {
    const backgroundColor = "rgb(238,238,238)";
    const button = document.querySelector('#btn-holiday');
    const holidays = document.querySelectorAll('.holiday');

    button.addEventListener("click", changeColor);
    function changeColor() {
        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor === "white")
                holidays[index].style.backgroundColor = "green";
            else
                holidays[index].style.backgroundColor = "white";
        }
    }
}
changeColorOfHolidays();

// Requisito 4
createButton("Sexta-feira", "btn-friday");

// Requisito 5
function clickFriday() {
    const buttonFriday = document.getElementById('btn-friday');
    const fridays = document.querySelectorAll('.friday');


    buttonFriday.addEventListener("click", changeTextFridays);
    function changeTextFridays() {
        for (let index = 0; index < fridays.length; index += 1) {
            friday = fridays[index];
            if (friday.innerText === "SEXTOU!")
                friday.innerText = (Number(friday.previousElementSibling.innerText) + 1);
            else
                fridays[index].innerText = "SEXTOU!";
        }
    }
}
clickFriday();

const days = document.querySelector('#days');

function dayMouseOver() {
    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = "28px";
        event.target.style.fontWeight = "bold";
    });
}

dayMouseOver();

function dayMouseOut() {
    days.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = "20px";
        event.target.style.fontWeight = "normal";
    });
}

dayMouseOut();

function addTaskSpan(taskName) {
    const taskContainer = document.querySelector('.my-tasks');
    const newTask = document.createElement('span');
    newTask.innerText = taskName;
    taskContainer.appendChild(newTask);
}

addTaskSpan('resolver os exercícios de 6 ao 10')
