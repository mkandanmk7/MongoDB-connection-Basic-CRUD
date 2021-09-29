const {MongoClient}=require("mongodb");
const { connect } = require("./Router/Post");

// mclient is class given by m-db
const url="mongodb://localhost:27017";

// create obj using obj literals pass url to constructor param..

const client = new MongoClient(url);


//connection db; using connect();

module.exports={
    // initally db is null

    db:null,

    async connect()=>{
        await client.connect();
    }
}