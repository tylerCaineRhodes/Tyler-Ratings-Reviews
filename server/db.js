const mysql = require("mysql");
const pg = require('pg');
const faker = require('faker');
const fs = require('file-system');
const { Client } = require('pg');


const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'Canada_Amazon',
    port: 5432,
});

client.connect(err => {
  if(err){
    console.log('naah dude ur not connected to db yet');
  } else {
    console.log('oh wait, u did it actually');
  }
});

const addReview = (reviewData, callback) => {
  client.query(
    `INSERT INTO Reviews (user_id, product_id, review_title, review_text, rating, date_created) VALUES (${reviewData.user_id}, ${reviewData.product_id}, "${reviewData.review_title}", "${reviewData.review_text}", ${reviewData.rating}, now())`,
    (err, data) => {
      if (err) throw err;
      else {
        callback(null, data);
      }
    }
  );
};

const getCurrentProduct = (callback) => {
  client.query(`select * from products limit 10`, (err, data) => {
    if(err){
      console.log('nah, you can\'t get the products dawg');
    } else {
      callback(null, data);
    }
  })
}

const getCurrentItem = (callback) => {
  client.query(`select * from reviews limit 10 offset 100000`, (err, data) => {
    if(err){
      console.log('nah, you can\'t get the shit from postgres dawg');
    } else {
      callback(null, data);
    }
  })}

module.exports = {getCurrentItem, addReview, getCurrentProduct};
