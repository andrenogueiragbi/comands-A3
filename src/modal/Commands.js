const { Model, DataTypes } = require('sequelize');


class Commands extends Model {
    static init(sequelize){
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            commands: DataTypes.TEXT,
            tags: DataTypes.STRING,
            creator: DataTypes.STRING,   
            type_id: DataTypes.INTEGER, 
        }, {sequelize})
    }
        

}
module.exports = Commands