// ✅ Combine objects (Объединять объекты)
// ❗ Description: Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
/*
An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
*/
// The combine function should be a good citizen, so should not mutate the input objects.

// ❗ Ваша задача — написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.

// Все свойства входного объекта будут иметь только числовые значения. Объекты объединяются таким образом, чтобы значения соответствующих ключей суммировались.

// ❗ возможно, придётся вспомнить как перебирать свойства в объектах

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }


function combine(obj1, obj2) {
    const objResult = {}
    let key;

    for (key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            objResult[key] = obj1[key];
        }
    }

    for (key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (objResult.hasOwnProperty(key)) {
                objResult[key] = objResult[key] + obj2[key];
        } else {
                objResult[key] = obj2[key];
            }
        }
            
    }
    return objResult;
}
// combine(objA)
console.log(combine(objA, objB))

/*
Объяснение кода:
1. Инициализация пустого объекта для результата

const objResult = {};

Мы создаем пустой объект objResult, который будет содержать объединенные ключи и значения из двух входных объектов.

2. Первый цикл: добавляем свойства из obj1

for (key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        objResult[key] = obj1[key];
    }
}

for (key in obj1): Проходим по всем ключам в obj1, включая те, что могут быть унаследованы от прототипа.
Object.prototype.hasOwnProperty.call(obj1, key): Проверяем, что ключ принадлежит только самому объекту obj1, а не его прототипу.
objResult[key] = obj1[key]: Копируем значение ключа из obj1 в objResult.
На этом этапе objResult содержит все ключи и значения из obj1.

3. Второй цикл: добавляем свойства из obj2
javascript
Копировать код
for (key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
        if (objResult.hasOwnProperty(key)) {
            objResult[key] += obj2[key]; // Если ключ уже есть, складываем значения
        } else {
            objResult[key] = obj2[key]; // Если ключа нет, добавляем его с новым значением
        }
    }
}
for (key in obj2): Проходим по всем ключам в obj2.
Object.prototype.hasOwnProperty.call(obj2, key): Проверяем, что ключ принадлежит только obj2.
if (objResult.hasOwnProperty(key)):
Если ключ уже есть в objResult (он был добавлен из obj1), складываем значения: objResult[key] += obj2[key].
Если ключа нет в objResult, добавляем его: objResult[key] = obj2[key].
Пример работы:
javascript
Копировать код
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 3, c: 4, d: 5 };

const combined = combine(obj1, obj2);
console.log(combined); // { a: 1, b: 5, c: 7, d: 5 }
После первого цикла: objResult = { a: 1, b: 2, c: 3 }

Во втором цикле:

Ключ b уже есть, складываем: 2 + 3 = 5
Ключ c уже есть, складываем: 3 + 4 = 7
Ключ d добавляем, т.к. его не было: d = 5
Итог: objResult = { a: 1, b: 5, c: 7, d: 5 }

Почему важно проверять принадлежность ключей?
Если не использовать проверку, то можно случайно обработать свойства, унаследованные от прототипа, что приведет к ошибкам. Например, объект может содержать такие ключи, как toString или constructor, которые являются частью прототипа.
*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= */

/*
function combine() {
    let result = {};
    for (let obj of arguments) {
        for (let property in obj) {
            if (property in result) {
                result[property] += obj[property];
            } else {
                result[property] = obj[property];
            }
        }
    }
    return result;
}


Функция combine объединяет свойства одного или нескольких объектов, переданных в качестве аргументов, в один объект. Если одно и то же свойство встречается в нескольких объектах, его значения суммируются. Вот подробное объяснение работы кода:

Разбор кода:
Создание пустого объекта для результата:

javascript
Копировать код
let result = {};
Создается пустой объект result, в который будут записываться итоговые свойства и их значения.

Итерация по аргументам функции:

javascript
Копировать код
for (let obj of arguments) {
arguments — это специальный объектоподобный массив, содержащий все аргументы, переданные в функцию.
Цикл for...of перебирает каждый объект, переданный в качестве аргумента.
Перебор свойств текущего объекта:

javascript
Копировать код
for (let property in obj) {
Цикл for...in перебирает все перечисляемые свойства текущего объекта obj.
Проверка наличия свойства в result:

javascript
Копировать код
if (property in result) {
    result[property] += obj[property];
} else {
    result[property] = obj[property];
}
Если свойство property уже есть в объекте result, его значение увеличивается на значение соответствующего свойства из текущего объекта obj.
Если свойства еще нет в объекте result, оно добавляется, и его значение становится равным значению из obj.
Возврат результата:

javascript
Копировать код
return result;
После обработки всех аргументов функция возвращает объединенный объект.

Пример использования:
javascript
Копировать код
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = { a: 5, d: 6 };

let combined = combine(obj1, obj2, obj3);

console.log(combined); 
// Вывод: { a: 6, b: 5, c: 4, d: 6 }
Как это работает:
obj1 добавляет свойства a и b в result: { a: 1, b: 2 }.
obj2:
Свойство b уже есть, поэтому к b прибавляется 3: b = 2 + 3 = 5.
Свойство c добавляется: { a: 1, b: 5, c: 4 }.
obj3:
Свойство a уже есть, поэтому к a прибавляется 5: a = 1 + 5 = 6.
Свойство d добавляется: { a: 6, b: 5, c: 4, d: 6 }.
Таким образом, функция объединяет свойства объектов и суммирует их значения, если свойства совпадают.

*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= */

/*
function combine() {
    var finalObj = {};
        
        for (var arg = 0; arg < arguments.length; arg++) {
            for (var letter in arguments[arg]) {
                if (finalObj[letter] !== undefined) {
                    finalObj[letter] = finalObj[letter] + arguments[arg][letter];
                } else {
                    finalObj[letter] = arguments[arg][letter];
                }
            }
        }
        return finalObj;
    }
*/
