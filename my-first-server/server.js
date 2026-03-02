// Creating first server
const http = require("http");

// create a server
const server = http.createServer((req, res) => {
  res.write("hello world, i am in new horizon from Node server!");
  res.end();
});

// Starting the server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
