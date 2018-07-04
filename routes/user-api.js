var db = require("../models");
module.exports = function (app) {
    app.get("/api/users", function (req, res) {
        db.User.findAll({
            include: [db.Item]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/users", function (req, res) {
        db.User.create({
            name: req.body.name,
            phone: req.body.phone
        }).then(function (dbUser) {
            res.json(dbUser);
        })

            .catch(function (err) {
                res.json(err)
            });
    });

    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Item]
        }).then(function(dbUser) {
          res.json(dbUser);
        });
      });

      app.delete("/api/users/:id", function(req, res) {
        db.User.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbUser) {
          res.json(dbUser);
        });
      });


};