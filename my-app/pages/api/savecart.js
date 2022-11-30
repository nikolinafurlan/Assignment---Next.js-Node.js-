export default function handler(req, res) {

    console.log("savecart.js api page called...");
   
    console.log("looking at the variables ");
    console.log(req.body);
  
  
    const cart = JSON.stringify(req.body.cart);
  
  
    // db
    // get the client
    const mysql = require('mysql2');
  
    // create the connection to database
      const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      port: 3306,
      database: 'assignment 1'
    });
  
    // simple query
  connection.query(
    "INSERT INTO `assignment 1`.`orders` (`productids`) VALUES ('"+cart+"');",

    function(err, results, fields) {
  
        res.status(200).json("ok");
     
    }
  );
  
  

      
  }
      