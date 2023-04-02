/*Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени */

let getCub = (param) => param ** 3;
console.log(getCub(2) + getCub(3));

/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/

function getSalary(sum) {
    if (typeof sum === 'string') {
        console.log(`${sum}: значение задано неверно`);
    } else {
        return console.log(`Размер заработной платы за вычетом налогов равен ${sum * 0.87}`);
    }
}

getSalary('sas');
getSalary(100);

/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/

function valueOfMax(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3) {
        return number2;
    } else {
        return number3;
    }
}

let userNumber1 = Number(prompt('Введите первое число'));
let userNumber2 = Number(prompt('Введите второе число'));
let userNumber3 = Number(prompt('Введите третье число'));

console.log(valueOfMax(userNumber1, userNumber2, userNumber3));

/*Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
function minus(a, b) {
    switch (valueOfMax(a, b, a === b)) {
        case a: return a - b;
        case b: return b - a;
        case a === b: return "нуль";
    }
}

console.log(sum(2, 6));
console.log(multiply(2, 6));
console.log(divide(2, 6));
console.log(minus(5, 5));


// Добавлено из github
