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
