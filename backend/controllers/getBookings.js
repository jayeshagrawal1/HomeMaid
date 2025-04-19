const Service =require('../models/service');

async function getBookings(req,res){
    try {
        const header= req.headers;
        console.log("header :",header);
        const services=await Service.find({email:header['x-user-email']});

        res.status(200).json({
            success:true,
            services
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    getBookings
}