import express from "express";
import bodyParser from "body-parser";
import knex from "knex";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

const port = 3000;

const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,
});

// Return a list of emails from users whose last name matches a given list of last names.
app.get("/emails_from_last_names", async (req, res) => {
  const { last_name } = req.query;
  // console.log(last_name);

  if (!last_name || last_name.length === 0) {
    return res.json([]);
  }

  const email = await knexInstance("users")
    .select(knexInstance.raw("email"))
    .whereIn("last_name", last_name);

  if (email.length === 0) {
    return res.sendStatus(404);
  }

  res.json(email);
});

// Update confirmed_at of a user with a given timestamp by given user id
app.put("/users", async (req, res) => {
  // console.log(req.body);
  const { id, confirmed_at } = req.body;

  if (!id || !confirmed_at) {
    return res.sendStatus(400);
  }

  const rows = await knexInstance("users").where({ id });

  if (rows.length === 0) {
    return res.sendStatus(404);
  }

  await knexInstance("users").where({ id: id }).update({
    confirmed_at: confirmed_at,
  });

  return res.sendStatus(200);
});

// Create a new user
app.post("/users", async (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res.sendStatus(400);
  }

  const created_at = new Date().toISOString();

  const user = await knexInstance("users").insert({
    first_name,
    last_name,
    email,
    created_at,
    confirmed_at: null,
  });

  return res.json(user);
});

// Extend home route
app.get("/user-count", async (req, res) => {
  const count = await knexInstance("users").select(
    knexInstance.raw("COUNT(*) AS user_count")
  );
  res.json(count);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
