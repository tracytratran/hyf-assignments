export function createElement(el) {
  return document.createElement(el);
}

export function getElementById(elID) {
  return document.getElementById(elID);
}

export function isPlural(num) {
  return num > 1;
}

export function hasDuplicatedWords(arr) {
  const duplication = new Set();
  let isDuplicated = false;

  arr.forEach((item) => {
    if (!duplication.has(item)) {
      duplication.add(item);
    } else {
      isDuplicated = true;
      return;
    }
  });

  return isDuplicated;
}
