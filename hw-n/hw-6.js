// Задание 1
let array = [1, 5, 4, 10, 0, 3];

for (let i = 0; array[i - 1] != 10; i++) {
    console.log(array[i]);
};

// Задание 2

let array2 = [1, 5, 4, 10, 0, 3];
let searchIndex = array2.indexOf(4);
console.log(searchIndex);

// Задание 3

let array3 = [1, 3, 5, 10, 20];
let arrayJoin = array3.join(' ');
console.log(arrayJoin);

// Задание 4

let x = 3;
let y = 3;
let array4 = new Array();

for (let i = 0; i < x; i++) {
    array4[i] = new Array();
    for (let n = 0; n < y; n++) {
        array4[i][n] = 1;
    }
}

console.log(array4)


// Задание 5

let array5 = [1, 1, 1];

array5.push(2);
array5.push(2);
array5.push(2);

console.log(array5);

/* вариант через цикл:

for (let i = 0; i < 3; i++) {
    array5.push(2);
}
console.log(array5);

*/

// Задание 6

let array6 = [9, 8, 7, 'a', 6, 5];

array6.splice(array6.indexOf('a'), 1).sort();

console.log(array6);

// Задание 7

let array7 = [9, 8, 7, 6, 5];

let userLetter = Number(prompt('Введите число'));

if (isNaN(userLetter) || !(userLetter)) {
    alert('Вы ввели неправильное значение');
} else {
    if (array7.indexOf(userLetter) === -1) {
        alert('Не угадал');
    } else {
        alert('Угадал');
    }
}


// Задание 8

let Line = 'abcdef';
lineArray = Line.split('').reverse().join('')

console.log(lineArray);

// Задание 9



let array9 = [
    [1, 2, 3],
    [4, 5, 6],
];
let array9New = [].concat(...array9);

console.log(array9New);


// Задание 10

let array10 = [9, 8, 7, 6, 5, 8, 2, 3, 1];

for (let i = 0; i < (array10.length - 1); i++) {
    semTwoElem = array10[i] + array10[i + 1];
    console.log(semTwoElem);
};
console.log(array10[array10.length - 1])

/* вариант решения в рамках одного массива

let array10 = [9, 8, 7, 6, 5, 8, 2, 3, 1];

for (let i = 0; i < (array10.length); i++) {
    if (i <= (array10.length - 2)) {
        semTwoElem = array10[i] + array10[i + 1];
        console.log(semTwoElem);
    } else {
        console.log(array10[array10.length - 1]);
    };
};
*/

// Задание 11



const arraySquare = (a, b, c, d) => {
    let array11 = [a, b, c, d];
    return array11.map(item => item ** 2);
};

console.log(arraySquare(1, 2, 3, 4));

// Задание 12

const funArray12 = (a, b, c, d, e) => {
    let array12 = [a, b, c, d, e];
    let array12New = [];
    for (let i = 0; i < array12.length; i++) {
        lengthElem = array12[i].length;
        array12New.push(lengthElem) ;
    };  
    return array12New
};


console.log(funArray12('слово', '', 'слог', 'длинное предложение', 'буква'));


// Задание 13

const filtrePositive = (array13) => {
    return array13.filter(item => item < 0); 
};

console.log(filtrePositive([-25, 25, 0, -1000, -2]));
