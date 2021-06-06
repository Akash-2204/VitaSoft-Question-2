const mysql = require('mysql2');
const config = require('../config/config.json');
const pool = mysql.createConnection({
    host : config.host,
    user : config.user,
    database : config.database,
    password : config.password,
    
})


pool.connect(function(err)  {
  if (err) throw err;
  console.log("connected");
  var sql =
    "CREATE TABLE users ( id INT NOT NULL AUTO_INCREMENT,firstName VARCHAR(255) NOT NULL,lastName VARCHAR(255) NOT NULL,middleName VARCHAR(255) NULL,email VARCHAR(255) NOT NULL UNIQUE,address VARCHAR(255) NOT NULL,city VARCHAR(255) NOT NULL,state VARCHAR(255) NOT NULL,country VARCHAR(255) NOT NULL,pincode VARCHAR(255) NOT NULL,phoneNumber VARCHAR(10) NOT NULL,height VARCHAR(255) NOT NULL,weight VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL , PRIMARY KEY (id))";

  pool.query(sql, function (err, result) {
      if (err) throw err;
    console.log("Table created");
  });
});

module.exports = pool.promise(); 