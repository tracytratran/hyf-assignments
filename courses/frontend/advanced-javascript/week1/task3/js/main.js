import {
  isPlural,
  addEmptyClass,
  createTextContent,
  hasDuplicatedWords,
} from "./utils.js";

const result = document.getElementById("result");
const resultLabel = document.getElementById("resultLabel");
const allMoviesBtn = document.getElementById("all-movies");
const shortTitleMoviesBtn = document.getElementById("short-title-movies");
const longTitleMoviesBtn = document.getElementById("long-title-movies");
const moviesIn1980sBtn = document.getElementById("1980s-movies");
const ratingHigherThan6Btn = document.getElementById("rating-higher-than-6");
const moviesWithSpecialKeywordBtn = document.getElementById(
  "special-keyword-movies",
);
const moviesWithDuplicatedWordInTitleBtn = document.getElementById(
  "duplicated-words-in-movie-title",
);
const averageRatingBtn = document.getElementById("average-rating");
const movieTagCountBtn = document.getElementById("movie-tag-count");

let movies = [];

allMoviesBtn.addEventListener("click", () => {
  resultLabel.textContent = "Result: All movies";

  setActive(allMoviesBtn);
  renderCards(movies, renderMovieCard);
});

shortTitleMoviesBtn.addEventListener("click", () => {
  resultLabel.textContent = "Result: Movies with one-word title";

  setActive(shortTitleMoviesBtn);

  const moviesWithShortTitle = filterMoviesByTitleLength(
    (movieTitleCount) => movieTitleCount === 1,
  );
  renderCards(moviesWithShortTitle, renderMovieCard);
});

longTitleMoviesBtn.addEventListener("click", () => {
  resultLabel.textContent = "Result: Movies with title more than 3 words";

  setActive(longTitleMoviesBtn);

  const moviesWithLongTitle = filterMoviesByTitleLength(
    (movieTitleCount) => movieTitleCount > 3,
  );
  renderCards(moviesWithLongTitle, renderMovieCard);
});

moviesIn1980sBtn.addEventListener("click", () => {
  resultLabel.textContent = "Result: Number of movies made in 1980s";
  result.innerHTML = "";

  setActive(moviesIn1980sBtn);

  const moviesMadeIn1980s = countMoviesMadeIn1980s();

  const className = `movies-count ${addEmptyClass(moviesMadeIn1980s)}`;
  const textContent = createTextContent(moviesMadeIn1980s);
  result.appendChild(renderMovieInfo(className, textContent));
});

ratingHigherThan6Btn.addEventListener("click", () => {
  resultLabel.textContent = "Result: Rating of the movies rated higher than 6";

  setActive(ratingHigherThan6Btn);

  const ratingHigherThan6 = showRatingOnly();
  renderCards(ratingHigherThan6, renderRatingCard);
});

moviesWithSpecialKeywordBtn.addEventListener("click", () => {
  resultLabel.textContent =
    "Result: Number of movies with 'Surfer', 'Alien' or 'Benjamin' keywords";
  result.innerHTML = "";

  setActive(moviesWithSpecialKeywordBtn);

  const moviesWithSpecialKeyword = countMoviesWithSpecialKeywords();

  const className = `movies-count ${addEmptyClass(moviesWithSpecialKeyword)}`;
  const textContent = createTextContent(moviesWithSpecialKeyword);
  result.appendChild(renderMovieInfo(className, textContent));
});

moviesWithDuplicatedWordInTitleBtn.addEventListener("click", () => {
  resultLabel.textContent = "Result: Movies with duplicated words in the title";

  setActive(moviesWithDuplicatedWordInTitleBtn);

  const moviesWithDuplicatedWordInTitle = showMoviesWithDuplicatedWordInTitle();
  renderCards(moviesWithDuplicatedWordInTitle, renderMovieCard);
});

averageRatingBtn.addEventListener("click", () => {
  resultLabel.textContent = "Result: Average rating of all movies";
  result.innerHTML = "";

  setActive(averageRatingBtn);
  const averageRating = calcAverageRating();
  result.appendChild(renderMovieInfo("card", averageRating));
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

  renderCards(movies, renderMovieCard);
}

fetchMovieData();

function renderMovieCard(movie) {
  const div = document.createElement("div");
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

function renderMovieInfo(className, textContent) {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = textContent;

  return div;
}

function renderCards(array, renderFn) {
  result.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "cards";

  array.forEach((item) => wrapper.appendChild(renderFn(item)));

  result.appendChild(wrapper);
}

function setActive(clickedBtn) {
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach((button) => button.classList.remove("active"));

  clickedBtn.classList.add("active");
}

function filterMoviesByTitleLength(conditionFn) {
  return movies.filter((movie) => {
    const movieTitleCount = movie.title.split(" ").length;

    return conditionFn(movieTitleCount);
  });
}

function countMoviesMadeIn1980s() {
  return movies.filter((movie) => movie.year >= 1980 && movie.year <= 1989);
}

function addRatingTag(arr) {
  return arr.map((item) => {
    const ratingTag =
      item.rating >= 7 ? "Good" : item.rating < 4 ? "Bad" : "Average";
    return {
      ...item,
      tag: ratingTag,
    };
  });
}

function renderRatingCard(rating) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <div class="card-title">${rating.title}</div>
    <div class="card-info">
      <span class="card-tag">${rating.rating}</span>
    </div>
  `;

  return div;
}

function showRatingOnly() {
  return movies
    .filter((movie) => movie.rating > 6)
    .map((movie) => {
      return { title: movie.title, rating: movie.rating };
    });
}

function countMoviesWithSpecialKeywords() {
  const lowercasedKeywords = ["surfer", "alien", "benjamin"];
  return movies.filter((movie) => {
    const lowercasedTitle = movie.title.toLowerCase();

    return lowercasedKeywords.some((keyword) =>
      lowercasedTitle.includes(keyword),
    );
  });
}

function showMoviesWithDuplicatedWordInTitle() {
  return movies.filter((movie) => {
    const movieTitleArr = movie.title.split(" ");

    return hasDuplicatedWords(movieTitleArr);
  });
}

function calcAverageRating() {
  const rating = movies.map((movie) => movie.rating);
  const sumRating = rating.reduce((acc, current) => acc + current, 0);
  return (sumRating / rating.length).toFixed(1);
}

function renderTagCard(tag) {
  const div = document.createElement("div");
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
