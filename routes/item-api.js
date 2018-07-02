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


  // app.get("/api/swaptest", function (req, res) {
  //   var testId1 = 1;
  //   var testId2 = 3;
  //   db.sequelize.query(
  //     `UPDATE
  //     items t1 INNER JOIN users t2
  //     ON (t1.id, t2.id) IN ((${testId1}, ${testId2}),(${testId2},${testId1}))
  //   SET
  //    t1.item = t2.item,
  //    t1.description = t2.description,
  //    t1.picture = t2.picture,
  //    t1.category = t2.category,
  //    t1.createdAt = t2.createdAt,
  //    t1.updatedAt = t2.updatedAt,
  //    t1.UserId = t2.UserId`
  //   ).then(function(db){
  //     console.log(db)
  //     res.json(db);
  //   });
  // });



};

//use .catch to capture errors at the end of the post function