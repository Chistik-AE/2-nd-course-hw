// Задание 1
console.log('Задание 1');

let str = 'Преобразовать в верхний регистр';
console.log(str.toUpperCase());

// Задание 2
console.log('Задание 2');

const searchResult = [];
const searchStart = [];
let search = '';

const startsWith = (searchStart, search) => {

    for (let i = 0; i < searchStart.length; i++) {
        const element = searchStart[i];
        if (element.toLowerCase().startsWith(search.toLowerCase())) {
            searchResult.push(element);

        }
    }
    return searchResult;
}
console.log(startsWith(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));


// Задание 3
console.log('Задание 3');

let number = 32.58884;

let result1 = Math.floor(number);
let result2 = Math.ceil(number);
let result3 = Math.round(number);

console.log(result1);
console.log(result2);
console.log(result3);

// Задание 4
console.log('Задание 4');

let resultMax = Math.max(52, 53, 49, 77, 21, 32);
let resultMin = Math.min(52, 53, 49, 77, 21, 32);

console.log(resultMax);
console.log(resultMin);

// Задание 5
console.log('Задание 5');

function

    getRandomInt(minValue, maxValue) {

    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(1, 10));


// Задание 6
console.log('Задание 6');

const array = [];

function
    getRandomArrNumbers(randomNumber) {

    for (let index = 0; index < Math.floor(randomNumber / 2); index++) {
        array[index] = Math.round(Math.random() * (randomNumber));
    }
    console.log(array);
}
getRandomArrNumbers(13);

// Задание 7
console.log('Задание 7');

function

    getRandomNumb(minNumb, maxNumb) {

    return Math.round(Math.random() * (maxNumb - minNumb)) + minNumb;
}

console.log(getRandomNumb(13, 18));


// Задание 8
console.log('Задание 8');


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];

console.log(fullDate);


// Задание 9
console.log('Задание 9');

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10
console.log('Задание 10');


const day = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate1 = new Date();
let hour = myDate1.getHours();
let minute = myDate1.getMinutes();
let second = myDate1.getSeconds();



let fullDate1 = "Дата: " + myDate1.getDate() + " " + months[myDate1.getMonth()] + " " + myDate1.getFullYear() + " - это " + days[myDate1.getDay()] + "."
let fullTime = "Время: " + hour + ":" + minute + ":" + second;


console.log(fullDate1);
console.log(fullTime);


// Задание 10

function gameWords() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words.sort(() => Math.random() - 0.5);
    alert(words);
    questionFristEl = prompt('Чему равнялся первый элемент массива?');
    questionLastEl = prompt('Чему равнялся последний элемент массива?');

    if (words[0].toLowerCase() === questionFristEl.toLowerCase() && words[6].toLowerCase() === questionLastEl.toLowerCase()) {
        alert('Поздравляем! Оба ответа верные.');
    } else if (words[0].toLowerCase() != questionFristEl.toLowerCase() && words[6].toLowerCase() != questionLastEl.toLowerCase()) {
        alert('Вы ошиблись дважды');
    } else {
        alert('Вы были близки к победе!');
    }
}