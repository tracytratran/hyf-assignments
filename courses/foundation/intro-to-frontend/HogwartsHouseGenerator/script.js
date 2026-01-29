"use strict";

const hogwartsHouses = [
  {
    id: "gryffindor",
    name: "Gryffindor",
    description:
      "Bold-hearted and daring, Gryffindor jumps first when courage is needed.",
    traits: ["Courage", "Bravery", "Chivalry", "Determination", "Nerve"],
    themeColor: "#AE0001",
    themeTextColor: "#FFFFFF",
  },
  {
    id: "hufflepuff",
    name: "Hufflepuff",
    description:
      "Loyal and steady, Hufflepuff values kindness, fairness, and hard work.",
    traits: ["Loyalty", "Patience", "Fairness", "Hard work", "Kindness"],
    themeColor: "#FFDB00",
    themeTextColor: "#111827",
  },
  {
    id: "ravenclaw",
    name: "Ravenclaw",
    description:
      "Curious and sharp, Ravenclaw loves ideas, learning, and clever solutions.",
    traits: ["Wisdom", "Curiosity", "Creativity", "Wit", "Insight"],
    themeColor: "#0E4DA4",
    themeTextColor: "#FFFFFF",
  },
  {
    id: "slytherin",
    name: "Slytherin",
    description:
      "Ambitious and strategic, Slytherin plays the long game with style and focus.",
    traits: [
      "Ambition",
      "Resourcefulness",
      "Determination",
      "Cunning",
      "Leadership",
    ],
    themeColor: "#1A472A",
    themeTextColor: "#FFFFFF",
  },
];

function $(selector) {
  return document.querySelector(selector);
}

function createEl(element) {
  return document.createElement(element);
}

function main() {
  const input = createEl("input");
  document.body.appendChild(input);
  input.id = "user-name";

  const button = createEl("button");
  document.body.appendChild(button);
  if (button) {
    button.textContent = "Click me to select your House";
  }

  const div = createEl("div");
  document.body.appendChild(div);

  function getUserName() {
    const userName = document.getElementById("user-name").value;
    if (!userName) {
      console.error("Please input your name!");
      return;
    }

    const randomHouse =
      hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];

    div.innerHTML = `
        <div style = 'background-color: ${randomHouse.themeColor}; color: ${
          randomHouse.themeTextColor
        }'>
            <h2>${userName} belongs in ${randomHouse.name}!</h2>
            <img src="./images/${randomHouse.id}.jpeg" />
            <p>${randomHouse.description}</p>
            <p>${randomHouse.traits.join(" • ")}</p>
        </div>
    `;
  }

  // Generate Hogwart house through clicking the button
  button?.addEventListener("click", getUserName);

  // Generate Hogwart house through pressing Enter
  $("#user-name").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      getUserName();
    }
  });
}

main();
