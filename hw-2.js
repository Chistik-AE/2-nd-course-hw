
// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2

let yearFirst = 2007;
alert(yearFirst);

// Задание 3

let guru = 'Brendan Eich';
alert(guru);

// Задание 4

let x = Number(10);
let y = Number(2);
alert(`сумма ${x + y}, разность ${x - y}, произведение ${x * y}, частное ${x / y}`);

// Задание 5

let z = Number(2);
let result = z ** 5;
alert(result);

// Задание 6

let c = Number(9);  //пришлось изменить имя переменной т.к. такое уже использовалось в задании 1
let b = Number(2);
let mod = c % b;
alert(mod);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8

let age = Number(prompt('Сколько вам лет?'));
alert(age);

// Задание 9.0

let name = 'Вася';
let age2 = Number(0); // пришлось изменить имя переменной т.к. такое уже использовалось в задании 8
let isAdmin = Boolean(1);

let user = {
    name: 'Василий',
    age2: 25,
    isAdmin: Boolean(1)
}
console.log(user);

// Задание 9.1

user['city of residence'] = 'Санкт-Петербург';


// Задание 9.2

user.age2 = 32;
console.log(user);

// Задание 9.3

delete user['city of residence'];
console.log(user);

// Задание 9.4

let info = prompt('"Какую информацию хотите узнать о пользователе?"');
alert(user[info]);

// Задание 10

let userName = prompt('Введите ваше имя');
alert(`Привет, ${userName}!`);

