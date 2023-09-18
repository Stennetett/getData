var express = require('express');
var app = express();

var redColor;
var mysql = require('mysql');
var bodyParser = require('body-parser');
const { error } = require('selenium-webdriver');


const connection = mysql.createPool({
    host: 'localhost', // Your connection adress (localhost).
    user: 'root',     // Your database's username.
    password: '',        // Your database's password.
    database: 'drops'   // Your database's name.
});



// Creating a GET route that returns data from the 'users' table.
app.get('/color_table', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM color_table', function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;
            console.log(results);
            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results);
        });
    });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/color_table so you can see the data.');
});