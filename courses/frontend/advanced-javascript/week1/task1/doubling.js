const numbers = [1, 2, 3, 4];

function doubleOddNumbers(arr) {
  return arr.filter((item) => item % 2 !== 0).map((item) => item * 2);
}

console.log(doubleOddNumbers(numbers));
