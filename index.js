
const express = require('express');  //express ka intance lekar aaya hu aur server initiate kar diya hu.

const app = express();               

require("dotenv").config(); //environment file ki configuation ko process object me load kar diya hai 
const PORT = process.env.PORT || 3000; //aur yaha hum port ko find out karne ki kosis kar rhe hai

// middleware
app.use(express.json()); // app ko link kar diya hai ya middleware ke sath express.json jo ki body me se json parse karne ke liye saahayta provide karta hai

const blog = require('./routes/blog');
// Mount
app.use("/api/v1", blog);

const connectwithDB = require('./config/database');
connectwithDB();

// start the server
app.listen(PORT,()=>{
    console.log(`App is started at port no. ${PORT}`);
})

//default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is my homePage</h1>`);
})