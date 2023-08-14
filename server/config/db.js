const mongoose = require("mongoose");

exports.dbConnect = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(() => {
      console.log("Connected to the db");
    })
    .catch((error) => {
      console.log(error);
    });
};
