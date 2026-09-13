// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {

    if (typeof a == "number" && typeof b == "number") {
        const ifMin = a < b ? a : b;
        return ifMin;
    } else {
        return "Not a number!";
    }
}

console.log(min(2, 6));
console.log(min(12, 7));
console.log(min("a", 6));