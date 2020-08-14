var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index.html");
  });

  app.get("/get", function (req, res) {
    res.render("get.ejs");
  });

  app.get("/parameter", function (req, res) {
    var render_data = {
      data1: req.query.data1,
      data2: req.query.data2,
    };
    res.render("parameter.ejs", render_data);
  });

  app.post("/parameter", urlencodedParser, function (req, res) {
    var render_data = {
      data1: req.body.data1,
      data2: req.body.data2,
    };
    res.render("parameter.ejs", render_data);
  });
};
