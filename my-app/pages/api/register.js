import { EDGE_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";

export default function handler (req, res) {
 
    console.log("login api page called...");
    console.log(req.body);

    //catching variables
    const username = req.body.username;
    const pass = req.body.password;
    const telephone = req.body.telphone;
    const address = req.body.address;

    console.log("username is" +username);
    console.log("password is: " +pass);
    console.log("address is: "+address);
    console.log("telephone is: "+telephone);


    //db
    //get the client
    const mysql = require('mysql2');

    //create the connection to database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3306,
        database: 'assignment 1',
      });

    //simple query
    connection.query (
        "INSERT INTO `assignment 1`.`users`(`username`, `pass`, `telephone`, `address`) VALUES ('"+username+"', 'z', 'z', 'z');",

        function (err, results, fields)
        { //only runs after sql
            res.status(200).json("ok");
        }
       
    );

}