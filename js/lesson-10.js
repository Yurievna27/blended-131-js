// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("fizzbuzz");
        } else if (num % 5 === 0) {
            console.log("buzz");
        } else if (num % 3 === 0) {
            console.log("fizz");
        }
    }
}

fizzBuzz(prompt("Enter a number"))