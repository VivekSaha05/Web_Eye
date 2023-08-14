const express = require("express");
const router = express.Router();

// controllers
const contactHandler = require("../controllers/conatctus.controller");
const formHandler = require("../controllers/formHandler.controller");

router.get("/health", (req, res) => {
  return res.send("App is live");
});

router.post("/contact", contactHandler.ContactUsHandler);
router.post("/form", formHandler.formSubmit);

module.exports = router;
