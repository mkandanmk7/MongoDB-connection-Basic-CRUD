const { MongoClient } = require("mongodb");
// const { connect } = require("./Router/Post");

// mclient is class given by m-db
const url = "mongodb://localhost:27017";

// create obj using obj literals pass url to constructor param..

const client = new MongoClient(url);

//connection db; using connect();

module.exports = {
  // initally db is null

  db: null, // for accessing db intially null

  async connectDB() {
    await client.connect();
    console.log("connected to Mongo DB");

    //selecting db

    this.db = client.db("p_posts"); // db() given by client ;
    console.log("Database Selected   ");
  },
};
