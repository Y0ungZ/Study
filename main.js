var express = require("express");
var ejs = require("ejs");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.use(cookieParser());
app.use(
  session({
    secret: "abcdefg",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static("public"));

var router8 = require("./router/router8")(app);

var server = app.listen(2000, function () {
  console.log("port 2000...");
});
