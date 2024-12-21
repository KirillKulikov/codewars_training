// ✅ Grasshopper - Terminal game combat function.
// ❗ Description: Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
/*
function combat(health, damage) {
  Write your code here...
}
*/
// ❗ Описание: Создайте боевую функцию, которая забирает текущее здоровье игрока и количество полученного урона, а также возвращает новое здоровье игрока. Здоровье не может быть меньше 0..
let helthHero = 100;
let messageForUser;
function combat(health, damage = 10) {
    let compareHelthAndDamage = (health > damage);
    if (compareHelthAndDamage) {
        helthHero = health - damage;
        return "Your hero is alive. Helth: " + helthHero;
    } else {
        return "Health cannot go below 0";
    }
  }

messageForUser = combat(helthHero, 20)
console.log(messageForUser);

messageForUser = combat(helthHero, 30)
console.log(messageForUser);

messageForUser = combat(helthHero, 40)
console.log(messageForUser);

messageForUser = combat(helthHero, 20)
console.log(messageForUser);
