const { Model, DataTypes } = require('sequelize');

class Coupon extends Model {
    static init(sequelize){
        super.init({
            number: DataTypes.STRING,
            email_user: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
        }, {sequelize})
    }

}
module.exports = Coupon