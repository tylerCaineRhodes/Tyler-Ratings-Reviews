const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db.js");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = 8081;
const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());

app.get("/dist", urlencodedParser, (req, res) => {
  db.getCurrentItem(req.query.productID, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/add_review", urlencodedParser, (req, res) => {
  console.log(req.body);
  db.addReview(req.body, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`I'm now listening on port ${PORT}!`);
});
