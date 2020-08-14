module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index.html");
  });

  app.get("/test", function (req, res) {
    res.render("test.html");
  });

  app.get("/red", function (req, res) {
    res.render("red.html");
  });
};
