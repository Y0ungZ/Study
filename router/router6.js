var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index.ejs");
  });

  app.get("/cookie", function (req, res) {
    res.render("cookie.ejs");
  });

  app.get("/save_cookie", function (req, res) {
    var op = {
      maxAge: 365 * 24 * 60 * 60,
    };

    res.cookie("cookie1", "aaaaa", op);
    res.render("save_cookie.ejs");
  });

  app.get("/load_cookie", function (req, res) {
    var render_data = {
      cookie1: req.cookies.cookie1,
    };

    res.render("load_cookie.ejs", render_data);
  });
};
