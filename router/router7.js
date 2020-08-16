var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index.ejs");
  });

  app.get("/session", function (req, res) {
    res.render("session.ejs");
  });

  app.get("/save_session", function (req, res) {
    req.session.data1 = 100;
    req.session.data2 = "안녕하세요";

    res.render("save_session.ejs");
  });

  app.get("/load_session", function (req, res) {
    var render_data = {
      data1: req.session.data1,
      data2: req.session.data2,
    };

    res.render("load_session.ejs", render_data);
  });
};
