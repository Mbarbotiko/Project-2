module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        phone: DataTypes.STRING
        
    });


    User.associate = function (models) {
        User.hasMany(models.Item, {
            onDelete: "cascade"
            
        });
    };

    return User;
    

};

