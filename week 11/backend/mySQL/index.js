const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
app.get("/api/students", (req, res) => {
  console.log("/api/students ENDPOINT was hit! 🙌");
  pool.query("SELECT id, name, photo FROM team_mate;", (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});
