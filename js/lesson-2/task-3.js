// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...arr) {
    let sum = 0;
    for (const item of arr) {
        if (typeof item !== 'number') {
            return 'Not a nubmer';
        } else if (arr.length == 0) {
            return 'Array is empty';
        } else {
            sum += item;
        }
    }
    return sum / arr.length;
}
console.log(caclculateAverage(10, 20, 30));
console.log(caclculateAverage());
console.log(caclculateAverage(4, 20, 15));