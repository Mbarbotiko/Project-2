// accountSid and authToken
var accountSid = 'ACcaeccfe479d7079af610b9fdcb59dc98';
var authToken = 'd99f9293ad7eb390289bbc5f95f6c514';

// Load the twilio module
var twilio = require('twilio');

// Create a new REST API client to make authenticated requests against the twilio backend
var client = new twilio(accountSid, authToken);

// Testing purposes
// client.messages.create({
//     body: 'Testing',
//     to: '+19525640504', // Text this number
//     from: '+16123248350' // Twilio number
// })
// .then((message) => console.log(message.sid));

