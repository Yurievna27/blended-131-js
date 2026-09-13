// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...arr) {
    let sum = 0;
    let countNotNum = 0;

    if (arr.length == 0) {
        return 'Array is empty';
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            countNotNum++;
        } else {
            sum += arr[i];
        }
    }
    if (countNotNum == 0) {
        return sum / arr.length;
    } else {
        return sum / (arr.length - countNotNum);
    }
}
console.log(caclculateAverage(10, 20, 30));
console.log(caclculateAverage());
console.log(caclculateAverage(4, 20, 15));
console.log(caclculateAverage(10, 'a', 30));