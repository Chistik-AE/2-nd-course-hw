//задание 1

let password = 'пароль';
let enterPass = prompt('Введите пароль');
if (password === enterPass) {
    alert("Пароль введен верно");
}
else { alert("Пароль введен неправильно") };

//задание 2

let c = Number(prompt('введите цифру от 1 до 9'));
let p;
p = (0 < c && c < 10) ? 'Верно' : 'Не верно';
console.log(p);

//Задание 3

let d = prompt('Введите первое из двух чисел, хотя бы одно из них должно быть больше 100');
let e = prompt('Введите второе из двух чисел, хотя бы одно из них должно быть больше 100');

if (d > 100 || e > 100) {
    console.log('Верно');
}
else { console.log('Не верно') };


//Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('Зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца нет!');
}
