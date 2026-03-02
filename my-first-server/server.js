// Creating first server
const http = require("htttp");

// create a server
const server = http.createServer((req, res) => {
  res.write("hello world, i am in new horizon from Node server!");
  res.end()
});
