const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1/codeial_development");
mongoose.connect("mongodb+srv://admin22:tabtab123@cluster0.9mlsgec.mongodb.net/codeial?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.log.bind(`error connect to mongoDB`));

db.once("open", function () {
  console.log(`Connected to MongoDB`);
});

module.exports = db;
