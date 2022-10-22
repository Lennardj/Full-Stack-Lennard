const express = require("express");
const app = express();
const cors = require("cors");

PORT = 4000;

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Mock database
let user = [
  {
    email: "user@example.com",
    password: "john123",
  },
  {
    email: "user2@example.com",
    password: "rob123",
  },
];

// Login in Endpoint
app.post("/login", (req, res) => {
  console.log(req.body);
  for (let i = 0; i < user.length; i++) {
    if (
      user[i].email === req.body.email &&
      user[i].password === req.body.password
    ) {
      return res.redirect(
        "http://127.0.0.1:5500/Week%209/loginForm/frontend/loggedin.html"
      );
    }
  }
  res.status(404).send("email or password is incorrectly");
});

// Login with fetch Endpoint
app.post("/loginWithFetch", (req, res) => {
  console.log(req.body);
  for (let i = 0; i < user.length; i++) {
    if (
      user[i].email === req.body.email &&
      user[i].password === req.body.password
    ) {
      return res.sendStatus(200);
    }
  }
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Working on port http://localhost:4000`);
});
