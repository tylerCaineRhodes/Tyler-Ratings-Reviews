const mysql = require("mysql");
const {
  dummyData,
  categoryDummyData
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

//seedTableUsers();
//seedTableCategories();
//seedTableProducts();

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
    connection.end();
  });
};

const seedTableCategories = () => {
  let sql = "INSERT INTO Categories (name) VALUES ?";

  connection.query(sql, [categoryDummyData], function(err) {
    if (err) throw err;
    connection.end();
  });
};

const seedTableUsers = () => {
  let sql = "INSERT INTO Users (total) VALUES ?";

  connection.query(sql, [[[0], [0], [0], [0], [0]]], function(err) {
    if (err) throw err;
    connection.end();
  });
};

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

const getTasks = callback => {
  connection.query("SELECT * FROM tasks", (err, data) => {
    if (err) throw err;
    else callback(null, data);
  });
};

module.exports = { addTask, deleteTask, getTasks };
