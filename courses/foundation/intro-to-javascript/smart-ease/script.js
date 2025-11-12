"use strict";
//Age-ify (A future age calculator)
const yearOfBirth = 1997;
const yearFuture = 2031;
const age = yearFuture - yearOfBirth;

console.log(typeof yearOfBirth, typeof yearFuture); //number, number

console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2016;
const dogYearFuture = 2045;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
// const shouldShowResultInDogYears = false;

console.log(
  `Your dog will be ${
    shouldShowResultInDogYears ? dogYear * 7 + " human" : dogYear + " dog"
  } years old in ${dogYearFuture}.`
);

// Housey pricey (A house price estimator)
const peter = {
  name: "Peter",
  housesWidth: 8,
  housesDeep: 10,
  housesHeight: 10,
  gardenSizeInM2: 100,
};
const julia = {
  name: "Julia",
  housesWidth: 5,
  housesDeep: 11,
  housesHeight: 8,
  gardenSizeInM2: 70,
};

const housePriceOfPeter =
  peter.housesWidth * peter.housesDeep * peter.housesHeight * 2.5 * 1000 +
  peter.gardenSizeInM2 * 300;
const housePriceOfJulia =
  julia.housesWidth * julia.housesDeep * julia.housesHeight * 2.5 * 1000 +
  julia.gardenSizeInM2 * 300;

// console.log(housePriceOfPeter);
// console.log(housePriceOfJulia);

if (housePriceOfPeter > 2500000) {
  console.log("Peter is paying too much!");
} else if (housePriceOfPeter < 2500000) {
  console.log("Peter is paying too little!");
} else
  console.log(
    "Peter is paying the right amount of money for the house he is considering."
  );

if (housePriceOfJulia > 1000000) {
  console.log("Julia is paying too much!");
} else if (housePriceOfJulia < 1000000) {
  console.log("Julia is paying too little!");
} else
  console.log(
    "Julia is paying the right amount of money for the house she is considering."
  );

// Ez Namey (Startup name generator)
const firstWords = [
  "Pixel",
  "Bug",
  "Sprint",
  "Ninja",
  "Coffee",
  "Widget",
  "Server",
  "Giggle",
  "Rocket",
  "Kittens",
];
const secondWords = [
  "Laptop",
  "Unicorn",
  "Ticket",
  "Merge",
  "Pizza",
  "Banana",
  "Cookie",
  "Router",
  "Mouse",
  "System",
];

const randomFirstIndex = Math.floor(Math.random() * 10);
const randomSecondIndex = Math.floor(Math.random() * 10);
// console.log(randomFirstIndex, randomSecondIndex);

const startupName =
  firstWords[randomFirstIndex] + " " + secondWords[randomSecondIndex];

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters.`
);
