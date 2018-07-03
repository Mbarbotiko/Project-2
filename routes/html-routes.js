var path = require("path");

module.exports = function(app){
    
    app.get("/", function (req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/NewUser", function(req, res){
        res.sendFile(path.join(__dirname, "../public/NewUser.html"));
    });

    app.get("/post", function(req, res){
        res.sendFile(path.join(__dirname, "../public/post.html"));
    });

    app.get("/view", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    app.get("/apparel", function(req, res){
        res.sendFile(path.join(__dirname, "../public/apparel.html"));
    });

    app.get("/homeoffice", function(req, res){
        res.sendFile(path.join(__dirname, "../public/homeoffice.html"));
    });

    app.get("/tech", function(req, res){
        res.sendFile(path.join(__dirname, "../public/tech.html"));
    });

    app.get("/lunch", function(req, res){
        res.sendFile(path.join(__dirname, "../public/lunch.html"));
    });

    app.get("/spouse", function(req, res){
        res.sendFile(path.join(__dirname, "../public/spouse.html"));
    });

    app.get("/shwutever", function(req, res){
        res.sendFile(path.join(__dirname, "../public/shwutever.html"));
    });
};