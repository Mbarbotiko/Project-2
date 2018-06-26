var path = require("path");
module.exports = function(app){
    app.get("/", function (req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/post", function(req, res){
        res.sendFile(path.join(__dirname, 
            "../public/post.html"
        ));
    });

    app.get("/view", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });


};