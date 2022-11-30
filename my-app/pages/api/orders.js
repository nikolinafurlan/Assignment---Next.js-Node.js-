export default function handler (req, res) {

    const mysql = require('mysql2');

        //create the connection to database
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            port: 3306,
            database: 'assignment 1',
          });

    
        connection.query(
            "SELECT * FROM orders",
            function(err, results, fields)
            {
                res.status(200).json(results);

            }
        );



}