// Access to key for twilio keys
require("dotenv").config();

// Access to key.js for twitter and spotify keys
var keys = require("./keys.js");

// Required NPM's
var Twilio = require('twilio');
var cloudinary = require('cloudinary');

// twilio constructor
var twilio = new Twilio();

// cloudinary calls
cloudinary.config(keys.cloudinary);

// Test and example on how to upload images to cloudinary
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg/220px-Video_Game_Cover_-_The_Last_of_Us.jpg", function(result) {
    console.log(result)
});

// Test and example on how to implement twilio API
// twilio.messages.create({
//     body: 'Hello from Node',
//     to: '+19525640504',  // Text this number
//     from: '+16123248350' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid)).catch(console.error);

