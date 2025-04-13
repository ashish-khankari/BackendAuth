const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');

const app = express();
app.use(cookieParser())
app.get("/", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("ashish@123", salt, (err, hash) => {
      console.log(hash);
    })
  })
  // res.cookie("name", "Ashish");
  res.send("done");
});

app.get("/read", (req, res) => {
    console.log(req.cookies)
  res.send("read onlyy");
});

app.listen(3000);
