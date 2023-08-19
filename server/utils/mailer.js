const mailer = require("nodemailer");

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