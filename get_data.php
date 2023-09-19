<?php
// Connect to the MySQL database
$mysqli = new mysqli("localhost", "root", "123banan123@", "sys");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Define the API endpoint
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Perform a SELECT query
    $result = $mysqli->query("SELECT * FROM day_plan");

    // Check if the query was successful
    if ($result) {
        $data = [];

        // Fetch data and add it to the $data array
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Return the data as JSON
        header('Content-Type: application/json');
        echo json_encode($data);

        // Close the result set and the database connection
        $result->close();
    } else {
        // Handle the error
        echo "Error: " . $mysqli->error;
    }
}

// Close the database connection
$mysqli->close();
