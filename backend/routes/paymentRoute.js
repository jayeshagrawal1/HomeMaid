const express=require('express');
const {CheckOut, Verify} =require('../controllers/paymentController');
const router=express.Router();

router.route('/payment/checkout').post(CheckOut);

router.route('/payment/verify',).post(Verify);

module.exports=router;