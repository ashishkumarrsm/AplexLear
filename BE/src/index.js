const express= require("express")
const connectDB= require("./config/db.js")
const cors= require("cors");
const morgan = require("morgan");
const authRoute= require("../src/routes/auth.route.js")


const app = express();

// ! db
connectDB()


// ! midlware


app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api/v1/auth",authRoute)

module.exports= app;