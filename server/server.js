const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db.js");
const dummyData = require("../dummydata/CanadianAPISorryEh.js").default;

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());

app.get("/productID", (req, res) => {
  db.getCurrentItem(req.params["productID"], (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/todo", (req, res) => {
  const task = req.body.task;
  console.log(task);
  db.addTask(task, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3030, () => {
  console.log("I'm now listening on port 3030!");
});
