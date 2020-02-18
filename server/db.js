const mysql = require("mysql");
const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('file-system');
// const { Client } = require('pg');


// const client = new Client({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'password',
//     database: 'Canada_Amazon',
//     port: 5432,
// });

// client.connect(err => {
//   if(err){
//     console.log('naah dude ur not connected to db yet');
//   } else {
//     console.log('oh wait, u did it actually');
//   }
// });

// const createFakeData =() => {
//   const generateFakeData = function(){
//     let json = [];
//     for(var i =0; i < 10000; i++){
//       let obj = {};
//       obj['name'] = faker.name.findName();
//       obj['DESCRIPTION'] = faker.lorem.sentence();
//       obj['price'] = faker.finance.amount();
//       json[i] = obj;
//     }
//     return json;
//   }
//   let fake = JSON.stringify(generateFakeData());
  
//   fs.writeFileSync('./server/jsonDataProducts', fake, function(err){
//     if(err){
//       return console.log(err);
//     }
//     console.log('file was saved!');
//   });
//   //needs to wait
//   fs.readFile('./server/jsonDataProducts', function(err, data){
//     if(err){
//       console.log('naahhh, that didn\'t work dawg');
//       reject(err)
//     } else {
//       let dataArray = JSON.parse(data);
//       // console.log(dataArray[0]);
//       for(let i = 0; i < dataArray.length; i++){
//         client.query('INSERT INTO products (name, description, price) VALUES($1, $2, $3)', [dataArray[i].name, dataArray[i].DESCRIPTION, dataArray[i].price], function(err) {
//           if (err){
//             console.log(dataArray[i]);
//             throw err;
//           } else {
//             console.log(`queried ${i} times`)
//           }
//         });
//       }
//     }
//   })
// }


// for(let i = 0; i < 100; i++){
//   console.log('itration # ->', i)
//   createFakeData();
//  }

// const createFakeProduct =() => ({
//   name:faker.name.findName(),
//   description:faker.lorem.sentence(),
//   price:faker.finance.amount(),
// })

// const seed = function() {
//   // let listOfProducts = [];
//   for(let i = 0; i < desiredProducts; i++){
//     // listOfProducts.push(createFakeProduct())
//     client.query('INSERT INTO products (name, description, price) VALUES($1, $2, $3)', [createFakeProduct().name, createFakeProduct().description, createFakeProduct().price], function(err) {
//       if (err){
//         console.log('nah ----->', dataArray[i]);
//         throw err;
//       } else {
//         console.log(`queried ${i} times`)
//       }
//     });
//   }
// }
// seed()


//  async function processArray() {
//   for(let i = 0; i < 100; i++){
//     await createFakeData();
//     console.log('itration # ->', i)
//    }
// }
// processArray()

// const test = generateFakeData();
// console.log(test[0]);





// "INSERT INTO products (name, description, price) values ('" + dataArray[i].name + "', '" + dataArray[i].DESCRIPTION + "', " + dataArray[i].price + ");"
// "INSERT INTO products (name, description, price) values (`" + dataArray[i].name + "`, `" + dataArray[i].DESCRIPTION + "`, " + dataArray[i].price + ");"
// `INSERT INTO products (name, description, price) VALUES ('${dataArray[i].name}', '${dataArray[i].DESCRIPTION}', ${dataArray[i].price});`

// client.query("Insert into products(name) values ('sager');", function(err){
//   if(err){
//     console.log('yo this also no work')
//   } else {
//     console.log('yeh')
//   }
// })

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "Canada_Amazon",
// });

// connection.connect(err => {
//   if (err) {
//     throw err;
//   }
//   console.log('you connected to mysql woopeee');
// });

// const seedTableUsers = () => {
//   let sql = "INSERT INTO Users (total) VALUES ?";

//   connection.query(
//     sql,
//     [
//       [
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0],
//         [0]
//       ]
//     ],
//     function(err) {
//       if (err) throw err;
//     }
//   );
// };

//seedTableUsers();

// const seedTableCategories = () => {
//   let sql = "INSERT INTO Categories (name) VALUES ?";

//   connection.query(sql, [categoryDummyData], function(err) {
//     if (err) throw err;
//   });
// };
//seedTableCategories();

// const seedTableProducts = () => {
//   for(let i = 0; i < 1; i++){
//     connection.query(`INSERT INTO Products (name, DESCRIPTION, price) VALUES ("${faker.name.findName()}", "${faker.lorem.words()}", ${faker.finance.amount()})`, function(err) {
//       if (err) throw err;
//     });
//   }
// };
// seedTableProducts();

// const seedTableReviews = () => {
//   let sql =
//     "INSERT INTO Reviews (user_id, product_id, review_title, review_text, rating, date_created) VALUES ?";
//   let values = [];
//   let fakeRatings = [1, 4, 5, 2, 3];
//   let fakeDateCreated = [`Jan 20, 1990`, `Feb 07, 2010`];
//   let fakeReviews = [
//     `This is froopy and I hate it!!!!!!. 
//     Why would someone even make this?`,
//     `Pure perfection. 
//     A beauty beyond compare.`,
//     `It's w/e I guess...`,
//     `Amidst the mists and coldest frosts he thrusts his fists against the posts and still insists he sees the ghosts`,
//     `ka is a wheel.`,
//     `The blood of the covenant is thicker than the water of the womb`
//   ];
//   let fakeReviewTitles = [
//     `Can I be honest?`,
//     `Exquisite`,
//     `Iunno really...`,
//     `Hey there Georgie :)`,
//     `All hail the Crimson King`,
//     `Truth`
//   ];

//   function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

//   let p = 0;
//   for (let j = 1; j < 16; j++) {
//     for (let i = 1; i < dummyData.length + 1; i++) {
//       values.push([
//         j,
//         i,
//         fakeReviewTitles[(i + p) % 6],
//         fakeReviews[(i + p) % 6],
//         fakeRatings[(i + p + 2 - getRandomInt(3)) % 5],
//         fakeDateCreated[(i + p) % 2]
//       ]);
//     }
//     p++;
//   }

//   connection.query(sql, [values], function(err) {
//     if (err) throw err;
//   });
// };
//seedTableReviews();

//refactor as 1 query with left join

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

const getCurrentItem = (productID, callback) => {
  connection.query(
    `SELECT * FROM Products WHERE id="${productID}"`,
    (err, data1) => {
      if (err) throw err;
      else {
        connection.query(
          `SELECT AVG(rating), COUNT(rating) FROM Reviews WHERE product_id="${productID}"`,
          (err, data2) => {
            if (err) throw err;
            else {
              connection.query(
                `SELECT user_id, review_title, review_text, rating, DATE_FORMAT(date_created , '%b %D, %Y') AS date FROM Reviews WHERE product_id="${productID}" LIMIT 100`,
                (err, data3) => {
                  if (err) throw err;
                  else {
                    connection.query(
                      `SELECT COUNT(rating) FROM Reviews WHERE rating=5 AND product_id="${productID}" UNION ALL SELECT COUNT(rating) FROM Reviews WHERE rating=4 AND product_id="${productID}" UNION ALL SELECT COUNT(rating) FROM Reviews WHERE rating=3 AND product_id="${productID}" UNION ALL SELECT COUNT(rating) FROM Reviews WHERE rating=2 AND product_id="${productID}" UNION ALL SELECT COUNT(rating) FROM Reviews WHERE rating=1 AND product_id="${productID}"`,
                      (err, data4) => {
                        if (err) throw err;
                        else {
                          let data = [data1[0], data2[0], data3, data4];
                          callback(null, data);
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

module.exports = { getCurrentItem, addReview };
