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


    app.get("/api/items/:id", function(req, res) {
        db.Item.findOne({
          where: {
            id: req.params.id
          },
          include: [db.User]
        }).then(function(dbItem) {
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

  app.put("/api/posts", function(req, res) {
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

};

//use .catch to capture errors at the end of the post function