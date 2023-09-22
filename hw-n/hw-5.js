// Задание  1

const smallerNumber = () => {
    let a = prompt('Введите первое число');
    let b = prompt('Введите второе число');
    if (a > b) {
        return console.log(b);
    }
    else {
        return console.log(a);
    };
}

smallerNumber();

// Задание  2

const evenNumber = () => {
    let c = prompt('Введите число');
    if ((c % 2) == 0) {
        console.log('Число чётное');
    }
    else {
        console.log('Число нечётное');
    };

};

evenNumber();

// Задание  3

const numberSquared = (d) => {
    console.log(d ** 2)
};

const numberSquared2 = (e) => {
    return console.log(e ** 2)
};

numberSquared(6);
numberSquared2(7);

// Задание  4

const userAge = () => {
    f = prompt('Сколько вам лет?');
    if (f > 12) {
        alert('Добро пожаловать!');
    }
    else {
        if (f < 0) {
            alert('Вы ввели неправильное значение');
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
    if (isNaN(g) || g === '') {
        return console.log('Одно или оба значения не являются числом');
    }
    else {
        if (isNaN(h) || h === '') {
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
    if (isNaN(n)) {
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
        return console.log((this.raduis ** 2) * Math.PI);
    },
    getPerimeter: function () {
        return console.log(2 * Math.PI * this.raduis);
    }
}

const circly2 = {
    raduis: 7,
    getArea: function () {
        return console.log((this.raduis ** 2) * Math.PI);
    },
    getPerimeter: function () {
        return console.log(2 * Math.PI * this.raduis);
    }
}

circly1.getArea();
circly1.getPerimeter();
circly2.getArea();
circly2.getPerimeter();


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

