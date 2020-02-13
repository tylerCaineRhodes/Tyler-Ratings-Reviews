const mysql = require("mysql");
const {
  dummyData,
  categoryDummyData
} = require("../dummydata/CanadianAPISorryEh");

const connection = mysql.createConnection({
  host: "mybb.cfpgvexeasco.us-east-2.rds.amazonaws.com",
  user: "reku68",
  password: "password",
  database: "CanadaAmazon",
  port: 3306
});

connection.connect(err => {
  if (err) {
    throw err;
  }
});

const seedTableUsers = () => {
  let sql = "INSERT INTO Users (total) VALUES ?";

  connection.query(
    sql,
    [
      [
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0]
      ]
    ],
    function(err) {
      if (err) throw err;
    }
  );
};

//seedTableUsers();

const seedTableCategories = () => {
  let sql = "INSERT INTO Categories (name) VALUES ?";

  connection.query(sql, [categoryDummyData], function(err) {
    if (err) throw err;
  });
};
//seedTableCategories();

const seedTableProducts = () => {
  let sql =
    "INSERT INTO Products (name, description, price, category_id) VALUES ?";
  let values = [];

  for (let i = 0; i < dummyData.length; i++) {
    values.push([
      dummyData[i]["productName"],
      dummyData[i]["productDescription"],
      dummyData[i]["price"],
      dummyData[i]["category_id"]
    ]);
  }

  connection.query(sql, [values], function(err) {
    if (err) throw err;
  });
};
//seedTableProducts();

const seedTableReviews = () => {
  let sql =
    "INSERT INTO Reviews (user_id, product_id, review_title, review_text, rating, date_created) VALUES ?";
  let values = [];
  let fakeRatings = [1, 4, 5, 2, 3];
  let fakeDateCreated = [`Jan 20, 1990`, `Feb 07, 2010`];
  let fakeReviews = [
    `This is froopy and I hate it!!!!!!. 
    Why would someone even make this?`,
    `Pure perfection. 
    A beauty beyond compare.`,
    `It's w/e I guess...`,
    `Amidst the mists and coldest frosts he thrusts his fists against the posts and still insists he sees the ghosts`,
    `ka is a wheel.`,
    `The blood of the covenant is thicker than the water of the womb`
  ];
  let fakeReviewTitles = [
    `Can I be honest?`,
    `Exquisite`,
    `Iunno really...`,
    `Hey there Georgie :)`,
    `All hail the Crimson King`,
    `Truth`
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let p = 0;
  for (let j = 1; j < 16; j++) {
    for (let i = 1; i < dummyData.length + 1; i++) {
      values.push([
        j,
        i,
        fakeReviewTitles[(i + p) % 6],
        fakeReviews[(i + p) % 6],
        fakeRatings[(i + p + 2 - getRandomInt(3)) % 5],
        fakeDateCreated[(i + p) % 2]
      ]);
    }
    p++;
  }

  connection.query(sql, [values], function(err) {
    if (err) throw err;
  });
};
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
