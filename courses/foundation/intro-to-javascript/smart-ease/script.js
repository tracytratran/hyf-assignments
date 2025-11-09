"use strict";
//Age-ify (A future age calculator)
const yearOfBirth = 1997;
const yearFuture = 2031;

console.log(typeof yearOfBirth, typeof yearFuture); //number, number

console.log(
  `You will be ${yearFuture - yearOfBirth} years old in ${yearFuture}.`
);

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
const housePriceOfPeter = 8 * 10 * 10 * 2.5 * 1000 + 100 * 300;
const housePriceOfJulia = 5 * 11 * 8 * 2.5 * 1000 + 70 * 300;

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
const randomIndex = Math.floor(Math.random() * 10);
const startupName = firstWords[randomIndex] + secondWords[randomIndex];

console.log(startupName);
