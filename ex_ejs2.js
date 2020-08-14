var express = require("express");
var ejs = require("ejs");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

app.use(express.static("public"));

var router4 = require("./router/router4")(app);

var server = app.listen(2000, function () {
  console.log("포트 2000번에서 서버 실행...");
});
