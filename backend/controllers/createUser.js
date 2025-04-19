require('../db');
const User = require('../models/user');


async function handleCreateUser(req, res) {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password)
        return res.status(422).json({ msg: "All fields are required" });

    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(409).json({ error: "User Already exist please login" })
        }
        else {
            const user = new User({ first_name, last_name, email, password });

            await user.save();
            

            res.status(201).json({ msg: "user registered successfully" })

        }


    }
    catch (err) {
        console.log(err);
    }

}

module.exports = {
    handleCreateUser,
}