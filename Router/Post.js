const postApi = require("express").Router();

const mongo = require("../mongo");

//post Api Routes;
// get methods

postApi.get("/", async (req, res) => {
  console.log("Posts get middle ware called");
  console.log(req.query);

  // find  make it as array : toArray()
  const getData = await mongo.db.collection("posts").find().toArray(); // use toArray( ) spl for find( ) query

  console.log(getData);
  res.send(getData); // make it as array;   data to fEnd;
});

postApi.delete("/:id", (req, res, next) => {
  console.log("Posts delete middle ware called");
  console.log("Delete id is :", req.params.id);
  // deleteOne
  res.end();
});

postApi.post("/", (req, res, next) => {
  console.log("Posts post middle ware called");

  console.log(req.body);
  //insert
  res.send({ ...req.body, id: 101 });
});

postApi.put("/:id", (req, res, next) => {
  console.log("Posts put middle ware called");

  console.log(req.body);
  console.log(req.params);
  //findOneUpdateOne;
  res.send({ ...req.body, id: req.params.id });
});

module.exports = postApi;
