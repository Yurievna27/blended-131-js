// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    let sum = 0;
    if (!this.exist()) {
      return "No such propeties";
    }
    return this.a + this.b;
  },

  mult() {
    let multiply = 1;
    if (!this.exist()) {
      return "No such propeties";
    }
    return this.a * this.b;
  },

  exist() {
    if (this.a === undefined || this.b === undefined) {
      return false;
    } else {
      return true;
    }
  },
};

calculator.read(10, 5);

console.log(calculator.exist());
console.log(calculator.sum());
console.log(calculator.mult());
