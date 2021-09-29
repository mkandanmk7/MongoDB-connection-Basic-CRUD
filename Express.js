const express = require("express");
const mongo = require("./mongo");

const postData = require("./Router/Post");
const userData = require("./Router/Users");

const server = express();

// port number

const port = "3001";

// mongoDB connect
mongo.connect();

// parse req body string to json format

server.use(express.json());

// url /posts condtion pass the "/posts to before call back"
server.use("/posts", postData);

// /user middle ware

server.use("/users", userData);

//middle ware common  no url condtions

server.use((req, res, next) => {
  console.log("common middle ware called");
  next();
});

//post Api Routes;
// get methods

server.get("/posts", postData);

server.delete("/posts/:id", postData);

server.post("/posts", postData);

server.put("/posts/:id", postData);

// user Api

server.get("/users", userData);

server.delete("/users/:id", userData);

server.post("/users", userData);

server.put("/users/:id", userData);

//start the server;

server.listen(port, () => {
  console.log(`server Started at ${port}`);
});
