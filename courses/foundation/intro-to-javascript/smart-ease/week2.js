"use strict";
// Flight booking fullname function
function getFullName(
  firstName = "John",
  surname = "Doe",
  useFormalName = false,
  gender
) {
  const fullNameFormat = firstName + " " + surname;
  if ((gender = "male")) {
    return useFormalName ? `Lord ${fullNameFormat}` : fullNameFormat;
  } else if ((gender = "female")) {
    return useFormalName ? `Lady ${fullNameFormat}` : fullNameFormat;
  } else return fullNameFormat;
  // return useFormalName ? `Lord ${fullNameFormat}` : fullNameFormat;
}

const fullName1 = getFullName("Peter", "Nielsen", true, "male");
const fullName2 = getFullName("Mette", "Andersen", false, "female");
console.log(`First customer: ${fullName1}.`, `Second customer: ${fullName2}.`);

console.log(getFullName());

// Event application
function getEventWeekday(day) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayIndex = new Date().getDay();
  // console.log(todayIndex);

  const eventDayIndex = day % 7;
  const eventDay = weekdays[todayIndex + eventDayIndex];

  return `The event will be held on ${eventDay}.`;
}

console.log(getEventWeekday(11));

// Weather wear
function decideClothesToWear(temperature) {
  if (temperature < 5) {
    return "winter jacket, 3 layers of shirts, scarf and gloves";
  } else if (temperature >= 5 && temperature <= 15) {
    return "light jacket and long sleeves";
  } else return "shorts and a t-shirt";
}

const clothesToWear = decideClothesToWear(8);
console.log(clothesToWear);
