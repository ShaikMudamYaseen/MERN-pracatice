const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/library")
  .then(console.log("connection successful"))
  .catch((error) => {
    console.log("connection Unsuccessful");
  });
