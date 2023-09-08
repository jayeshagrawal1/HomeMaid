const Service =require('../models/service');
const {Payment} =require('../models/payment');

async function saveBookings(req,res){
    try {
        const {email,refrence_id,serviceType,duration,price}=req.body;

    const already= await Service.findOne({refrence_id:refrence_id})

    if(already)
    {
        res.status(409).json({
            success:false,
            message:"already paid booking"
        })
    }
    else
    {
        const booking_date =new Date();

        const services = new Service({ email,refrence_id,serviceType,duration,price,booking_date});

        await services.save();
        
        res.status(201).json({success:true, message: "user registered successfully" })
    }
    } catch (error) {
        console.log(object);
    }
}

module.exports={
    saveBookings
}