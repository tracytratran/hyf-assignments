import { createElement, getElementById } from "./utils.js";

const result = getElementById("result");
const resultLabel = getElementById("resultLabel");
const allMoviesBtn = getElementById("all-movies");
const shortTitleMoviesBtn = getElementById("short-title-movies");
const longTitleMoviesBtn = getElementById("long-title-movies");

let movies = [];

allMoviesBtn.addEventListener("click", () => {
  setActive(allMoviesBtn);
  showAllMovies();
});

shortTitleMoviesBtn.addEventListener("click", () => {
  setActive(shortTitleMoviesBtn);
  showMoviesWithShortTitle();
});

longTitleMoviesBtn.addEventListener("click", () => {
  setActive(longTitleMoviesBtn);
  showMoviesWithLongTitle();
});

async function fetchMovieData() {
  const res = await fetch("./movies.json");

  movies = await res.json();

  showAllMovies();
}

fetchMovieData();

function renderMovieCard(movie) {
  const div = createElement("div");
  div.className = "card";

  div.innerHTML = `
    <div class="card-title">${movie.title}</div>
    <div class="card-year">Year: ${movie.year}</div>
    <div class="card-info">
        <span>Rating: ${movie.rating}</span>
        <span>Votes: ${movie.votes}</span>
        <span>Running times: ${movie.running_times}</span>
    </div>
  `;

  return div;
}

function renderCards(moviesToShow) {
  result.innerHTML = "";

  const wrapper = createElement("div");
  wrapper.className = "cards";

  moviesToShow.forEach((movie) => wrapper.appendChild(renderMovieCard(movie)));

  result.appendChild(wrapper);
}

function showAllMovies() {
  resultLabel.textContent = "Result: All movies";

  renderCards(movies);
}

function setActive(clickedBtn) {
  const buttons = document.querySelectorAll(".buttons button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  clickedBtn.classList.add("active");
}

function showMoviesWithShortTitle() {
  resultLabel.textContent = "Result: Movies with one-word title";

  const moviesWithShortTitle = movies.filter((movie) => {
    const movieTitleArr = movie.title.split(" ");

    return movieTitleArr.length === 1 ? movie : null;
  });

  renderCards(moviesWithShortTitle);
}

function showMoviesWithLongTitle() {
  resultLabel.textContent = "Result: Movies with title more than 3 words";

  const moviesWithLongTitle = movies.filter((movie) => {
    const movieTitleArr = movie.title.split(" ");

    return movieTitleArr.length > 3 ? movie : null;
  });

  renderCards(moviesWithLongTitle);
}
