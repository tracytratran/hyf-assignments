"use strict";

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
