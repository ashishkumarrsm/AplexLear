const mongoos = require("mongoose");
const config = require("./db.config.js");
const chalk = require("chalk");
const connectDB = async () => {
  await mongoos.connect(config.MONGODB_URL);
  console.log(chalk.green(`The server is connect to the database sucessfully`));
};

module.exports=connectDB

