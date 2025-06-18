const mongoose = require('mongoose');

const {userSchema} = require("../schemas/UserSchema.js");

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;