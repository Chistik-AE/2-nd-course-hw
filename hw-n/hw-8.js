// Задание 1


const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort(function (a, b) {
    return a.age - b.age;
}));


// Задание 2


function isPositive(number) {
    return number > 0;
}
function isMale(male) {
    return male.gender === 'male';
}
function filter(arr, callback) {
    const filterArr = [];
    for (const item of arr) {
        if (callback(item)) {
            filterArr.push(item);
        }
    }
    return filterArr
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const people1 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people1, isMale)); 



// Задание 3


const timer = (deadline) => {
    if (isNaN(+deadline)) { 
        console.log('Передано некорректное число'); 
        return; 
    }

    let time = deadline;
    const interval = setInterval(() => {
        time -= 3;
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, deadline * 1000)
};

timer(30);


// Задание 4

function delayForSecond(callback) {
    setTimeout(callback, 1000 * 1);
  
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})



// Задание 5


function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}


function sayHi (name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond2(() => sayHi('Глеб'));
