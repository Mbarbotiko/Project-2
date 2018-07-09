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


  app.get("/api/items/:id", function (req, res) {
    db.Item.findOne({
      where: {
        id: req.params.id
      },
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

  app.delete("/api/items/:id", function (req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbItem) {
      res.json(dbItem);
    });
  });

  app.put("/api/items", function (req, res) {
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.ids
        }
      }).then(function (dbItem) {
        res.json(dbItem);
      });
  });


  app.post("/api/swap", function (req, res) {
    console.log(res);
    const { itemOne, itemTwo } = req.body;
    db.sequelize.query(
      `update Items a
      inner join Items b on a.id <> b.id
        set a.UserId = b.UserId
      where a.id in (:idA,:idB) and b.id in (:idA,:idB)`,
      { replacements: { idA: itemOne, idB: itemTwo } }
    )
    .then(() => res.send(200))
    .catch(() => res.send(500));
    console.log(res)
    console.log(res);
    console.log(itemTwo)
  });

};


