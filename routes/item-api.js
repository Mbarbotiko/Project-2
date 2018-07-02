var db = require("../models");
module.exports = function (app) {
    app.get("/api/items", function (req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }

        db.Item.findAll({
            where: query,
            include: [db.User]
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });


    app.post("/api/items", function (req, res) {
        db.Item.create(req.body).then(function (dbItem) {
            res.json(dbItem);
        });
    });

    app.delete("/api/items/:id", function(req, res) {
        db.Item.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbItem) {
          res.json(dbItem);
        });
      });

}

//use .catch to capture errors at the end of the post function