const express = require("express");
const AuthorRouter = express.Router();
const Author = require("../models/Author");

AuthorRouter.get("/", async (req, res) => {
  //res.send("<h3>author router</h3>");
  try {
    const author = await Author.find({});
    res.status(200).json({ author });
  } catch (e) {
    console.error(e);
    res.status(500).send("internal server error");
  }
}).post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const result = await new Author({
      name
    }).save();
    res.status(200).json({ result });
  } catch (e) {
    console.error(e);
    res.status(500).send("internal server error");
  }
});
module.exports = AuthorRouter;
