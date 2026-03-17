import {
  createElement,
  getElementById,
  isPlural,
  hasDuplicatedWords,
} from "./utils.js";

const result = getElementById("result");
const resultLabel = getElementById("resultLabel");
const allMoviesBtn = getElementById("all-movies");
const shortTitleMoviesBtn = getElementById("short-title-movies");
const longTitleMoviesBtn = getElementById("long-title-movies");
const moviesIn1980sBtn = getElementById("1980s-movies");
const moviesWithSpecialKeyword = getElementById("special-keyword-movies");
const moviesWithDuplicatedWordInTitle = getElementById(
  "movies-with-duplicated-words-in-title",
);

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

moviesIn1980sBtn.addEventListener("click", () => {
  setActive(moviesIn1980sBtn);
  countMoviesMadeIn1980s();
});

moviesWithSpecialKeyword.addEventListener("click", () => {
  setActive(moviesWithSpecialKeyword);
  countMoviesWithSpecialKeywords();
});

moviesWithDuplicatedWordInTitle.addEventListener("click", () => {
  setActive(moviesWithDuplicatedWordInTitle);
  showMoviesWithDuplicatedWordInTitle();
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

function renderMoviesCount(arr) {
  const div = createElement("div");
  div.className = `movies-count${arr.length === 0 ? " empty" : ""}`;
  div.textContent =
    arr.length === 0
      ? "No movies"
      : `${arr.length} movie${isPlural(arr) ? "s" : ""}`;

  result.appendChild(div);
}

function countMoviesMadeIn1980s() {
  resultLabel.textContent = "Result: Number of movies made in 1980s";

  const moviesMadeIn1980s = movies.filter(
    (movie) => movie.year >= 1980 && movie.year <= 1989,
  );

  result.innerHTML = "";

  renderMoviesCount(moviesMadeIn1980s);
}

function countMoviesWithSpecialKeywords() {
  resultLabel.textContent =
    "Result: Number of movies with 'Surfer', 'Alien' or 'Benjamin' keywords";

  const moviesWithSpecialKeyword = movies.filter(
    (movie) =>
      movie.title.includes("Surfer") ||
      movie.title.includes("Alien") ||
      movie.title.includes("Benjamin"),
  );

  result.innerHTML = "";

  renderMoviesCount(moviesWithSpecialKeyword);
}

function showMoviesWithDuplicatedWordInTitle() {
  resultLabel.textContent = "Result: Movies with duplicated words in the title";

  const moviesWithDuplicatedWordInTitle = movies.filter((movie) => {
    const movieTitleArr = movie.title.split(" ");

    return hasDuplicatedWords(movieTitleArr);
  });

  renderCards(moviesWithDuplicatedWordInTitle);
}
