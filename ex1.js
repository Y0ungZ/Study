var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("ROOT");
});

app.get("/test1", function (req, res) {
  res.send("TEST");
});

var server = app.listen(2000, function () {
  console.log("port 2000으로 서버 실행...");
});
