const Form = require("../models/form");
const mailer = require("../utils/mailer");

exports.formSubmit = async (req, res) => {
  try {
    const { fName, lName, phno, email, year, rollno } = req.body;
    await Form.create(req.body);
    console.log("Success");
    mailer.mailer({
      email: email,
    });
    return res.status(200).json({
      message: "Registration Successfull!",
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
