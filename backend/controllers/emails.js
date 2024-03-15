const nodemailer=require('nodemailer')

const handleEmails=async(req,res)=>{
    res.send('email send')
}


module.exports={
    handleEmails,
}