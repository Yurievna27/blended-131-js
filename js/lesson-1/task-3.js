// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

const input = Number(prompt("Input a number (1-4)"));
let result;

switch (input) {
    case 1:
        result = "Winter";
        break;
    case 2:
        result = "Spring";
        break;
    case 3:
        result = "Summer";
        break;
    case 4:
        result = "Autumn";
        break;
    default:
        break;
}
console.log(result);