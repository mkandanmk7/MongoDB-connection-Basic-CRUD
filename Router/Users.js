const userApi = require("express").Router();

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

//post Api Routes;
// get methods

userApi.get("/", (req, res, next) => {
  console.log("users get middle ware called");
  // find
  console.log(req.query);
  res.send(users);
});

userApi.delete("/:id", (req, res, next) => {
  console.log("users delete middle ware called");
  console.log("Delete id is :", req.params.id);
  // deleteOne
  res.end();
});

userApi.post("/", (req, res, next) => {
  console.log("users post middle ware called");

  console.log(req.body);
  //insert
  res.send({ ...req.body, id: 101 });
});

userApi.put("/:id", (req, res, next) => {
  console.log("users put middle ware called");

  console.log(req.body);
  console.log(req.params);
  //findOneUpdateOne;
  res.send({ ...req.body, id: req.params.id });
});

module.exports = userApi;
