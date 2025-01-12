// ✅ AWho's Online? (Кто в сети?)
// ❗ Description: You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

// ❗ У вас есть приложение для группового чата, но кто находится онлайн!?

// Вы хотите показать своим пользователям, кто из их друзей онлайн и доступен для общения!

// Учитывая ввод массива объектов, содержащих имена пользователей, статус и время с момента последнего действия (в минутах), создайте функцию, которая определит, кто является online, offline и away.

// Если кто-то есть, online но их lastActivity было больше 10 минут назад, они должны быть рассмотрены away.

// Входные данные имеют следующую структуру:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// Соответствующий вывод должен выглядеть следующим образом:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Если, например, пользователей нет online вывод должен выглядеть следующим образом:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username всегда будет a string, status всегда будет либо 'online', либо 'offline' (перечисление UserStatus в C #), а LastActivity всегда будет number >= 0.

// Наконец, если в вашем чате нет друзей, вводом будет пустой массив []. В этом случае вы должны вернуть пустой объект {} (пустой словарь в C#)..

