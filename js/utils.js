const calcSum = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Ошибка: ожидались числа в качестве входящих данных"
  }
  if (arguments.lenght !==2) {
    return "функция ожидает два аргумента"
  }
  return num1 + num2;
};

console.log(calcSum(0, 45, 4));

// console.log(calcSum(3, 4));

// console.log(calcSum(3, "Nikitos"));

// console.log(calcSum(3, undefined));

console.log(calcSum(3));

// console.log(calcSum(3, NaN));