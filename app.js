const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cookieParser());
app.get("/", (req, res) => {
  let token = jwt.sign({ email: "ashish@gmail.com" }, "secret");
  res.cookie("token", token);
  res.send("send jwt token done");
});

app.get("/read", (req, res) => {
  console.log(req.cookies.token);
  let data = jwt.verify(req.cookies.token, "secret");
  console.log("data", data)
  res.send("read onlyy");
});

app.listen(3000);
