const { Model, DataTypes } = require('sequelize');

class typesCommands extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {sequelize})
    }


}
module.exports = typesCommands