const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "wptproject",
};

async function addUser(obj) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Sucessful");
  const sql='INSERT INTO USERDATABASE(USERNAME,PASSWORD) VALUES (?,?)'
  connection.queryAsync(sql,[obj.username,obj.psw]);
  await connection.endAsync();
}

async function selectAllUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Sucessful");
  const sql='SELECT * FROM USERDATABASE';
  const list = await connection.queryAsync(sql);
  return list;
  await connection.endAsync();
}

module.exports={selectAllUser,addUser};

