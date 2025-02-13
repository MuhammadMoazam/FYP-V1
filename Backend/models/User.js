const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    userName: { type: String },
    password: { type: String, required: true },
    name: {
        firstName: { type: String },
        lastName: { type: String }
    },
});

module.exports = mongoose.model("User", userSchema);