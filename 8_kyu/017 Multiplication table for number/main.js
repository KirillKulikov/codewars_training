// ✅ Multiplication table for number (Таблица умножения для числа)
// ❗ Description: Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// P. S. You can use \n in string to jump to the next line.
// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

/*
Examples:
    For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
*/
// ❗ Ваша задача — вернуть таблицу умножения для number целого числа от 1 до 10.

// Например, таблица умножения (строка) для number == 5 выглядит следующим образом:
// P. S. Вы можете использовать \n в строке, чтобы перейти на следующую строку.

// Примечание: между строками должны быть добавлены новые строки, но в конце не должно быть завершающей новой строки. Если вы не уверены в формате, ознакомьтесь с примерами тестов.

const userNumber = 5;

function multiTable(number) {
    let returnTable = '';
    for (let i = 1; i <= 10; i++) {
      let testValue = number * i;
      returnTable += `${i} * ${number} = ${testValue}`;
      if (i < 10) {
        returnTable += '\n';
      }
    }
    return returnTable;
  }

getTableMultiply(userNumber)


/*
const multiTable = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }

  return table;
}
*/