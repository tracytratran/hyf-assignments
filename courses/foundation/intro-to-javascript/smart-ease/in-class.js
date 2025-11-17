"use strict";

// Week 2 In-class exercises
// Loops
// Exercise 3b
const friendList = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

function countNamesWithLetterA(arr) {
  let sumNameWithLetterA = 0;
  for (let i = 0; i < arr.length; i++) {
    const nameInLowerCase = arr[i].toLowerCase();
    if (nameInLowerCase.includes("a")) {
      sumNameWithLetterA++;
    } else console.log(arr[i]);
  }
  return sumNameWithLetterA;
}

console.log(countNamesWithLetterA(friendList));

// Function
// Exercise 2
function calculateTaxPercentage(income) {
  if (income < 50000) {
    console.log("You pay 8% tax.");
  } else if (income >= 50000 && income <= 100000) {
    console.log("You pay 15% tax.");
  } else if (income > 100000 && income <= 300000) {
    console.log("You pay 30% tax.");
  } else console.log("You pay 50% tax.");
}

calculateTaxPercentage(23300);
calculateTaxPercentage(54430);
calculateTaxPercentage(128900);
calculateTaxPercentage(450000);
