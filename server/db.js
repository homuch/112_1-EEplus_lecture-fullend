const mongoose = require("mongoose");
const dotenv = require("dotenv-defaults");
dotenv.config();

module.exports = {
  connect() {
    mongoose
      .connect(process.env.MONGO_URL)
      .then((res) => console.log("mongo db connection created"));
  },
};
