var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var mysql = require("mysql2");

var conn_info = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "youngwon",
  database: "GuestBookDB",
};

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index.ejs");
  });

  app.post("/login", urlencodeParser, function (req, res) {
    var user_name = req.body.user_name;

    req.session.user_name = user_name;

    res.redirect("main");
  });

  app.get("/main", function (req, res) {
    var user_name = req.session.user_name;

    var conn = mysql.createConnection(conn_info);
    var sql =
      "select guestbook_name, guestbook_content " +
      "from guestbook order by idx desc";

    conn.query(sql, function (err, rows) {
      var render_data = {
        name: user_name,
        rows: rows,
      };

      res.render("main.ejs", render_data);
    });
  });

  app.post("/save_guestbook", urlencodeParser, function (req, res) {
    var user_name = req.session.user_name;
    var content = req.body.content;

    var conn = mysql.createConnection(conn_info);
    var sql =
      "insert into guestbook(guestbook_name," +
      "guestbook_content) values(?,?)";
    var input_data = [user_name, content];

    conn.query(sql, input_data, function (err) {
      conn.end();
      res.redirect("main");
    });
  });
};
