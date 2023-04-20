require("dotenv").config();
console.log(process.env);

module.exports = {
  database: {
    host: "localhost",
    user: "root",
    password: "itesm",
    database: "test_database",
  },
};
