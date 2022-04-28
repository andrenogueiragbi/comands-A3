const Sequilize = require("sequelize")
const dbConfig = require('../config/database')

const User = require('../modal/User')
const Commands = require('../modal/Commands')
const TypesCommand = require('../modal/TypesCommand')
const Coupon = require('../modal/Coupon')

//iniciando as a conexão do banco de dados
const connection = new Sequilize(dbConfig)

User.init(connection);
Commands.init(connection);
TypesCommand.init(connection);
Coupon.init(connection);

module.exports = connection