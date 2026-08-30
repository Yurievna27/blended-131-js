// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

const min = Math.floor(Math.random() * 59);

if (min <= 15) {
    alert(`${min} is in 1 quarter`);
} else if (min <= 30) {
    alert(`${min} is in 2 quarter`);
} else if (min <= 45) {
    alert(`${min} is in 3 quarter`);
} else if (min <= 59) {
    alert(`${min} is in 4 quarter`);
}
