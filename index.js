const express = require("express");
const app = express();
port = 3000;
app.use(express.urlencoded({ extended: true }));

let data = [
  { id: 23, name: "robi", age: 30 },

  { id: 24, name: "rohim", age: 34 },
  { id: 25, name: "roni", age: 39 },
];
app.get("/", (req, res) => {
  res.json(data);
});
app.get("/:id", (req, res) => {
  id = Number(req.params.id);
  const v = data.find((x) => x.id === id);
  res.json(v);
});

app.post("/", (req, res) => {
  newData = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
  };
  data.push(newData);
  res.json({ data });
});

app.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  const age = req.body.age;
  data
    .filter((x) => x.id == id)
    .map((y) => {
      y.name = name;
      y.age = age;
    });
  res.json(data);
});

app.delete("/:id", (req, res) => {
  const userid = Number(req.params.id);
  data = data.filter((x) => {
    return x.id !== userid;
  });
  res.json(data);
});

app.listen(port, () => {
  console.log("server is live");
});
