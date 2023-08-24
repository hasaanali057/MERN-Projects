import nodemailer from 'nodemailer';

// OTP generator function
function generateOTP(length = 5): string {
  const digits = '0123456789';
  let otp = '';

  for (let i = 0; i < length; i++) {
    otp += digits.charAt(Math.floor(Math.random() * digits.length));
  }

  return otp;
}

function sendEmail(email: any, OTP: any){
  //console.log(OTP);
  try {
    const transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.APPUSER,
        pass: process.env.APPPASS
      }
    });

    const mailOptions = {
      from: process.env.APPUSER,
      to: email,
      subject: 'Password Reset OTP',
      text : 'To authenticate, please use the following One Time Password (OTP) ' + '\n\n' + OTP
      // html: htmlCode,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        console.log(error);
      }else{
        console.log('Send Email.');
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export { generateOTP, sendEmail };
