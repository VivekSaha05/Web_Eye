const Contact = require("../models/contacts");

exports.ContactUsHandler = async (req, res) => {
  try {
    await Contact.createOne(req.body);
    return res.status(200).json({
      message: "Response received!",
    });
  } catch (error) {
    console.log("Some error occured!");
    return res.status(500).json({
      message: "Server error!",
    });
  }
};
