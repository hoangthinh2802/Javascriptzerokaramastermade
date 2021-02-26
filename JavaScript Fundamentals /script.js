// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log ("Jonas");
// console.log(23);

// let firstName = "Matilda";
 
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 23;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher"

// // console.log(myFirstJob);
// true;
// console.log(true);

// console.log(typeof true);
// console.log(typeof javascriptIsfun);
// JavaScriptの言語仕様という観点から、var、let、constの違い
// 大きな違いは再代入・再宣言ができるかどうか、スコープの違いの部分です。

// const now = 2021;
// const ageJonas = now - 1995;
// const ageJan = now - 1999;
// console.log(ageJonas, ageJan);

// console.log(ageJonas + 2, ageJonas / 10, 2 **3);

// const firstName = 'Jonas';
// const lastName = 'Schemedtmann';
// console.log(firstName + ' ' + lastName);



// let x = 10 + 5;
// x += 13;
// console.log(x)

// console.log(ageJonas > ageJan);


// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const MBIMark = massMark/ heightMark **2;
// const MBIJohn = massJohn/ heightJohn**2;



// const markHigherBMI = MBIMark > MBIJohn;
// console.log(MBIMark, MBIJohn, markHigherBMI)


// const firstName = 'Jonas';
// const job = 'student';
// const birthYear = 1991;
// const year = 2021;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(jonasNew);

// console.log(`Just a regular string....`)
// console.log(`String with \n\
// mutiple \n\
// linnes`);

// console.log(`String
// mutiple
// lines`);


// const age = 19;
// const isOldEnough = age >= 18;
// if(isOldEnough){
//     console.log('Sarah can start driving license 👻 ');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years : `);
// }
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const MBIMark = massMark/ heightMark **2;
// const MBIJohn = massJohn/ heightJohn**2;

// var higher = MBIJohn>MBIMark;
// if (higher){
//     console.log(`John's BMI (${MBIJohn}) is higher than Mark's BMI (${MBIMark})!`)
// }else{
//     console.log(`Mark's BMI (${MBIMark}) is higher than John's BMI (${MBIJohn})!`)
// // }

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);

// console.log('I am ' + 23 + ' years old ');
// console.log('23' - '10' -3);

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision) ;
// console.log(hasDriversLicense || hasGoodVision) ;

// if (hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive!');
// } else{
//     console.log('Someone else should drive...');

// }
// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision&& isTired);

// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Sarah is able to drive!');
// } else{
//     console.log('Someone else should drive...')
// }

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;
// console.log(avgDolphins, avgKoalas);

// if (avgDolphins > avgKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (avgKoalas > avgDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (avgDolphins === avgKoalas) {
//   console.log('Both win the trophy!');
// }


// //bonus 1 + 2

// if (avgDolphins > avgKoalas && avgDolphins >= 100){
//     console.log("Dophins win the trophy 🏆");
// } else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
//     console.log("Kolas win the trophy");
// } else if (avgDolphins === avgKoalas && scoreDolphins >= 100 && avgKoalas >= 100) {
//     console.log('Both win the trophy!');
//   } else {
//     console.log('No one wins the trophy 😭');
//   }
  


// const day = 'monday';

// switch (day) {
//     case 'monday': 
//         console.log('Plan course structure')
//         console.log("Goto coding meetup")
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//     case 'saturday':
//     case 'sunday': 
//         console.log('enjoy the weekend 😋')
//         break;
//     default:
//         console.log('Not a valid day!');

// }


const age = 23;

age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💦');

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water '}`);