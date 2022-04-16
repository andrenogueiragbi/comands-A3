const { Model, DataTypes } = require('sequelize');

class typesCommands extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {sequelize})
    }
    static associate(models) {
        this.hasMany(models.Commands, { foreignKey: 'id', as: 'commands' });
        
    }

}
module.exports = typesCommands