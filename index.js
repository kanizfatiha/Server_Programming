const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const router = require("./router");

dotenv.config();


mongoose.connect(process.env.MONGO_URL
).then(()=>console.log("DB connection successful")).catch((err)=>{
    console.log(err);
});


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)
app.set("view engine", "ejs")
app.set("views", __dirname+"/views")


app.listen(5000, ()=>{
    console.log("Server is running");
});