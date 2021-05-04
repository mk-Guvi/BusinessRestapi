const jwt = require("jsonwebtoken");
const jwtkey = "dfbjdvjfbsdg";

const adminTokenManager = (email) => {
  const token = jwt.sign(
    {
      sub: "admin",
      email
    },
    jwtkey,
    { expiresIn: "5 hours" }
  );
  return token;
};

module.exports = adminTokenManager;
