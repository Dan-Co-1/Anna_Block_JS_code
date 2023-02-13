'use strict';

let win = alert ("Прошу подтвердить начало прогрузки сайта");
let year = prompt ("Прошу ввести в окне Ваш год рождения", 2000);
alert (`Вам ${2023-year} лет`);
let question
question = confirm ("Правильно ли был расчитан Ваш возраст?")
if (question == true) {
    alert ("Да я просто гений!!!");
}   else {
    alert("Мне очень жаль!");
    alert("Значит надо ещё поработать над собой!");
}