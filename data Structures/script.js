'use strict';

// Data needed for a later exercise
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

const airline = 'Tap Air Portugal';

const fixCaptalizationName = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};
fixCaptalizationName('jOnaS');

// Comparing emails
const email = 'hoangthinh@gmail.com';
const loginEmail = ' hoangthinh@gmail.com\n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceUS = '228,43$';
const priceJP = priceUS.replace('$', '円').replace(',', '.');
console.log(priceJP);

const annoucement = 'All passengers come to barding door 23. Boarding door 23!';

console.log(annoucement.replace('door', 'gate'));
console.log(annoucement.replace(/door/g, 'gate'));

//Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schemedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schemedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schemedtmann');

//padding
const message = 'Go to gate 21!';
console.log(message.padStart(23, '+').padEnd(35, '+'));
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B5352'[0]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('por'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😷');
//   else console.log('You got lucky 🍀');
// };

// checkMiddleSeat('11B');
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// // Property VALUES
// const value = Object.values(openingHours);
// console.log(openingHours);

// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// for (const item of menu) console.log(item);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// // Use Any data type, return any data type, short-circuiting
// // console.log(3 || 'Jonas');
// // console.log('' || 'Jonas');
// // console.log(true || 0);
// // console.log(undefined || null);
// // console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // // restaurant.numGuests = 323;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log('------ AND -----');
// // console.log(0 && 'Jonas');
// // console.log(7 && 'Jonas');
// // const arr = [1, 2, ...[3, 4]];

// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // const [pizza, , risotto, ...otherFood] = [
// //     ...restaurant.mainMenu,
// //     ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, otherFood);

// // //Objects
// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // //2) Functions
// // const add = function (...numbers) {
// //     let sum = 0;
// //     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //     console.log(sum);
// // };
// // add(2, 3);
// // add(1, 2, 4, 6, 6);
// // add(3, 7, 8, 25, 22);
// // const x = [34, 14, 51];
// // add(...x);

// // restaurant.otherPizza('mushrooms', 'onion', 'olives', 'spinach');

// // restaurant.orderDelivery({
// //   time: '22:22',
// //   address: 'nishishippori 1-9-11',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // //default values
// // const { menu = [], starterMenu: starter = [] } = restaurant;
// // console.log(menu, starter);

// // // Mutating valueables
// // let a = 111;
// // let b = 13;
// // const obj = { a: 23, b: 3, 4: 23 };
// // ({ a, b } = obj);
// // console.log(a, b);
// // // Nested objects
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);

// // const arr = [5, 6, 7];
// // const badNewArr = [1, 2, arr[(0, arr[1], arr[2])]];
// // console.log(badNewArr);

// // const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // console.log(...newArr);
// // console.log(1, 2, 5, 6, 7);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // //Iterables: arrays, strings, maps, sets but not objects
// // const str = 'Jonas';
// // const letters = [...str, ' ', 'S.'];
// // console.log(letters);

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// // //objects
// // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Ristorante Rome';
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

//Coding Challenge 1
/*
We're building a football betting app ( soccer for my American Friends)!

Suppose we get data from a web service about a certain game(below). In this callenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team ( variables 'players1' and 'players2')
2. the first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeepers's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1 ) used 3 substitute players. So create a new array ('players1Final') containing all the original team1Players pluc 'Thiago', 'Coutinho', and 'Perisic'
5. Based on the game.odds object, create  one variable for each odd (called 'team1', 'draw', and 'team2')
6. Write a function('printGoalds') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the numbers of goals who were scored (nuber of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statements or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski', and 'Kimmich'. Then, call the function again with players from game.scored

*/
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrusia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Gorezka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Gotze',
//             'Haland',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2021',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// //1.
// const [players1, player2] = game.players;
// console.log(players1, player2);
// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// //3.
// const allPlayers = [...players1, ...player2];
// console.log(allPlayers);
// //4.
// const player1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// console.log(player1Final);
// //5
// const {
//     odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// //6
// const printGoals = function (...players) {
//     console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski');
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
