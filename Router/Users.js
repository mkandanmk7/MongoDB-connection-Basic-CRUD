const userApi = require("express").Router();

const { ObjectId } = require("mongodb"); //driver

const db = require("../mongo"); // mongo db connection

//post Api Routes;
// get methods

userApi.get("/", async (req, res) => {
  try {
    // find  make it as array : toArray()
    const getData = await db.users.find().toArray(); // use toArray( ) spl for find( ) query

    // console.log(getData);
    res.send(getData); // make it as array;   data to fEnd;
  } catch (err) {
    res.sendStatus(500); // send error status;
  }
});

userApi.delete("/:id", async (req, res, next) => {
  try {
    console.log("Delete id is :", req.params.id);
    // deleteOne
    await db.users.deleteOne({ _id: ObjectId(req.params.id) });
    res.send({});
  } catch (err) {
    res.sendStatus(500);
  }
});

userApi.post("/", async (req, res) => {
  try {
    const { insertedId: _id } = await db.users.insertOne(req.body);

    //insert
    res.send({ ...req.body, _id });
  } catch (err) {
    res.sendStatus(500);
  }
});

userApi.put("/:id", async (req, res) => {
  try {
    // console.log(req.params.id); // its string but _id: is Object(id)
    await db.users.findOneAndUpdate(
      { _id: ObjectId(req.params.id) },
      { $set: { ...req.body } },
      { ReturnDocument: "after" }
    );
    // console.log(data);
    res.send({ ...req.body, id: req.params.id });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = userApi;
