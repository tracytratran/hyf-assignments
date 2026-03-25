"use strict";

// 1. Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const functionArr = [
  () => console.log("This is function no.1."),
  () => console.log("This is function no.2."),
  () => console.log("This is function no.3."),
];

functionArr.forEach((fn) => fn());

// 2. Create a function as a const and try creating a function normally. Call both functions.
function declaration() {
  console.log("This is a function declaration!");
}

const expression = () => console.log("This is a function expression!");

declaration();
expression();

// 3. Create an object that has a key whose value is a function. Try calling this function.
const tracy = {
  firstName: "Tracy Trà",
  lastName: "Trần",
  countryOfOrigin: "Vietnam",
  yearsInAarhus: 4,
  introduction: function () {
    console.log(
      `I am ${this.firstName} ${this.lastName} and I come from ${this.countryOfOrigin}. I have lived in Aarhus for ${this.yearsInAarhus} years.`,
    );
  },
};

tracy.introduction();
