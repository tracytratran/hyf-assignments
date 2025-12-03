"use strict";
// In-session

// Fizz buzz

// OLD VERSION
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     const multiplesOfThree = i % 3 === 0;
//     const multiplesOfFive = i % 5 === 0;
//     if (multiplesOfThree && !multiplesOfFive) {
//       console.log("Fizz");
//     } else if (multiplesOfFive && !multiplesOfThree) {
//       console.log("Buzz");
//     } else if (multiplesOfThree && multiplesOfFive) {
//       console.log("FizzBuzz");
//     } else console.log(i);
//   }
// }

// UPDATED VERSION
function fizzBuzz(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    const multiplesOfThree = i % 3 === 0;
    const multiplesOfFive = i % 5 === 0;
    if (multiplesOfThree && !multiplesOfFive) {
      console.log("Fizz");
    } else if (multiplesOfFive && !multiplesOfThree) {
      console.log("Buzz");
    } else if (multiplesOfThree && multiplesOfFive) {
      console.log("FizzBuzz");
    } else console.log(i);
  }
}

fizzBuzz(4, 12);
fizzBuzz(5, 30);

// Sentiment analyser
const positiveWords = [
  "amazing",
  "awesome",
  "brilliant",
  "calm",
  "capable",
  "cheerful",
  "confident",
  "creative",
  "delightful",
  "energetic",
  "excellent",
  "fantastic",
  "glowing",
  "grateful",
  "great",
  "happy",
  "hopeful",
  "inspiring",
  "joyful",
  "kind",
  "lovely",
  "magnificent",
  "motivated",
  "optimistic",
  "outstanding",
  "peaceful",
  "positive",
  "powerful",
  "radiant",
  "remarkable",
  "resilient",
  "shining",
  "strong",
  "successful",
  "supportive",
  "terrific",
  "vibrant",
  "wonderful",
  "worthy",
];
const negativeWords = [
  "angry",
  "annoyed",
  "anxious",
  "bad",
  "boring",
  "broken",
  "chaotic",
  "cold",
  "confused",
  "cruel",
  "damaged",
  "dark",
  "difficult",
  "disappointed",
  "dislike",
  "dull",
  "embarrassed",
  "fearful",
  "frustrated",
  "gloomy",
  "greedy",
  "guilty",
  "harsh",
  "hate",
  "helpless",
  "hopeless",
  "hurt",
  "jealous",
  "lonely",
  "lost",
  "mad",
  "miserable",
  "negative",
  "nervous",
  "painful",
  "poor",
  "rude",
  "sad",
  "scared",
  "stressful",
  "terrible",
  "tired",
  "ugly",
  "unhappy",
  "unpleasant",
  "upset",
  "weak",
  "worried",
  "worthless",
];

function getSentimentScore(str) {
  let score = 0;
  let positiveWordsInGivenStr = [];
  let negativeWordsInGivenStr = [];
  const arrayStr = str.split(/[\s,.]+/);

  for (const word of arrayStr) {
    if (positiveWords.includes(word)) {
      score++;
      positiveWordsInGivenStr.push(word);
    }

    if (negativeWords.includes(word)) {
      score--;
      negativeWordsInGivenStr.push(word);
    }
  }

  return { score, positiveWordsInGivenStr, negativeWordsInGivenStr };
}

const sentimentScoreObject = getSentimentScore(
  "I am normally kind and joyful, but right now I am broken, chaotic and frustrated."
);
console.log(sentimentScoreObject);

// Credit card number formatter
function formatCreditCardNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return;
  }

  const arrayNum = String(num).split("");
  for (let i = 4; i < arrayNum.length; i += 5) {
    arrayNum.splice(i, 0, " ");
  }

  return { original: num, formatted: arrayNum.join("") };
}

console.log(formatCreditCardNumber(123456789));
console.log(formatCreditCardNumber(3456789135664526));

const a = {
  h: 1,
  a: 1,
};
console.log(a.h);

// Character frequencies
function getCharacterFrequencies(str) {
  // OLD VERSION
  //   const characters = [];
  //   for (const letter of str) {
  //     const duplicated = characters.findIndex(
  //       (char) => char.character === letter
  //     );
  //     if (duplicated !== -1) {
  //       characters[duplicated].count += 1;
  //     } else {
  //       characters.push({ character: letter, count: 1 });
  //     }
  //   }

  const characters = new Map();
  for (const letter of str) {
    if (characters.has(letter)) {
      characters.set(letter, characters.get(letter) + 1);
    } else {
      characters.set(letter, 1);
    }
  }
  console.log(characters);

  const arrayCharacters = [];
  for (const [character, count] of characters) {
    // console.log(character, count);
    arrayCharacters.push({ character, count });
  }

  return { characters: arrayCharacters, length: str.length };
}

console.log(getCharacterFrequencies("happy"));

// Palindromic substring
function getLongestPalindromicSubstring(str) {
  let longestPalindrome = "";
  for (let i = 2; i <= str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      const palindrome = str.substring(j, j + i);
      if (
        j + i < str.length &&
        isPalindrome(palindrome) &&
        palindrome.length > longestPalindrome.length
      ) {
        longestPalindrome = palindrome;
      }
    }
  }
  return longestPalindrome;
}

function isPalindrome(str) {
  const palindrome = str.split("").reverse().join("");
  //   console.log(palindrome);
  return str === palindrome;
}
// console.log(isPalindrome("aba"));

console.log(getLongestPalindromicSubstring("abceeksskeedefaba"));

// Credit card info
function getCardInfo(num) {
  const firstDigit = Number(String(num).split("")[0]);
  //   console.log(firstDigit);
  switch (firstDigit) {
    case 4:
      console.log("Visa");
      break;
    case 5:
    case 2:
      console.log("Mastercard");
      break;
    case 3:
      console.log("American Express");
      break;
    case 6:
      console.log("Discover");
    default:
      console.error("Can't recognize the credit card type!");
      break;
  }
}
getCardInfo(4781321334789876);

// Tic Tac Toe
function getRenderGame(position) {
  let str = "*******\n";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      str = str + "*" + position[i][j];
    }
    str += "*\n";
  }
  str += "*******";
  return str;
}

const position = [
  ["x", "o", " "],
  [" ", "o", " "],
  [" ", "o", "x"],
];
console.log(getRenderGame(position));

function getGameInfo(position) {
  const winningStates = [
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]],
    [position[2][2], position[1][1], position[0][0]],
  ];
  let winner, loser;
  for (const winningState of winningStates) {
    if (
      winningState[0] === winningState[1] &&
      winningState[1] === winningState[2] &&
      winningState[0] !== " "
    ) {
      winner = winningState[0];
      break;
    }
  }

  switch (winner) {
    case "x":
      loser = "o";
      break;
    case "o":
      loser = "x";
      break;
    default:
      loser = undefined;
      break;
  }
  return { winner, loser, hasEnded: !!winner || !!loser };
}

console.log(getGameInfo(position));

const position1 = [
  ["x", "o", " "],
  [" ", " ", " "],
  [" ", "o", "x"],
];

console.log(getGameInfo(position1));

// Voice assistant
const user = {
  name: "",
  todos: [],
};

function getReply(command) {
  if (typeof command !== "string" || command.trim() === "") {
    return;
  }

  if (command === "Hello my name is Benjamin") {
    sayHello(command);
  }

  if (command === "What is my name") {
    getName();
  }

  if (command === "Add fishing to my todo") {
    addFishingToList();
  }

  if (command === "Add singing in the shower to my todo") {
    addSingingToList();
  }

  if (command === "Remove fishing from my todo") {
    removeFishingFromList();
  }

  if (command === "What is on my todo?") {
    printListInfo();
  }

  if (command === "What day is it today?") {
    getToday();
  }

  if (command.startsWith("what is")) {
    doSimpleMath(command);
  }

  if (command === "Set a timer for 4 minutes") {
    setTimer();
  }

  if (command === "It's a new day") {
    console.log("Good morning!");
    resetList();
    console.log("Your todos is reset for a new day!");
  }
}

function createArrayFromString(str) {
  const array = str.split(" ");
  return array;
}

function sayHello(command) {
  const arrayCommand = createArrayFromString(command);
  const indexOfName = arrayCommand.indexOf("Benjamin");
  user.name = arrayCommand.slice(indexOfName).join(" ");
  console.log(`Nice to meet you, ${user.name}!`);
}

function getName() {
  console.log(user.name ?? "You haven't written your name!");
}

function addFishingToList() {
  if (!user.todos.includes("fishing")) {
    user.todos.push("fishing");
    console.log("Fishing added to your todo");
  }
}

function addSingingToList() {
  if (!user.todos.includes("singing in the shower")) {
    user.todos.push("singing in the shower");
  }
}

function removeFishingFromList() {
  const indexOfFishing = user.todos.indexOf("fishing");
  if (indexOfFishing !== -1) {
    user.todos.splice(indexOfFishing, 1);
    console.log("Removed fishing from your todo");
  }
}

function printListInfo() {
  const listLength = user.todos.length;
  console.log(
    `You have ${listLength} ${
      listLength > 1 ? "todos" : "todo"
    } - ${user.todos.join(" and ")}.`
  );
}

function getToday() {
  console.log(
    `Today is ${new Date().toLocaleDateString(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}.`
  );
}

function doSimpleMath(command) {
  const arrayCommand = createArrayFromString(command);
  const startIndexOfOperation = arrayCommand.indexOf("is") + 1;
  const arrayOperation = arrayCommand.slice(startIndexOfOperation);
  const leftNum = Number(arrayOperation[0]);
  const rightNum = Number(arrayOperation[2]);
  const operator = arrayOperation[1];
  switch (operator) {
    case "+":
      console.log(leftNum + rightNum);
      break;
    case "-":
      console.log(leftNum - rightNum);
      break;
    case "*":
      console.log(leftNum * rightNum);
      break;
    case "/":
      console.log(leftNum / rightNum);
      break;
    case "%":
      console.log(leftNum % rightNum);
      break;
  }
}

function setTimer() {
  const timeInMinutes = 4;
  const millisecondsInASecond = 1000;
  const secondsInAMinute = 60;
  const millisecondsInAMinute = millisecondsInASecond * secondsInAMinute;

  console.log("Timer set for 4 minutes");
  setTimeout(() => {
    console.log("Timer done");
  }, timeInMinutes * millisecondsInAMinute);
}

function resetList() {
  user.todos = [];
}

getReply("Hello my name is Benjamin");

getReply("What is my name");

getReply("Add fishing to my todo");
getReply("Add fishing to my todo");
console.log(user.todos);

getReply("Add singing in the shower to my todo");
console.log(user.todos);

getReply("Remove fishing from my todo");
console.log(user.todos);

getReply("What is on my todo?");

getReply("What day is it today?");

getReply("what is 3 + 3");
getReply("what is 4 * 12");

// getReply("Set a timer for 4 minutes");

getReply("It's a new day");
console.log(user.todos);
