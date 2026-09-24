require("dotenv").config()
const app = require("./src/index.js")
const PORT= process.env.PORT || 3000
const chalk= require("chalk")

app.listen(PORT,()=>{
    console.log(chalk.green(`This Server is run on http://localhost:${PORT}/api/v1`))
})
