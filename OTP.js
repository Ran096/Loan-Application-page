function SentdMail() {
   
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ranjeetpatel096@gmail.com',			//email ID
            pass: 'nxuhqlqqjcbckpmu'				//Password 
        }
    });
    function sendMail(email, otp) {
        var details = {
            from: 'ranjeetpatel096@gmail.com', // sender address same as above
            to: document.getElementById('email').value, 					// Receiver's email id
            subject: 'Your demo OTP is ', // Subject of the mail.
            html: otp					// Sending OTP 
        };


        transporter.sendMail(details, function (error, data) {
            if (error)
                console.log(error)
            else
                console.log(data);
        });
    }

    var email = "ranjeetpatel09@gmail.com";
    var otp = "123456";
    sendMail(email, otp);
}