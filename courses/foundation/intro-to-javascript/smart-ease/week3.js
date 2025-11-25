"use strict";
// JavaScript Warmup

// Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const indexOfNameToRemove = names.indexOf(nameToRemove);

names.splice(indexOfNameToRemove, 1);
console.log(names);

// When will we be there??
const travelTime = function (distance, speed) {
  const time = distance / speed;
  const hour = Math.floor(time);
  const minute = Math.floor((time % 1) * 60);
  const hourInText = `${hour} ${pluralize(hour, "hour")}`;
  const minuteInText = `${minute} ${pluralize(minute, "minute")}`;
  if (hour === 0) {
    return minuteInText;
  }
  if (minute === 0) {
    return hourInText;
  }
  return hourInText + " and " + minuteInText;
};

const pluralize = (time, word) => (time > 1 ? word + "s" : word);

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

console.log(
  travelTime(travelInformation.destinationDistance, travelInformation.speed)
);

// Series duration of my life
const seriesDurations = [
  {
    title: "Modern Family",
    days: 4,
    hours: 8,
    minutes: 10,
  },
  {
    title: "The Big Bang Theory",
    days: 8,
    hours: 14,
    minutes: 28,
  },
  {
    title: "Breaking Bad",
    days: 10,
    hours: 18,
    minutes: 8,
  },
];

const minutesInAnHour = 60;
const minutesInADay = minutesInAnHour * 24;
const minutesInAYear = minutesInADay * 365;
const averageLifespanYears = 80;

const averageLifespanInMinutes = averageLifespanYears * minutesInAYear;

function logOutSeriesText(seriesDurationsArray) {
  let sumPercentage = 0;

  for (const seriesDurationItem of seriesDurationsArray) {
    const percentage =
      (convertDurationIntoMinutes(seriesDurationItem) /
        averageLifespanInMinutes) *
      100;

    sumPercentage += percentage;

    console.log(
      `${seriesDurationItem.title} took ${percentage.toFixed(3)}% of my life.`
    );
  }
  return console.log(
    `In total, that is ${sumPercentage.toFixed(3)}% of my life.`
  );
}

function convertDurationIntoMinutes(duration) {
  const daysInMinutes = duration.days * minutesInADay;
  const hoursInMinutes = duration.hours * minutesInAnHour;
  return daysInMinutes + hoursInMinutes + duration.minutes;
}

logOutSeriesText(seriesDurations);

// SMART-EASE

// NOnoN0nOYes (Note taking app)
// Save a note
const notes = [];

function saveNote(content, id) {
  if (typeof content !== "string") return;
  if (typeof id !== "number") return;
  notes.push({ content, id });
}

saveNote("Do HYF assignment");
saveNote(0);
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// Get a note
function getNote(id) {
  if (typeof id !== "number" || isNaN(id)) {
    console.error("Not a valid id!");
    return;
  }

  for (const note of notes) {
    if (id === note.id) {
      return note;
    }
  }
  return console.error("Note not found!");
}

// getNote();
// getNote("str");
// getNote(3);

const firstNote = getNote(1);
console.log(firstNote);

// Log out notes
function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted();

// Unique feature
// Change existing note's content
function changeNoteContent(id, newContent) {
  if (typeof id !== "number" || isNaN(id)) {
    console.error("Not a valid id!");
    return;
  }

  if (typeof newContent !== "string" || newContent.trim() === "") {
    console.warn("Please add a valid new content!");
    return;
  }

  for (const note of notes) {
    if (id === note.id) {
      note.content = newContent;
      return note;
    }
  }
  return console.error("Note not found!");
}

const revisedNote = changeNoteContent(1, "Do HYF assignment");
console.log(revisedNote);
