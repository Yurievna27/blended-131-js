// Додаткова задача 
// Напишіть функцію, яка перевертатиме рядок у зворотньому порядку

function reverse(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i --) {
        newString += string[i];
    }
    return newString;
}

console.log(reverse(prompt("Enter a string")));