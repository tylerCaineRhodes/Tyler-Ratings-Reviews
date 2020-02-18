const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
const db = require("./db.js");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect("mongodb://localhost/CANADA_AMAZON", {
  useNewUrlParser: true
});

const mongoCommand = mongoose.connection;
mongoCommand.once('open', ()=>{
  console.log('connected to the mongo database, yo')
})

mongoCommand.on('error', ()=>{
  console.log('nahhh bro, mongo no like dat shit dawg')
})
const PORT = 8081;
const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());

// app.get("/dist", urlencodedParser, (req, res) => {
//   db.getCurrentItem(req.query.productID, (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.post("/add_review", urlencodedParser, (req, res) => {
//   console.log(req.body);
//   db.addReview(req.body, (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`I'm now listening on port ${PORT}!`);
});
