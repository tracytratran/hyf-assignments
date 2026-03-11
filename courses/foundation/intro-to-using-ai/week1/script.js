function changeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const aboutText = document.getElementsByClassName("about-text")[0];
  aboutText.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
