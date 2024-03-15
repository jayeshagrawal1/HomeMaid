const jwt=require('jsonwebtoken')
const User=require('../models/user')
require("dotenv").config();

const authenticate=async(req,res,next)=>{
    try{
        const token=req.cookies.token;
        let secretKey=process.env.SECRET_KEY;
        const verifyToken=jwt.verify(token,secretKey);

        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token})

        if(!rootUser){
            throw new Error('User Not Found!')
        }  

        rootUser.password=undefined;

        req.token=token;
        req.rootUser=rootUser;
        req.userId=rootUser._id;
        
        next();
    }
    catch(err)
    {
        res.status(401).send("Unauthorised :No token provided");
        console.log(err);
    }
}

module.exports={
    authenticate,
};