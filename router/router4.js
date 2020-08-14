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

  app.get("/test2", function (req, res) {
    var date = new Date();

    var render_data = {
      str: "문자열입니다.",
      number: 100,
      date: date,
    };

    res.render("test2.ejs", render_data);
  });
};
