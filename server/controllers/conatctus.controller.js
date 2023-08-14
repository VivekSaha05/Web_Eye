const Contact = require("../models/contacts");

exports.ContactUsHandler = async (req, res) => {
  try {
    await Contact.create(req.body);
    return res.status(200).json({
      message: "Response received!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error!",
    });
  }
};
