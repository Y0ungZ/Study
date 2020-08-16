const mysql = require("mysql2");

let conn_info = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "youngwon",
  database: "mydb",
};

let conn = mysql.createConnection(conn_info);

conn.connect(function (err) {
  if (err) {
    console.log("오류");
    console.log(err);
  } else {
    console.log("성공");

    // ----------------------------------
    //insert 예제.

    // let sql1 = "insert into custommers (name, address) values( ?,?)";
    // let input_data1 = ["Company Inc", "Highway 37"];
    // conn.query(sql1, input_data1, (err, result) => {
    //   console.log("저장완료");
    //   console.log("아이디 : " + result.insertId);
    // });

    // let sql2 = "insert into custommers (name,address) values ?";
    // let input_data2 = [
    //   ["John", "Highway 71"],
    //   ["Peter", "Lowstreet 4"],
    //   ["Amy", "Apple st 652"],
    //   ["Hannah", "Mountain 21"],
    //   ["Michael", "Valley 345"],
    //   ["Sandy", "Ocean blvd 2"],
    //   ["Betty", "Green Grass 1"],
    //   ["Richard", "Sky st 331"],
    //   ["Susan", "One way 98"],
    //   ["Vicky", "Yellow Garden 2"],
    //   ["Ben", "Park Lane 38"],
    //   ["William", "Central st 954"],
    //   ["Chunk", "Main Road 989"],
    //   ["Viola", "Sideway 1633"],
    // ];
    // conn.query(sql2, [input_data2], (err, result) => {
    //   console.log("저장완료2");
    //   console.log("개수 : " + result.affectedRows);
    // });
    // ----------------------------------

    var sql1 = "SELECT * FROM custommers";
    conn.query(sql1, (err, result, fields) => {
      console.log("컬럼 정보");
      for (let obj of fields) {
        console.log(obj.name, " ", obj.table);
      }
      console.log("데이터 정보1");
      for (let obj of result) {
        console.log(
          "id : " +
            obj.id +
            "  name : " +
            obj.name +
            "   address : " +
            obj.address
        );
      }
    });

    var sql2 = "SELECT name, address FROM custommers WHERE id = ?";
    let data1 = 8;
    conn.query(sql2, data1, (err, result, fields) => {
      console.log("데이터 정보2");
      for (let obj of result) {
        console.log(
          "id : " +
            obj.id +
            "    name : " +
            obj.name +
            "   address : " +
            obj.address
        );
      }
    });

    // ----------------------------------
    // delete 예제
    // let sql = "DELETE FROM custommers WHERE id =? ";
    // let data = 7;
    // conn.query(sql, data, function (err, result) {
    //   console.log("지운 row 갯수 : " + result.affectedRows);
    // });

    // ----------------------------------
    // update 예제
    // let sql = "UPDATE custommers SET address =? WHERE id = ?";
    // let data = ["Seoul 21", 3];
    // conn.query(sql, data, function (err, result) {
    //   console.log(result.affectedRows + " record(s) updated");
    // });

    conn.end();
  }
});
