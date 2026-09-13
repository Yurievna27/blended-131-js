// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
    const array = string.split(' ');
    let element = '';
    for (let i = 0; i < array.length; i++) {
        if (element == '') {
            element = array[i];
        } else if (array[i].length > element.length) {
            element = array[i];
        }
    }
    return element;
}

console.log(findLongestWord("London is the capital of Great Britain"));