// ✅ Separate basic types (Отдельные основные типы)
// ❗ Description: Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected

/*
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
*/
// ❗ Дано: последовательность значений разных типов (число, строка, логическое значение). Необходимо вернуть объект с отдельными свойствами для каждого из представленных во входных данных типов. Каждое свойство должно содержать массив соответствующих значений.
// сохраняйте порядок значений, как во входном массиве
// если тип не представлен во входных данных, соответствующее свойство не ожидается

const userArray = ['a', 1, 2, false, 'b']

function splitValues(array) {
  let userObject = {};

  for (let index = 0; index < array.length; index++) {

    if (typeof array[index] === 'string') {
      if (!userObject.string) {
        userObject.string = []
      };
      userObject.string.push(array[index])
    } else if (typeof array[index] === 'number') {
      if (!userObject.number) {
        userObject.number = []
      }
      userObject.number.push(array[index])
    } else {
      if (!userObject.boolean) {
        userObject.boolean = []
      }
      userObject.boolean.push(array[index])
    }

  }
  return userObject
}

console.log(splitValues(userArray))


/*
Рефакторинг кода
const userArray = ['a', 1, 2, false, 'b']; 

function splitValues(array) { 
  let userObject = {};

  array.forEach(item => { 
    const type = typeof item; 

      if (!userObject[type]) { 
        userObject[type] = []; 
        } userObject[type].push(item); 
    }); 
    
    return userObject; 
} 
      
console.log(splitValues(userArray));

В этом коде я использую метод forEach для итерации по массиву и динамически создаю свойства объекта userObject на основе типа элемента. Это делает код более компактным и легко читаемым.
*/