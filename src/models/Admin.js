const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const AdminSchema = new Schema({
  adminName: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});

const Admin = model("Admin", AdminSchema);

module.exports = Admin;
