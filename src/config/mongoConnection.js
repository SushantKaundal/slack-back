const mongoose = require("mongoose");

const ConnectToMongo = () => {
  return mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log("✅ Connected to database");
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
    });
};

module.exports = ConnectToMongo;
