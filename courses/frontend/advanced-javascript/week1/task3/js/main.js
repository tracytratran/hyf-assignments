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
const ratingHigherThan6Btn = getElementById("rating-higher-than-6");
const moviesWithSpecialKeywordBtn = getElementById("special-keyword-movies");
const moviesWithDuplicatedWordInTitleBtn = getElementById(
  "duplicated-words-in-movie-title",
);
const averageRatingBtn = getElementById("average-rating");
const movieTagCountBtn = getElementById("movie-tag-count");

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

ratingHigherThan6Btn.addEventListener("click", () => {
  setActive(ratingHigherThan6Btn);
  showRatingOnly();
});

moviesWithSpecialKeywordBtn.addEventListener("click", () => {
  setActive(moviesWithSpecialKeywordBtn);
  countMoviesWithSpecialKeywords();
});

moviesWithDuplicatedWordInTitleBtn.addEventListener("click", () => {
  setActive(moviesWithDuplicatedWordInTitleBtn);
  showMoviesWithDuplicatedWordInTitle();
});

averageRatingBtn.addEventListener("click", () => {
  setActive(averageRatingBtn);
  calcAverageRating();
});

movieTagCountBtn.addEventListener("click", () => {
  resultLabel.textContent = "Result: Number of good, average and bad movies";
  result.innerHTML = "";

  setActive(movieTagCountBtn);

  const tagArr = calcTag();
  renderCards(tagArr, renderTagCard);
});

async function fetchMovieData() {
  const res = await fetch("./movies.json");

  const data = await res.json();

  movies = addRatingTag(data);

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
      <span class="card-tag">Tag: ${movie.tag}</span>
      <span>Rating: ${movie.rating}</span>
      <span>Votes: ${movie.votes}</span>
      <span>Running times: ${movie.running_times}</span>
    </div>
  `;

  return div;
}

function renderRatingCard(rating) {
  const div = createElement("div");
  div.className = "card";
  div.innerHTML = `${rating}`;

  return div;
}

function renderMoviesCount(arr) {
  const div = createElement("div");
  div.className = `movies-count ${arr.length === 0 ? "empty" : ""}`;
  div.textContent =
    arr.length === 0
      ? "No movies"
      : `${arr.length} movie${isPlural(arr.length) ? "s" : ""}`;

  result.appendChild(div);
}

function renderCards(array, renderFn) {
  result.innerHTML = "";

  const wrapper = createElement("div");
  wrapper.className = "cards";

  array.forEach((item) => wrapper.appendChild(renderFn(item)));

  result.appendChild(wrapper);
}

function showAllMovies() {
  resultLabel.textContent = "Result: All movies";

  renderCards(movies, renderMovieCard);
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

  renderCards(moviesWithShortTitle, renderMovieCard);
}

function showMoviesWithLongTitle() {
  resultLabel.textContent = "Result: Movies with title more than 3 words";

  const moviesWithLongTitle = movies.filter((movie) => {
    const movieTitleArr = movie.title.split(" ");

    return movieTitleArr.length > 3 ? movie : null;
  });

  renderCards(moviesWithLongTitle, renderMovieCard);
}

function countMoviesMadeIn1980s() {
  resultLabel.textContent = "Result: Number of movies made in 1980s";

  const moviesMadeIn1980s = movies.filter(
    (movie) => movie.year >= 1980 && movie.year <= 1989,
  );

  result.innerHTML = "";

  renderMoviesCount(moviesMadeIn1980s);
}

function addRatingTag(arr) {
  return arr.map((item) => {
    let ratingTag;
    if (item.rating >= 7) {
      ratingTag = "Good";
    } else if (item.rating >= 4 && item.rating < 7) {
      ratingTag = "Average";
    } else if (item.rating < 4) {
      ratingTag = "Bad";
    }
    return {
      ...item,
      tag: ratingTag,
    };
  });
}

function showRatingOnly() {
  resultLabel.textContent = "Result: Rating of the movies rated higher than 6";

  result.innerHTML = "";

  const ratingHigherThan6 = movies
    .filter((movie) => movie.rating > 6)
    .map((movie) => movie.rating);

  renderCards(ratingHigherThan6, renderRatingCard);
}

function countMoviesWithSpecialKeywords() {
  // To-do: check case insensitive
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

  renderCards(moviesWithDuplicatedWordInTitle, renderMovieCard);
}

function calcAverageRating() {
  const rating = movies.map((movie) => movie.rating);
  const sumRating = rating.reduce((acc, current) => acc + current, 0);
  const averageRating = (sumRating / rating.length).toFixed(1);

  resultLabel.textContent = "Result: Average rating of all movies";

  result.innerHTML = "";

  result.appendChild(renderRatingCard(averageRating));
}

function renderTagCard(tag) {
  const div = createElement("div");
  div.className = "card";
  div.innerHTML = `
    <div class="card-title">${tag.count} movie${isPlural(tag.count) ? "s" : ""}</div>
    <div class="card-info">
      <span class="card-tag">${tag.tag}</span>
    </div>
  `;

  return div;
}

function calcTag() {
  const tag = movies
    .map((item) => item.tag)
    .reduce((acc, currentTag) => {
      acc[currentTag] = (acc[currentTag] || 0) + 1;
      return acc;
    }, {});

  return Object.entries(tag).map(([key, value]) => {
    return { tag: key, count: value };
  });
}
