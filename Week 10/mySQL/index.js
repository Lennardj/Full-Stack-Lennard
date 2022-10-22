"use strict";
// dotenv
require("dotenv").config();
// get the client
const mysql = require("mysql2");

// Express
const express = require("express");
const app = express();

// PORT
const PORT = process.env.PORT;

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// End Point
app.get("/", (req, res) => {
  pool.query("SELECT * FROM world.country", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
  // res.send("Hello World");
});

// city endpoint
app.get("/city", (req, res) => {
  pool.query(
    "SELECT * FROM world.city WHERE name LIKE 'A%'",
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//country code end point
app.get("/country/:myNamesParameter", (req, res) => {
  console.log(req.params.myNamesParameter);
  pool.query(
    `SELECT * FROM country WHERE country.Code2 = '${req.params.myNamesParameter}';`,
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
