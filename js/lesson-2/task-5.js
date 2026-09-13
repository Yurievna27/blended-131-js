// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
    if (Array.isArray(numbers)) {
        let smalest = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (smalest == 0) {
                smalest = numbers[i];
            } else if (smalest > numbers[i]) {
                smalest = numbers[i];
            }
        }
        return smalest;
} else {
    return 'Sory, it is not an array!'
}
}

console.log(findSmallestNumber(numbers));