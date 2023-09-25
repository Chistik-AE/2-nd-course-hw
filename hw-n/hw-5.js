// Задание  1

const smallerNumber = (a, b) => {

    if (a > b) {
        return b;
    }
    else {
        return a;
    };
}

console.log(smallerNumber(8, 7));


// Задание  2

const evenNumber = (c) => {
    if ((c % 2) === 0) {
        console.log('Число чётное');
    }
    else {
        console.log('Число нечётное');
    };

};

evenNumber(8);

// Задание  3

const numberSquared = (d) => {
    console.log(d ** 2)
};

const numberSquared2 = (e) => {
    return e ** 2
};

numberSquared(6);
console.log(numberSquared2(7));


// Задание  4

const userAge = () => {
    let f = prompt('Сколько вам лет?');
    if (isNaN(f) || !(f) || f.trim() === '' || f < 0) {
        alert('Вы ввели неправильное значение');
    }
    else {
        if (f > 12) {
            alert('Добро пожаловать!');
        }
        else {
            alert('Привет, друг!')
        };
    };
};

userAge();



// Задание  5

const correctNumber = () => {
    let g = prompt('Введите первое число');
    let h = prompt('Введите второе число');
    if (isNaN(g) || !(g) || g.trim() === '') {
        return console.log('Одно или оба значения не являются числом');
    }
    else {
        if (isNaN(h) || !(h) || h.trim() === '') {
            return console.log('Одно или оба значения не являются числом');
        }
        else {
            return console.log(g * h);
        };
    };
};

correctNumber();


// Задание  6

function numberUser() {
    let n = prompt('Введите число');
    if (isNaN(n) || !(n) || n.trim() === '') {
        console.log('Переданный параметр не является числом')
    }
    else {
        console.log(n, ' в кубе равняется ', n ** 3)
    }
}

numberUser();


// Задание  7

const circly1 = {
    raduis: 5,
    getArea: function () {
        return (this.raduis ** 2) * Math.PI;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.raduis;
    }
}

const circly2 = {
    raduis: 7,
    getArea: function () {
        return (this.raduis ** 2) * Math.PI;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.raduis;
    }
}

console.log(circly1.getArea());
console.log(circly1.getPerimeter());
console.log(circly2.getArea());
console.log(circly2.getPerimeter());


// Задание  8

const monthNumber = () => {
    let j = Number(prompt('Введите номер месяца'));
    if (0 < j && j < 13 && Number.isInteger(j)) {
        if ((j === 1) || (j === 2) || (j === 12)) {
            return alert('Зима');
        } else {
            if (2 < j && j < 6) {
                return alert('Весна');
            } else {
                if (5 < j && j < 9) {
                    return alert('Лето');
                } else {
                    if (8 < j && j < 12) {
                        return alert('Осень');
                    };
                };
            };
        };
    } else {
        return alert('Не верно. Такого номера месяца нет');
    };
};



