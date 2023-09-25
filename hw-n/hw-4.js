//Задание 1

let a = 1;

while (a <= 2) {
    console.log('Привет');
    a++;
}

//Задание 2

let b = 1;

while (b <= 5) {
    console.log(b);
    b++;
}

//Задание 3

let c = 7;

while (c <= 22) {
    console.log(c);
    c++;
}

//Задание 4

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}




//Задание 5

let n = 1000;
let num = 0;

for (; n >= 50; n /= 2) {
    num++;
}
console.log(n);
console.log(num);

//Задание 6

let fridey = 1;

do {
    console.log(`Cегодня пятница ${fridey} число.Необходимо подготовить отчёт.`);
    fridey += 7;
}
while (fridey <= 31);

