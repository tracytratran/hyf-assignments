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

export function hasDuplicatedWords(str) {
  return /\b(\w+)\b.*\b\1\b/i.test(str);
}
