export function isPlural(num) {
  return num > 1;
}

export function addEmptyClass(arr) {
  return arr.length === 0 ? "empty" : "";
}

export function createTextContent(arr) {
  return arr.length === 0
    ? "No movies"
    : `${arr.length} movie${isPlural(arr.length) ? "s" : ""}`;
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
