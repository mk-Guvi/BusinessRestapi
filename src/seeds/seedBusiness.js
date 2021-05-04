require("../config/db.js");
const Business = require("../models/Business.js");
const seedBusiness = async () => {
  try {
    new Business({
      company_name: "MKJ",
      address: "chennai"
    })
      .save()
      .then(console.log)
      .catch(console.error);
  } catch (e) {
    console.error(e);
  }
};
seedBusiness();
