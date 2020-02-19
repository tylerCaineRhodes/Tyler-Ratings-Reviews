const mysql = require("mysql");
const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('file-system');
const Data = require('./data');

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

//refactor as 1 query with left join
// const getCurrentItem = (callback) => {
//   Data.find().limit(20, (err, data) => {
//     if(err){
//       console.log('nah can\'t get the stuff from mongo from db')
//     } else {
//       callback(null, data);
//     }
//   })
// }
const getCurrentItem = (callback) => {
  Data.find({id: 100000}, (err, data) => {
    if(err){
      console.log('nah can\'t get the stuff from mongo from db')
    } else {
      callback(null, data);
    }
  }).explain("executionStats")
}

// const getCurrentItem = (callback) => {
//   Data.find().limit(20).exec((err, data) => {
//     if(err){
//       console.log('nah can\'t get the stuff from mongo from db')
//     } else {
//       callback(null, data);
//     }
//   })
// }
//.explain("executionStats")

const addReview = (reviewData, callback) => {
  connection.query(
    `INSERT INTO Reviews (user_id, product_id, review_title, review_text, rating, date_created) VALUES (${reviewData.user_id}, ${reviewData.product_id}, "${reviewData.review_title}", "${reviewData.review_text}", ${reviewData.rating}, now())`,
    (err, data) => {
      if (err) throw err;
      else {
        callback(null, data);
      }
    }
  );
};

module.exports = { getCurrentItem, addReview };
