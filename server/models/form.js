const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    phno: {
        type: Number
    },
    email: {
        type: "String"
    },
    rollno: {
        type: "String"
    },
    year: {
        type: "String"
    }
});

module.exports = mongoose.model("form", FormSchema);