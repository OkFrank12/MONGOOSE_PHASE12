const mongoose = require("mongoose");

const set07DB = `mongodb://0.0.0.0:27017/set07database`;

const Database = async () => {
  try {
    const dbConnect = await mongoose.connect(set07DB);
    console.log("");
    console.log(`Database is connected to : ${dbConnect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = Database();
