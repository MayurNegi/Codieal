const mongoose = require("mongoose");
const env = require("./environment.js");

mongoose.connect(`mongodb://localhost/${env.db}`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to mongoDB"));

db.once("open", function () {
  console.log("Connected to Database");
});

module.exports = db;
