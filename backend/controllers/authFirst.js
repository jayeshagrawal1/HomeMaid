const User = require('../models/user')

async function authFirst(req,res){
    res.send(req.rootUser);
}

module.exports={
    authFirst,
};