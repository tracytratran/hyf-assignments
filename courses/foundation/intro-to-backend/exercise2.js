import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true, // Omit warning in console
});

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

// /all-users responds with all users sorted by ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// /unconfirmed-users should respond with unconfirmed users
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE confirmed_at IS NULL"
  );
  res.json(rows);
});

// /gmail-users should respond with users with an @gmail.com email
app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE email LIKE '%gmail.com%' "
  );
  res.json(rows);
});

// /2022-users should respond with users created in 2022
app.get("/2022-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM users WHERE strftime('%Y', created_at) = '2022' "
  );
  res.json(rows);
});

// /user-count should respond with the number of users
app.get("/user-count", async (req, res) => {
  const count = await knexInstance.raw(
    "SELECT COUNT(*) AS user_count FROM users"
  );
  res.json(count);
});

// /last-name-count should respond with how many users there are with a given last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
  // const { last_name } = req.query;
  // console.log(last_name);
  // const count = await knexInstance
  //   .select(knexInstance.raw("COUNT(*) AS count"))
  //   .from("users")
  //   .where(knexInstance.raw("last_name = ?", last_name));
  // res.json(count);
  const rows = await knexInstance.raw(
    `SELECT last_name, COUNT(*) AS count FROM users GROUP BY last_name ORDER BY last_name`
  );
  res.json(rows);
});

// /first-user should respond with the first user. If there are no users in the table, respond with a 404
app.get("/first-user", async (req, res) => {
  const first_user = await knexInstance.raw("SELECT * FROM users LIMIT 1");

  if (first_user.length === 0) {
    return res.sendStatus(404);
  }

  res.json(first_user);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
