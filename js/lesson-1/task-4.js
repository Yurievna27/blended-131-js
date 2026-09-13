// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const inputMinutes = Number(prompt("Input the number of minutes"));

const hours = Math.floor(inputMinutes / 60);
const minutes = inputMinutes % 60;

const editHours = hours <10 ? `0${hours}` : hours;
const editMinutes = minutes <10 ? `0${minutes}` : minutes;

console.log(`${editHours}:${editMinutes}`);
