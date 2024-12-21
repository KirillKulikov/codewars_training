// ✅ Grasshopper - Terminal game move function.
// ❗ Description: Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
/*
Example:
move(3, 6) should equal 15
*/
// ❗ Функция перемещения в терминальной игре
// В этой игре герой перемещается слева направо. Игрок бросает кости и перемещает количество пробелов, указанное кубиками, два раза.
// Создайте функцию для терминальной игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию.

function move (position, roll) {
    let newPosition = position + (roll * 2);
    return newPosition;
  }

let testVariable = move(5, 1);
console.log(testVariable)
