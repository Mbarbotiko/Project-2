// // Access to key for twilio keys
// //require("dotenv").config();

// // Access to key.js for twitter and spotify keys
// var keys = require("./keys.js");

// // Required NPM's
// var Twilio = require('twilio');
// var cloudinary = require('cloudinary');

// // twilio constructor
// var twilio = new Twilio();

// // cloudinary calls
// cloudinary.config(keys.cloudinary);

// // Test and example on how to upload images to cloudinary
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg/220px-Video_Game_Cover_-_The_Last_of_Us.jpg", function(result) {
// });

// Test and example on how to implement twilio API
// twilio.messages.create({
//     body: 'Hello from Node',
//     to: '+19525640504',  // Text this number
//     from: '+16123248350' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid)).catch(console.error);

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// Routes
// 
require("./routes/html-routes.js")(app);
require("./routes/user-api.js")(app);
require("./routes/item-api.js")(app);

db.sequelize.sync().then(function () {
    //{ force: true } pass into sync if you want DB to be dropped when server is initialized.
    app.listen(PORT, function () {
        console.log("Listening on PORT " + PORT);
    });
});