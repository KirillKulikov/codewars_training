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
