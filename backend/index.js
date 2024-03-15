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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// routes
app.use(require('./routes/user'));  
app.use(require('./routes/paymentRoute'))


// making frontend run on backend server
app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
});

app.listen(PORT, console.log('started succesfully server'));

