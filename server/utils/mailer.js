const nodemailer = require("nodemailer");

exports.mailer = async (user) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });
  
    const info = await transporter.sendMail({
      from: process.env.USER,
      to: `${user.email}`,
      subject: "Registration Successfull",
      text: "Congratultions, You have successfully registered for the event... Happy Coding",
    });
    console.log(info.messageId);
  };



//   MONGODB_URI = mongodb+srv://officialwebeye:webeye2023@session0.xotgpxg.mongodb.net/Participants