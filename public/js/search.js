$(document).ready(function () {

    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "localhost",

        // Your port; if not 3306
        port: 3306,

        // Your username
        user: "root",

        // Your password
        password: "",
        database: "swaps_db"
    });

    connection.connect(function (err) {
        if (err) throw err;
        //function
    });

    $("#search").keyup(function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            console.log("hi");
        }
    });

    //   $("#searchButton").click(function () {
    //     alert("Working");

});

