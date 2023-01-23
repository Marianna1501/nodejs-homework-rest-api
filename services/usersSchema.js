const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const user = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: String,
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    default: uuidv4(),
    required: [true, "Verify token is required"],
  },
});

const User = model("user", user);

module.exports = User;
