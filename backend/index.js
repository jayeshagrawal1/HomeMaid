const express = require('express');
const { connectDB } = require('./db');
const cookieParser=require('cookie-parser');
const cors =require("cors");

require("dotenv").config();
const app = express();

let PORT=process.env.PORT

// mongo connection


connectDB(process.env.DATABASE_URL)
    .then(() => console.log("Mongo connected!"))
    .catch((err)=> console.log("Error in connection mongo ",err));

// middleware
const corsConfig={
    origin: "*",
    Credential:true,
    methods:["GET","POST","PUT","DELETE"],
}
app.options("",cors(corsConfig));
app.use(cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// routes
app.use(require('./routes/user'));  
app.use(require('./routes/paymentRoute'))

app.get("/",(req,res)=>{
    res.json("Working Fine!");
})

app.listen(PORT, console.log('started succesfully server'));

