const postApi = require("express").Router();

const { ObjectId } = require("bson");
const mongo = require("../mongo");

//post Api Routes;
// get methods

postApi.get("/", async (req, res) => {
  try {
    // find  make it as array : toArray()
    const getData = await mongo.db.collection("p_posts").find().toArray(); // use toArray( ) spl for find( ) query

    // console.log(getData);
    res.send(getData); // make it as array;   data to fEnd;
  } catch (err) {
    res.sendStatus(500); // send error status;
  }
});

postApi.delete("/:id", async (req, res, next) => {
  console.log("Posts delete middle ware called");
  console.log("Delete id is :", req.params.id);
  // deleteOne
  await mongo.db
    .collection("posts")
    .deleteOne({ _id: ObjectId(req.params.id) });
  res.end({});
});

postApi.post("/", async (req, res) => {
  try {
    const { insertedId: _id } = await mongo.db
      .collection("p_posts")
      .insertOne(req.body);

    //insert
    res.send({ ...req.body, _id });
  } catch (err) {
    res.sendStatus(500);
  }
});

postApi.put("/:id", (req, res, next) => {
  console.log("Posts put middle ware called");

  console.log(req.body);
  console.log(req.params);
  //findOneUpdateOne;
  res.send({ ...req.body, id: req.params.id });
});

module.exports = postApi;
