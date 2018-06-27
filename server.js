// Access to key.js for twilio keys
require("dotenv").config();

// Required NPM's
var Twilio = require('twilio');

// twilio constructor
var twilio = new Twilio();

twilio.messages.create({
    body: 'Hello from Node',
    to: '+19525640504',  // Text this number
    from: '+16123248350' // From a valid Twilio number
})
.then((message) => console.log(message.sid)).catch(console.error);

