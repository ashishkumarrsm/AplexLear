const chalk = require("chalk");

require("dotenv").config

const MONGODB_URL= process.env.MONGODB_URL;


if( ! MONGODB_URL){
    console.log(chalk.red(`MONGODBURL is not exist in the envirmant variable `))
}

const config={
     MONGODB_URL: MONGODB_URL,

}



module.exports=config