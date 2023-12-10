'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');

// errors by using reserved words
// const interface = 'Audio';
// const private = 534;
// const if = 23;

// FUNCTIONS

// function logger(){
//     console.log('My name is Steve');
// }
// // Calling the function / running / invoking
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// } 

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);


// same two functions examples
// simple function examples
// function declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }    
// const h1 = calcAge1(1991);
// console.log(h1);


// function without a name- anonymous function
// function expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
// const Age2 = calcAge2(1991);
// console.log(Age2);


// Function Declaration
// function calcAge1(bday){
//     return 2050 - bday;
// }
// const bD = calcAge1(1989);



// Function Expression
// const calcAge2 = function(bday2){
//     return 2100 - bday2;
// }
// const bD2 = calcAge2(1989);
// console.log(bD,bD2);


// Arrow Function

// Example 1
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1989);
// console.log(age3);

// // Example 2
// // more parameters
// const yearsUntilRetirment =(birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retire = 65 - age;
//     return `${firstName} retires in ${retire} years`;
// }
// console.log(yearsUntilRetirment(1989,'Steve'));
// console.log(yearsUntilRetirment(1991,'Sam'));

// const whoIAm = (birthYear,firstName) =>{
//     const age = birthYear;
//     const youAre = firstName;
//     return `My name is ${firstName} and i am ${birthYear} years old`;
// }

// console.log(whoIAm(34,'Steve'));


// functions calling other functions

// function cutFruitPieces(fruit){
//     return fruit * 2;
// }

// function fruitProcessor(apple,oranges){
//     const applePieces = cutFruitPieces(apple);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice =`Juice with ${applePieces} pieces of apples, and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));



// function review so far


// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirment = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retire = 65 - age;

//     if(retire > 0){
//         return retire;
//     } else{
//         return -1;
//     }
//     // return `${firstName} retires in ${retire} years`;
// }
// console.log(yearsUntilRetirment(1989,'Steve'));
// console.log(yearsUntilRetirment(1970,'Mike'));



// Function I created for Emersyn


// const howOld = ageYear => 2021 + (Number( prompt(ageYear)));
// const yearAtAge = howOld('Enter an age, and check what year it will be Emersyn!');
// const emmaBean = ` That would be the year ${yearAtAge}`;
// console.log(emmaBean);


// const yearUntilRetire = (birthYear,firstName) =>{
//     const age = 2023 - birthYear;
//     const howLong = 65 - age;
//     return `${howLong} years until ${firstName} can retire`;
// }
// console.log(yearUntilRetire(1989,'Steven'));

// const calcAge  = function(birthYear){
//     return 2023 - birthYear;
// }

// const yearUntilRetire = function (birthYear,firstName){
//     const age = calcAge(birthYear);
//     const retire = 65 - age;

//     if(retire > 0 ){
//         console.log(`${firstName} retired in ${retire}`);
//        return retire;
       
//     }else{
//         console.log(`${firstName} has already retired`);
//         return 9999;
        
//     }
// }
// console.log(yearUntilRetire(1950,'Steven'));
// console.log(yearUntilRetire(1999,'Mike'));

// // challange1
// function describeCountry(country,population,capitalCity){
//     const randomString = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return randomString;
// }
// const myCity = describeCountry('Finland',6,'Helsinki');
// console.log(myCity);

// // challange2
// function percentageOfWorld1(population){
//     return ((population/7900) * 100);
// }
// const percChina = percentageOfWorld1(1441);
// console.log(percChina);


// const percentageOfWorld2 = function (population){
//     return (population/7900)*100;
// }
// const percChina2 = percentageOfWorld2(1441);
// console.log(percChina2);

// const percentageOfWorld3 = population => (population/ 7900) * 100;
// const perChina = percentageOfWorld3(1441);
// console.log(perChina);


// challange #5

// const calcAverage = (a,b,c) => (a + b + c)/3;
// console.log(calcAverage(3,3,3));

// let scoreDolphines = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphines,scoreKoalas);

// const checkWinner = function(avgDolphins,avgKoalas){
//     if(avgDolphines >= 2 * avgKoalas){
//         console.log(`Dolphinss win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphines){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else{
//         console.log('No team wins');
//     }
// }

// checkWinner(scoreDolphines,scoreKoalas);

// checkWinner(scoreDolphines, scoreKoalas);


// scoreDolphines = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);
// console.log(scoreDolphines,scoreKoalas);
// checkWinner(scoreDolphines,scoreKoalas);

// Arrays

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Olli';
// console.log(friends);

// const y = new Array(1991,1984,2008,2020);
// console.log(y[0]);

// const firstName = 'Steve';
// const steve = [firstName, 'Larkin', 2023 - 1989,friends];
// console.log(steve);


// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990,1967,2002,2010,2018];

// const age1 = calcAge(years[years.length - 1]);
// const age2 = calcAge(years[0]);
// const age3 = calcAge(years[1]);

// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
// console.log(ages);

// const myBuds = ['jimmy','jason','andrew'];
// console.log(myBuds);
// // myBuds.shift('samantha');
// console.log(myBuds);
// console.log(myBuds.indexOf('jason'));
// console.log(myBuds.includes('jason'));




// // Challange #6
// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]];
// console.log(bills,tips,totals);

// OBJECTS

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     yearsWorked: 2023 - 2021,
//     job: 'teacher',
//     friends: ['Mike','Peter','Steven']
// };

// // console.log(jonas.age);
// // console.log(jonas.yearsWorked);

// const interestedIn = prompt('What do you want to kow about jonas? Choose between firstName, lastName, age, job, and friends');

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else{
//     console.log('Wrong Request! Choose again')
// }

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1989,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // version1
//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }

//     // version2
//     // calcAge: function(){
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummery: function(){
//         return `${this.firstName}, is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//     }
// };


// console.log(jonas.calcAge());
// console.log(jonas.age);

// // challange
// console.log(jonas.getSummery());

// challange #3 for fundementals 2

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass/this.height **2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass:92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass/this.height ** 2;
//     }
// };
// mark.calcBMI();
// john.calcBMI();


// if(mark.bmi>john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})! `);
// } else if(john.bmi>mark.bmi){
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})! `);
// }

// Loops

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repitition ${rep}`);
// }

// const jonas = [
//       'Jonas',
//      'Schmedtmann',
//       1989,
//       'Teacher',
//       ['Michael', 'Peter', 'Steven'],
//       true
// ];
// Using for loop to create new arrays for what type
// const types = [];
//     for (let i = 0; i < jonas.length; i++){
//         console.log(jonas[i],typeof jonas[i]);

//         // Filling types of array
//         // types[i] = typeof jonas[i];

//         types.push(typeof jonas[i]);
//     }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//    ages.push (2023 - years[i]);
// }
// console.log(ages);


// // continue and break statements

// // Continue
// console.log('--ONLY STRINGS--');
// for (let i = 0; i < jonas.length; i++){

//     if(typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i],typeof jonas[i]);
// }


// // Break
// console.log('--BREAK WITH #--');
// for (let i = 0; i < jonas.length; i++){

//     if(typeof jonas[i] === 'number') break;

//     console.log(jonas[i],typeof jonas[i]);
// }

// Example
// const years = [1989,1991,2021];
// const age =[];
// for(let i = 0; i< years.length; i++){
//     age.push(2023 - years[i]);
// }

// console.log(age);


// Looping backwards now

// const jonas = [
//       'Jonas',
//      'Schmedtmann',
//       1989,
//       'Teacher',
//       ['Michael', 'Peter', 'Steven'],
// ];

// // Not really used to much but still good to know
// for(let i = jonas.length - 1; i >= 0; i-- ){
//     console.log(jonas[i]);
// }

// Loop inside of a Loop

// for(let coffee = 0; coffee <= 4; coffee++){
//     console.log(`----Commencing Coffee break ${coffee}`);

//     for (let cups = 0; cups <= 4; cups++){
//         console.log(`During my break i had ${cups} cups from ${coffee} coffee pots`);
//     }
// };

// The while Loop

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repitition ${rep}`);
// }



// let rep = 1;
// while(rep <= 10){
//     console.log(`While: Lifting weights repitition ${rep}`);
//     rep++;
// }

// // example that does not need a counter

// // roll dice until you roll a 6

// let dice = Math.trunc(Math.random() * 6) + 1;


// while(dice !== 6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end...');
// }






// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15: bill * .20;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i ++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(`The bill was ${bills}, with a tips of ${tips}, giving a grand total of ${totals}`);

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    return sum / arr.length;
}

console.log(calcAverage(totals));
