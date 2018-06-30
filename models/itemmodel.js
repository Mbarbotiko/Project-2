module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        item: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true

        }

    });

    Item.associate = function(models) {
        Item.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Item;

};

//consider length validation after app is up and running
// args: [0, 6],
// msg: 'Name too long.'
//item, description, picture, category.