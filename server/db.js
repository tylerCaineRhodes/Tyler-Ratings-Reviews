const mysql = require("mysql");
const {
  dummyData,
  categoryDummyData,
  userDummyData,
  reviewDummyData
} = require("../dummydata/CanadianAPISorryEh");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Canada_Amazon",
  insecureAuth: true
});

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("now connected to the database!");
});

const seedTableUsers = () => {
  let sql = "INSERT INTO Users (total) VALUES ?";

  connection.query(sql, [[[0], [0], [0], [0], [0]]], function(err) {
    if (err) throw err;
  });
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
  let sql = "INSERT INTO Products (description, price, category_id) VALUES ?";
  let values = [];

  for (let i = 0; i < dummyData.length; i++) {
    values.push([
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
    "INSERT INTO Reviews (user_id, product_id, review_text, rating, date_created) VALUES ?";
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

  for (let j = 1; j < 6; j++) {
    for (let i = 1; i < dummyData.length + 1; i++) {
      values.push([
        j,
        i,
        fakeReviews[i % 6],
        fakeRatings[i % 5],
        fakeDateCreated[i % 2]
      ]);
    }
  }

  connection.query(sql, [values], function(err) {
    if (err) throw err;
  });
};
//seedTableReviews();

const addTask = (task, callback) => {
  connection.query(
    `INSERT INTO tasks (task) VALUES ("${task}")`,
    (err, data) => {
      if (err) throw err;
      else callback(null, data);
    }
  );
};

const deleteTask = (id, callback) => {
  console.log(id);
  connection.query(`DELETE FROM tasks WHERE id="${id}"`, (err, data) => {
    if (err) throw err;
    else callback(null, data);
  });
};

const getCurrentItem = (productID, userID, callback) => {
  connection.query(
    `SELECT * FROM products WHERE id="${productID}"`,
    (err, data) => {
      if (err) throw err;
      else {
        callback(null, data);
      }
    }
  );
};

module.exports = { addTask, deleteTask, getCurrentItem };
