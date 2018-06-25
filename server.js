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
// require("./routes/html-routes.js")(app);
// require("./routes/user-api-routes.js")(app);
// require("./routes/item-api-routes.js")(app);

db.sequelize.sync().then(function () {
    //{ force: true } pass into sync if you want DB to be dropped when server is initialized.
    app.listen(PORT, function () {
        console.log("Listening on PORT " + PORT);
    });
});
