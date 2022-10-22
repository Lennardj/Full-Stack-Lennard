// Not nessesary in backend a matter of prefrence
"use strict";

// always call the module and save in a function
const express = require("express");
// manitory expression to complete
const app = express();
// This is an Endpoint THE ROOT
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// This is the second endpoint
app.get("/api/userList", (req, res) => {
  const userList = [
    { name: "John", age: 27 },
    { name: "Mary", age: 22 },
    { name: "Ethan", age: 17 },
    { name: "Joe", age: 53 },
    { name: "Amelia", age: 87 },
    { name: "Adam", age: 34 },
  ];

  res.status(200).json(userList);
});

app.get("/api/greet", (req, res) => {
  res.status(200).send("My greeting");
});

const urlVar = new URL(
  "https://www.youtube.com/results?search_query=lil+wayne"
);

app.get("/api/user/:userID", (req, res) => {
  console.log("the params are ...", req.params);
  res.send(`the params are ...<b> ${req.params.userID}<b>`);
  //   res.sendStatus(200) //this will print ok
});

app.get("/api/books/:bookID", (req, res) => {
  res.send(
    `The book name it ...<b> ${req.params.bookID}<b><br><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stereogum.com%2F2086871%2Fthe-number-ones-survivors-eye-of-the-tiger%2Fcolumns%2Fthe-number-ones%2F&psig=AOvVaw20pEXPTWAwxafmQ8ucktCy&ust=1665530300451000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjX5oHm1voCFQAAAAAdAAAAABAJ>"`
  );
});
console.log(urlVar.searchParams.get("search_query"));

const PORT = 4000;
// error value is the first value of this callback function
app.listen(PORT, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Listening on http://localhost:${PORT}`);
  }
});
