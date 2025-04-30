const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function handleCheckUser(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(422).json({ error: "Please Enter Details" })
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                res.status(400).json({ err: "Invalid credentials" })
            }
            else {
                generateToken(userLogin, 200, res);
            }
        }
        else {
            res.status(400).json({ err: "Invalid credentials" })
        }


    }
    catch (err) {
        console.log('error aagyi bey login krte smay ');
        console.log(err);
    }
}

const generateToken = async (userLogin, statusCode, res) => {
    const token = await userLogin.generateAuthToken();
    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 2592000000)
    };

    res.status(statusCode).json({
        success: true,
        message: "User signed in successfully",
        token,
    });
}

const handleLogOutUser = (req, res) => {
    res .status(200)
        .json({success:true,message:"Logged out successfully"});
}


module.exports = {
    handleCheckUser,
    handleLogOutUser,
}

