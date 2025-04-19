const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
require("dotenv").config();

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        myBookings:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "service",
            },
        ],
        tokens:[
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ]
    },
    {
        timestamps: true,
    }
)


// hashing password
userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

// genrate token
userSchema.methods.generateAuthToken=async function(){
    try{
        let secretKey=process.env.SECRET_KEY;
        let token=jwt.sign({_id:this._id},secretKey,{expiresIn:'2592000s'});
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}


const User = mongoose.model("user", userSchema);
module.exports = User;
