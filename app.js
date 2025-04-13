const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser())
app.get("/", (req, res) => {
  res.cookie("name", "Ashish");
  res.send("done");
});

app.get("/read", (req, res) => {
    console.log(req.cookies)
  res.send("read onlyy");
});

app.listen(3000);
