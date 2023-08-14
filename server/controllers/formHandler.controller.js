const Form = require("../models/form");

exports.formSubmit = async (req, res) => {
  try {
    await Form.create(req.body);
    console.log("Success");
    return res.status(200).json({
      message: "Registration Successfull!",
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
