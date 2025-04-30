const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
        myBookings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "service",
            },
        ],
        token: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// Generate JWT and save as a single token
userSchema.methods.generateAuthToken = async function () {
    try {
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign({ _id: this._id }, secretKey, { expiresIn: '30d' });

        this.token = token;
        await this.save();
        return token;
    } catch (err) {
        console.error('Token generation failed:', err);
        throw err;
    }
};

const User = mongoose.model("user", userSchema);
module.exports = User;
