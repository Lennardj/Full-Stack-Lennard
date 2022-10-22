const http = require("http"); //Same are Import in React or <Link /> in html
// const server = http.createServer(function(req, res) {
//     return console.log(req);
// });

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    //endpoint
    response.write("hello world");
    response.end();
  }
  if (request.url === "/api/userList") {
    const userList = [
      { name: "John", age: 27 },
      { name: "Joe", age: 53 },
      { name: "Adam", age: 34 },
    ];
    response.write(JSON.stringify(userList));
    response.end();
  }
  if (request.url === "api/greet") {
    //endpoint
    response.write("Hello Rob, thanks for visiting this URL👋🏿");
    response.end();
  }
});

server.listen(4000);
