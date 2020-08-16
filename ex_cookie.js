var express = require("express");
var ejs = require("ejs");
var cookieParser = require("cookie-parser");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.use(cookieParser());

app.use(express.static("public"));

var router6 = require("./router/router6")(app);

var server = app.listen(2000, function () {
  console.log("port 2000 ....");
});
