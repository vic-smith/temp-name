const { Model, DataTypes } = require('sequelize');

class Item extends Model {}

Item.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    review_rating: {
        type: DataTypes.INTEGER,
        references: {
            model: 'review',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'item'
}

)

module.exports = Item;