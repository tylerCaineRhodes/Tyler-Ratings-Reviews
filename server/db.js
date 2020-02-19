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
  client.query(`select * from reviews limit 10`, (err, data) => {
    if(err){
      console.log('nah, you can\'t get the shit from postgres dawg');
    } else {
      callback(null, data);
    }
  })}
// const getCurrentItem = (productID, callback) => {
//   client.query(
//     `SELECT * FROM products WHERE id ="${productID}"`,
//     (err, data1) => {
//       if (err) throw err;
//       else {
//         client.query(
//           `SELECT AVG(rating), COUNT(rating) FROM Reviews WHERE product_id="${productID}"`,
//           (err, data2) => {
//             if (err) throw err;
//             else {
//               client.query(
//                 `SELECT user_id, review_title, review_text, rating, DATE_FORMAT(date_created , '%b %D, %Y') AS date FROM Reviews WHERE product_id="${productID}" LIMIT 100`,
//                 (err, data3) => {
//                   if (err) throw err;
//                   else {
//                     client.query(
//                       `SELECT COUNT(rating) FROM Reviews WHERE rating=5 AND product_id="${productID}" UNION ALL SELECT COUNT(rating) FROM Reviews WHERE rating=4 AND product_id="${productID}" UNION ALL SELECT COUNT(rating) FROM Reviews WHERE rating=3 AND product_id="${productID}" UNION ALL SELECT COUNT(rating) FROM Reviews WHERE rating=2 AND product_id="${productID}" UNION ALL SELECT COUNT(rating) FROM Reviews WHERE rating=1 AND product_id="${productID}"`,
//                       (err, data4) => {
//                         if (err) throw err;
//                         else {
//                           let data = [data1[0], data2[0], data3, data4];
//                           callback(null, data);
//                         }
//                       }
//                     );
//                   }
//                 }
//               );
//             }
//           }
//         );
//       }
//     }
//   );
// };

module.exports = {getCurrentItem, addReview, getCurrentProduct};
