const postApi = require("express").Router();

let posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

//post Api Routes;
// get methods

postApi.get("/", (req, res, next) => {
  console.log("Posts get middle ware called");
  // find
  console.log(req.query);
  res.send(posts);
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
