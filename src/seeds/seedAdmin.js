require("../config/db");
const Admin = require("../models/Admin.js");
const generateHash = require("../services/hash");

const seedAdmin = async () => {
  //since generatehash is async  process we make the function as async
  const admin = {
    email: "admin@gmail.com",
    password: "password"
  };
  try {
    //since we use await we need to use try-catch block
    new Admin({
      email: admin.email,
      passwordHash: await generateHash(admin.password)
    })
      .save()
      .then(console.log)
      .catch(console.error);
  } catch (e) {
    console.error(e);
  }
};
//seedAdmin();

const clearAdmin = () => {
  Admin.remove({}).then(console.log).catch(console.error);
};
