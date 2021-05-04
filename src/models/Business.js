const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const BusinessSchema = new Schema({
  company_name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  owners: [
    {
      type: String
    }
  ],
  employee_name: { type: String },
  employee_size: {
    type: Number
  },
  about: {
    type: String,
    required: true
  }
});

const Business = model("Business", BusinessSchema);

module.exports = Business;
