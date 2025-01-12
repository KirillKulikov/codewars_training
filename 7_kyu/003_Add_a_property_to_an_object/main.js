// ✅ Add a property to an object (Добавление свойства к объекту)
// ❗ Description: Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

// ❗ Напишите функцию, которая добавляет именованное свойство в объект. Должно быть возможно присвоить свойству новое значение. Если свойство уже существует в объекте, должна быть выдана ошибка.

// ❗ для решения этой задачи потребуется познакомиться с оператором throw. Он используется для генерации ошибок (исключений, exceptions). Понадобится подобная конструкция: throw new Error('Error message').

const userObject = {

};

function addProperty(obj, key, value) {
    if (obj.hasOwnProperty(key)) {
        throw new Error(`Свойство "${key}" уже существует в объекте.`);
    }
    obj[key] = value;
}

addProperty(userObject, "model", "Almera");
addProperty(userObject, "mileage", 150000);
// addProperty(userObject, "model", "Almera");
console.log(userObject);