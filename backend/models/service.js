const mongoose = require('mongoose')

const { Schema } = mongoose;

const serviceSchema = new Schema({
    serviceType:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    refrence_id:{
        type:String,
        required:true
    },
    booking_date:{
        type:Date,
        required:true,
    }
});

const Service = mongoose.model('service', serviceSchema);
module.exports = Service;