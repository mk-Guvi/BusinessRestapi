const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://mk:mkm@cluster0.pg8mj.mongodb.net/Blogdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: "Blogdb"
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("DB COnnected");
});
