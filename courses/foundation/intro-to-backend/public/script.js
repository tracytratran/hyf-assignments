"use strict";
async function getUserCount() {
  const url = "http://localhost:3000/user-count";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    const count = result[0]["user_count"];

    document.getElementById("count").textContent = `There ${
      count > 1 ? "are" : "is"
    } ${count} ${count > 1 ? "users" : "user"} in total.`;
  } catch (error) {
    console.error(error.message);
  }
}

const count = getUserCount();
