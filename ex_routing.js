var express = require("express");
var app = express();
var router1 = require("./router/router1")(app);
var router2 = require("./router/router2")(app);

var server = app.listen(2000, function () {
  console.log("포트 2000번으로 서버 실행");
});
