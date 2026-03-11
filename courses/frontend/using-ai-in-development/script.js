const aboutText = $(".about-text");
const interactiveButton = $(".color-changing-button");

interactiveButton?.addEventListener("click", changeColor);

function $(el) {
  return document.querySelector(el);
}

function changeColor() {
  let r = Math.floor(Math.random() * 151);
  let g = Math.floor(Math.random() * 151);
  let b = Math.floor(Math.random() * 151);
  if (aboutText) {
    aboutText.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}
