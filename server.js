const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const dotenv = require("dotenv")

// for .env file
dotenv.config({path:'./.env'});


const app = express();
const port = process.env.PORT;

// Home
app.get("/",(req,res) => {
  res.send("Hi I am Live");
})

app.use(express.urlencoded({
  extended: true,
}))

app.use(cors());


// Database connection
const DB = process.env.ATLAS_URI;
mongoose.connect(DB).then(()=>{
    console.log("Connected DB");
}).catch((err)=>console.log(err));

// Routers
const AI_routes = require("./routes/AI_ROUTES");
app.use("/AI",AI_routes);

const Othu_routes = require("./routes/Login_ROUTES");
app.use("/Login",Othu_routes);

const Huni_routes = require("./routes/Huni_ROUTES");
app.use("/Huni",Huni_routes);

// running backend
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});




// APIs from backend to frontend
// https://www.youtube.com/watch?v=bKVTHUlCSyE