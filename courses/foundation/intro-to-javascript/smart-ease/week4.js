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
