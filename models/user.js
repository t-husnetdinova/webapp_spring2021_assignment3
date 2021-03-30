const mongoose = require("mongoose"),
    userSchema = mongoose.Schema({
        name: String,
        email: String,
        zipCode: Number
    });

module.exports = mongoose.model("User", userSchema);