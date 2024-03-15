const express = require('express')
const router = express.Router();
const User = require('../models/user')
const { handleCreateUser } = require('../controllers/createUser')
const { handleCheckUser,handleLogOutUser } = require('../controllers/Auth')
const {authenticate} =require('../middlewares/authentication')
const {authFirst}=require('../controllers/authFirst')
const {handleEmails}=require('../controllers/emails');
const { getBookings } = require('../controllers/getBookings');
const {saveBookings}=require('../controllers/saveBookings')


router.post('/register', handleCreateUser);

router.post('/signin', handleCheckUser);

router.get('/getUser',authenticate,authFirst);

router.get('/logout',handleLogOutUser);

router.get('/showBookings',getBookings);

router.post('/saveBooking',saveBookings)

router.get('/sendemail',handleEmails);

module.exports = router;