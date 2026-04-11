"use strict";

const numbers = [1, 2, 3, 4];

function doubleOddNumbers(arr) {
  return arr.filter((item) => item % 2 !== 0).map((item) => item * 2);
}

function doubleOddNumbersWithReduce(arr) {
  return arr.reduce((acc, currentNum) => {
    currentNum % 2 !== 0 ? acc.push(currentNum * 2) : acc;
    return acc;
  }, []);
}

console.log(doubleOddNumbersWithReduce(numbers));
