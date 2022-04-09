const { Model, DataTypes } = require('sequelize');

class Commands extends Model {
    static init(sequelize){
        super.init({
            type: DataTypes.STRING,
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            commands: DataTypes.TEXT,
            tags: DataTypes.STRING,
            creator: DataTypes.STRING    
        }, {sequelize})
    }

}
module.exports = Commands